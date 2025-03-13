---
layout: post
title: "Array Functions: ['array_filter', 'array_merge'] - PHP Review #1"
date: 2025-03-12
tags: php
description: A review of the most commonly used PHP functions for working with arrays. When and how to use them optimally.
thumbnail: assets/img/posts/new-php-logo.png
giscus_comments: true
---

Kicking off a series where I dive into the most useful PHP functions and how to make the most of them.
Nothing like a solid cheat sheet before an interview! This series is fueled by the fact that PHP has been going through some serious
changes lately—new versions have stirred things up quite a bit.
Time to refresh that knowledge, take some proper notes, and—let’s be honest—catch up
before getting left behind!

## Examples Straight from the Repo

Just hearing "array functions" makes people uneasy. The internet is flooded with examples, some good, some... let’s just say _questionable_.  
Every junior dev knows how to _use_ these functions, so I decided to dig deeper and see how they’re actually applied in some well-known PHP frameworks I’ve worked with:

- [Symfony](https://github.com/symfony/symfony) – The most _business-mature_ platform in terms of compatibility and use cases. Gotta be some gems in there.
- [Laravel](https://github.com/laravel/laravel) – Unlike Symfony, this one moves fast, with major changes between versions. But hey, that also means it’s a great place to find some spicy array function tricks.
- [Rector](https://github.com/rectorphp/rector) – My go-to tool for modernizing old PHP code. I bet it's packed with good examples of array functions in action.

---

## Example with array_filter

I set sail on the vast ocean of PHP code and—ironically—ran straight into an iceberg. The first class I bumped into was [EntityValueResolver](https://github.com/symfony/symfony/blob/7.2/src/Symfony/Bridge/Doctrine/ArgumentResolver/EntityValueResolver.php), which implements the [ValueResolverInterface](https://github.com/symfony/symfony/blob/7.3/src/Symfony/Component/HttpKernel/Controller/ValueResolverInterface.php).
`EntityValueResolver` is responsible for automatically passing entities to a controller based on an ID from the URL. For example, this tiny piece of code:

```php
#[Route('/user/{id}', name: 'user_show')]
public function show(User $user): Response
{
    return new Response('User: ' . $user->getUsername());
}
```

Here, `User` is a mapped database entity, automatically hydrated and returned from the database. More on that here. Neat feature, right? But let’s get back to the juicy part—array functions.
Meet [array_filter](https://www.php.net/manual/en/function.array-filter.php), found in
[EntityValueResolver](https://github.com/symfony/symfony/blob/7.2/src/Symfony/Bridge/Doctrine/ArgumentResolver/EntityValueResolver.php#L178)

```php
 if ($options->stripNull) {
    $criteria = array_filter($criteria, static fn ($value) => null !== $value);
}
```

The array_filter function takes an array
and a [Closure](https://www.php.net/manual/en/class.closure.php) (a.k.a. an [anonymous function](https://www.php.net/manual/en/functions.anonymous.php)),
which returns `true` or `false` for each element. Now, the spicy part: the function is used as static.
According to the [docs](https://www.php.net/manual/en/functions.anonymous.php#functions.anonymous-functions.static):

> Anonymous functions may be declared statically.
> This prevents them from having the current class automatically bound to them.
> Objects may also not be bound to them at runtime.

So, this blocks the use of the [bindTo](https://en.wikipedia.org/wiki/Pure_function) method. But why would anyone want to do that?
Possible reasons:

a) To prevent accidental access to `$this` within a class context.

b) To improve performance and avoid potential memory leaks.

c) To stop an anonymous function from being later assigned to another object and modifying its state dynamically.

Option **a)** is key here. Declaring an anonymous function as [static](https://www.php.net/manual/en/language.oop5.static.php)
prevents it from being tied to a class instance, avoiding unintended access to `$this`.
It’s also a nod to functional programming principles—keeping [functions pure](https://en.wikipedia.org/wiki/Pure_function) and avoiding side effects.
While not mandatory, marking it as static makes the intent clear:

> This function has nothing to do with the class instance.

## Example with array_merge

Function [array_merge](https://www.php.net/manual/en/function.array-merge.php) merges two arrays,
appending elements from the second one to the end of the first. [Example](https://github.com/symfony/symfony/blob/7.2/src/Symfony/Bridge/Doctrine/ArgumentResolver/EntityValueResolver.php#L223) found in [Symfony](https://symfony.com)

```php
$repository = $manager->getRepository($options->class);
$variables = array_merge($request->attributes->all(), [
    'repository' => $repository,
    'request' => $request,
]);
```

Now, let’s see how we can rewrite this:

- Destructuring – A cleaner and faster way to merge arrays while replacing existing keys:
  ```php
  $variables = [
      ...request->attributes->all(),
      'repository' => $repository,
      'request' => $request,
  ];
  ```
- Direct assignment – Simple, no `array_merge` needed:
  ```php
    $variables = $request->attributes->all();
    $variables['repository'] = $repository;
    $variables['request'] = $request;
  ```
- Using the + operator – This preserves existing keys:

  ```php
  $variables = $request->attributes->all() + [
      'repository' => $repository,
      'request' => $request,
  ];

  #or
  $variables += [
      'repository' => $repository,
      'request' => $request,
  ];
  ```

In my opinion, destructuring is the sexiest option, but there are trade-offs.
The `...` operator resets numeric indexes (converting string numbers into integer numbers
and overwriting them). Meanwhile, `+` preserves keys but doesn’t overwrite existing ones.

Also, `...` is faster than `array_merge`, supports Traversable objects,
and—according to [this RFC](https://wiki.php.net/rfc/spread_operator_for_array#advantages_over_array_merge) —it’s the future.
So expect to see a lot more `...` instead of `array_merge()`— unless you’re dealing with numeric keys,
because in that case, `array_merge` still wins the performance race.

In summary

- `...` resets numeric keys but is faster for non-numeric keys.
- `+` preserves keys but doesn’t overwrite existing ones.
- `array_merge()` resets numeric keys like `...`, but is faster for numeric keys. More details [here](https://www.php.net/manual/en/function.array-merge.php#126687).
