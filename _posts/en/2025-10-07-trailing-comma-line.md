---
layout: post
title: "Comma at the end of function arguments in PHP (trailing comma)"
date: 2025-10-07
tags: php
description: "How the trailing comma in PHP makes a programmer's life easier when working with function and constructor arguments."
giscus_comments: true
---

Have you ever added a new argument to a function or constructor in PHP and forgotten to add a comma at the end of the previous line? It's a common mistake that can lead to unnecessary fixes and frustration.

Fortunately, modern PHP lets you use the so-called trailing comma, i.e., a comma after the last argument in function calls (since PHP 7.3) and after the last parameter in function and method declarations (since PHP 8.0), just like in arrays. Thanks to this, when you add a new argument, you don't have to remember to manually add a comma at the end of the previous line.

### 🛑 Example without trailing comma

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

If you want to add another argument, you have to go back to the previous line and add a comma:

```php
class User {
    public function __construct(
        string $name,
        int $age, // you have to add a comma
        string $email
    ) {
        // ...
    }
}
```

### ✅ Example with trailing comma

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

Now you can simply add another argument without worrying about commas:

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

### 📅 Since when?

A trailing comma in function and method call arguments is available since PHP 7.3, and in parameter lists of function and method declarations (like the constructor above) since PHP 8.0. Previously, it was only available in arrays.

### 📝 Summary

Using the trailing comma:

- makes adding and removing arguments easier,
- reduces the risk of syntax errors,
- improves code readability in the long run.

It's worth using this feature, especially in larger projects!
