---
layout: post
title: "W końcu dobrze napisane testy z odpowiednią strukturą ładowania Composer"
date: 2025-09-29
tags: php composer phpunit
description: "Ten wpis wyjaśnia, jak zorganizować projekt oparty na Composerze z zależnościami PHPUnit, aby nie ładować przypadków testowych do classmapy, oraz opisuje wnioski, które wyciągnąłem w trakcie pracy."
thumbnail: assets/img/posts/Logo-composer-transparent.png
giscus_comments: true
---

Potykałem się, czołgałem po ziemi, mając źle skonfigurowany projekt, nad którym powinienem był pracować.
I wtedy zrozumiałem, jak powinienem uporządkować sposób ładowania klas.

Oto, co miałem wcześniej w moim projekcie:

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

Ale w ten sposób wszystkie moje klasy były ładowane do mapy autoload Composera. Wiedziałem, że
musi być na to lepszy sposób. I oto co odkryłem:

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

W międzyczasie napotkałem kilka poważnych problemów — nie mogłem zadeklarować Traitów w folderze testów,
a kopiowanie i wklejanie całego tego kodu było bardzo frustrujące. W końcu przeszedłem do kolejnej wersji. Nie była ona idealna,
ale działa dla podstawowych aplikacji. Musiałem wziąć poprawkę na to, że np w Shopware autloading się różni i musiałem napisać własny loading
bootstraperem.

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

Jak to działa:

- wszystkie deklaracje przechowywane są w folderze src, a te używane w testach — np. bazowe przypadki testowe, trait'y, data providery itd. w folderze tests utils,
- testy integracyjne i jednostkowe korzystają z odniesień do tests i wszystko działa bardzo sprawnie,
- `exclude-from-classmap` to coś w rodzaju strażnika, który pilnuje, aby kod testowy nie został przypadkowo załadowany do produkcyjnego środowiska.
- PSR-4 autoloader Composera ładuje klasy w locie po namespace → folder → filename.
- PHPUnit korzysta z autoloadera, więc klasy są widoczne w testach.
- exclude-from-classmap = chroni produkcję przed ładowaniem klas testowych, nie blokuje testów
- nie ma potrzeby pisania wielu skryptów do ładowania klas php

Proces ładowania klas, może się różnić w zależności od użytego frameworka czy zasad. Np. w shopware pluginy nie chcą ładować klas Utils co naprawić dodając własny bootstraper.
