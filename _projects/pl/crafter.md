---
page_id: crafter
layout: page
title: Crafter
description: Projekt gry, w której został zaimplementowany podstawowy system tworzenia przedmiotów w Unity
img: assets/img/projects/crafter_equipment.png
importance: 4
category: game-dev
---

<div class="links">
      <a href="https://github.com/Ziumper/CrafterTheGame" class="btn btn-amber btn-sm z-depth-0" role="button">Zobacz kod <i class="fa-brands fa-github"></i></a>
</div>

# Opis projektu

Jest to koncept gry, który został zrealizowany jako etap rekrutacyjny na stanowisko programisty Unity. Niestety pracy nie udało mi się dostać, ale postanowiłem się nie poddawać i wykorzystać wartość dodaną jaką przyniósł ten projekt. Głównym zadaniem było zaimplementowanie rozszerzalnego systemu wytwarzania przedmiotów, który pozwalałby na tworzenie przepisów na przedmioty oraz zbieranie i wyrzucanie ich z ekwipunku poprzez panel wytwarzania ( "crafting" ). W projekcie skupiłem się głównie na kodzie i odpowiedniej strukturze programistycznej, która pozwalałaby na zbudowanie bazy przedmiotów w przystępny sposób dla osób nietechnicznych.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/crafter_equipment.png" title="equipment view" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid  path="assets/img/projects/crafter_menu.png" title="main menu" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/crafter_game1.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

# Zaimplementowane funkcjonalności

W ramach projektu zaimplementowane zostały następujace funkcjonalności:

- poruszanie graczem z perspektywyy trzecioosobowej
- system interakcji
- skromny interfejs użytkownika z ekwipunkiem i jedną sceną testową
- systemu tworzenia przedmiotów
- systemu ekwipunku

# Użyte technologie i narzędzia

Jako bazę projekt wykorzystałem jeden z gotowych assetow Unity [Asset Unlock: 3D Prototyping Pack](https://assetstore.unity.com/packages/essentials/tutorial-projects/asset-unlock-3d-prototyping-pack-183069#asset_quality) oprócz tego wykorzystałem również:

- [Unity Character controller](https://docs.unity3d.com/ScriptReference/CharacterController.html)
- [testy jednostkowe Unity](https://docs.unity3d.com/Packages/com.unity.test-framework@1.4/manual/index.html)
- [Scriptable Objects](https://docs.unity3d.com/Manual/class-ScriptableObject.html)
- [Quick Outline](https://assetstore.unity.com/packages/tools/particles-effects/quick-outline-115488)
- [TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/index.html)
- Visual Studio
- Gimp
