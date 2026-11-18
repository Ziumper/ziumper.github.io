---
page_id: agents_app
layout: page
title: Agents App
description: Aplikacja do symulacji Monte Carlo napisana w C++
img: assets/img/projects/agents_app2.png
importance: 1
category: desktop
---

<div class="links">
  <a href="https://github.com/Ziumper/AgentsApp" class="btn btn-amber btn-sm z-depth-0" role="button">Zobacz kod <i class="fa-brands fa-github"></i></a>
   <a href="https://github.com/Ziumper/AgentsApp/releases" class="btn btn-amber btn-sm z-depth-0" role="button">Pobierz aplikację <i class="fa fa-download"></i></a>
</div>

# Opis projektu

Celem projektu było stworzenie symulacji w czasie rzeczywistym schematu budowania reputacji i zaufania, która oferuje cenne spostrzeżenia na temat złożoności interakcji międzyludzkich i ekosystemów cyfrowych. Symulacja dostarczyła danych na temat dynamiki budowania zaufania i reputacji. Opracowałem narzędzia do analizy danych, które umożliwiły użytkownikom wizualizację trendów, wzorców i korelacji w symulowanym ekosystemie. Ta funkcja ułatwiła głębsze zrozumienie czynników wpływających na zaufanie.
Projekt został zrealizowany podczas studiów magisterskich na Politechnice Gdańskiej.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/agents_app2.png" title="interfejs aplikacji Agents App" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Ekran GUI aplikacji
</div>

## Funkcjonalności

W ramach projektu zaimplementowane zostały następujące funkcjonalności:

- okno logów, które pozwala śledzić, filtrować i lepiej zrozumieć zachodzące w procesie symulacji etapy budowania zaufania
- możliwość edycji wprowadzanych parametrów takich jak początkowy poziom zaufania, liczba agentów czy liczba danych wejściowych
- tryb boost, pozwalający na szybsze wykonywanie obliczeń i symulacji
- eksport wyników symulacji do pliku MS Office Excel
- podgląd w czasie rzeczywistym wyników symulacji
- pasek stanu symulacji

## Wykorzystane technologie

W ramach realizacji projektu udało mi się zapoznać z następującymi technologiami i narzędziami:

- C++
- ImGui
- ImPlot
- GoogleTest
- OpenXLSX
- Visual Studio
