---
layout: post
title: "BackedEnum - Przegląd PHP #3"
date: 2025-09-16
tags: php
description: "🏆 BackedEnums w PHP – czyli jak skończyłem z mapperami i pokochałem enumy ❤️"
thumbnail: assets/img/posts/cookie-enum.png
giscus_comments: true
---

Historia pewnego developera, który postanowił pożegnać się z niekończącymi się `const` i tablicami mapperów.  
Przy okazji dowiesz się, czym są `BackedEnums`, jakie mają plusy i minusy, i czemu czasem lepiej sięgnąć po `enum-name` niż powielać wartości stringów.

## 🤔 Co to w ogóle są te BackedEnums?

Od PHP **8.1** dostaliśmy wreszcie coś, na co czekaliśmy od lat – **enumy**!  
A do tego mamy ich bardziej wypasioną wersję – **BackedEnums**.  
Są to takie enumy, które oprócz nazwy mogą mieć jeszcze wartość (`string` albo `int`).  
Brzmi jak `const` w klasie, ale jest o niebo lepsze. 💪

### Przykład w akcji

```php
 enum Status: string {
     case NEW = 'new';
     case IN_PROGRESS = 'in_progress';
     case DONE = 'done';
 }

 // Użycie
 $orderStatus = Status::NEW;
 echo $orderStatus-value; // "new"
 echo $orderStatus-name;  // "NEW"
```

---

## 🧐 A po co mi to?

### Zalety:

- ✅ **Czytelność** – koniec z magicznymi stringami i zgadywaniem, co autor miał na myśli.
- ✅ **Bezpieczeństwo typów** – nie wciśniesz do funkcji `"N3W"` zamiast `"NEW"`.
- ✅ **Łatwość refaktoryzacji** – zmieniasz wartość w jednym miejscu i gotowe.
- ✅ **Metody pomocnicze** – możesz wrzucać do enumów logikę (np. `isFinished()`).

### Wady:

- ❌ **Tylko w PHP 8.1+** – jeśli utknąłeś na 7.4, to pozostaje ci tylko płakać w kącie.
- ❌ **Trochę magii** – przy dużych projektach musisz dobrze przemyśleć, czy używać `value` czy `name`.
- ❌ **Overkill dla prostych przypadków** – jak masz 2 wartości na krzyż, to może wystarczyć `const`.

---

## 😅 Dlaczego `BackedEnums` dla stringów mogą być kłopotliwe?

No właśnie, tutaj miałem małą zagwozdkę.  
Jeżeli **wartość enuma = jego nazwa**, to trochę strzelamy sobie w kolano, bo potem w kodzie mamy:

```php
 Status::NEW-value // "NEW"
 Status::NEW-name  // "NEW"
```

A skoro można po prostu używać `->name`, to po co nam to całe `value`?  
Zamiast tego lepiej zostawić zwykłe `enum` (bez wartości) i mieć spokój.

## ⏳ A co było przed enumami?

Ach, stare dobre czasy...  
Pisaliśmy takie kwiatki:

```php
class Status {
    public const NEW = 'new';
    public const IN_PROGRESS = 'in_progress';
    public const DONE = 'done';
}

$status = Status::NEW;
```

Albo jeszcze lepiej – **tablice mapperów**, które trzeba było utrzymywać w 3 miejscach naraz.  
(Tak, wszyscy wiemy, że to bolało.)

---

## 🔄 Przed i po – czyli jak się pozbyłem mapperów

**Przed (mappery):**

```php
class OrderStatus {
    public const NEW = 'new';
    public const IN_PROGRESS = 'in_progress';
    public const DONE = 'done';

    public static array $labels = [
        self::NEW => "I'm doing things now!",
        self::IN_PROGRESS => "I'm working on it!",
        self::DONE => "I finished",
    ];
}

echo OrderStatus::$labels[OrderStatus::IN_PROGRESS]; // "I'm working on it!"
```

**Po (enumy):**

```php
enum OrderStatus: string {
    case NEW = 'new';
    case IN_PROGRESS = 'in_progress';
    case DONE = 'done';

    public function label(): string {
        return match($this) {
            self::NEW => "I'm doing things now!",
            self::IN_PROGRESS => "I'm working on it!",
            self::DONE => "I finished",
        };
    }
}

echo OrderStatus::IN_PROGRESS->label(); // "I'm working on it!"
```

Rezultat? Mappery out, kod jest czytelniejszy, a IDE podpowiada mi wszystko na bieżąco. 😎  
Przykład jest ciut abstrakcyjny, ale mimo wszystko oddaje problemy, z którymi należy sobie radzić.

---

## 🎉 Moja mała rewolucja

Dzięki enumom udało mi się pozbyć wszystkich mapperów wartości!  
Teraz kod jest czytelniejszy, IDE podpowiada mi wartości, a ja śpię spokojnie. 🛌

Mappery? **Nie, dziękuję.**  
Enumy przejęły pałeczkę i zrobiły to lepiej.  
I serio – warto było to zrobić. 😎

---

## 📌 Podsumowanie

- PHP 8.1 dało nam **enumy** i **BackedEnums**.
- Używaj BackedEnums, gdy potrzebujesz _mapowania_ nazw na wartości (`int`, `string`).
- Gdy `value == name` – rozważ zwykłe `enum`.
- Enumy = mniej bugów, mniej mapperów, więcej spokoju w duszy.

**Morał:** Enumy to takie nowe `consty`, tylko ładniejsze i mądrzejsze.  
Mappery możesz teraz wysłać na emeryturę. 🏖️

---

✍️ **PS:** Tak, uśmiechałem się, pisząc ten post. Bo naprawdę cieszę się, że w końcu mamy porządne enumy w PHP. ❤️
