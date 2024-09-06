---
page_id: lzss
layout: page
title: LZSS
description: Implementacja bezstratnego algorytmu kompresji danych LZSS
img: assets/img/projects/LZSS.jpg
importance: 2
category: desktop
---

<div class="links">
  <a href="https://github.com/Ziumper/LZSS" class="btn btn-amber btn-sm z-depth-0" role="button">Zobacz kod <i class="fa-brands fa-github"></i></a>
</div>

# Opis projektu

Celem projektu była implementacja algorytmu bezstratnej kompresji danych [LZSS](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Storer%E2%80%93Szymanski) optymalizującego przechowywanie danych. Wykorzystuje on również algorytm [KMP](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) do wyszukiwania powtarzających się ciągów danych i budowania słownika wyrazów i tabeli przesunięć kodowych.
Projekt został zrealizowany podczas studiów inżynierski jako praca dyplomowa na Uniwersytecie Warmińsko-Mazurskim w Olsztynie.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/LZSS.jpg" title="lzss gui" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Ekran GUI aplikacji
</div>

## Funkcjonalnośći

W ramach projektu zaimplementowane zostały następujace funkcjonalności:

- operacje na danych binarnych
- implementacja algorytmu KMP oraz jego integracja w process kodowania informacji
- implementacja aplikacji pozwalającej na kompresje i bezstratną dekompresję danych z wygodnym interfejsem graficznym
- eksport wyników kompresji do pliku z własnym formatem danych i nagłówkiem
- możliwość pobrania raportu z wynikami kompresji
- pasek stanu kompresji

## Wykorzystane technologie

W ramach realizacji projektu udało mi się zapoznać z następującymi technologami i narzędziami

- C++
- WinApi
