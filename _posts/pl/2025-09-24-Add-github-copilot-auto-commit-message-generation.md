---
layout: post
title: "Jak zintegrować GitHub Copilot do automatycznego generowania wiadomości commitów?"
date: 2025-09-24
tags: git github productivity copilot
description: "Ten post wyjaśnia, jak używać GitHub Copilot do automatycznego generowania wiadomości commitów, zwiększając produktywność i zapewniając przejrzystą historię zmian."
thumbnail: assets/img/posts/copilot.png
giscus_comments: true
---

Najważniejszą częścią pracy w zespole jest komunikacja. Jednym z najważniejszych sposobów komunikacji z zespołem są wiadomości commitów.
Dobra wiadomość commita powinna być jasna, zwięzła i informatywna. Powinna opisywać, jakie zmiany zostały wprowadzone i dlaczego.
Jednak pisanie dobrych wiadomości commitów może być czasochłonne i nużące.
Tu z pomocą przychodzi GitHub Copilot. GitHub Copilot to narzędzie wspierane przez AI, które pomaga pisać kod szybciej i efektywniej.
Ale czy wiesz, że GitHub Copilot może także pomóc w pisaniu lepszych wiadomości commitów? W tym wpisie pokażemy,
jak używać GitHub Copilot do automatycznego generowania wiadomości commitów.

## Krok 1: Dodaj szablon GitHub Copilot do swojego repozytorium

Aby rozpocząć, musisz dodać szablon GitHub Copilot do swojego repozytorium. Ten szablon zapewni GitHub Copilot odpowiedni kontekst do generowania wiadomości commitów.
Możesz utworzyć nowy plik w repozytorium o nazwie `.github/git-commit-instructions.md` i dodać następującą zawartość:

```
# Git Commit Instructions

When making a commit, please follow these guidelines to ensure clarity and consistency in our commit history.
Provide description in the commit message.
* Describe the changes made in the commit and intended impact on the codebase in new lines.
* Make sure to include:
    * What was changed (e.g., added feature, fixed bug, updated documentation).
    * Why the change was necessary (e.g., to improve performance, fix an issue, enhance user experience).
    * Any relevant details that help understand the context of the change.
* Elaborate on the reasoning behind the changes and any relevant context that may help reviewers understand the
commit better.
```

Ten szablon zawiera wytyczne dotyczące pisania dobrych wiadomości commitów i pomoże GitHub Copilot generować lepsze wiadomości.

## Krok 2: Użyj GitHub Copilot do generowania wiadomości commitów

Po dodaniu szablonu do repozytorium możesz zacząć używać GitHub Copilot do generowania wiadomości commitów.
Gdy będziesz gotowy do wykonania commita, możesz użyć jednego z poniższych edytorów IDE wspierających GitHub Copilot:

- Visual Studio Code
- IDE JetBrains (np. IntelliJ IDEA, PyCharm, WebStorm)
- Neovim
  Po otwarciu edytora wiadomości commita GitHub Copilot automatycznie zaproponuje wiadomość commita na podstawie wprowadzonych zmian oraz wytycznych ze wskazanego szablonu.
  GitHub Copilot automatycznie zasugeruje wiadomość commita na podstawie wprowadzonych zmian oraz wytycznych ze wskazanego szablonu.

## Podsumowanie

Korzystanie z GitHub Copilot do automatycznego generowania wiadomości commitów może pomóc pisać lepsze wiadomości i zwiększyć produktywność.
Dodając szablon GitHub Copilot do repozytorium i korzystając z jednego z obsługiwanych edytorów IDE
wspierających GitHub Copilot, możesz łatwo generować przejrzyste i informatywne wiadomości commitów.
Spróbuj i zobacz, jak może to usprawnić Twój workflow!
Ja już korzystam i bardzo polecam! 😊
