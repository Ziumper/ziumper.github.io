---
layout: post
title: Jak zacząć z GIT-em?
date: 2022-07-17 16:40:16
tags: git gitExtensions
categories: tutorials
---


Zastanawiałem się, co oznacza GIT. Oto co znalazłem:

> GIT to słowo będące skrótem od angielskiego słowa "get", które zostało skrócone z "begetting".
> Jest również niejawne odniesienie do nieślubnych potomków, 
> a termin jest mniej więcej synonimem głupca, durnia, kretyna lub idioty. W społeczności open source znaczenie wyboru nazwy różni się.

Oznacza to, że GIT jest dla idiotów, którzy nie wiedzą, co robią. Doskonałe narzędzie dla programisty. Zacznijmy od początku.

Linus Torvalds zdecydował się na jego rozwój dla jądra Linuxa. Od 2005 roku pomaga programistom śledzić zmiany w kodzie. Dostępny we wszystkich systemach operacyjnych i używany przez użytkowników na całym świecie. Łatwo z nim zacząć, ale trudniej być w nim eksperte. Jest to system kontroli wersji. Możesz go pobrać ze [tej strony](https://git-scm.com/downloads) i wypróbować samodzielnie.

# Podstawy

Pobierz i zainstaluj [gita](https://git-scm.com/downloads) na swoim systemie operacyjnym.
Aby kontynuować, musisz otworzyć terminal.
Po instalacji powinieneś być w stanie wykonać kilka poleceń gita.
Utwórz nowy folder. Następnie otwórz terminal w nowym folderze.
Utwórzmy repozytorium. Aby to osiągnąć, użyj poniższego polecenia.

```bash
git init
```

# Narzędzia

Istnieje kilka narzędzi GUI (ang. Graphic User Interface), które mogą pomóc Ci w rozpoczęciu pracy z Gitem.
Jeśli nie jesteś fanem terminala, polecam [GitExtensions](https://gitextensions.github.io/)

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitextension.png" alt="git extensions editor window" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

Alternatywnie możesz użyć [SourceTree](https://www.sourcetreeapp.com/) jest on darmową alternatywą dla systemu Mac. Myślę, że jeśli używasz Linuxa, to równie dobrze możesz również korzystać z terminala.

![SourceTree!](https://wac-cdn.atlassian.com/dam/jcr:580c367b-c240-453d-aa18-c7ced44324f9/hero-mac-screenshot.png?cdnVersion=651)

# Commit 
Dobrze, jak dotąd! Teraz zróbmy kilka commitów. Stwórz plik HTML o następującej zawartości.

```html
<h1>Hello there</h1>
```

Teraz jesteś gotowy, do daleszej pracy z obszarem staging.
Co to jest obszar staging - wyjaśnijmy to jako pudełko, do którego wkładasz rzeczy, a następnie używasz go jako migawki, aby zatwierdzić zmiany.
Aby to zrobić, powinieneś określić ścieżkę do pliku w formacie pliku lub ścieżkę z jakimś wzorcem, np.

```bash
.txt .xml, etc.
```

Polecenie dodawania pliku hello.html w terminalu

```bash
git add hello.html
```

Możesz także dodać wszystkie pliki

```bash
git add *
```

Następnie, wpisując:

```
git status
```
 
Powinieneś zobaczyć wszystkie pliki, które zostały przez ciebie dodane do obszaru staging.

Następnie możesz zatwierdzić hello.html w swoim lokalnym repozytorium.
```bash
git commit -m "Add hello there file"
```

commit - to polecenie, które zapisuje migawkę "pudełka", które wcześniej dodaliśmy.

# Commits message standards

Chcę wyjaśnić kilka standardów dotyczących wiadomości commitów i jak często powinieneś to robić. Słyszałem, że im częściej to robisz, tym lepiej. Nie ma ograniczenia, później zawsze możesz zmniejszyć liczbę commitów, używając funkcji squash. Zacznijmy od formy wiadomości commita. Jak to powinno się robić:

- Użyj zdaniowych trybów w linii tematu, np. "Naprawia uszkodzony link do Javadoc"

- Rozpocznij zdanie linii tematu wielką literą, np. "Dodaje, Usuwa, Naprawia,  Wprowadza, Unikaj itp."

- Nie kończ linii tematu kropką

- Zachowaj linie tematu do 50 znaków lub mniej, jeśli to możliwe

- Zawijaj linie w treści na 72 znaki lub mniej

- Wzmień związane z nim numery Jira na końcu komentarza commita, poprzedzone „Issue:” jak powyżej

- W treści wiadomości commita wyjaśnij, jak działały rzeczy przed tym commitem, co się zmieniło i jak teraz działają rzeczy

Lubie także dodać jakiś rodzaj tagu przed wiadomością commita, oto kilka przykładów:


```bash
– Feature

– Bugfix

– Cleanup

– Hotfix
```

Kiedy pracujesz nad zadaniem, dobrze jest dodać pewną liczbę zadań, takich jak #123, które odnoszą się do niektórych. Podsumowując, powinno to wyglądać tak:

```bash
[FEATURE] #123 My super not quite long commit message. 


Here goes body messages where we describe what is going on.
Keep it short as much as you can, but include all necessary details 
inside.

Footer where summary and all other references should be applied for
example: 
Those commits resolve issue #123 and #124
```


Git branches – tree of changes
Commits can be added to branches. The branch is a set of commits that are separated from the main branch just like in a tree with leafs. To create a branch:

```bash
git branch <branch_name>
```

Aby zmienić gałąź

```
git checkout <branch_name> 
```

Po zainicjowaniu repozytorium gita zwykle masz jedną istniejącą główną gałąź, z której wszystkie utworzone później gałęzie mogą być pochodne. Używaj ich, aby grupować pewne zmiany w funkcji, nad którą pracujesz.

# Workflow

Polecam zapoznanie się z kilkoma pojęciami gita, takimi jak gałąź, rebase, merge i squash. Po tym możesz zacząć myśleć o tym, jak pracować i zarządzać swoją pracą jako programista. Jestem wielkim zwolennikiem normalizacji i standardów przepływów pracy. Znalazłem kilka metodologii, które są popularne obecnie podczas pracy z gitem.

- Gitflow
- Trunk

Wybierz pierwszy, jeśli nie masz w swoim zestawie narzędzi CI/CD. Drugi jest świetny przy pracy z zintegrowanymi narzędziami do przeglądu kodu.