---
layout: post
title: Jak przechowywać duże pliki binarne z użyciem git lfs na Google Drive lub One Drive?
date: 2023-10-23 16:40:16
tags: git unity unreal-engine
categories: tutorials
description: Sprawdzony sposób na darmowy hosting plików przy pomocy adaptera LFS.
giscus_comments: true
---

# Adapter transferu

Sugeruję połączenie git lfs z niestandardowym adapterem transferu. Zgodnie z dokumentacją git-lfs:

> Git LFS obsługuje wiele sposobów przesyłania (wgrywania i pobierania) plików.
> W podstawowych aplikacjach klienckich używa się żądania HTTP za pośrednictwem adresu URL zwróconego z API LFS dla danego obiektu.
> Klient obsługuje również rozszerzenia umożliwiające wznowienie pobierania (za pośrednictwem nagłówków Range) i przesyłania.

# Przykłady użycia

Wykorzystałem ten sposób do przechowywania plików multimedialnych w moim projekcie i do rozwoju oprogramowania w projektach związanych z grami.
Jestem pewien, że i Ty możesz to zrobić. W większości przypadków lubię to stosować do:

- projektów związanych z tworzeniem gier w silnikach takich jak Unity i Unreal Engine.
- przechowywania dbdumps
- przechowywania dużych plików multimedialnych (w razie potrzeby)

Zawsze istnieje sposób, aby to zrobić również dla innych rodzajów projektów.

W poniższym przykładzie będę używał gitlab, google drive i innych narzędzi.

# Konfiguracja Gitlab-a

Po pierwsze, musisz wyłączyć domyślną usługę lfs w gitlabie. Jest to bardzo dobrze udokumentowana funkcja w oficjalnej dokumentacji
[Gitlab](https://docs.gitlab.com/ee/topics/git/lfs), ale nie ma zbyt dużo informacji na temat tego, jak ją wyłączyć.

Jest to trochę skomplikowane i niezbyt przyjazne dla użytkownika, ale oczywiście musisz wybrać swoje repozytorium i wejść w ustawienia.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/posts/settings_gitlab.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/posts/disable_gitlab_lfs_example.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
    </div>
</div>

Istnieje również inny sposób za pomocą wiersza poleceń gitlab oraz dla narzędzi CI za pomocą zmiennych środowiskowych, ale nie będę tego omawiał, trzymajmy to proste.
Jeśli gitlab lfs jest wyłączony na zdalnym serwerze, możesz zacząć od konfiguracji lokalnej.

# Konfiguracja lokalnego repozytorium

Będziesz potrzebował nowego repozytorium lub możesz użyć istniejącego. Sugeruję rozpoczęcie od stanu początkowego, abyś mógł skorzystać z prostego przewodnika konfiguracyjnego poniżej.

```
git init
```

Dodaj również link do serwera zdalnego. Można to zrobić po konfiguracji lub później.
Dla lfs z gitlabem możesz sugerować się zgodnie z prostym samouczkiem [link do git](https://docs.gitlab.com/tutorials/learn_git/)

# Konfiguracja lfs

Pobierz narzędzie adaptera lfs z [dostępnych wydań](https://github.com/sinbad/lfs-folderstore/releases/tag/v1.0.1).

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/OIP.jpg" class="img-fluid rounded z-depth-1" width="50%"  zoomable=true %}
</div>

Pobierz, rozpakuj, zainstaluj je
w dobrze znanej lokalizacji. Na przykład utwórz nowy folder na swoim głównym dysku roboczym, np. tak: `C:\Tools`, więc pełna ścieżka do narzędzia
będzie wyglądać tak: `C:\Tools\lfs-folderstore.exe`.

Aby skonfigurować repozytorium z lfs, dodaj plik .gitattributes w swoim repozytorium.
Przykłady można znaleźć pod tym [linkiem](https://github.com/gitattributes/gitattributes).

## Unity .gitattributes

```
## in root

*.cs diff=csharp text
*.cginc text
*.shader text

*.mat merge=unityyamlmerge eol=lf
*.anim merge=unityyamlmerge eol=lf
*.unity merge=unityyamlmerge eol=lf
*.prefab merge=unityyamlmerge eol=lf
*.physicsMaterial2D merge=unityyamlmerge eol=lf
*.physicMaterial merge=unityyamlmerge eol=lf
*.asset merge=unityyamlmerge eol=lf -text
*.meta merge=unityyamlmerge eol=lf
*.controller merge=unityyamlmerge eol=lf

## git-lfs ##

#Image
*.jpg filter=lfs diff=lfs merge=lfs -text
*.jpeg filter=lfs diff=lfs merge=lfs -text
*.png filter=lfs diff=lfs merge=lfs -text
*.gif filter=lfs diff=lfs merge=lfs -text
*.psd filter=lfs diff=lfs merge=lfs -text
*.ai filter=lfs diff=lfs merge=lfs -text
*.tif filter=lfs diff=lfs merge=lfs -text

#Audio
*.mp3 filter=lfs diff=lfs merge=lfs -text
*.wav filter=lfs diff=lfs merge=lfs -text
*.ogg filter=lfs diff=lfs merge=lfs -text
#Wwise
*.bnk filter=lfs diff=lfs merge=lfs -text

#Video
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.mov filter=lfs diff=lfs merge=lfs -text

#3D Object
*.FBX filter=lfs diff=lfs merge=lfs -text
*.fbx filter=lfs diff=lfs merge=lfs -text
*.blend filter=lfs diff=lfs merge=lfs -text
*.obj filter=lfs diff=lfs merge=lfs -text

#ETC
*.a filter=lfs diff=lfs merge=lfs -text
*.exr filter=lfs diff=lfs merge=lfs -text
*.tga filter=lfs diff=lfs merge=lfs -text
*.zip filter=lfs diff=lfs merge=lfs -text
*.dll filter=lfs diff=lfs merge=lfs -text
*.unitypackage filter=lfs diff=lfs merge=lfs -text
*.aif filter=lfs diff=lfs merge=lfs -text
*.ttf filter=lfs diff=lfs merge=lfs -text
*.rns filter=lfs diff=lfs merge=lfs -text
*.reason filter=lfs diff=lfs merge=lfs -text
*.lxo filter=lfs diff=lfs merge=lfs -text

```

## Unreal Engine .gitattributes

```
## Unreal Engine
## Auto detect text files and perform LF normalization ##

* text=auto

# UE file types
*.uasset filter=lfs diff=lfs merge=lfs -text
*.umap filter=lfs diff=lfs merge=lfs -text
*.udk filter=lfs diff=lfs merge=lfs -text
*.upk filter=lfs diff=lfs merge=lfs -text

--------------------------------------------------

# 2D formats
# Read more in: https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Textures/Importing/

# Recommended use:
*.[tT][gG][aA] filter=lfs diff=lfs merge=lfs -text
*.[pP][nN][gG] filter=lfs diff=lfs merge=lfs -text
*.[bB][mM][pP] filter=lfs diff=lfs merge=lfs -text

# Can also be used:
*.[fF][lL[oO][aA][tT] filter=lfs diff=lfs merge=lfs -text
*.[jJ][pP][eE][gG] filter=lfs diff=lfs merge=lfs -text
*.[jJ][pP][gG] filter=lfs diff=lfs merge=lfs -text
*.[pP][cC][xX] filter=lfs diff=lfs merge=lfs -text
*.[pP][sS][dD] filter=lfs diff=lfs merge=lfs -text
*.[xX][cC][fF] filter=lfs diff=lfs merge=lfs -text
*.[tT][iI][fF] filter=lfs diff=lfs merge=lfs -text
*.[tT][iI][fF][fF] filter=lfs diff=lfs merge=lfs -text

# Other supported formats:
*.[hH][dD][rR] filter=lfs diff=lfs merge=lfs -text
*.[dD][dD][sS] filter=lfs diff=lfs merge=lfs -text
*.[eE][xX][rR] filter=lfs diff=lfs merge=lfs -text

--------------------------------------------------

# 3D formats

# Always recommended to use:
# The UE4 FBX import pipeline uses FBX 2018
*.[fF][bB][xX] filter=lfs diff=lfs merge=lfs -text

# Can also be used:
*.[oO][bB][jJ] filter=lfs diff=lfs merge=lfs -text

# Other supported formats:
*.[aA][bB][cC] filter=lfs diff=lfs merge=lfs -text
*.[sS][rR][tT] filter=lfs diff=lfs merge=lfs -text

--------------------------------------------------

# Audio formats
# Read more in: https://docs.unrealengine.com/4.27/en-US/WorkingWithAudio/Overview/#:~:text=Unreal%20Engine%204%20(UE4)%20supports,16%2Dbit%20format%20PCM%20files.

# Always recommended to use:
*.[wW][aA][vV] filter=lfs diff=lfs merge=lfs -text

# Can also be used:
*.[aA][iI][fF][fF] filter=lfs diff=lfs merge=lfs -text
*.[oO][gG][gG] filter=lfs diff=lfs merge=lfs -text
*.[fF][lL][aA][cC] filter=lfs diff=lfs merge=lfs -text

# Not recommended to use, but supported:
*.[mM][pP]3 filter=lfs diff=lfs merge=lfs -text
*.[wW][mM][aA] filter=lfs diff=lfs merge=lfs -text
*.[aA][cC]3 filter=lfs diff=lfs merge=lfs -text
*.[aA][mM][rR] filter=lfs diff=lfs merge=lfs -text
*.[aA][iI][fF] filter=lfs diff=lfs merge=lfs -text
*.[aA][uU] filter=lfs diff=lfs merge=lfs -text
*.[cC][dD][dD][aA] filter=lfs diff=lfs merge=lfs -text
*.[cC][aA][fF] filter=lfs diff=lfs merge=lfs -text
*.[bB][wW][fF] filter=lfs diff=lfs merge=lfs -text
*.[aA][dD][tT][sS] filter=lfs diff=lfs merge=lfs -text

--------------------------------------------------

# Video formats
# Read more in: https://docs.unrealengine.com/5.0/en-US/media-framework-technical-reference-for-unreal-engine/

# Always recommended to use, supports all platforms:
# For the best compatibility and performance, it is recommended to use H.264 encoded MP4 (.mp4) container files.
*.[mM][pP]4 filter=lfs diff=lfs merge=lfs -text

# Can also be used, only some platforms are supported:
*.3[gG]2 filter=lfs diff=lfs merge=lfs -text
*.3[gG][pP] filter=lfs diff=lfs merge=lfs -text
*.3[gG][pP]2 filter=lfs diff=lfs merge=lfs -text
*.3[gG][pP][pP] filter=lfs diff=lfs merge=lfs -text
*.[mM]4[aA] filter=lfs diff=lfs merge=lfs -text
*.[mM]4[vV] filter=lfs diff=lfs merge=lfs -text
*.[mM][o][vV] filter=lfs diff=lfs merge=lfs -text
*.[aA][sS][fF] filter=lfs diff=lfs merge=lfs -text
*.[aA][vV][iI] filter=lfs diff=lfs merge=lfs -text
*.[wW][mM][vV] filter=lfs diff=lfs merge=lfs -text

--------------------------------------------------

# Fonts
# Read more in: https://docs.unrealengine.com/5.0/en-US/importing-fonts-in-unreal-engine/

*.[tT][tT][fF] filter=lfs diff=lfs merge=lfs -text
*.[oO][tT][fF] filter=lfs diff=lfs merge=lfs -text

--------------------------------------------------

# Documents
*.[cC][sS][vV] filter=lfs diff=lfs merge=lfs -text

```

# Konfiguracja Google Drive

Jeśli repozytorium jest gotowe, będziesz potrzebować jakiegoś rodzaju przestrzeni dyskowej, aby to działało. Aby w pełni zintegrować to z Google Drive, użyj klienta Google Drive [Pobierz](https://www.google.com/drive/download/).
Zainstaluj go, zaloguj się, aby można było utworzyć folder do przechowywania wszystkich dużych danych binarnych.

Po zalogowaniu powinieneś zobaczyć swój zamontowany folder w Finderze, jeśli używasz Maca, lub w Exploratorze Windows, jako oddzielony dysk. Otwórz go i utwórz nowy folder o nazwie
`binary-lfs`. Ta nazwa będzie używana do przechowywania wszystkich danych binarnych dla Twojego projektu w konfiguracji lfs.

# Integracja konfiguracji Git

Jeśli wszystko zostało wykonane prawidłowo, teraz nadszedł czas, aby połączyć git-lfs z naszym narzędziem i Google Drive.

Użyłem mojego ulubionego otwartoźródłowego oprogramowania [GitExtension](https://git-extensions-documentation.readthedocs.io/) jako odniesienia do integracji, ale możesz użyć terminala za pomocą podejścia z konfiguracją git config
lub dowolnego edytora tekstu. W przypadku korzystania z edytora tekstu otwórz plik konfiguracyjny w ukrytym folderze .git w głównym folderze Twojego projektu repozytorium.

Aby otworzyć konfigurację Twojego repozytorium github, wybierz następującą opcję:

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/posts/integration_gitextension.png" class="img-fluid rounded z-depth-1"  zoomable=true %}
</div>

Otwórz go i dodaj następujące linie.

```
[lfs "customtransfer.lfs-folder"]
    path = C:\\Tools\\lfs-folderstore.exe
    args = 'I:\\My drive\\binary-lfs'
[lfs]
    standalonetransferagent = lfs-folder
    repositoryformatversion = 0
```

Następnie, pamiętaj, aby posortować pliki LFS i skopiować zawartość skonfigurowanego wspólnego folderu, używając następującej komendy

```bash
git reset --hard master
```

lub jeśli korzystasz z nowego repozytorium, po prostu je wyślij

```
git push -u origin main
```

# Rozwiązywanie problemów

Czasami mogą pojawić się problemy z Twoją siecią lub z git lfs. W przypadku błędów smudge lub innych problemów można wypróbować następujące triki:

- spróbuj użyć lepszego połączenia internetowego, słaby pasmo sieciowe nie pomaga
- zrestartuj komputer
- użyj `git lfs fetch --all` pobiera pliki git lfs dla WSZYSTKICH zdalnych gałęzi
- przenieś katalog cache Google Drive lub One Drive do nowego folderu i spróbuj ponownie pobrać dane

# Bibliografia i źródła

- [Lfs folderstore repo](https://github.com/sinbad/lfs-folderstore)
- [Google Drive](https://www.google.com/drive/download/)
- [Gitlab Docs](https://docs.gitlab.com/)
