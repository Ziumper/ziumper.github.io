---
layout: post
title: "Finally, well-written tests with a proper Composer loading structure"
date: 2025-09-29
tags: php composer phpunit
description: "This post explains how to organize a Composer project with PHPUnit dependencies so your test cases are not loaded into the classmap, and shares the lessons I learned along the way."
thumbnail: assets/img/posts/Logo-composer-transparent.png
giscus_comments: true
---

I stumbled and crawled on the ground with an improper setup in an old project I had to work on.
And then I figured out how I should structure my class loading.

Here is what I had in my project:

```json
{
  "autoload": {
    "psr-4": {
      "Ziumper\\App\\": "src/",
      "Ziumper\\App\\": "tests/"
    }
  }
}
```

But this way all my classes seemed to be loaded into the Composer autoload map. I knew
there must be a better way to solve that. Here is what I figured out:

```json
{
  "autoload": {
    "psr-4": {
      "Ziumper\\App\\": "src/"
    }
  },
  "autoload-dev": {
    "psr-4": {
      "Ziumper\\App\\": "tests/"
    }
  }
}
```

During that time I ran into some really serious issues: I couldn't declare traits in my tests
folder, and copy-pasting all that code was quite frustrating, so I moved on to the next version. Later I figured out
that I had issues with PSR-4 autoloading inside Shopware plugins. So I decided to go with the following:

```json
{
  "autoload": {
    "psr-4": {
      "Ziumper\\App\\": "src"
    },
    "exclude-from-classmap": ["tests"]
  },
  "autoload-dev": {
    "psr-4": {
      "Ziumper\\App\\Tests\\Utils\\": "tests/utils",
      "Ziumper\\App\\Tests\\Unit\\": "tests/unit",
      "Ziumper\\App\\Tests\\Integration\\": "tests/integration"
    }
  }
}
```

Here is how it works:

- all base code declarations are stored inside the src folder, and those used for tests (base test cases,
  traits, data providers) are inside the tests\utils folder.
- integration and unit tests use src references, and everything works nicely.
- exclude from classmap is a guard which stands in front of my testing code and doesn't allow it to get into production loading flow.
- PSR-4 autoload in Composer loads classes by namespace → folder → filename.
- PHPUnit uses PSR-4, not the auto-generated class map.
- exclude-from-classmap = guards against loading my utility classes in production
- no need to write custom bootstrap loading

The class loading process may vary depending on the framework or rules used.
For example, in Shopware, plugins do not load Utils classes, so you have to write your own bootstrapper class.
