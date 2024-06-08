---
layout: post
title: Jak rozwiązywać konfilkty przy pomocy GitExtensions?
date: 2022-08-06 16:40:16
tags: git gitExtensions
categories: tutorials
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


Zawiera plik hello.html z tym samym edytowanym wierszem, więc nie wie, który wiersz powinien być użyty, gdy [conflict](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts) wystąpi.

## Jak zmienić baze?

Aby [przebazować](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) z gałęzi develop na gałąź master, aby zatwierdzenie na gałęzi develop było "nad" zatwierdzeniami z gałęzi master i tak aby zawierał wszystkie zatwierdzenia z gałęzi master także. Jak to zrobić?
Przełącz się na gałąź develop. Kliknij prawym przyciskiem myszy na niej. Wybierz opcję przełączenia gałęzi, a następnie wybierz gałąź develop.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_3.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Kiedy jesteś na gałęzi develop, wybierz, dla którego zatwierdzenia chcesz zmienić bazę. W moim przypadku jest to zatwierdzenie z gałęzi master o wiadomości "Hope it will work".

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_4.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Po kliknięciu "yes", aby zmienić bazę, powinieneś zobaczyć komunikat o błędzie, ale nie martw się, nie ma w tym nic złego z git. To tylko informacja dla Ciebie, że musisz rozwiązać kilka konfliktów.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_5.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Następnie kliknij OK i kontynuuj. Następnie powinieneś zobaczyć podobne okno poniżej:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_6.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Wybierz rozwiązanie konfliktów, a następnie powinno pojawić się kolejne okno.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_7.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

To okno jest oknem rozwiązywania konfliktów scalania. Możesz rozwiązać konflikty scalania na dwa sposoby. Szybki i łatwy drugi sposób, dla którego używasz narzędzia do porównywania różnic, jak [kdiff3](https://github.com/KDE/kdiff3).

## Szybki i łatwy sposób rozwiązania konfliktów scalania.

Możesz zastosować zmiany dla pliku hello.html, odrzucając swoje zmiany i korzystając z zmian z gałęzi master. Kliknij prawym przyciskiem myszy na pliku hello.html i wybierz (theirs), jak na obrazie poniżej:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_8.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Jeśli chcesz nadpisać zmiany, zawsze możesz użyć opcji (ours). Następnie kliknij kontynuuj przebazowanie w głównym oknie przebazowania.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_9.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

W przypadku większej liczby plików lub konfliktów, będziesz musiał je rozwiązać później. Pamiętaj, że praca z większymi plikami lub zmianami może zająć trochę czasu.

## Praca z narzędziem do porównywania różnic

Tutaj zmodyfikowałem trochę historię repozytorium, więc możemy z tym pracować

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_10.jpg" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Przebazuj ponownie i rozwijaj na gałąź master.

1. Przełącz się na gałąź develop

2. Wybierz pierwszy commit z gałęzi master z wiadomością "Some other changes" i kliknij prawym przyciskiem myszy na nim

3. Przebazuj bieżącą gałąź na -> wybrany commit.

Następnie zaczyna się magia. Pomijam kroki do okna konfliktów scalania, które są takie same jak powyżej. Wybierz otwórz je w kdiff3 lub innym narzędziu do scalania/porównywania.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_11.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Powinieneś zobaczyć okno podobne do poniższego:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_12.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Następnie występują trzy katalogi scalania:

- ("A" jest traktowane jako starsza baza obu).

- B - jest (ich) wersją gałęzi master

- C - jest (nasze) w tym przypadku wersją gałęzi develop

Poniżej znajduje się okno wyjścia, które zawiera wynik scalania.

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_13.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Możesz wybrać wersję pliku, którą chcesz zostawić i połączyć je. Możesz zobaczyć, że wybrałem jedną linię z C, jedną linię z A i jedną linię z B. Następnie zapisałem plik i kontynuowałem przebazowanie po rozwiązaniu konfliktów. To proste, ale czasami sytuacja może się skomplikować, więc uważaj.

Poniżej widoczny jest wynik zmiany bazy:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/gitExtensions_14.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Stworzy to rozszerzenia plików .orig, więc zawsze możesz zobaczyć historię swoich zmian.

Lepiej nie commitować tych plików do repozytorium.

To wszystko! Mam nadzieję, że artykuł pomoże Ci w rozwiązywaniu konfliktów!
