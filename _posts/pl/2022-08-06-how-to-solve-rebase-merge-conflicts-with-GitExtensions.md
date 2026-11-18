---
layout: post
title: Jak rozwiązywać konflikty przy pomocy GitExtensions?
date: 2022-08-06 16:40:16
tags: git
categories: tutorials
description: Rozwiązywanie konfliktów przy rebase i merge.
giscus_comments: true
---

Czy kiedykolwiek zastanawiałeś się, jak łatwo połączyć swoje zmiany bez niszczenia całego projektu? Oto szybki i prosty przewodnik. Zaczynamy!
Po pierwsze, powinieneś zainstalować i skonfigurować [GitExtensions](https://git-extensions-documentation.readthedocs.io/). Następnie otwórz swoje repozytorium. W moim przypadku zawiera ono dwie gałęzie: master i develop. Sprawdź obraz poniżej, aby to zobaczyć.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/posts/gitExtensions_1.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/posts/gitExtensions_2.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
    </div>
</div>

Zawiera plik hello.html, w którym na obu gałęziach edytowano ten sam wiersz, więc git nie wie, który wiersz powinien zostać użyty, gdy wystąpi [konflikt](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts).

## Jak zrobić rebase?

Zróbmy [rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) gałęzi develop na gałąź master, tak aby nasz commit z gałęzi develop znalazł się "nad" commitami z gałęzi master i "powinien" zawierać również wszystkie commity z gałęzi master. Jak to zrobić?
Przełącz się na gałąź develop. Kliknij na niej prawym przyciskiem myszy. Wybierz opcję przełączenia gałęzi, a następnie wybierz gałąź develop.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_3.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Kiedy jesteś na gałęzi develop, wybierz commit, na który chcesz przebazować gałąź. W moim przypadku jest to commit z gałęzi master z wiadomością "Hope it will work".

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_4.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Po kliknięciu "yes", aby zmienić bazę, powinieneś zobaczyć komunikat o błędzie, ale nie martw się, z gitem wszystko jest w porządku. To tylko informacja dla Ciebie, że musisz rozwiązać kilka konfliktów.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_5.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Kliknij OK i kontynuuj. Następnie powinieneś zobaczyć okno podobne do poniższego:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_6.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Wybierz rozwiązanie konfliktów, a następnie powinno pojawić się kolejne okno.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_7.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

To okno jest oknem rozwiązywania konfliktów scalania. Możesz rozwiązać konflikty scalania na dwa sposoby. Szybki i łatwy oraz drugi, w którym używasz narzędzia do porównywania różnic, takiego jak [kdiff3](https://github.com/KDE/kdiff3).

## Szybki i łatwy sposób rozwiązania konfliktów scalania

Możesz zastosować zmiany dla pliku hello.html, odrzucając swoje zmiany i korzystając ze zmian z gałęzi master. Kliknij prawym przyciskiem myszy na pliku hello.html i wybierz (theirs), jak na obrazie poniżej:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_8.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Jeśli chcesz nadpisać zmiany, zawsze możesz użyć opcji (ours). Następnie kliknij kontynuuj przebazowanie w głównym oknie przebazowania.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_9.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

W przypadku większej liczby plików lub konfliktów, będziesz musiał je rozwiązać później. Pamiętaj, że praca z większymi plikami lub zmianami może zająć trochę czasu.

## Praca z narzędziem do porównywania różnic

Tutaj zmodyfikowałem trochę historię repozytorium, żebyśmy mieli z czym pracować.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_10.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Przebazuj ponownie gałąź develop na gałąź master.

1. Przełącz się na gałąź develop

2. Wybierz pierwszy commit z gałęzi master z wiadomością "Some other changes" i kliknij na nim prawym przyciskiem myszy

3. Przebazuj bieżącą gałąź na -> wybrany commit.

Następnie zaczyna się magia. Pomijam kroki do okna konfliktów scalania, które są takie same jak powyżej. Wybierz otwarcie ich w kdiff3 lub innym narzędziu do scalania/porównywania.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_11.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Powinieneś zobaczyć okno podobne do poniższego:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_12.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Scalanie trzech wersji:

- A – wersja bazowa ("A" jest traktowane jako starsza baza obu).

- B – wersja (theirs), czyli z gałęzi master

- C – wersja (ours), w tym przypadku z gałęzi develop

Poniżej znajduje się okno wyjścia, które zawiera wynik scalania.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_13.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Możesz wybrać, które wersje linii chcesz zostawić, i połączyć je. Możesz zobaczyć, że wybrałem jedną linię z C, jedną linię z A i jedną linię z B. Następnie zapisałem plik i kontynuowałem przebazowanie po rozwiązaniu konfliktów. To proste, ale czasami sytuacja może się skomplikować, więc uważaj.

Poniżej widoczny jest wynik zmiany bazy:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_14.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Zostaną utworzone pliki z rozszerzeniem .orig, więc zawsze możesz zobaczyć historię swoich zmian.

Lepiej nie commitować tych plików do repozytorium.

To wszystko! Mam nadzieję, że artykuł pomoże Ci w rozwiązywaniu konfliktów!
