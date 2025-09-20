---
layout: post
title: "🧐 PHP, Liczby zmiennoprzecinkowe i Tajemnica -0.0 Przegląd PHP #5"
date: 2025-09-18
tags: php
description: "Czy wiesz, że w PHP istnieje ujemne zero? Ten post to podróż przez świat ujemnych zer, dzielenia przez nieskończoność i tego, czemu w Twoim kodzie i tak możesz spokojnie pisać == 0.0."
thumbnail: assets/img/posts/zero-dungeon.png
giscus_comments: true
---

Tak, serio. `-0.0` i `0.0` to dwie różne reprezentacje bajtowe w standardzie [IEEE 754](https://pl.wikipedia.org/wiki/IEEE_754) – ale w praktyce… PHP i tak je traktuje tak samo.

Miałem taki kod:

```php
public function getPercentage(): int
{
    // epsilon to avoid division by zero
    if (abs($this->limitPrice) < 1e-8) {
        return 0;
    }

    return min(100, (int) round(($this->totalCartPrice / $this->limitPrice) * 100));
}
```

I zacząłem się zastanawiać:

- Czy mogę po prostu porównać `$this->limitPrice == 0.0`?
- A co jeśli `limitPrice` = `-0.0`? 🤯

---

## 🔬 Analiza

### 1️⃣ IEEE 754 i -0.0

W standardzie liczb zmiennoprzecinkowych istnieje **dodatnie zero (0.0)** i **ujemne zero (-0.0)**.  
Na poziomie bajtów to dwie różne wartości:

- `0.0` → `0x0000000000000000`
- `-0.0` → `0x8000000000000000`

Czyli tak, binarnie to nie to samo.

---

### 2️⃣ Co na to PHP?

Porównajmy:

```php
var_dump(0.0 == -0.0);   // true
var_dump(0.0 === -0.0);  // true
```

✅ PHP traktuje te dwie wartości jako równe zarówno w porównaniu luźnym (`==`), jak i ścisłym (`===`).

Ale uwaga:

```php
var_dump(1 / 0.0);  // float(INF)
var_dump(1 / -0.0); // float(-INF)
```

➡️ Przy dzieleniu widać różnicę – znak zera wpływa na wynik (`+∞` vs `-∞`).

---

### 3️⃣ Czy to ma znaczenie w moim przypadku?

W moim kodzie `limitPrice` ma **maksymalnie 4 miejsca po przecinku**, pochodzi z bazy danych lub prostych operacji.  
Nie mam tu ujemnych zer z kosmosu.  
W praktyce mogę spokojnie napisać:

```php
if ($this->limitPrice == 0.0) {
    return 0;
}
```

I wszystko działa jak należy.  
Epsilon (`1e-8`) nie jest potrzebny, bo nie mam problemów z błędami zaokrągleń na poziomie 17 miejsc po przecinku.

---

## 🛠 Bonus: Jak wykryć -0.0 (dla nerdów)

Jeżeli jednak z jakiegoś powodu **musisz wiedzieć, czy to -0.0**, oto trik:

```php
function isNegativeZero(float $x): bool {
    return $x === 0.0 && 1 / $x === -INF;
}

var_dump(isNegativeZero(0.0));  // false
var_dump(isNegativeZero(-0.0)); // true
```

Tak, trzeba podzielić przez zero, żeby to wykryć. 🧪

---

## ✅ Wniosek

- Tak, -0.0 i 0.0 to różne bajty.
- PHP traktuje je jako równe (`==`, `===`).
- Możesz śmiało pisać `== 0.0` w porównaniach.
- Jedynie dzielenie przez 0.0 i -0.0 zwraca różne nieskończoności (INF vs -INF) – więc jak dzielisz, warto używać `abs()`.

---

## 🎉 Podsumowanie

Udało mi się uprościć kod i **zamiast epsilonów** mam po prostu:

```php
public function getPercentage(): int
{
    return $this->limitPrice ? min(100, (int) round(($this->totalCartPrice / $this->limitPrice) * 100)) : 0;
}
```

Czytelniej, prościej i dalej bezpiecznie.  
A fakt, że -0.0 istnieje, zostawiam jako ciekawostkę do impressowania znajomych programistów na kawie. ☕️😎

PS: Jeżeli zależy Ci na użyciu epislona to chyba znacznie lepiej użyć tej stałej.

```php
PHP_FLOAT_EPSILON
```
