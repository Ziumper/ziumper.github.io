---
layout: post
title: "🧐 Floats and the Mystery of -0.0 - PHP Review #5"
date: 2025-09-18
tags: php
description: "Did you know that PHP has negative zero? This post is a journey through the world of negative zeros, division by infinity, and why in your code you can still safely write `== 0.0`."
thumbnail: assets/img/posts/zero-dungeon.png
giscus_comments: true
---

Yes, really. `-0.0` and `0.0` are two different byte representations according to the [IEEE 754 standard](https://en.wikipedia.org/wiki/IEEE_754) – but in practice… PHP treats them as the same.

I had this code:

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

And I started wondering:

- Can I just compare `$this->limitPrice == 0.0`?
- What if `limitPrice` = `-0.0`? 🤯

---

## 🔬 Analysis

### 1️⃣ IEEE 754 and -0.0

In the floating point standard, there is **positive zero (0.0)** and **negative zero (-0.0)**.  
At the byte level, they are two different values:

- `0.0` → `0x0000000000000000`
- `-0.0` → `0x8000000000000000`

So yes, binary-wise, they are not the same.

---

### 2️⃣ How PHP Handles It

Compare this:

```php
var_dump(0.0 == -0.0);   // true
var_dump(0.0 === -0.0);  // true
```

✅ PHP treats these two values as equal both with loose (`==`) and strict (`===`) comparison.

But watch this:

```php
var_dump(1 / 0.0);  // float(INF)
var_dump(1 / -0.0); // float(-INF)
```

➡️ The difference shows up when dividing – the sign of zero affects the result (`+∞` vs `-∞`).

---

### 3️⃣ Does It Matter in My Case?

In my code, `limitPrice` has **at most 4 decimal places**, comes from the database or simple operations.  
I don’t have strange negative zeros coming from complex math.  
So I can safely write:

```php
if ($this->limitPrice == 0.0) {
    return 0;
}
```

And everything works just fine.  
Epsilon (`1e-8`) is not needed here, because I don’t have rounding errors at the 17th decimal place.

---

## 🛠 Bonus: How to Detect -0.0 (For the Nerds)

If for some reason you **must know** whether it's -0.0, here's the trick:

```php
function isNegativeZero(float $x): bool {
    return $x === 0.0 && 1 / $x === -INF;
}

var_dump(isNegativeZero(0.0));  // false
var_dump(isNegativeZero(-0.0)); // true
```

Yes, you actually divide by zero to detect it. 🧪

---

## ✅ Conclusion

- Yes, -0.0 and 0.0 are different bytes.
- PHP treats them as equal (`==`, `===`).
- You can safely write `== 0.0` in comparisons.
- Only division by 0.0 vs -0.0 returns different infinities (INF vs -INF) – so when dividing, you may want to use `abs()`.

---

## 🎉 Summary

I managed to simplify my code and **instead of epsilons** I just have:

```php
public function getPercentage(): int
{
    return $this->limitPrice ? min(100, (int) round(($this->totalCartPrice / $this->limitPrice) * 100)) : 0;
}
```

Cleaner, simpler, and still safe.  
And the fact that -0.0 exists – well, that’s a great piece of trivia to impress your fellow developers over coffee. ☕️😎

PS: If you need an epsilon, it's better to use this constant:

```php
PHP_FLOAT_EPSILON
```
