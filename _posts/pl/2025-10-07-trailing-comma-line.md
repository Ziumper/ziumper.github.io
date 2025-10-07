---
layout: post
title: "Przecinek po nowej linii w argumentach funkcji PHP (trailing comma)"
date: 2025-10-07
tags: php
description: "Jak trailing comma (,) w PHP ułatwia życie programisty przy pracy z argumentami funkcji i konstruktorów.,"
giscus_comments: true
---

Czy zdarzyło Ci się kiedyś dodać nowy argument do funkcji lub konstruktora w PHP i zapomnieć o przecinku na końcu poprzedniej linii? To częsty błąd, który może prowadzić do niepotrzebnych poprawek i frustracji.

Na szczęście od PHP 7.3 możesz używać tzw. trailing comma, czyli przecinka po ostatnim argumencie w wywołaniach funkcji, deklaracjach funkcji oraz w tablicach. Dzięki temu, gdy dodajesz nowy argument, nie musisz pamiętać o ręcznym dodaniu przecinka na końcu poprzedniej linii.

### 🛑 Przykład bez trailing comma

```php
class User {
    public function __construct(
        string $name,
        int $age
    ) {
        // ...
    }
}
```

Jeśli chcesz dodać kolejny argument, musisz wrócić do poprzedniej linii i dodać przecinek:

```php
class User {
    public function __construct(
        string $name,
        int $age, // musisz dodać przecinek
        string $email
    ) {
        // ...
    }
}
```

### ✅ Przykład z trailing comma

```php
class User {
    public function __construct(
        string $name,
        int $age,
    ) {
        // ...
    }
}
```

Teraz możesz po prostu dopisać kolejny argument bez martwienia się o przecinki:

```php
class User {
    public function __construct(
        string $name,
        int $age,
        string $email,
    ) {
        // ...
    }
}
```

### 📅 Od kiedy?

Trailing comma w listach argumentów funkcji i metod jest dostępny od PHP 7.3. Wcześniej można było jej używać tylko w tablicach.

### 📝 Podsumowanie

Stosowanie trailing comma:

- ułatwia dodawanie i usuwanie argumentów,
- zmniejsza ryzyko błędów składniowych,
- poprawia czytelność kodu w dłuższej perspektywie.

Warto korzystać z tej możliwości, szczególnie w większych projektach!
