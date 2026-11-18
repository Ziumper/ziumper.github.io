
const currentUrl = window.location.href;
const siteUrl = "https://ziumper.github.io";
let updatedUrl = currentUrl.replace("https://ziumper.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("pl".length > 0) {
  updatedUrl = updatedUrl.replace("/pl", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-o-mnie",
    title: "o mnie",
    section: "Menu nawigacji",
    handler: () => {
      window.location.href = "/pl/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "Blog o kodowaniu, programowaniu i innych ciekawych rzeczach",
          section: "Menu nawigacji",
          handler: () => {
            window.location.href = "/pl/blog/";
          },
        },{id: "nav-projekty",
          title: "projekty",
          description: "Kolekcja moich projektów",
          section: "Menu nawigacji",
          handler: () => {
            window.location.href = "/pl/projects/";
          },
        },{id: "nav-repozytoria",
          title: "repozytoria",
          description: "Moje najpopularniejsze repozytoria",
          section: "Menu nawigacji",
          handler: () => {
            window.location.href = "/pl/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae",
          section: "Menu nawigacji",
          handler: () => {
            window.location.href = "/pl/cv/";
          },
        },{id: "post-nowe-narzędzie-n8n",
        
          title: "Nowe narzędzie n8n!",
        
        description: "Ostatnio miałem możliwość zabawy z hostowaną wersją n8n i chciałem podzielić się swoimi wrażeniami.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/n8n-automation-tool/";
          
        },
      },{id: "post-alternatywne-ide-dla-php-apache-netbeans-ale-nie-tylko",
        
          title: "Alternatywne IDE dla PHP? Apache NetBeans, ale nie tylko!",
        
        description: "Dlaczego nie PhpStorm? Dlaczego nie VIM albo Visual Studio Code? Od pewnego czasu szukałem dla siebie narzędzia, które nie byłoby przeładowane bajerami, a jednocześnie byłoby wystarczająco użyteczne i potężne, by ułatwiać codzienną pracę.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/alternative-ide-for-php/";
          
        },
      },{id: "post-przecinek-na-końcu-argumentów-funkcji-w-php-trailing-comma",
        
          title: "Przecinek na końcu argumentów funkcji w PHP (trailing comma)",
        
        description: "Jak trailing comma (,) w PHP ułatwia życie programisty przy pracy z argumentami funkcji i konstruktorów.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/trailing-comma-line/";
          
        },
      },{id: "post-wykorzystanie-array-map-w-codziennym-życiu-programisty-przegląd-php-7",
        
          title: "Wykorzystanie array_map() w codziennym życiu programisty - Przegląd PHP #7",
        
        description: "Tym razem postanowiłem przyjrzeć się najczęstszym wykorzystaniom array_map w moim codziennym kodzie.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/array-map-in-php/";
          
        },
      },{id: "post-w-końcu-dobrze-napisane-testy-z-odpowiednią-strukturą-ładowania-composer",
        
          title: "W końcu dobrze napisane testy z odpowiednią strukturą ładowania Composer",
        
        description: "Ten wpis wyjaśnia, jak zorganizować projekt oparty na Composerze z zależnościami PHPUnit, aby nie ładować przypadków testowych do classmapy, oraz opisuje wnioski, które wyciągnąłem w trakcie pracy.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/Composer-with-phpunit-setup/";
          
        },
      },{id: "post-jak-zintegrować-github-copilot-do-automatycznego-generowania-wiadomości-commitów",
        
          title: "Jak zintegrować GitHub Copilot do automatycznego generowania wiadomości commitów?",
        
        description: "Ten post wyjaśnia, jak używać GitHub Copilot do automatycznego generowania wiadomości commitów, zwiększając produktywność i zapewniając przejrzystą historię zmian.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/Add-github-copilot-auto-commit-message-generation/";
          
        },
      },{id: "post-dlaczego-programiści-php-kochają-pustą-linię-na-końcu-pliku-przegląd-php-6",
        
          title: "🤓 Dlaczego programiści PHP kochają pustą linię na końcu pliku? Przegląd PHP #6...",
        
        description: "Post wyjaśnia, dlaczego programiści dodają pustą linię na końcu plików PHP i Twig, przedstawiając techniczne, historyczne oraz humorystyczne powody tej praktyki. Dowiesz się, jak wpływa to na kompatybilność i czytelność kodu oraz jak pomaga unikać błędów.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/New-line-at-the-end-of-php-file/";
          
        },
      },{id: "post-jak-usunąć-przepisy-z-sekcji-extra-w-composer-json",
        
          title: "🧹 Jak usunąć przepisy z sekcji `extra` w composer.json",
        
        description: "Krótki przewodnik po sekcji `extra` w composer.json oraz usuwaniu przepisów Symfony.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/Composer-recipes-fix/";
          
        },
      },{id: "post-liczby-zmiennoprzecinkowe-i-tajemnica-0-0-przegląd-php-5",
        
          title: "🧐 Liczby zmiennoprzecinkowe i tajemnica -0.0 - Przegląd PHP #5",
        
        description: "Czy wiesz, że w PHP istnieje ujemne zero? Ten post to podróż przez świat ujemnych zer, dzielenia przez nieskończoność i tego, czemu w Twoim kodzie i tak możesz spokojnie pisać == 0.0.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/Floats-and-mystery-of-zero/";
          
        },
      },{id: "post-phpunit-willreturnmap-przegląd-php-4",
        
          title: "PHPUnit willReturnMap - Przegląd PHP #4",
        
        description: "🐛 PHPUnit, willReturnMap i domyślne argumenty – czyli jak wpaść w subtelną pułapkę 🪤",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/PHPUnit-will-return-map-trap/";
          
        },
      },{id: "post-backedenum-przegląd-php-3",
        
          title: "BackedEnum - Przegląd PHP #3",
        
        description: "🏆 BackedEnums w PHP – czyli jak skończyłem z mapperami i pokochałem enumy ❤️",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/PHP-Backed-enums/";
          
        },
      },{id: "post-funkcje-tablicowe-inicjalizacja-tablicy-przy-pomocy-lub-array-przegląd-php-2",
        
          title: "Funkcje tablicowe: inicjalizacja tablicy przy pomocy [...] lub array()? - Przegląd PHP #2...",
        
        description: "Czy deklarowanie tablicy za pomocą słowa array() idzie na śmietnik historii? Co ma wspólnego pieczenie placka z kompilacją kodu?",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/PHP-array-or-brackets/";
          
        },
      },{id: "post-funkcje-tablicowe-39-array-filter-39-39-array-merge-39-przegląd-php-1",
        
          title: "Funkcje tablicowe: [&#39;array_filter&#39;,&#39;array_merge&#39;] - Przegląd PHP #1",
        
        description: "Przegląd najczęściej wykorzystywanych funkcji w języku PHP do pracy z tablicami. Kiedy i jak ich używać w optymalny sposób.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/PHP-array-functions-overview_array_filter_array_map/";
          
        },
      },{id: "post-testowanie-obsługi-błędów-w-godocie-przy-pomocy-gut",
        
          title: "Testowanie obsługi błędów w Godocie przy pomocy GUT",
        
        description: "Testowanie obsługi błędów przy pomocy GUT i metody stub w GDScript.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2025/testing-error-handling-in-gdscript/";
          
        },
      },{id: "post-jak-przechowywać-duże-pliki-binarne-z-użyciem-git-lfs-na-google-drive-lub-one-drive",
        
          title: "Jak przechowywać duże pliki binarne z użyciem git lfs na Google Drive lub...",
        
        description: "Sprawdzony sposób na darmowy hosting plików przy pomocy adaptera LFS.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2023/how-to-store-big-binary-files-with-git-lfs/";
          
        },
      },{id: "post-jak-rozwiązywać-konflikty-przy-pomocy-gitextensions",
        
          title: "Jak rozwiązywać konflikty przy pomocy GitExtensions?",
        
        description: "Rozwiązywanie konfliktów przy rebase i merge.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2022/how-to-solve-rebase-merge-conflicts-with-GitExtensions/";
          
        },
      },{id: "post-jak-zacząć-z-git-em",
        
          title: "Jak zacząć z GIT-em?",
        
        description: "Jak zacząć pracę z GIT-em. Podstawowy przewodnik po tym, czym jest git i jak używać go do kontroli wersji.",
        section: "Posty",
        handler: () => {
          
            window.location.href = "/pl/blog/2022/how-to-start-with-git/";
          
        },
      },{id: "projects-agents-app",
          title: 'Agents App',
          description: "Aplikacja do symulacji Monte Carlo napisana w C++",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/agents-app/";
            },},{id: "projects-axion",
          title: 'Axion',
          description: "Pierwszy projekt w technologii Shopware 5",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/axion/";
            },},{id: "projects-blog-manager",
          title: 'Blog Manager',
          description: "Aplikacja MVC do zarządzania blogami na platformie .NET Core i Angular z konfiguracją docker-compose dla wygodniejszej pracy programistycznej",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/blog-manager/";
            },},{id: "projects-board-heroes-battle",
          title: 'Board Heroes Battle',
          description: "Turowa gra planszowa w rozszerzonej rzeczywistości na platformę Android",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/board-heroes-battle/";
            },},{id: "projects-boesner",
          title: 'Boesner',
          description: "Ponowne wdrożenie sklepu Boesner w technologii Shopware 5",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/boesner/";
            },},{id: "projects-klon-gry-connect-the-pops",
          title: 'Klon gry Connect the pops!',
          description: "Klon popularnej gry na Androida Connect The Pops! od Popcorn",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/connect-the-pops-clone/";
            },},{id: "projects-crafter",
          title: 'Crafter',
          description: "Projekt gry, w której został zaimplementowany podstawowy system tworzenia przedmiotów w Unity",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/crafter/";
            },},{id: "projects-file-upload",
          title: 'File Upload',
          description: "Aplikacja w Symfony 7, Doctrine i PHPUnit do wrzucania plików na serwer z walidowanym formularzem",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/file-upload/";
            },},{id: "projects-garage-flipper",
          title: 'Garage Flipper',
          description: "Gra, w której wcielisz się w budowniczego i renowatora garaży i warsztatów samochodowych.",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/garage-flipper/";
            },},{id: "projects-leguano",
          title: 'Leguano',
          description: "Wdrożenie pierwszego sklepu w technologii Shopware 6",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/leguano/";
            },},{id: "projects-ludo-just-chill-out",
          title: 'Ludo - Just Chill Out',
          description: "Implementacja słynnej gry w chińczyka zrobiona w Unity",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/ludo-just-chill-out/";
            },},{id: "projects-lzss",
          title: 'LZSS',
          description: "Implementacja bezstratnego algorytmu kompresji danych LZSS",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/lzss/";
            },},{id: "projects-night-catcher",
          title: 'Night Catcher',
          description: "Zręcznościowa gra mobilna na Androida zrobiona w Unity",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/night-catcher/";
            },},{id: "projects-archiwalne-portfolio",
          title: 'Archiwalne portfolio',
          description: "Stary projekt portfolio zbudowany przy pomocy JavaScript, HTML, CSS i Webpacka",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/old-portfolio-project/";
            },},{id: "projects-zakodowana-witryna-internetowa",
          title: 'Zakodowana witryna internetowa',
          description: "Zakodowana strona internetowa na podstawie gotowego szablonu HTML, CSS i JS",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/online-store-template/";
            },},{id: "projects-polygangs",
          title: 'Polygangs',
          description: "Symulator życia gangsterskiego w mieście z lat 90. w stylu low-poly",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/polygangs/";
            },},{id: "projects-steve-the-hamster",
          title: 'Steve The Hamster',
          description: "Jest to ciepła, pełna akcji gra wypełniona zabawnymi wyzwaniami i zachwycającym poczuciem humoru, a wszystko to ożywione dzięki silnikowi Unreal Engine.",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/steve-the-hamster/";
            },},{id: "projects-todo-app",
          title: 'Todo App',
          description: "Prosta aplikacja ToDo do zarządzania zadaniami, napisana w .NET Core przy pomocy AvaloniaUI i WPF, z testami jednostkowymi",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/todo-app/";
            },},{id: "projects-web-cloud-system",
          title: 'Web Cloud System',
          description: "Aplikacja webowa do przechowywania plików i zarządzania nimi, napisana w .NET Core i Angularze",
          section: "Projekty",handler: () => {
              window.location.href = "/pl/projects/web-cloud-system/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Media społecznościowe',
        handler: () => {
          window.open("https://www.linkedin.com/in/ziumper", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Media społecznościowe',
        handler: () => {
          window.open("https://github.com/Ziumper", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Media społecznościowe',
        handler: () => {
          window.open("https://gitlab.com/Ziumper", "_blank");
        },
      },{
        id: 'social-email',
        title: 'Wyślij e-mail',
        section: 'Media społecznościowe',
        handler: () => {
          window.open("mailto:%7A%69%75%6D%70%65%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Media społecznościowe',
        handler: () => {
          window.open("https://twitter.com/ziumper", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: 'Języki',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Zmień motyw na jasny',
      description: 'Zmień motyw strony na jasny',
      section: 'Motyw',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Zmień motyw na ciemny',
      description: 'Zmień motyw strony na ciemny',
      section: 'Motyw',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Użyj motywu systemowego',
      description: 'Ustaw motyw strony zgodnie z ustawieniami systemu',
      section: 'Motyw',
      handler: () => {
        setThemeSetting("system");
      },
    },];
