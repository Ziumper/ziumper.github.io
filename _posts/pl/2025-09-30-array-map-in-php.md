---
layout: post
title: "Wykorzystanie array_map() w codziennym życiu programisty - Przegląd PHP #7"
date: 2025-09-30
tags: php
description: "Tym razem postanowiłem przyjrzeć się najczęstszym wykorzystaniom array_map w moim codziennym kodzie."
thumbnail: assets/img/posts/treasure-map.png
giscus_comments: true
---

Artykuł nie będzie zbyt długi, ale na pewno będzie na tyle użyteczny, że może komuś posłużyć jako dobry odnośnik do przyszłych decyzji.
Czy warto użyć `array_map`? Zdecydowanie tak, jeżeli musimy wykonać pewne operacje mutacji na poszczególnych elementach.
Może to być na przykład:

- budowanie podtablic z różnych wartości

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

- wyciągnięcie wartości z innej tablicy i zamiana ich na coś innego

```php
$ids = array_map(static fn ($id) => ['id' => $id], array_values($ids));
```

- zwrócenie nowej listy ze zmienionymi wartościami, bez modyfikowania starej listy

```php
$newArray = array_map(static fn ($item) => str_replace('"','""',$item), $oldArray);
```

Przykłady można mnożyć, ale najwięcej użytecznych przykładów można znaleźć tu: [link do dokumentacji PHP](https://www.php.net/manual/en/function.array-map.php)
