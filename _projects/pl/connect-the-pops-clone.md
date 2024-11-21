---
page_id: connect_the_pops
layout: page
title: Klon gry Connect the pops!
description: Klon gry na platformę android o nazwie Connect The Pops!
img: assets/img/projects/connects_the_pops.jpg
importance: 4
category: game-dev
---

<div class="links">
      <a href="https://github.com/Ziumper/connect-the-pops-clone" class="btn btn-amber btn-sm z-depth-0" role="button">Zobacz kod <i class="fa-brands fa-github"></i></a>
      <a href="https://github.com/Ziumper/connect-the-pops-clone/releases" class="btn btn-amber btn-sm z-depth-0" role="button">Pobierz aplikacje <i class="fa fa-download"></i></a>
</div>

# Opis projektu

Jest to projekt, który został zrealizowany jako zadanie rekrutacyjne na stanowisko programisty Unity. Jest to gra logiczna na androida [Connect the pops!](https://play.google.com/store/apps/details?id=com.casox.ConnectToMerge) przypominająca w zasadach grę [2048](<https://en.wikipedia.org/wiki/2048_(video_game)>). Zawiera on główne mechaniki gry, czyli łączenie cyfrowych wartości okrągłych okien o wartośći kolejnej potęgi liczby 2.

<div class="caption">
    Nagrania przedstawiające rozgrywkę po lewej widać oryginalną grę a po prawej zrealizowaną przeze mnie kopię.
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/projects/connect-the-pops-origin.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/projects/connect-the-pops.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

# Zaimplementowane funkcjonalności

W ramach projektu zaimplementowane zostały następujace funkcjonalności:

- zapętlanie potęgi liczby dwa w celu wykładniczego zwiększania wartości
- przyjemny system interakcji
- animacje
- kopia interfejsu użytkownika i szablonu kolorów dla kolejnych poziomów

# Użyte technologie i narzędzia

Jako bazę projektu wykorzystałem podstawowy szablon narzędzi dla aplikacji mobilnych udostępniony przez Unity oraz:

- Unity UI
- Unity Animator
- [TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/index.html)
- Visual Studio
- Gimp
