---
layout: post
title: "Alternatywne IDE dla PHP? Apache Netbeans, ale nie tylko!"
date: 2025-10-08
tags: php ide netbeans
description: "Dlaczego nie PHPStorm? Dlaczego nie VIM albo Visual Studio Code? Od pewnego czasu szukałem narzędzia dla siebie, które byłoby na tyle nieprzeładowane bajerami a jednocześnie wystarczająco użyteczny i poteżne by ułatwiać codzienną pracę. "
thumbnail: https://netbeans.apache.org/_/images/apache-netbeans.svg
giscus_comments: true
toc:
  sidebar: left
---

Ten post będzie trochę dłuższy, ponieważ chcę przedstawić bolączki i ścieżkę, jaką to IDE przeszło
od starego oprogramowania do jego nowszej wersji. Chcę również skupić się na wadach oraz w pewnym sensie przedstawić,
jak wygląda obecna praca w Apache NetBeans. Kiedy się na niego natknąłem? Dlaczego zacząłem go używać dopiero niedawno
i dlaczego wygląda na to, że to IDE wraca do łask! Postaram się też przedstawić sposób konfiguracji IDE i pierwsze wrażenia.

## PHPStorm

To nie tak, że PHPStorm jest zły. Jest bardzo dobry! Można też powiedzieć, że nawet za bardzo.
To, co lubię w oprogramowaniu, to poczucie, że mam kontrolę nad tym, co robię.
Niestety w przypadku produktów JetBrains, tego mi brakuje.
Zawsze lubiłem patrzeć, co jest pod spodem narzędzi, zabawek, które używałem jako dziecko, i chyba tak mi już zostało.

W związku z tym postanowiłem bardziej wgłębić się w problematykę samego IDE.
Jednakże zamknięty kod źródłowy nie bardzo zachęca do pisania wtyczek.
Trzeba się naprawdę wczytać w dokumentację .
Mieć wiedzę z zakresu takich języków programowania jak Kotlin czy Gradle .
To już jest dosyć spory punkt wejścia dla programistów, którzy nie mieli zbytnio styczności z Javą.

Z perspektywy użytkownika jest to bardzo dobre narzędzie dla osób, które zaczynają swoją przygodę programistyczną z PHP.
Ma w sobie bardzo dużo ułatwiającej automagii, przez co można odnieść wrażenie, że programowanie w nim jest bardzo ułatwione.
Niestety nie jest okupione pewną ceną w postaci zasobów komputera. Wiadomo jednak, że to również kwestia tego, jak dużo "ułatwień"
podczas naszej pracy potrzebujemy. W sumie jest bardzo ciekawy model biznesowy, w którym uzależniamy użytkownika od naszego produktu. Brzmi znajomo prawda?

Im więcej, im łatwiej nam idzie, tym częściej jesteśmy skłonni by tego narzędzia używać nawet za sporo wyższą cenę.
W tym przypadku na szczęście zawsze można użyć notatnika i męczyć się z miejscem, w którym nie postawiło się średnika.
Aż roni się łza... Tymczasem ludzie generują już całe aplikacje używając nowoczesnych narzędzi AI.

Kto wie może IDE też powinno do czegoś podobnego służyć.
Najważniejsze jednak przed nami.
Dlaczego PHPStorm może nie być najlepszym dostępnym IDE i co za tym idzie może warto skupić się na alternatywnych opcjach.
Chciałbym w tym poście przyjrzeć się alternatywie w postaci Apache Netbeans .

Na co dzień narzędzia programistyczne potrafią być trochę przytłaczające. PhpStorm instaluje automatycznie sporo zasobożernych wtyczek, takich jak:

- [Github Copilot](https://plugins.jetbrains.com/plugin/17718-github-copilot) - wtyczka pozwalająca używać w wygodny sposób GitHub Copilota. Jest całkiem przydatna, ale jej zasobożerność z pewnymi konfiguracjami może być problematyczna. A każdy ma ograniczone zasoby, zwłaszcza jeśli programuje na laptopie. Moim zdaniem znacznie lepiej spisuje się w ograniczonym kontekście, kiedy używam jej z poziomu przeglądarki internetowej lub po prostu używam czata. Przydaje się jednak w trybie **Agenta** w celu generacji kodu. Zazwyczaj pytam go o bardzo głupie rzeczy, albo kiedy nie jestem pewny czy moje podejście ma sens. No, bo na pewno już kiedyś tego próbował, prawda? Z rzeczy, które wyłączyłem z tej wtyczki, to tutaj należy nadmienić auto complete, potrafi nieźle zjeść pamięć mojego laptopa i nie jest wcale tak bardzo przydatna. Można wręcz powiedzieć, że "Autocomplete" robi z ciebie debila, ale to raczej temat na inny post.

- [Jetbrains Assistant](https://plugins.jetbrains.com/plugin/22282-jetbrains-ai-assistant) - Nic tak nie pomaga w programowaniu, niż kolejny asystent AI! W dodatku płatny i to od JetBrains. Jest on w pewnym sensie znacznie lepszy w debugowaniu i podpowiadaniu niż jego konkurent Copilot. Nic dziwnego, w końcu to pewna sfera do zagospodarowania. Oczywiście, dopóty jeszcze są inne produkty lub serwisy, które udostępniają podobne usługi. Wiadomo jednakże, że trzeba się nad tym pochylić. Jest równie zasobożerna co jego konkurent. Oferuje przyjemny i bardziej czytelny interfejs i śmiało mogę powiedzieć, że pomogło mi rozwiązać kilka problemów podczas codziennego kodowania.

- [Zarządzanie bazami](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) - Ten eksplorator jest naprawdę wygodny. Można manipulować widokiem tabel, w szybki sposób dostosować widok, filtry oraz wybrać dogodny sterownik do swojej bazy danych. Bardzo ładnie podsumowuje dane i szybko mogę przejrzeć co tam mam w środku. Z całym sercem mogę polecić, jeżeli zależy nam na szybkim przeglądzie bazy danych. Jednakże i ten klient może zawieść. W moim przypadku był to sterownik do bazy danych przy korzystaniu dostępu do bazy danych AWS MySQL. Nie mogłem skasować rekordu ani podejrzeć wykonanych zmian. Tunneling jest możliwy, ale trzeba dobrze go skonfigurować. Tak czy siak, solidne 7/10! No, ale nic nie odda magii pisania zapytań w terminalu.

- [Docker](https://plugins.jetbrains.com/plugin/7724-docker) - Nie pamiętam, kiedy ostatnio go użyłem, ponieważ większość rzeczy robię w konsoli.

- [FTP](https://plugins.jetbrains.com/plugin/13125-ftp-sftp-webdav-connectivity) - Najczęściej odpalam ten plugin tylko po to, żeby zalogować się na serwer. Wiem, że powinno się tutaj użyć terminala. I chyba szybko się na terminal przerzucę. Warto wspomnieć o funkcji synchronizacji za pomocą **rsync**, to naprawdę nie raz uratowało mi skórę, gdy musiałem wrzucić szybko zmiany albo poprawić buga na produkcji po niezbyt dobrze przetestowanym deploymencie.

- [Symfony](https://plugins.jetbrains.com/plugin/7219-symfony-plugin) - sporo przydatnych funkcji, to jest akurat plugin, który polecam. Zwłaszcza początkującym i uczącym się frameworka [Symfony](https://symfony.com/).

Podsumowując, wtyczki są niezbędne, jeżeli chcemy być produktywni, mimo to więcej wiedzy zyskamy, nie używając tych wtyczek jako deweloperzy. Rozwiązując problemy integracyjne i obcując bezpośrednio z oprogramowaniem jesteśmy w stanie znacznie lepiej zrozumieć "co autor miał na myśli". Szkoda, jednak, że dopiero niedawno to odkryłem. Lepiej późno niż wcale!

Zanim odpaliłem projekt, to pięć razy zdążyłem wyłączyć niepotrzebne dodatki i zrestartować laptopa.
Dodatkowo musiałem skonfigurować podwójną ilość pamięci na partycji Swap, by móc w ogóle odpalić
udostępnianie ekranu. Musiałem odpowiednio skonfiugorwać cały projekt, zignorować odpowiednie foldery, tylko
po to, żeby zmniejszyć liczbę zajmowanej pamięci. To naprawdę niepokojące zwłaszcza pracując z większymi projektami.
Opóźniało i dokuczało mi to w codziennej pracy. Można by się sugerować tym, że większość osób pracuje w PHP używając
Mac-a, który jest w stanie wyciągnąć takie obciążenie bez większych problemów. Zastanawiam się,
czy to aby w porządku zwłaszcza, że dopiero niedawno zacząłem mierzyć jak dużo prądu mój
laptop jest w stanie zużyć pracując na pełnych obrotach. Skończyło się na tym, że po wyłączeniu
większości nieużywanych pluginów i pominięciu generowanych przez aplikacje plików projektowych wreszcie byłem w stanie normalnie
pracować. Najprawdopodobniej trzeba równie mocno optymalizować nie tylko kod, który jest przez
nas napisany, ale i narzędzia, które używamy muszą być odpowiednio do tego celu skonfigurowane.
Jest to trochę kuszące, aby zostawić rzeczy takimi jakie je zastaliśmy.

Pomijąc problemy z zasobami, drugim istotnym czynnikiem jest, to, że nawet jeżeli mamy możliwości
podejrzenia działających procesów, to PHPStorm wiele rzeczy robi za nas automatycznie.

- Wybór wersji PHP-a z pliku `composer.json`,
- Instalowanie zależności.
- Naprawianie za nas błędów konfiguracyjnych.
- Autoimportowanie zależności
- Listy zadań
- Debugowanie
- Generacja kodu (z pluginami AI)

## Apache Netbeans

Na początek warto jest wspomniec o historii apache netbeans:

- **1996** – Na Uniwersytecie Karola w Pradze grupa studentów rozpoczyna projekt Xelfi, będący jednym z pierwszych środowisk programistycznych dla Javy napisanych w tym języku.
- **1997-1998** – Projekt Xelfi zostaje rozwinięty, a jego nazwa zmienia się na NetBeans.
- **1999** – Firma Sun Microsystems kupuje NetBeans od twórców z Pragi i rozpoczyna oficjalny rozwój oraz udostępnia go jako otwarte oprogramowanie.
- **2000-2010** – NetBeans dynamicznie się rozwija, zyskuje wsparcie dla kolejnych wersji Javy i innych technologii. Staje się jednym z najpopularniejszych IDE dla programistów Java.
- **2010** – Oracle przejmuje Sun Microsystems i tym samym staje się właścicielem projektu NetBeans.
- **2016** – Oracle decyduje się przekazać NetBeans do Apache Software Foundation, rozpoczynając proces inkubacji projektu.
- **2018** – NetBeans oficjalnie staje się projektem Apache i otrzymuje nazwę Apache NetBeans. Wychodzi pierwsza wersja pod szyldem Apache – Apache NetBeans 9.0.
- **2018-obecnie** – Apache NetBeans jest aktywnie rozwijany przez społeczność open source. Regularnie pojawiają się nowe wersje, które wspierają najnowsze technologie i języki programowania.

{% include figure.liquid path="assets/img/posts/netbeans/netbeans_ide.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

### Konfiguracja i instalacja

Konfiguracja NetBeans jest stosunkowo prosta, choć wymaga kilku kroków:
NetBeans można pobrać bezpośrednio ze strony Apache. Instalator jest dostępny na wszystkie popularne systemy operacyjne

#### Wtyczki

Po instalacji warto przejrzeć dostępne wtyczki. NetBeans domyślnie obsługuje PHP, ale można doinstalować wsparcie dla innych języków.
Przede wszystkim polecam włączyć domyślną wtyczkę dla PHP.

{% include figure.liquid path="assets/img/posts/netbeans/netbeans_php_plugin.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

Dodatkowo polecam doinstalować tą wtyczkę poprzez github: [netbeans-php-enhancements](https://github.com/junichi11/netbeans-php-enhancements/releases)
lub poprzez portal z pluginami [link do wtyczki](https://plugins.netbeans.apache.org/catalogue/?id=29)

Aby zainstalować wtyczkę wystarczy ją ściągnąć i rozpakować następnie wrzucić przez Tools -> Plugins -> Downloaded i wybrać plik w formacie \*.nbm

{% include figure.liquid path="assets/img/posts/netbeans/plugin_instruction.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

Po zainstalowaniu powinno to wyglądać następująco:

{% include figure.liquid path="assets/img/posts/netbeans/php-enhancments.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

### Konfiguracja PHP

W ustawieniach należy wskazać ścieżkę do interpretera PHP oraz skonfigurować narzędzia takie jak Composer, PHPUnit czy PHP_CodeSniffer

### Integracja z Git

NetBeans posiada wbudowaną obsługę GIT, co pozwala na wygodną pracę z repozytoriami bezpośrednio z poziomu IDE

### Personalizacja

Możliwość dostosowania motywów, skrótów klawiszowych i układu okien.

### Zalety

- **Lekkość** – NetBeans jest zauważalnie mniej zasobożerny niż PHPStorm. Działa płynnie nawet na starszych komputerach.
- **Open Source** – Całkowicie darmowy, bez ograniczeń licencyjnych.
- **Wsparcie dla wielu języków** – Oprócz PHP, świetnie radzi sobie z Javą, JavaScriptem, HTML, C/C++.
- **Wbudowane narzędzia** – Debugger, profiler, integracja z GIT, wsparcie dla frameworków (np. Symfony, Laravel).
- **Stabilność** – Rzadko się zawiesza, a aktualizacje są regularne.
- **Prosta konfiguracja** – Szybko można zacząć pracę bez konieczności instalowania dziesiątek rozszerzeń.

### Wady Apache NetBeans

- **Autocomplete** – Działa dobrze, ale wymaga stosowania PHPDoc. W PHPStormie podpowiedzi są bardziej zaawansowane i nie wymagają tak szczegółowej dokumentacji.
- **Mniej wtyczek** – Społeczność NetBeans jest mniejsza niż np. VSCode, przez co liczba dostępnych rozszerzeń jest ograniczona.
- **Wygląd** – Interfejs użytkownika jest nieco przestarzały w porównaniu do konkurencji.
- **Brak natywnej integracji z Dockerem** – Trzeba ręcznie konfigurować środowisko, co może być uciążliwe przy pracy z kontenerami.
- **Statyczna analiza kodu** – Działa, ale nie jest tak rozbudowana jak w PHPStormie.
- **Mniej materiałów edukacyjnych** – Trudniej znaleźć aktualne tutoriale i wsparcie społeczności.

### Przykładowe zastosowania

NetBeans sprawdzi się świetnie w małych i średnich projektach PHP, gdzie nie potrzebujemy zaawansowanych narzędzi do refaktoryzacji czy integracji z chmurą. Jest idealny dla osób, które cenią prostotę i stabilność, a jednocześnie chcą mieć dostęp do podstawowych funkcji IDE.

## Porównanie NetBeans z innymi IDE

| Funkcja / IDE         | NetBeans      | PHPStorm     | Visual Studio Code | Sublime Text    |
| --------------------- | ------------- | ------------ | ------------------ | --------------- |
| Cena                  | Darmowy (OSS) | Płatny       | Darmowy            | Płatny          |
| Wydajność             | Lekki         | Zasobożerny  | Lekki              | Bardzo lekki    |
| Wsparcie PHP          | Bardzo dobre  | Doskonałe    | Dobre (wtyczki)    | Dobre (wtyczki) |
| Debugger              | Tak           | Tak          | Tak (wtyczki)      | Nie             |
| Refaktoryzacja        | Podstawowa    | Zaawansowana | Podstawowa         | Ograniczona     |
| Integracja z GIT      | Tak           | Tak          | Tak                | Tak             |
| Docker                | Ręczna        | Wbudowana    | Wtyczki            | Brak            |
| Wtyczki               | Mało          | Średnio      | Bardzo dużo        | Dużo            |
| Personalizacja        | Średnia       | Bardzo duża  | Bardzo duża        | Duża            |
| Wsparcie społeczności | Średnie       | Bardzo duże  | Bardzo duże        | Duże            |
| Aktualizacje          | Regularne     | Regularne    | Bardzo częste      | Rzadziej        |

## FAQ – Najczęściej zadawane pytania

**Czy NetBeans nadaje się do dużych projektów?**

Nadaje się, choć w bardzo dużych projektach może być mniej wydajny niż PHPStorm. Jednak dla większości zastosowań jest wystarczający.

**Czy NetBeans obsługuje frameworki PHP?**

Tak, obsługuje popularne frameworki jak Symfony, Laravel, Zend. Wymaga to jednak czasem ręcznej konfiguracji.

**Jak wygląda wsparcie dla testów jednostkowych?**

NetBeans pozwala na integrację z PHPUnit, można uruchamiać testy bezpośrednio z IDE.

**Czy można korzystać z NetBeans na Linuksie/Macu/Windowsie?**

Tak, NetBeans jest multiplatformowy.

**Czy NetBeans obsługuje nowoczesne standardy PHP?**

Tak, obsługuje PHP 8.x, typowanie, a także narzędzia do statycznej analizy kodu.

**Jak wygląda wsparcie dla JavaScript i frontendu?**

NetBeans obsługuje JavaScript, HTML, CSS, a także frameworki frontendowe, choć nie tak dobrze jak VSCode.

## Wskazówki i triki

- Warto korzystać z funkcji "Live Templates" do szybkiego wstawiania powtarzalnych fragmentów kodu.
- Można skonfigurować własne skróty klawiszowe, co znacznie przyspiesza pracę.
- NetBeans pozwala na szybkie przełączanie się między plikami i klasami (Ctrl+O, Ctrl+Shift+O).
- Warto regularnie aktualizować IDE i wtyczki – poprawia to stabilność i bezpieczeństwo.
- Jeśli pracujesz z Dockerem to raczej będziesz potrzebował ręcznej konfiguracji środowiska.

## Moje doświadczenia i rekomendacje

Po kilku miesiącach pracy z NetBeans mogę powiedzieć, że to narzędzie, które pozwala skupić się na kodzie.
Nie rozprasza nadmiarem opcji, a jednocześnie daje wszystko, co potrzebne do codziennej pracy.
Jeśli szukasz alternatywy dla ciężkich, płatnych IDE – warto spróbować NetBeans.
Szczególnie polecam go osobom, które cenią prostotę, stabilność i open source.

Masz pytania lub własne doświadczenia z NetBeans? Podziel się w komentarzu!
