---
page_id: file_upload
layout: page
title: File Upload
description: Aplikacja w symfony 7, doctrine i PhpUnit do wrzucania plików na serwer z walidowanym formularzem
img: assets/img/projects/file-upload1.png
importance: 1
category: web-development
---

<div class="links">
  <a href="https://github.com/Ziumper/file-upload" class="btn btn-amber btn-sm z-depth-0" role="button">View code <i class="fa-brands fa-github"></i></a>
</div>

# Opis projektu

Jest to aplikacja symfony napisana w ramach projektu rekrutacyjnego na stanowisko programisty PHP. Miała ona na celu sprawdzenie moich umiejętności w tej platformie programistycznej i wykonanie poniższych wymagań

- Pierwsza strona zawiera formularz. Formularz składa się z trzech pól: Imię, Nazwisko, Załącznik.
- Pola formularza są walidowane. Imię i nazwisko nie mogą być puste, a plik może zawierać wyłącznie obrazki nie większe niż 2MB.
- Dane z formularza są asynchronicznie zapisywane w bazie danych. Po wysłaniu wyświetlany jest komunikat o powodzeniu lub błędzie.
- Druga strona zawiera zestawienie dodanych przez formularz danych. Ta strona jest zabezpieczona przed nieuprawnionym dostępem.

Najwazniejszym aspektem wykonanej aplikacji jest [kod](https://github.com/Ziumper/file-upload), ale mimo wszystko wrzucam poniżej zdjęcia aplikacji

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid  path="assets/img/projects/file-upload1.png" title="lista" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/file-upload2.png" title="poprawnie zwalidowany formularz" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/file-upload3.png" title="walidacja" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Ekrany GUI aplikacji
</div>

## Wykorzystane technologie

W ramach projektu udało mi się zapoznać z następującymi technologami i narzędziami

- [Symfony 7](https://symfony.com/7)
- [PHPUnit](https://phpunit.de/index.html)
- [Invervention Image](https://github.com/Intervention/image)
- [Doctrine](https://www.doctrine-project.org/)
- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)
