---
page_id: steve-the-hamster
layout: page
title: Steve The Hamster
description: Jest to ciepła, pełna akcji gra wypełniona zabawnymi wyzwaniami i zachwycającym poczuciem humoru, a wszystko to ożywione dzięki silnikowi Unreal Engine.
img: assets/img/projects/steve_the_hamster_logo.png
importance: 1
category: game-dev
---

<div class="links">
   <a href="https://tylestarczy.itch.io/steve-the-hamster" class="btn btn-amber btn-sm z-depth-0" role="button">Sprawdź grę na Itch.io <i class="fa fa-gamepad"></i></a>
</div>

## Opis Projektu

Steve the Hamster to zręcznościowo-logiczna gra 3D, w której gracze wcielają się w chomika poruszającego się w przezroczystej kuli. Celem gry jest pokonanie serii poziomów pełnych zagadek, przeszkód i wrogów, aby wydostać się z domu. Gra łączy dynamiczną akcję z elementami logicznymi, oferując unikalne wyzwania w każdej lokacji.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/steve_the_hamster_1.png" title="example board" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Scena testowa, na której były testowane zaimplementowane mechaniki.
</div>

Projekt powstał jako część końcowego zadania w ramach kursu Unreal Engine Game Development i został zrealizowany w czteroosobowym zespole w stylu game jamu. Moje główne role w projekcie obejmowały:

- Implementację animacji postaci głównej (chomika).
- Tworzenie systemów zachowań przeciwników.
- Programowanie logiki gry z wykorzystaniem Blueprints w Unreal Engine.
- Zarządzanie projektem, koordynowanie prac zespołu i dbanie o realizację harmonogramu.

Steve the Hamster jest dostępny na platformie itch.io, gdzie każdy może spróbować swoich sił w tej pełnej przygód grze. Projekt był nie tylko okazją do zdobycia praktycznego doświadczenia w zakresie Unreal Engine, ale także do współpracy zespołowej i skutecznego zarządzania procesem tworzenia gry od pomysłu aż po ukończenie.

## Wykorzystane technologie i mechaniki

Podczas pracy nad projektem wykorzystałem różnorodne narzędzia i technologie dostępne w Unreal Engine, które pozwoliły mi stworzyć zaawansowane mechaniki oraz spójne środowisko gry. Oto kluczowe elementy, które zrealizowałem:

- **Drzewa zachowań**:
<div class="row justify-content-sm-center">
   <div class="col-sm-8 mt-3 mt-md-0">
      {% include figure.liquid path="assets/img/projects/steve_the_hamster_3.png" title="drzewa zachowań dla npc" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
</div>
<div class="caption">
Korzystając z systemu Behavior Trees, zaimplementowałem inteligencję przeciwników NPC. Dzięki temu wrogowie reagują na działania gracza w czasie rzeczywistym, np. śledzą go, omijają przeszkody lub patrolują określone obszary.
</div>

- **Podstawowe animacje sterowane inputem**:
<div class="row justify-content-sm-center justify-content-left">
   <div class="col-sm-8 mt-3 mt-md-0">
      {% include figure.liquid path="assets/img/projects/steve_the_hamster_animations.png" title="sterowanie anmiacją - obraz blueprintu" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
</div>
<div class="caption">
Zaimplementowałem animacje postaci poprzez animowanie transformacji (np. pozycji i obrotów) obiektów w połączeniu z wejściem użytkownika. Dzięki temu ruch chomika stał się płynny i responsywny, co znacznie poprawiło wrażenia z gry.
</div>

- **System dialogów**:
<div class="row justify-content-sm-center">
   <div class="col-sm-8 mt-3 mt-md-0">
      {% include figure.liquid path="assets/img/projects/steve_the_hamster_dialogue.png" title="dialog w grze" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
     <div class="col-sm-8 mt-3 mt-md-0">
      {% include figure.liquid path="assets/img/projects/steve_the_hamster_dialogue2.png" title="implementacja dialogu - blueprint" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
</div>
<div class="caption">
Stworzyłem mechanizm umożliwiający wyświetlanie dialogów chomika w grze. Ten element pozwala graczom lepiej zrozumieć fabułę i wchodzić w interakcje z otoczeniem w sposób zabawny i przystępny.
</div>

- **Tworzenie interfejsu użytkownika (UI)**:
<div class="row justify-content-sm-center">
   <div class="col-sm-8 mt-3 mt-md-0">
      {% include figure.liquid path="assets/img/projects/steve_the_hamster_menu.png" title="interfejs użytkownika-ustawienia graficzne" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
</div>
<div class="caption">
Wdrożyłem interfejs gry przy użyciu widgetów Unreal Engine. Zawiera on intuicyjne menu oraz system powiadomień. Dodatkowo opracowałem niestandardowy system ustawień graficznych, który umożliwia graczom dostosowanie jakości obrazu do ich preferencji.
</div>

- **Projektowanie i budowa poziomów**:
<div class="row justify-content-sm-center">
   <div class="col-sm-8 mt-3 mt-md-0">
      {% include figure.liquid path="assets/img/projects/steve_the_hamster_kitchen.png" title="poziom kuchni" class="img-fluid rounded z-depth-1" zoomable=true %}
   </div>
</div>
<div class="caption">
Opracowałem poziomy gry razem z kolegami, łącząc możliwości Blueprintów z pisaniem własnego kodu w C++. Dzięki temu stworzyłem interaktywne elementy środowiska, takie jak pułapki, przesuwane obiekty czy mechanizmy reagujące na działania gracza.
</div>

Każdy z tych elementów był dla mnie istotnym wyzwaniem, a jednocześnie okazją do zdobycia praktycznego doświadczenia i pogłębienia mojej wiedzy w zakresie projektowania gier. Jestem dumny, że udało mi się stworzyć mechaniki, które wzbogaciły rozgrywkę i uczyniły ją bardziej angażującą.
