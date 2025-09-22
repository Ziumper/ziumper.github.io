---
layout: post
title: "🧹 Jak usunąć przepisy z sekcji `extra` w composer.json"
date: 2025-09-22
tags: php, composer, symfony, symfony-flex
description: "Krótki przewodnik po sekcji `extra` w composer.json oraz usuwaniu przepisów Symfony."
thumbnail: assets/img/posts/cyber-broom.png
giscus_comments: true
---

Pracując nad projektami PHP, szczególnie tymi opartymi o Symfony,
możesz natrafić na sekcję `extra` w pliku `composer.json`.
Często zawiera ona przepisy (recipes), które pomagają skonfigurować Twój projekt.
Z czasem możesz jednak zechcieć usunąć lub uporządkować te przepisy.

## Czym jest sekcja `extra` w composer.json?

Sekcja `extra` to specjalne miejsce w pliku `composer.json` na niestandardową konfigurację.  
Używana jest przez wtyczki Composera, frameworki (np. Symfony), czy skrypty do przechowywania dodatkowych ustawień.

### Przykład

```json
{
  "extra": {
    "symfony": {
      "allow-contrib": true,
      "recipes": {
        "symfony/console": {
          "version": "1.0",
          "ref": "abcdef"
        }
      }
    }
  }
}
```

## Do czego używałem sekcji `extra`?

Ja wykorzystywałem ją do przechowywania przepisów Symfony Flex.
Symfony Flex to wtyczka Composera, która pomaga zarządzać aplikacjami Symfony poprzez automatyczną instalację i konfigurację pakietów.
Gdy instalujesz pakiet posiadający przepis, Symfony Flex dodaje pliki konfiguracyjne i ustawienia do projektu automatycznie.
Możesz chcieć usunąć niektóre z tych przepisów, jeśli nie są Ci już potrzebne lub chcesz dostosować swoją konfigurację.
W moim przypadku była to konfiguracja dockera, której nie potrzebowałem.
```json
{
  "extra": {
    "symfony": {
      "allow-contrib": true,
      "docker": false
    }
  }
}
```

## Symfony Flex

Przepisy Flex przyjmują pewne założenia co do struktury katalogów w Twoim projekcie. Część z tych założeń można dostosować, dodając odpowiedni klucz w sekcji extra w pliku composer.json. Przykładowo, aby powiedzieć Flexowi, by kopiował klasy PHP do src/App zamiast src:
```json
{
    "...": "...",

    "extra": {
        "src-dir": "src/App"
    }
}
```

## Rozwiązywanie problemów

Jeśli napotkasz problemy po usunięciu przepisów, spróbuj wykonać poniższe kroki:

- Uruchom `composer install`, aby odświeżyć zależności.
- Sprawdź, czy nie brakuje plików konfiguracyjnych lub zmiennych środowiskowych.
- Przejrzyj dokumentację Symfony, aby sprawdzić, czy po usunięciu przepisu wymagane są dodatkowe ręczne kroki.

## Dodatkowe zasoby

- [Dokumentacja przepisów Symfony](https://symfony.com/doc/current/setup/flex.html)
- [Sekcja Extra w Composer](https://getcomposer.org/doc/04-schema.md#extra)
