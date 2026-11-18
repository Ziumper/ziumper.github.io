---
layout: post
title: Jak zacząć z GIT-em?
date: 2022-07-17 16:40:16
tags: git
categories: tutorials
description: Jak zacząć pracę z GIT-em. Podstawowy przewodnik po tym, czym jest git i jak używać go do kontroli wersji.
giscus_comments: true
---

Zastanawiałem się, co oznacza GIT. Oto co znalazłem:

> Słowo GIT jest przekształceniem angielskiego słowa "get", które zostało skrócone z "begetting".
> Ukryte odniesienie dotyczy nieślubnego potomstwa,
> a termin jest mniej więcej synonimem głupca, durnia, kretyna lub idioty. W społeczności open source znaczenie wyboru nazwy różni się.

Oznacza to, że GIT jest dla idiotów, którzy nie wiedzą, co robią. Doskonałe narzędzie dla programisty. Zacznijmy od początku.

Linus Torvalds stworzył go na potrzeby rozwoju jądra Linuxa. Od 2005 roku pomaga programistom śledzić zmiany w kodzie. Jest dostępny na wszystkich systemach operacyjnych i używany na całym świecie. To system kontroli wersji, z którym łatwo zacząć, ale trudno zostać w nim ekspertem. Możesz go pobrać ze [tej strony](https://git-scm.com/downloads) i wypróbować samodzielnie.

# Podstawy

Pobierz i zainstaluj [gita](https://git-scm.com/downloads) na swoim systemie operacyjnym.
Aby kontynuować, musisz znać podstawy pracy w terminalu.
Po instalacji powinieneś być w stanie wykonać kilka poleceń gita.
Utwórz nowy folder. Następnie otwórz terminal w nowym folderze.
Utwórzmy repozytorium. Aby to osiągnąć, użyj poniższego polecenia.

```bash
git init
```

# Narzędzia

Istnieje kilka narzędzi GUI (ang. Graphical User Interface), które mogą pomóc Ci w rozpoczęciu pracy z Gitem.
Jeśli nie jesteś fanem terminala, polecam [GitExtensions](https://gitextensions.github.io/)

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitextension.png" alt="okno edytora Git Extensions" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>

Alternatywnie możesz użyć [SourceTree](https://www.sourcetreeapp.com/), który jest darmową alternatywą dla systemu Mac. Myślę, że jeśli używasz Linuxa, równie dobrze możesz korzystać z terminala.

![SourceTree!](https://wac-cdn.atlassian.com/dam/jcr:580c367b-c240-453d-aa18-c7ced44324f9/hero-mac-screenshot.png?cdnVersion=651)

# Commit

Jak na razie wszystko idzie dobrze! Teraz zróbmy kilka commitów. Stwórz plik HTML o następującej zawartości.

```html
<h1>Hello there</h1>
```

Zapisz go jako hello.html. Teraz możesz dodać go do obszaru staging.
Co to jest obszar staging - wyjaśnijmy to jako pudełko, do którego wkładasz rzeczy, a następnie używasz go jako migawki, aby zatwierdzić zmiany.
Aby to zrobić, powinieneś określić ścieżkę do pliku wraz z rozszerzeniem lub ścieżkę z jakimś wzorcem, np.

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

Powinieneś zobaczyć wszystkie pliki, które zostały przez Ciebie dodane do obszaru staging.

Następnie możesz zatwierdzić hello.html w swoim lokalnym repozytorium.

```bash
git commit -m "Add hello there file"
```

commit - to polecenie, które zapisuje migawkę "pudełka", które wcześniej dodaliśmy.

# Standardy wiadomości commitów

Chcę wyjaśnić kilka standardów dotyczących wiadomości commitów i jak często powinieneś to robić. Słyszałem, że im częściej to robisz, tym lepiej. Nie ma ograniczeń – później zawsze możesz zmniejszyć liczbę commitów, używając funkcji squash. Zacznijmy od formy wiadomości commita. Jak powinna wyglądać:

- Używaj trybu rozkazującego w linii tematu, np. "Napraw uszkodzony link do Javadoc"

- Zaczynaj linię tematu od czasownika pisanego wielką literą, np. "Dodaj, Usuń, Napraw, Wprowadź, Unikaj itp."

- Nie kończ linii tematu kropką

- Ogranicz linię tematu do 50 znaków, jeśli to możliwe

- Zawijaj linie w treści po maksymalnie 72 znakach

- Wspomnij powiązane zgłoszenia Jira na końcu wiadomości commita, poprzedzone „Issue:”

- W treści wiadomości commita wyjaśnij, jak działały rzeczy przed tym commitem, co się zmieniło i jak działają teraz

- Lubię także dodawać tag określający typ zmiany przed wiadomością commita, oto kilka przykładów:

```bash
– Feature

– Bugfix

– Cleanup

– Hotfix
```

Kiedy pracujesz nad zadaniem, dobrze jest dodać numer zadania jako odniesienie, np. #123. Podsumowując, powinno to wyglądać tak:

```bash
[FEATURE] #123 My super not quite long commit message.


Here goes body messages where we describe what is going on.
Keep it short as much as you can, but include all necessary details
inside.

Footer where summary and all other references should be applied for
example:
Those commits resolve issue #123 and #124
```

# Gałęzie w gicie – drzewo zmian

Commity można dodawać do gałęzi. Gałąź to zbiór commitów oddzielonych od gałęzi głównej, tak jak w drzewie z liśćmi. Aby utworzyć gałąź:

```bash
git branch <branch_name>
```

Aby zmienić gałąź

```
git checkout <branch_name>
```

Po zainicjowaniu repozytorium gita zwykle masz jedną istniejącą główną gałąź, z której można tworzyć wszystkie kolejne gałęzie. Używaj ich, aby grupować zmiany dotyczące funkcjonalności, nad którą pracujesz.

# Workflow

Polecam zapoznanie się z kilkoma pojęciami gita, takimi jak gałąź, rebase, merge i squash. Po tym możesz zacząć myśleć o tym, jak pracować i zarządzać swoją pracą jako programista. Jestem wielkim zwolennikiem normalizacji i standardów przepływów pracy. Znalazłem kilka metodologii, które są obecnie popularne podczas pracy z gitem.

- Gitflow
- Trunk

Wybierz pierwszą, jeśli nie masz w swoim zestawie narzędzi CI/CD. Druga świetnie sprawdza się przy dobrym stosie technologicznym i zintegrowanych narzędziach do przeglądu kodu.
