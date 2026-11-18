---
layout: post
title: "PHPUnit willReturnMap - PHP Review #4"
date: 2025-09-17
tags: php
description: "🐛 PHPUnit, willReturnMap and default arguments – how to fall into a subtle trap 🪤"
thumbnail: assets/img/posts/programmer-trap.png
giscus_comments: true
---

**Description:**  
A story about how a single little `null` cost me 30 minutes of debugging tests,  
and then I found the truth in the documentation… which is completely silent about it. 🙃

---

## 🧐 The Problem

Let’s assume we have a method like this:

```php
class MyService {
    public function doStuff(string $key, ?string $flag = null): string {
        return "Result: " . $key . ($flag ? " ($flag)" : "");
    }
}
```

And you want to test a class that uses `MyService` – of course, with a mock.  
You use **`willReturnMap`**, because it’s elegant and works for multiple sets of arguments.

Sounds simple?  
Let’s look at the test:

```php
$mock = $this->createMock(MyService::class);

$mock->method('doStuff')
    ->willReturnMap([
        ['foo', 'Result: foo (bar)'],
        ['baz', 'Result: baz'],
    ]);
```

Looks good, right?  
**NOPE.** 😅

---

## 💥 What happens?

If you don’t pass exactly as many arguments as the method takes, PHPUnit will say:

> "I have no idea what you mean" 🤷‍♂️  
> and return `null`.

So when your production code calls:

```php
$service->doStuff('baz');
```

the mock will say:

> "Sorry, I don’t know that map."

And your test explodes. 💣

---

## 🤯 Why does this happen?

Because `willReturnMap` matches arguments **by position**, exactly 1:1.  
A default `null` argument isn’t magically “guessed”.  
You need to explicitly put it in the array.

---

## ✅ The Correct Solution

You need to **match the exact number of arguments**, even if they’re default:

```php
$mock->method('doStuff')
    ->willReturnMap([
        ['foo', 'bar', 'Result: foo (bar)'],
        ['baz', null, 'Result: baz'], // <--- null is required!
    ]);
```

Yeah, I know – seems obvious, but sometimes you hope for a bit of magic. 🪄  
Sadly – PHPUnit offers no magic here.

---

## 📝 The Moral of the Story

- `willReturnMap` is great, but it’s **very literal**.
- If the method takes 2 arguments – your map must have 2 arguments.
- Even if the second argument defaults to `null`.
- PHPUnit isn’t a fortune teller – it won’t guess you meant the default. 😅

---

## 🎉 Takeaways

After this discovery, my tests stopped exploding.  
Knowing that **you have to explicitly provide every argument in the map** saved me hours of debugging.  
Now I know – with mocks, it’s better to provide one argument too many than one too few.

> 🧠 **Key Point:** `willReturnMap` ≠ flexible matching.  
> It’s a **strict argument map** – provide everything or don’t complain when your tests burn. 🔥

---

✍️ **PS:** If anyone finds a mention of this case in the PHPUnit docs – let me know.  
I couldn’t find it, and I searched half the internet. 🙈

[Link to documentation](https://docs.phpunit.de/en/12.3/test-doubles.html#willreturnmap)
