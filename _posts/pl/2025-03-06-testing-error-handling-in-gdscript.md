---
layout: post
title: Testowanie obłsugi błedów w Godocie przy pomocy GUT
date: 2025-03-06
tags: game-dev godot tests
categories: tutorials
description: Testowanie obsługi błędów przy pomoc GUT i metody stub w GDscript
thumbnail: assets/img/posts/gut_logo_256x256.png
giscus_comments: true
---

Testowanie to z pewnością niełatwe zadanie, zwłaszcza jeżeli chodzi o pisanie testów
w silnikach gier. Jednakże, można się posiłkować już istniejącymi rozwiązaniami. Jednym z nich jest
[GUT](https://github.com/bitwes/Gut), czyli Godot Unit Tests.

## Definicja problemu:

Ostatnio natrafiłem w swoim projekcie na następujący problem.
Chciałem przetestować obsługę błędów w swojej grze przy ładowaniu zapisanego stanu gry.

```py
## Reads the data from file and returns as dictionary
func load_data()->Dictionary:
	var data = {}
	var path = get_saved_game_path()
	var file = FileAccess.open_encrypted_with_pass(path, FileAccess.READ, _password)
...
```

Spojrzałem przede wszystkim na dokumentację `FileAccess.get_open_error`. Zwraca ona typ `enum` Error.
Sprawdzenie zwracanego kodu było dobrym tropem, ale najpierw należało napisać test:

```py
func test_load_if_game_save_doesnt_exist()->void:
	var save = GameSave.new("TestingGameSave.save", "12345")
	var data: Dictionary = save.load_data()
	assert_not_null(data)
```

To taki dobry początek. Sprawdzam najpierw, czy jest z czym pracować i czy dane nie są przypadkiem nullem.
Miałem w głowie kilka pomysłów, jak to powinno wyglądać. Przede wszystkim:

1. Nie zwracaj błędów. Nie chciałem zwracać wyjątków i obsługiwać ich na zewnątrz funkcji.
   Chciałem po prostu dodać obsługę błędów tam, gdzie one występują.
   W GDScript nie można używać try-catch ani rzucać wyjątkami, co również nie jest dobrą praktyką.
   Nie mam w zwyczaju zrzucać wszystkiego na inne osoby. Wolę rozwiązywać problemy tam,
   gdzie rzeczywiście występują, ponieważ jest to najbardziej prawdopodobne miejsce, w którym można je rozwiązać.

2. Nie zwracaj wartości null. Jest to częsty problem, który nazywam "propagacją pustki".
   Problem polega na tym, że za każdym razem, gdy zwracamy null, umiera w nas cząstka człowieczeństwa.
   A przy kolejnym wywołaniu funkcji, kiedy chcemy wywołać metodę na obiekcie, musimy najpierw sprawdzić, czy nie jest on nullem,
   gdyż w przeciwnym wypadku ryzukujujemy NullPointerException i najprawdopodbniej wyłączenie gry w trakcie rozgrywki.
   Należy więc pozbyć się wartości null! Trochę szerzej ten problem został opisany [tutaj](https://hackernoon.com/null-the-billion-dollar-mistake-8t5z32d6).

3. Nie wrzucaj wszystkiego do jednego worka.
   Zwracanie błędów lub obiektu mogłoby wywołać lawinę obsługi błędów (patrz punkt 1).
   Im prościej, tym lepiej – dzięki temu łatwiej będzie mi pracować nad tym w przyszłości.

## Rozwiązanie:

Poskutkowałem to następującym kodem:

```py
## Reads the data from file and returns as dictionary
func load_data()->Dictionary:
	var data = {}
	var path = get_saved_game_path()
	var file = FileAccess.open_encrypted_with_pass(path, FileAccess.READ, _password)
	var error: Error = FileAccess.get_open_error()
	if not error == OK:
		push_error('There was an error while trying to open a file with following error code: ' + var_to_str(error))
		return data
```

Wygląda to naprawdę dobrze, ale nadal nie jestem usatysfakcjonowany.
Chciałem przetestować scenariusz, w którym występuje błąd,
a przy okazji nie wypisywać nic na konsolę w momencie wykonania testu, tylko wtedy,
gdy problem się rzeczywiście pojawia, oraz obsłużyć zwracany przez Godot kod błędu.
Te wszystkie punkty razem stanowią wyzwanie, zwłaszcza dla młodego języka skryptowego,
jakim jest GDScript.
Oto, co takiego zrobiłem:

- użyłem metody [stub z GUT](https://gut.readthedocs.io/en/latest/Stubbing.html#to-call-callable).
- musiałem użyć [partial double](https://gut.readthedocs.io/en/latest/Partial-Doubles.html)ze względu na wsparcie metody stub dla obiektów klasy `double`
- Niestety, nie można nadpisywać implementacji słowa kluczowego `push_error`, więc napisałem własną metodę `print_error`
  i wywołałem w jej wnętrzu oryginalną metodę, aby ją zastąpić funkcją
  anonimową, która z kolei ustawiała by flagę sprawdzającą, czy metoda została poprawnie wywołana.
  Myślę, że w przyszłości do [stub](https://gut.readthedocs.io/en/latest/Stubbing.html#to-call-callable)
  przydałaby się możliwość sprawdzenia czy metdoa została na pewno wywołana. Póki co musiałem się posiłkować zmienną globalną.

  Przeszukałem dokumentacje GUT i znalazłem sposób, żeby to sprawdzić przy pomocy
  następującej funkcji o ile klasa sprawdzająca jest podklasą klasy stub.

  ```py
  assert_called(save,"print_error")
  ```

Cały kod prezentuje się następująco:

```py
#game_save.gd
#wrapper for testing the errors
func print_error(msg: String)->void:
	push_error(msg)

## Reads the data from file and returns as dictionary
func load_data()->Dictionary:
	var data = {}
	var path = get_saved_game_path()
	var file = FileAccess.open_encrypted_with_pass(path, FileAccess.READ, _password)
	var error: Error = FileAccess.get_open_error()
	if not error == OK:
		print_error('There was an error while trying to open a file with following error code: ' + var_to_str(error))
		return data

#test_game_save.gd
extends GutTest

var _error_called = false

func test_load_if_game_save_doesnt_exist()->void:
	#arrange
	var save = partial_double(GameSave).new("TestingGameSave.save", "12345")

	stub(save,"print_error").to_call(func(_msg: String)->void:
		_error_called = true
	)

	#act
	var data: Dictionary = save.load_data()

	#assert
	assert_true(_error_called) # this one is custom solution for checks
        assert_called(save,"print_error") # this one comes from gut
	assert_not_null(data)
```

## Szczegóły rozwiązania:

Należy jednak wziąc pod uwagę, to, że wywołanie funkcji anonimowej musiało odbyć
się na zmiennej `_error_called` obiektu klasy. W GDscript obecny jest następujący problem.
Jeżeli chciałbym wywołac zmienną w taki sposób:

```py
func test_load_if_game_save_doesnt_exist()->void:
	#arrange
	var save = partial_double(GameSave).new("TestingGameSave.save", "12345")
        var error_called = true

	stub(save,"print_error").to_call(func(_msg: String)->void:
		error_called = true
	)

	#act
	var data: Dictionary = save.load_data()

	#assert

	assert_true(error_called) # this one is
	assert_not_null(data)
```

Wystąpiłby błąd związany z tym, że wartości z funkcji anonimowych są przekazywane
poprzez wartość a nie poprzez referencje, co oznaczałaby, że wartość zmiennej
`error_called` nie zostałaby zmieniona a asercja nie powiodłaby się.

```py
#it fails
assert_true(error_called)
```

Aby zadziałało przekazanie przez referencje należy odnieść się do zmiennej z kontekstu obiektu.

Dzięki tym prostym trickom udało się wywołać scenariusz testowy dla walidacji błędów
w deterministyczny i powtarzalny spsób.
Rozwiązanie te ma jednak następujące minusy z którymi należy się liczyć:

- wymaga stworzenia dublera, który połowicznie odzwierciedla logikę klasy GameSave

- dla każdej testowej klasy należy "przykryć obsługę błędów" dodatkową metodą `print_error`
  oraz dla każdego testu należy przykryć tą metodę dodatkowym wywołaniem metody stub.

Jest to mała cena za możliwość trasnparetnego i przyjemnego sprawdzenia obsługi błędów i walidacji
kodu w GDscript. Można to jeszcze na pewno ulepszyć, ale zostawiam to jako temat na następny artykuł.

### Możliwe ulepszenia

W skrócie można to ulepszyć w następujący sposób:

- dodać sprawdzenie zwracanego kodu oraz ich obsługę
- dodać weryfikacje zwracanego kodu błędu w testach
- dodać własną warstwę lub serwis do logowania błędów
