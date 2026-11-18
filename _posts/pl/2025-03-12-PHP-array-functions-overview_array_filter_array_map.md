---
layout: post
title: "Funkcje tablicowe: ['array_filter','array_merge'] - Przegląd PHP #1"
date: 2025-03-12
tags: php
description: Przegląd najczęściej wykorzystywanych funkcji w języku PHP do pracy z tablicami. Kiedy i jak ich używać w optymalny sposób.
thumbnail: assets/img/posts/new-php-logo.png
giscus_comments: true
---

Rozpoczynam cykl, w którym robię przegląd najbardziej użytecznych funkcji PHP
i jak najefektywniej z nich korzystać. Nie ma to jak dobra ściąga przed rozmową kwalifikacyjną.
Cykl jest podyktowany tym, że ostatnio w PHP bardzo dużo się zadziało, najnowsze wersje
PHP sporo zamieszały, a dobrze jest odświeżyć sobie wiedzę i zrobić sobie porządne notatki,
nie wspominając już o tym, że trzeba nadgonić!

## Przykłady z repozytorium wzięte

Już sama nazwa `Funkcje tablicowe` powoduje konsternację. W internecie można napotkać ogrom przykładów, zarówno tych lepszych, jak i gorszych.
Z funkcji jak korzystać każdy pierwszy junior wie, dlatego postanowiłem zagłębić się w temat i poszukać ich zastosowania
w kilku popularnych frameworkach PHP, z którymi miałem styczność w pracy programisty:

- [Symfony](https://github.com/symfony/symfony) - platforma, która zasługuje na miano najbardziej dojrzałej biznesowo pod względem kompatybilności i przypadków użycia. Na pewno
  znajdę w środku jakieś ciekawe smaczki.
- [Laravel](https://github.com/laravel/laravel) - w przeciwieństwie do Symfony tutaj wszystko zmienia się szybko z wersji na wersję, ale ma to też swoje plusy, bo szybko możemy
  zbudować prototyp. Gdzie, jak nie tam, znajdę naprawdę sporo ciekawych zastosowań funkcji tablicowych?
- [Rector](https://github.com/rectorphp/rector) - Moje ulubione narzędzie do pracy ze starym kodem PHP. Myślę, że może całkiem nieźle pokazać zastosowania funkcji tablicowych.

## Przykład z array_filter

Wypłynąłem na otwarty przestwór oceanu kodu PHP i jak na ironię od razu wpadłem na
górę lodową. Pierwszą klasą z brzega była [EntityValueResolver](https://github.com/symfony/symfony/blob/7.2/src/Symfony/Bridge/Doctrine/ArgumentResolver/EntityValueResolver.php)
implementująca interfejs [ValueResolverInterface](https://github.com/symfony/symfony/blob/7.3/src/Symfony/Component/HttpKernel/Controller/ValueResolverInterface.php). Klasa [EntityValueResolver](https://github.com/symfony/symfony/blob/7.2/src/Symfony/Bridge/Doctrine/ArgumentResolver/EntityValueResolver.php)
jest odpowiedzialna za automatyczne przekazywanie encji do kontrolera na podstawie identyfikatora podanego w ścieżce URL. Przykładowo mogę zdefiniować taki krótki kod:

```php
#[Route('/user/{id}', name: 'user_show')]
public function show(User $user): Response
{
    return new Response('User: ' . $user->getUsername());
}
```

w którym klasa `User` jest zmapowaną encją bazodanową i zostanie automatycznie poddana procesowi hydracji i zwrócona
z bazy. Więcej można poczytać o tym [tutaj](https://symfony.com/doc/current/doctrine.html#doctrine-entity-value-resolver). Całkiem fajna
funkcjonalność!

Wróćmy jednak – mówiąc kolokwialnie – do "bebechów" i głównego tematu, czyli funkcji tablicowych.

Funkcja [array_filter](https://www.php.net/manual/en/function.array-filter.php) użyta w klasie [EntityValueResolver](https://github.com/symfony/symfony/blob/7.2/src/Symfony/Bridge/Doctrine/ArgumentResolver/EntityValueResolver.php#L178)

```php
 if ($options->stripNull) {
    $criteria = array_filter($criteria, static fn ($value) => null !== $value);
}
```

Przykład z [Symfony](https://symfony.com) [array_filter](https://www.php.net/manual/en/function.array-filter.php) - pozwala zwrócić nową tablicę na podstawie obiektu [Closure](https://www.php.net/manual/en/class.closure.php)
czyli obiektu [funkcji anonimowej](https://www.php.net/manual/en/functions.anonymous.php)
zwracającej wartość `true/false` dla każdego elementu jak tutaj w przykładzie. Warto zwrócić uwagę, że została ona użyta tutaj jako funkcja **statyczna**.
To akurat bardzo ciekawe, ponieważ jak czytamy w [dokumentacji](https://www.php.net/manual/en/functions.anonymous.php#functions.anonymous-functions.static):

> Anonymous functions may be declared statically.
> This prevents them from having the current class automatically bound to them.
> Objects may also not be bound to them at runtime.

Dzięki czemu blokowana jest możliwość wykorzystania metody [bindTo](https://www.php.net/manual/en/closure.bindto.php) z klasy [Closure](https://www.php.net/manual/en/class.closure.php). W tym
przypadku pojawia się pytanie: dlaczego powinno się blokować wywołanie metody [bindTo](https://www.php.net/manual/en/closure.bindto.php) dla funkcji anonimowych? Odpowiedzi może być kilka:

**a)** ponieważ chcemy uniknąć niezamierzonego dostępu do `$this` w kontekście klasy

**b)** ponieważ chcemy zwiększyć wydajność i uniknąć potencjalnych wycieków pamięci

**c)** ponieważ nie chcemy, aby funkcja anonimowa mogła być później przypisana do innego obiektu i zmieniać jego stan dynamicznie

Opcja **a)** jest tutaj szczególnie istotna. Deklarowanie funkcji anonimowej jako **[static](https://www.php.net/manual/en/language.oop5.static.php)** uniemożliwia jej powiązanie z instancją klasy,
co zapobiega przypadkowemu dostępowi do `$this`. Jest to szczególnie przydatne w przypadku [czystych funkcji](https://en.wikipedia.org/wiki/Pure_function) (ang. pure functions),
które nie powinny mieć dostępu do stanu obiektu, w którym są wywoływane. Jest to najwidoczniej ukłon w stronę paradygmatów programowania funkcyjnego. Warto też
zauważyć, że taki sposób deklaracji podpowiada, że funkcja anonimowa nie ma wpływu na klasę, w której została zadeklarowana i to prawdopodobnie autor miał na myśli!
W skrócie to dobra praktyka, ale nie konieczność.

> Dodanie **static** sprawia, że intencja jest jasna: "ta funkcja jest niezależna od instancji tej klasy".

## Przykład z array_merge

Funkcja [array_merge](https://www.php.net/manual/en/function.array-merge.php) - dodaje elementy drugiej tablicy do końca pierwszej.
Poniżej [przykład](https://github.com/symfony/symfony/blob/7.2/src/Symfony/Bridge/Doctrine/ArgumentResolver/EntityValueResolver.php#L223) z [Symfony](https://symfony.com):

```php
$repository = $manager->getRepository($options->class);
$variables = array_merge($request->attributes->all(), [
    'repository' => $repository,
    'request' => $request,
]);
```

Dobra, pora sprawdzić, jak można to napisać inaczej:

- Destrukturyzacja – zmieniam trochę strukturę, przez co elementy są dodawane do
  tablicy z nadpisaniem istniejących wcześniej wartości. Usuwa to również
  potrzebę użycia [array_merge](https://www.php.net/manual/en/function.array-merge.php),
  zastępując ją [operatorem rozpakowania](https://wiki.php.net/rfc/spread_operator_for_array):
  ```php
  $variables = [
      ...request->attributes->all(),
      'repository' => $repository,
      'request' => $request,
  ];
  ```
- Bezpośrednie przypisanie – spowoduje nadpisanie wartości:
  ```php
  $variables = $request->attributes->all();
  $variables['repository'] = $repository;
  $variables['request'] = $request;
  ```
- Użycie operatora unii `+` – w tym przypadku wartości nie zostaną nadpisane:

  ```php
  $variables = $request->attributes->all() + [
      'repository' => $repository,
      'request' => $request,
  ];

  #or
  $variables += [
      'repository' => $repository,
      'request' => $request,
  ];
  ```

Według mnie destrukturyzacja jest znacznie bardziej kusząca, ale należy uwzględnić parę skutków ubocznych.
Operator `...` przenumeruje klucze numeryczne, nawet jeśli są zapisane jako string. W przypadku `+` klucze zostaną zachowane.
Dodatkowo operator `...` jest szybszy niż `array_merge` i wspiera obiekty `Traversable`, a przynajmniej
powinien według [RFC](https://wiki.php.net/rfc/spread_operator_for_array#advantages_over_array_merge). Obstawiam
więc, że niedługo zobaczymy w kodzie więcej użyć `...` zamiast wywołań funkcji `array_merge`, ale tylko pod jednym warunkiem:
jeżeli klucze tablic nie będą liczbami całkowitymi, bo dla kluczy `int` to `array_merge` jest szybsze niż `...`.

Podsumowując:

- `...` resetuje indeksy numeryczne (konwertuje teksty liczbowe na liczby i nadpisuje kolejność), działa szybciej dla nienumerycznych kluczy.
- `+` zachowuje klucze, ale nie nadpisuje istniejących
- `array_merge()` resetuje indeksy numeryczne podobnie jak `...`, ale podobno działa szybciej dla normalnych kluczy numerycznych. Więcej można poczytać o tym [tutaj](https://www.php.net/manual/en/function.array-merge.php#126687).
