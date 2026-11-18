
const currentUrl = window.location.href;
const siteUrl = "https://ziumper.github.io";
let updatedUrl = currentUrl.replace("https://ziumper.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "Blog about coding, programming, and other interesting things",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of cool projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Welcome to my vault of code, where I share my most recent and valuable repositories along with their stats.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-new-n8n-tool",
        
          title: "New n8n Tool!",
        
        description: "Recently, I had the opportunity to play with the hosted version of n8n and wanted to share my impressions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/n8n-automation-tool/";
          
        },
      },{id: "post-alternative-ide-for-php-apache-netbeans-but-not-only",
        
          title: "Alternative IDE for PHP? Apache NetBeans, but not only!",
        
        description: "Why not PhpStorm? Why not VIM or Visual Studio Code? For some time, I have been searching for a tool that is not overloaded with features, yet is sufficiently useful and powerful to facilitate daily work.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/alternative-ide-for-php/";
          
        },
      },{id: "post-comma-at-the-end-of-function-arguments-in-php-trailing-comma",
        
          title: "Comma at the end of function arguments in PHP (trailing comma)",
        
        description: "How the trailing comma in PHP makes a programmer&#39;s life easier when working with function and constructor arguments.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/trailing-comma-line/";
          
        },
      },{id: "post-using-array-map-in-a-programmer-39-s-daily-life-php-review-7",
        
          title: "Using array_map() in a Programmer&#39;s Daily Life - PHP Review #7",
        
        description: "This time I decided to take a look at the most common uses of array_map in my daily code.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/array-map-in-php/";
          
        },
      },{id: "post-finally-well-written-tests-with-a-proper-composer-loading-structure",
        
          title: "Finally, well-written tests with a proper Composer loading structure",
        
        description: "This post explains how to organize a Composer project with PHPUnit dependencies so your test cases are not loaded into the classmap, and shares the lessons I learned along the way.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Composer-with-phpunit-setup/";
          
        },
      },{id: "post-how-to-integrate-github-copilot-to-generate-commit-messages-automatically",
        
          title: "How to integrate GitHub Copilot to generate commit messages automatically?",
        
        description: "This post explains how to use GitHub Copilot to generate commit messages automatically, improving productivity and ensuring clear commit history.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Add-github-copilot-auto-commit-message-generation/";
          
        },
      },{id: "post-why-do-php-developers-love-the-empty-line-at-the-end-of-the-file-php-review-6",
        
          title: "🤓 Why do PHP developers love the empty line at the end of...",
        
        description: "This post explains why developers add an empty line at the end of PHP and Twig files, presenting technical, historical, and humorous reasons for this practice. You&#39;ll learn how it affects compatibility, code readability, and helps avoid errors.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/New-line-at-the-end-of-php-file/";
          
        },
      },{id: "post-how-to-remove-recipes-from-the-extra-section-in-composer-json",
        
          title: "🧹 How to Remove Recipes from the `extra` Section in composer.json",
        
        description: "A quick guide to understanding and cleaning up the `extra` section in composer.json, especially Symfony recipes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Composer-recipes-fix/";
          
        },
      },{id: "post-floats-and-the-mystery-of-0-0-php-review-5",
        
          title: "🧐 Floats and the Mystery of -0.0 - PHP Review #5",
        
        description: "Did you know that PHP has negative zero? This post is a journey through the world of negative zeros, division by infinity, and why in your code you can still safely write `== 0.0`.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Floats-and-mystery-of-zero/";
          
        },
      },{id: "post-phpunit-willreturnmap-php-review-4",
        
          title: "PHPUnit willReturnMap - PHP Review #4",
        
        description: "🐛 PHPUnit, willReturnMap and default arguments – how to fall into a subtle trap 🪤",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/PHPUnit-will-return-map-trap/";
          
        },
      },{id: "post-backedenum-php-review-3",
        
          title: "BackedEnum - PHP Review #3",
        
        description: "🏆 BackedEnums in PHP – how I stopped worrying about mappers and learned to love enums ❤️",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/PHP-Backed-enums/";
          
        },
      },{id: "post-array-functions-initializing-an-array-using-or-array-php-review-2",
        
          title: "Array Functions: Initializing an Array Using [...] or array()? - PHP Review #2...",
        
        description: "Is declaring an array using the array() function becoming obsolete? What does baking a cake have in common with code compilation?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/PHP-array-or-brackets/";
          
        },
      },{id: "post-array-functions-39-array-filter-39-39-array-merge-39-php-review-1",
        
          title: "Array Functions: [&#39;array_filter&#39;, &#39;array_merge&#39;] - PHP Review #1",
        
        description: "A review of the most commonly used PHP functions for working with arrays. When and how to use them optimally.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/PHP-array-functions-overview_array_filter_array_map/";
          
        },
      },{id: "post-testing-error-handling-in-godot-using-gut",
        
          title: "Testing Error Handling in Godot Using GUT",
        
        description: "Testing error handling via the stub method in the GUT tool.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/testing-error-handling-in-gdscript/";
          
        },
      },{id: "post-how-to-store-big-binary-files-with-git-lfs-on-google-drive-or-one-drive",
        
          title: "How to store big binary files with git lfs on Google Drive or...",
        
        description: "A hacky way of storing bigger files in git.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/how-to-store-big-binary-files-with-git-lfs/";
          
        },
      },{id: "post-how-to-solve-rebase-and-merge-conflicts-with-gitextensions",
        
          title: "How to solve rebase and merge conflicts with GitExtensions?",
        
        description: "Resolving issues with merge conflicts.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/how-to-solve-rebase-merge-conflicts-with-GitExtensions/";
          
        },
      },{id: "post-how-to-start-with-git",
        
          title: "How to start with GIT?",
        
        description: "How to start working with GIT. A basic guide to what git is and how to use it for version control.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/how-to-start-with-git/";
          
        },
      },{id: "projects-agents-app",
          title: 'Agents App',
          description: "Monte Carlo simulation app written in C++",
          section: "Projects",handler: () => {
              window.location.href = "/projects/agents-app/";
            },},{id: "projects-axion",
          title: 'Axion',
          description: "The first project in Shopware 5 technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/axion/";
            },},{id: "projects-blog-manager",
          title: 'Blog Manager',
          description: "Blog management MVC application in .NET Core and Angular with a docker-compose setup for a better development experience",
          section: "Projects",handler: () => {
              window.location.href = "/projects/blog-manager/";
            },},{id: "projects-board-heroes-battle",
          title: 'Board Heroes Battle',
          description: "Augmented reality turn-based board game for the Android platform",
          section: "Projects",handler: () => {
              window.location.href = "/projects/board-heroes-battle/";
            },},{id: "projects-boesner",
          title: 'Boesner',
          description: "Relaunch of the Boesner shop in Shopware 5 technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/boesner/";
            },},{id: "projects-brita",
          title: 'BRITA',
          description: "Varnish caching, backend and admin panel extensions, and monitoring of the BRITA Shopware 6 online shop",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brita/";
            },},{id: "projects-connect-the-pops-clone",
          title: 'Connect The Pops Clone',
          description: "Clone of the popular Android game Connect The Pops by Popcorn",
          section: "Projects",handler: () => {
              window.location.href = "/projects/connect-the-pops-clone/";
            },},{id: "projects-crafter",
          title: 'Crafter',
          description: "Project of a game in which a basic item crafting system has been implemented in Unity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/crafter/";
            },},{id: "projects-file-upload",
          title: 'File Upload',
          description: "File upload app written in Symfony 7 using Doctrine and PHPUnit tests",
          section: "Projects",handler: () => {
              window.location.href = "/projects/file-upload/";
            },},{id: "projects-garage-flipper",
          title: 'Garage Flipper',
          description: "Simulator game where you become a builder and renovator of garages and car repair shops.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/garage-flipper/";
            },},{id: "projects-grüne-erde",
          title: 'Grüne Erde',
          description: "Data import, Google Shopping feed and modern frontend for the Grüne Erde Shopware 6 shop",
          section: "Projects",handler: () => {
              window.location.href = "/projects/grune-erde/";
            },},{id: "projects-j-könig",
          title: 'J. König',
          description: "Optimization, admin panel performance, plugins and SFTP order import for the J. König Shopware 6 B2B shop",
          section: "Projects",handler: () => {
              window.location.href = "/projects/j-koenig/";
            },},{id: "projects-kraków-airport",
          title: 'Kraków Airport',
          description: "Updates and upgrade of the official Kraków Airport website to the latest PHP and Laravel",
          section: "Projects",handler: () => {
              window.location.href = "/projects/krakow-airport/";
            },},{id: "projects-leguano",
          title: 'Leguano',
          description: "Implementation of the first store using Shopware 6 technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/leguano/";
            },},{id: "projects-ludo-just-chill-out",
          title: 'Ludo - Just Chill Out',
          description: "Ludo board game made in Unity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ludo-just-chill-out/";
            },},{id: "projects-lzss",
          title: 'LZSS',
          description: "Implementation of the lossless data compression algorithm - LZSS",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lzss/";
            },},{id: "projects-night-catcher",
          title: 'Night Catcher',
          description: "Skill-based mobile game for Android made in Unity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/night-catcher/";
            },},{id: "projects-old-portfolio-project",
          title: 'Old portfolio project',
          description: "Archived portfolio project written with plain JavaScript, HTML, CSS and Webpack",
          section: "Projects",handler: () => {
              window.location.href = "/projects/old-portfolio-project/";
            },},{id: "projects-coded-online-store-example",
          title: 'Coded online store example',
          description: "Coded online store example with HTML, CSS and JS based on an existing shop template",
          section: "Projects",handler: () => {
              window.location.href = "/projects/online-store-template/";
            },},{id: "projects-polygangs",
          title: 'Polygangs',
          description: "Gangster simulator in a Polish city from the 90s.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/polygangs/";
            },},{id: "projects-steve-the-hamster",
          title: 'Steve The Hamster',
          description: "It is a heartwarming, action-packed game filled with fun challenges and a delightful sense of humor, all brought to life with Unreal Engine 5.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/steve-the-hamster/";
            },},{id: "projects-todo-app",
          title: 'Todo App',
          description: "WPF TodoApp application for trying out the AvaloniaUI framework. Based on the AvaloniaUI example, with modifications and integrated unit tests",
          section: "Projects",handler: () => {
              window.location.href = "/projects/todo-app/";
            },},{id: "projects-web-cloud-system",
          title: 'Web Cloud System',
          description: "Easy and simple MVC app to store and manage files, written in .NET Core and Angular",
          section: "Projects",handler: () => {
              window.location.href = "/projects/web-cloud-system/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ziumper", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Ziumper", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/Ziumper", "_blank");
        },
      },{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%69%75%6D%70%65%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ziumper", "_blank");
        },
      },{
          id: 'lang-pl',
          title: 'pl',
          section: 'Languages',
          handler: () => {
            window.location.href = "/pl" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
