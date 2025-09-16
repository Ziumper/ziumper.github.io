---
layout: post
title: "BackedEnum - PHP Review #3"
date: 2025-09-16
tags: php
description: "🏆 BackedEnums in PHP – how I stopped worrying about mappers and learned to love enums ❤️"
thumbnail: assets/img/posts/cookie-enum.png
giscus_comments: true
---

The story of a developer who decided to say goodbye to endless `const` declarations and mapping arrays.  
Along the way, you'll learn what `BackedEnums` are, their pros and cons, and why sometimes it's better to use `enum-name` than to duplicate string values.

## 🤔 What are BackedEnums anyway?

Since PHP **8.1**, we've finally got something we've been waiting for years – **enums**!  
And to top it off, there's an even fancier version – **BackedEnums**.  
These are enums that, besides having a name, can also have a value (`string` or `int`).  
Sounds like a class `const`, but it's way better. 💪

### Example in action

```php
enum Status: string {
    case NEW = 'new';
    case IN_PROGRESS = 'in_progress';
    case DONE = 'done';
}

// Usage
$orderStatus = Status::NEW;
echo $orderStatus->value; // "new"
echo $orderStatus->name;  // "NEW"
```

---

## 🧐 Why would I need this?

### Advantages:

- ✅ **Readability** – no more magic strings and guessing what the author meant.
- ✅ **Type safety** – you can't accidentally pass `"N3W"` instead of `"NEW"` to a function.
- ✅ **Easy refactoring** – change the value in one place and you're done.
- ✅ **Helper methods** – you can add logic to enums (e.g., `isFinished()`).

### Disadvantages:

- ❌ **PHP 8.1+ only** – if you're stuck on 7.4, you can only cry in the corner.
- ❌ **A bit of magic** – in large projects, you need to think carefully about whether to use `value` or `name`.
- ❌ **Overkill for simple cases** – if you only have 2 values, a `const` might be enough.

---

## 😅 Why can string BackedEnums be tricky?

Well, here's the thing.  
If the **enum value = its name**, you're kind of shooting yourself in the foot, because then in your code you have:

```php
Status::NEW->value // "NEW"
Status::NEW->name  // "NEW"
```

And if you can just use `->name`, what's the point of having `value`?  
Instead, it's better to stick with a regular `enum` (without a value) and keep things simple.

## ⏳ What was before enums?

Ah, the good old days...  
We wrote gems like this:

```php
class Status {
    public const NEW = 'new';
    public const IN_PROGRESS = 'in_progress';
    public const DONE = 'done';
}

$status = Status::NEW;
```

Or even better – **mapping arrays**, which you had to maintain in three different places.  
(Yeah, we all know that hurt.)

---

## 🔄 Before & After – how I got rid of mappers

**Before (mappers):**

```php
 enum OrderStatus: string {
     case NEW = 'new';
     case IN_PROGRESS = 'in_progress';
     case DONE = 'done';

     public function label(): string {
         return match($this) {
             self::NEW = "I'm doing things now!",,
             self::IN_PROGRESS = "I'm working on it!",
             self::DONE = "I finished",
         };
     }
 }

echo OrderStatus::IN_PROGRESS->label(); // "I'm working on it!"
```

**After (enums):**

```php
 enum OrderStatus: string {
     case NEW = 'new';
     case IN_PROGRESS = 'in_progress';
     case DONE = 'done';

     public function label(): string {
         return match($this) {
             self::NEW = "I'm doing things now!",,
             self::IN_PROGRESS = "I'm working on it!",
             self::DONE = "I finished",
         };
     }
 }

 echo OrderStatus::IN_PROGRESS->label(); // "I'm working on it!"
```

The result? Mappers are gone, the code is more readable, and my IDE gives me hints on the fly. 😎  
The example is kind of more abstract but it does show what or how enums may be used to refactor your old code.

---

## 🎉 My little revolution

Thanks to enums, I managed to get rid of all those value mappers!  
Now my code is clearer, the IDE suggests values, and I sleep peacefully. 🛌

Mappers? **No, thanks.**  
Enums have taken over and do a better job.  
And honestly – it was worth it. 😎

---

## 📌 Summary

- PHP 8.1 gave us **enums** and **BackedEnums**.
- Use BackedEnums when you need to _map_ names to values (`int`, `string`).
- If `value == name` – consider a regular `enum`.
- Enums = fewer bugs, fewer mappers, more peace of mind.

**Moral:** Enums are like new `consts`, just prettier and smarter.  
You can now send your mappers into retirement. 🏖️

---

✍️ **PS:** Yes, I smiled while writing this post. Because I'm really happy that we finally have proper enums in PHP. ❤️
