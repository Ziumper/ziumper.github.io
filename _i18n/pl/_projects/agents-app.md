<div class="links">
  <a href="https://github.com/Ziumper/AgentsApp" class="btn btn-amber btn-sm z-depth-0" role="button">Zobacz kod <i class="fa-brands fa-github"></i></a>
   <a href="https://github.com/Ziumper/AgentsApp/releases" class="btn btn-amber btn-sm z-depth-0" role="button">Pobierz aplikacje <i class="fa fa-download"></i></a>
</div>

# Opis projektu

Celem projektu było stworzenie symulacji czasu rzeczywistego schematu budowania reputacji i zaufania, oferując cenne spostrzeżenia na temat złożoności interakcji międzyludzkich i ekosystemów cyfrowych. Symulacja dostarczyła danych na temat dynamiki budowania zaufania i reputacji. Opracowałem narzędzia do analizy danych, które umożliwiły użytkownikom wizualizację trendów, wzorców i korelacji w symulowanym ekosystemie. Ta funkcja ułatwiła głębsze zrozumienie czynników wpływających na zaufanie.
Projekt został zrealizowany podczas studiów magisterskich na Politechnice Gdańskiej.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/agents_app2.png" title="agents app gui" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Ekran GUI aplikacji
</div>

## Funkcjonalnośći

W ramach projektu zaimplementowane zostały następujace funkcjonalności:

- okno logowania, które pozwala śledzić, filtrować i lepiej zrozumieć zachodzące procesie symulacji etapy budowania zaufania
- możliwość edycji wprowadzanych parametrów takich jak początkowy poziom zaufania, liczba agentów czy liczby wprowadzanych 
- tryb boost, pozwalający na szybsze wykonywanie obliczeń i symulacji
- eksport wyników symulacji do pliku MSOffice Excel
- podgląd w czasie rzeczywistym wyników symulacji
- pasek stanu symulacji

## Wykorzystane technologie

W ramach realizacji projektu udało mi się zapoznać z następującymi technologami i narzędziami
- C++
- ImGui 
- ImPlot 
- GoogleTests
- OpenXLSX
- Visual Studio
