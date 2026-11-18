---
layout: post
title: "PHPUnit willReturnMap - Przegląd PHP #4"
date: 2025-09-17
tags: php
description: "🐛 PHPUnit, willReturnMap i domyślne argumenty – czyli jak wpaść w subtelną pułapkę 🪤"
thumbnail: assets/img/posts/programmer-trap.png
giscus_comments: true
---

Historia o tym, jak przez jeden mały `null` straciłem 30 minut życia na debugowanie testów,  
a potem znalazłem prawdę w dokumentacji… która milczy na ten temat. 🙃

---

## 🧐 Problem

Załóżmy, że mamy taką metodę:

```php
class MyService {
    public function doStuff(string $key, ?string $flag = null): string {
        return "Result: " . $key . ($flag ? " ($flag)" : "");
    }
}
```

I chcemy przetestować klasę, która używa `MyService` – oczywiście z mockiem.  
Używamy **`willReturnMap`**, bo jest eleganckie i działa dla wielu zestawów argumentów.

Brzmi prosto?  
No to spójrzmy na test:

```php
$mock = $this->createMock(MyService::class);

$mock->method('doStuff')
    ->willReturnMap([
        ['foo', 'Result: foo (bar)'],
        ['baz', 'Result: baz'],
    ]);
```

Wygląda dobrze, nie?  
**NIE.** 😅

---

## 💥 Co się dzieje?

Jeśli nie przekażesz dokładnie tylu argumentów, ile metoda przyjmuje, PHPUnit powie:

> "Nie wiem, o co ci chodzi" 🤷‍♂️  
> i zwróci `null`.

Czyli gdy w kodzie produkcyjnym wywołasz:

```php
$service->doStuff('baz');
```

to mock powie:

> "Przykro mi, ale ja nie znam takiej mapy".

I test wybucha. 💣

---

## 🤯 Dlaczego tak jest?

Bo `willReturnMap` dopasowuje argumenty **po kolei**, 1:1.  
Domyślny argument `null` nie jest w magiczny sposób "zgadywany".  
Trzeba go tam podać jawnie w tablicy.

---

## ✅ Poprawne rozwiązanie

Trzeba **dopasować dokładnie liczbę argumentów**, nawet jeśli są domyślne:

```php
$mock->method('doStuff')
    ->willReturnMap([
        ['foo', 'bar', 'Result: foo (bar)'],
        ['baz', null, 'Result: baz'], // <--- null musi być!
    ]);
```

Tak, wiem – niby oczywiste, ale jednak człowiek czasem liczy na trochę magii. 🪄  
Niestety – PHPUnit tutaj magii nie oferuje.

---

## 📝 Morał historii

- `willReturnMap` jest super, ale jest **bardzo dosłowne**.
- Jeśli metoda ma 2 argumenty – w mapie też musisz mieć 2 argumenty.
- Nawet jeśli ten drugi argument ma `null` jako default.
- PHPUnit nie robi za wróżkę – nie zgadnie, że miałeś na myśli default. 😅

---

## 🎉 Wnioski

Po tym odkryciu moje testy przestały eksplodować.  
Wiedza, że **trzeba jawnie podać każdy argument w mapie**, oszczędziła mi godzin debugowania.  
Teraz już wiem – przy mockach **lepiej podać o jeden argument za dużo niż za mało**.

> 🧠 **Meritum:** `willReturnMap` ≠ elastyczne dopasowanie.  
> To **twarda mapa argumentów** – podaj wszystko albo nie narzekaj, że testy płoną. 🔥

---

✍️ **PS:** Jeśli ktoś znajdzie w dokumentacji PHPUnit wzmiankę o tym przypadku – dajcie znać.  
Ja nie znalazłem, a przeszukałem pół internetu. 🙈

[Link do dokumentacji](https://docs.phpunit.de/en/12.3/test-doubles.html#willreturnmap)
