---
layout: page
title: Board Heroes Battle
description: Gra w rozszerzonej rzeczywistości na platformę Android
img: assets/img/projects/BoardHeroesBattle_unreal_castle.jpg
importance: 2
category: game-dev
---

# Opis projektu

Celem niniejszej pracy była analiza i porównanie wybranych aspektów wytwarzania, funkcjonalności oraz działania aplikacji rzeczywistości rozszerzonej na platformę Android przy użyciu silników gier Unity i Unreal Engine oraz przeprowadzenie analizy porównawczej i badań grywalności gier hybrydowych w kontekście wzbogacenia tradycyjnej rozgrywki planszowej oraz poszerzenia
dla niej możliwości rozgrywki wieloosobowej.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/BoardHeroesBattle_unity.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid  path="assets/img/projects/BoardHeroesBattle_unreal.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/BoardHeroesBattle_unreal_castle.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

# Funkcjonalnośći i rozgrywka

Gra, na podstawie której stworzone zostały aplikacje, jest mieszanką turowej gry strategicznej
TBS z gatunkiem gry planszowej Dungeon-Crawler. Aplikacja w celu połączenia
rodzajów rozgrywki oraz rozszerzenia zakresu doświadczeń z gry wykorzystuje technologię AR. Za pomocą wymienionej technologii przenoszone są elementy gier komputerowych do świata rzeczywistego. Przy użyciu AR nakładane są na fizyczną planszę rozgrywki
modele postaci, wirtualna kość oraz pokój lochu wykorzystywane w rozgrywce. Technologia korzysta ze śledzenia obrazów w celu umieszczenia ich na rejestrowanym obrazie z kamery urządzenia i symulowanie umiejscowienia w dowolnym pomieszczeniu. Gra wykorzystuje interfejs AR dla obrazów rozszerzonych.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/board_heroes_battle_main_menu.png" title="main-menu" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
     <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid  path="assets/img/projects/bhb_solo.png" title="solo game menu" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/bhb_lan.png" title="lan game menu" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

Gra pozwala na tryb pojedynczego gracza lub tryb sieciowy typu LAN rozgrywki. Uczestnicy rozgrywki mają na celu przejście lochów przygotowanych w postaci plansz z
przeciwnikami z którymi walczą w rozgrywce turowej. Każdy z lochów zbudowany jest z kilku takich
plansz w postaci 4 pokoi. Postacie walczą wykonując jedną z 3 akcji w kolejności wyznaczanej
poprzez statystkę postaci. Gracz ma na celu pokonanie przeciwników na wszystkich planszach poprzez strategiczny dobór celów akcji bohaterów, a w rozgrywce wieloosobowej
również elementu współpracy. Element losowości wprowadzony jest w postaci bonusów rozlosowywanych za pomocą kości do gry lub funkcji losowej.
Gra zbudowana jest z charakterystycznych lochów składających się z tematycznych plansz
i niepowtarzalnych przeciwników. Dostępni dla gracza bohaterowie, także posiadają charakterystyczny element klas dla gier fabularnych. Elementy te urozmaicają rozgrywkę poprzez nieszablonowe otoczenie, barwne postacie,element strategicznego doboru ich ruchów, statystyk oraz
unikalnych umiejętności.
Dodatkową atrakcją jest rozszerzenie interfejsu użytkownika o przyciski AR. Na planszy wydrukowane są specjalne znaczniki, które po przykryciu ręką wywołują wykonanie danej akcji. Zastępują one przyciski wirtualne umieszczone na ekranie telefonu w interfejsie użytkownika.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/board.jpg" title="example board" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Przykładowa plansza do gry
</div>

Podsumowując zaimplementowano nastepujace funkcjonalności:

- tryb wielosobowy i pojedynczego gracza z rozgrywką turową w rozszerzonej rzeczywistości
- śledzenie obrazów
- rózne poziomy i postacie z unikatowymi zdolnościami
- zbalansowany poziom rozgrywki
- wirtualną kość
- przystępny interfejs użytkownika
- efekty specjalne i animacje podczas walki
- wirtualne przyciski w rozszerzonej rzeczywistości
- zapewniono optymalną rozgrywkę poprzez optymalizację rozgrywki

## Wyzwania

Podczas tworzenia projektu udało się pokonać szereg pułapek i wyzwań, które czekały na każdym kroku rozwoju aplikacji. Oto niektóre z nich.

- Zapewnienie spójności w wartwie wizualnej i rozgrywki w obu aplikacjach. Zarówno Unity i Unreal Engine udostępniają własną abstrakcje, jeżeli chodzi o tworzenie aplikacji AR. Mimo różnic udało się zapewnić podobną rozgrywkę i mechaniki.
- Implementacja lokalnej rozgrywki sieciowej z świecie AR. Synchronizacja w czasie rzeczywistym każdego z graczy, gdy każdy ma własne urządzenie i kamerę wymusiło stosowanie wielu kompromisów technologicznych zarówno po stronie Unity jak i Unreal Engine.
- Połączenie gry planszowej z mobilną aplikacją AR - aspekt hybrydowości wprowadzajacy do gry nowe mechaniki wymagał zmierzenia się nie tylko z aspektami cyfrowymi, ale z projektowaniem tradyjnych gier planszowych.

## Wykorzystane technologie

W ramach realizacji projektu udało mi się zapoznać z następującymi technologami i narzędziami

- Android Studio
- ARCore
- C++
- C#
- Unreal Engine,
- Unity
- Blender
- Photoshop
- Gimp
- Visual Studio
- Unreal Engine Bluepirnts
- Unity Editor Porfiler
- Eksport z Unity do Unreal Engine
- Narzędzia do profilowania w Android Studio
