---
layout: post
title: "Finally well written tests with composer loading structure"
date: 2025-09-29
tags: php composer phpunit
description: "This post explains how to organize composer project with phpunit dependecies to not load your test cases into classmap and explaing learnings I figured out durring my workflow"
thumbnail: assets/img/posts/Logo-composer-transparent.png
giscus_comments: true
---

I stumbled, crawled on ground while having not proper setup in my old project that I should work on.
and then I figured how I should structure my loading properties

here is what I had in my project

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

but this way all may classes seems to be loaded inside composer autload map. I knew
there must be better way to solve that. Here is what I figured out

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

Durring that time I got some really serious issues, I couldn't declare Traits in my tests
folder and it was quite hard feeling to copy paste all that code, then I moved forward with next version.

```json
{
  "autoload": {
    "psr-4": {
      "Ziumper\\App\\": "src"
      "Ziumper\\App\\Tests\\Utils\\": "tests/utils"
    },
    "exclude-from-classmap": ["tests"]
  },
  "autoload-dev": {
    "psr-4": {
      "Ziumper\\App\\Tests\\Unit\\": "tests/unit",
      "Ziumper\\App\\Tests\\Integration\\": "tests/integration"
    }
  }
}
```

So how this works is:

- all base code declarations are stored inside src folder and those used for tests are inside tests\utils folder. Base test cases
  traits, data providers too.
- integration and tests are using src references and are giving me some nice working cases.
- exclude from classmap is a guard which stands in front of my testing code and doesn't allow it to get into production loading flow.
- PSR-4 autoload in Composer loads classes by namespace → folder → filename.
- PHPUnit use PS-4 not auto generated class map.
- exclude-from-classmap = guards from loading my utility classes in production
- no need to write custom bootstrap loading

I think this way I can start building something... that makes sense!
