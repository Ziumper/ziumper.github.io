---
layout: post
title: "Using array_map() in a Programmer's Daily Life. PHP Review #7"
date: 2025-09-30
tags: php
description: "This time I decided to take a look at the most common uses of array_map in my daily code."
thumbnail: assets/img/posts/treasure-map.png
giscus_comments: true
---

This article won't be very long, but it will definitely be useful enough to serve as a good reference for future decisions.
Is it worth using `array_map`? Definitely yes, if you need to perform some mutation operations on individual elements.
For example, it can be:

- building subarrays from various values

```php
php > var_dump(array_map(static fn ($value) => ['numeric_string' => $value], ['zero','one','two','three']));
array(4) {
  [0]=>
  array(1) {
    ["numeric_string"]=>
    string(4) "zero"
  }
  [1]=>
  array(1) {
    ["numeric_string"]=>
    string(3) "one"
  }
  [2]=>
  array(1) {
    ["numeric_string"]=>
    string(3) "two"
  }
  [3]=>
  array(1) {
    ["numeric_string"]=>
    string(5) "three"
  }
}
```

- extracting values from another array and converting them to something else

```php
$ids = array_map(static fn ($id) => ['id' => $id], array_values($ids));
```

- returning a new list of values with changed values, without modifying the old list

```php
$newArray = array_map(static fn ($item) => str_replace('"','""',$item), $oldArray);
```

You can multiply the examples, but the most useful ones can be found here: [link to PHP documentation](https://www.php.net/manual/en/function.array-map.php)
