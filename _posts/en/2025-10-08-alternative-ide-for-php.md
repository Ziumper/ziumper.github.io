---
layout: post
title: "Alternative IDE for PHP? Apache NetBeans, but not only!"
date: 2025-10-08
tags: php ide netbeans
description: "Why not PHPStorm? Why not VIM or Visual Studio Code? For some time, I have been searching for a tool that is not overloaded with features, yet is sufficiently useful and powerful to facilitate daily work. "
thumbnail: https://netbeans.apache.org/_/images/apache-netbeans.svg
giscus_comments: true
toc:
  sidebar: left
---

This post will be a bit longer because I want to present the challenges and the journey this IDE has taken from its old software to its newer version. I also want to focus on its drawbacks and, in a sense, show what working in Apache NetBeans looks like today. When did I come across it? Why did I start using it only recently, and why does it seem that this IDE is making a comeback? I will also try to present how to configure the IDE and my first impressions.

## Apache NetBeans

To begin, it is worth mentioning the history of Apache NetBeans. It is an integrated development environment that was originally created mainly for Java programming, but now supports several programming languages, including PHP. The general timeline is as follows:

- **1996** – At Charles University in Prague, a group of students starts the Xelfi project, one of the first Java IDEs written in Java.
- **1997-1998** – The Xelfi project is developed further, and its name changes to NetBeans.
- **1999** – Sun Microsystems buys NetBeans from the creators in Prague and begins official development, releasing it as open-source software.
- **2000-2010** – NetBeans develops rapidly, gaining support for new Java versions and other technologies. It becomes one of the most popular IDEs for Java developers.
- **2010** – Oracle acquires Sun Microsystems and thus becomes the owner of the NetBeans project.
- **2016** – Oracle decides to transfer NetBeans to the Apache Software Foundation, starting the project's incubation process.
- **2018** – NetBeans officially becomes an Apache project and is named Apache NetBeans. The first version under the Apache name is released – Apache NetBeans 9.0.
- **2018-present** – Apache NetBeans is actively developed by the open-source community. New versions are released regularly, supporting the latest technologies and programming languages.

{% include figure.liquid path="assets/img/posts/netbeans/netbeans_ide.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

Configuring NetBeans is relatively simple, though it requires a few steps:
NetBeans can be downloaded directly from the Apache website. The installer is available for all popular operating systems. The most convenient way is to download Apache NetBeans directly from the [repository](https://github.com/apache/netbeans/releases).

After installation, it is worth reviewing the available plugins. NetBeans natively supports PHP, but you can install support for other languages. Above all, I recommend enabling the default PHP plugin.

{% include figure.liquid path="assets/img/posts/netbeans/netbeans_php_plugin.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

Additionally, I recommend installing this plugin via GitHub: [netbeans-php-enhancements](https://github.com/junichi11/netbeans-php-enhancements/releases) or through the plugin portal [plugin link](https://plugins.netbeans.apache.org/catalogue/?id=29).

To install a plugin, simply download and unpack it, then go to Tools -> Plugins -> Downloaded and select the file in the \*.nbm format.

{% include figure.liquid path="assets/img/posts/netbeans/plugin_instruction.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

After installation, it should look as follows:

{% include figure.liquid path="assets/img/posts/netbeans/php-enhancments.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

In the settings, you need to specify the path to the PHP interpreter

{% include figure.liquid path="assets/img/posts/netbeans/cli_inerpreter.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

and enable additional options and hints for the latest plugin
{% include figure.liquid path="assets/img/posts/netbeans/php-config-enhance.png" %}

### Debugging

When it comes to debugging, we have the following option.

{% include figure.liquid path="assets/img/posts/netbeans/Debugging.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

You also need to install the [Xdebug Helper](https://chromewebstore.google.com/detail/xdebug-helper-by-jetbrain/aoelhdemabeimdhedkidlnbkfhnhgnhm).
and set the appropriate IDE key.

{% include figure.liquid path="assets/img/posts/netbeans/xdebug_netbeans.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

In the case of debugging with Docker, we can run the test code on Docker as follows:

```
docker compose exec -e XDEBUG_MODE=debug -e XDEBUG_CONFIG="start_with_request=trigger idekey=netbeans client_host=host.docker.internal client_port=9003" myServiceInDocker vendor/bin/phpunit'
```

### Writing Code

When it comes to writing PHP code, you have to adjust a bit:

- importing all dependencies using the keyboard shortcut `Ctrl + Shift + I` instead of PHPStorm's `alt+enter`.
  In my opinion, this is even better as it opens a dialog window where we can decide which dependencies we should import.
- searching using "Ctrl + I" in the top right corner
- switching between files using "Ctrl + PageUp" and "Ctrl + PageDown"
- php doc `/** @var MyClass $myVariable */` works only in one line.

There are some quirks and borrowings from other IDEs. Ultimately, it can be used if you really want to.
Netbeans also provides support for the [Twig](https://twig.symfony.com/) templating language.
Syntax highlighting and auto-complete works, but unfortunately not much.
Quick search does not work for **Twig** files and other similar files and requires
appropriate modifications of PHP modules or extensions.

### Advantages

- **Lightweight** – NetBeans is noticeably less resource-intensive than PHPStorm. It runs smoothly even on older computers.
- **Open Source** – Completely free, with no licensing restrictions.
- **Support for multiple languages** – Besides PHP, it handles Java, JavaScript, HTML, C/C++ very well.
- **Built-in tools** – Debugger, profiler, GIT integration, support for frameworks (e.g., Symfony, Laravel).
- **Stability** – It rarely crashes, and updates are regular.
- **Simple configuration** – You can quickly start working without having to install dozens of extensions.
- **Extensibility** - You can quickly start extending your IDE, surprisingly it's much more convenient than in PHP
- **Blast from the past** - Interestingly, it's a bit of a blast from the past and you can just feel like you did when programming once, when the IDE didn't suggest everything
- **Indexing process for PHPStorm** - Currently, it's simple and efficient enough to use without any problems.
- **Contains a few unique ideas** - Surprisingly, I found a few cool and useful things in it, like the task list or a slightly different style of working with the terminal.
- **Ability to customize themes, keyboard shortcuts, and window layout.**

### Disadvantages

- **Autocomplete** – Works well, but requires the use of PHPDoc. In PHPStorm, the suggestions are more advanced and do not require such detailed documentation.
- **Fewer plugins** – The NetBeans community is smaller than, for example, VSCode, which limits the number of available extensions.
- **Appearance** – The user interface is somewhat outdated compared to the competition.
- **No native integration with Docker** – The environment has to be configured manually, which can be cumbersome when working with containers.
  PHP interpreter only in the native environment, you can't connect it from Docker, which is a bit inconvenient.
- **Static code analysis** – It works, but it's not as developed as in PHPStorm.
- **Fewer educational materials** – It's harder to find up-to-date tutorials and community support.
- **A bit outdated** - In the general competition, it probably lacks a lot compared to its free alternatives. Especially Visual Studio Code,
  but I bet this will change over time
- **No native support for Docker** -
- **Debugging** - only on the server, if we want to debug scripts it's already a bit more complicated and we have to tinker with it.
- **GIT Integration** - NetBeans has built-in GIT support, allowing convenient work with repositories directly from the IDE, but unfortunately, it doesn't work as I expected, so I recommend getting used to working with the terminal. Probably, we have to wait
  for bug fixes.
- **AI** - lack of integration with copilot, there is a plugin that simulates it, but it's not the same as in PHPStorm. It can just as well be a plus ;-)

### Sample Applications

NetBeans is great for small and medium PHP projects, where we don't need advanced refactoring tools or cloud integration. It's ideal for people who value simplicity and stability, while still wanting access to basic IDE functions.

## Tips and Tricks

- It's worth using the "Live Templates" feature for quickly inserting repetitive code snippets.
- You can configure your own keyboard shortcuts, which significantly speeds up work.
- NetBeans allows for quick switching between files and classes (Ctrl+O, Ctrl+Shift+O).
- It's important to regularly update the IDE and plugins - this improves stability and security.
- If you're working with Docker, you'll probably need to manually configure the environment.

## My Experiences and Recommendations

After a few months of working with NetBeans, I can say that it's a tool that allows you to focus on coding. It doesn't distract with an excess of options, while still providing everything needed for daily work. If you're looking for an alternative to heavy, paid IDEs - it's worth trying NetBeans. I especially recommend it to those who value simplicity, stability, and open source. However, you need to be patient, as working with this IDE is quite different from current market solutions and gives the impression of a cumbersome tool. I'm sure that over time, the development of Apache NetBeans will speed up and it will start to constitute a real alternative to JETBrains products. Even though most of their products can already be used for free, time passes, companies change hands, and code remains.

## And what about PHPStorm?

It's not that PHPStorm is bad. It's very good! You could also say that it's even too good. What I like about software is the feeling that I have control over what I'm doing. Unfortunately, in the case of JetBrains products, I miss that. I've always liked to see what's under the hood of the tools, the toys I used as a child, and I guess that's how it's going to stay with me.

Therefore, I decided to delve deeper into the issue of the IDE itself. However, the closed source code does not really encourage writing plugins. You really have to get into the documentation. Have knowledge in languages like Kotlin or Gradle. This is quite a high entry point for programmers who haven't had much contact with Java.

From a user's perspective, it's a very good tool for those who are starting their programming journey with PHP. It has a lot of facilitating "automagic" features, which can give the impression that programming in it is very easy. Unfortunately, it's not without a cost in computer resources. However, this also depends on how many "facilitations" we need in our work. It's a very interesting business model, where we make the user dependent on our product. Sounds familiar, right?

The more we get, the easier it is for us, the more often we are willing to use this tool, even at a much higher price. Fortunately, in this case, you can always use a text editor and struggle with the place where you forgot to put a semicolon. Tears are shed... Meanwhile, people are already generating entire applications using modern AI tools.

Who knows, maybe IDEs should serve something similar. The most important things are ahead of us. Why PHPStorm may not be the best available IDE and, consequently, why it might be worth focusing on alternative options. I would like to take a look at the alternative in the form of Apache NetBeans in this post.

On a daily basis, programming tools can be a bit overwhelming. PhpStorm automatically installs a lot of resource-intensive plugins, such as:

- [Github Copilot](https://plugins.jetbrains.com/plugin/17718-github-copilot) - a plugin that allows you to use GitHub Copilot conveniently. It's quite useful, but its resource intensity with certain configurations can be problematic. And everyone has limited resources, especially if you're programming on a laptop. In my opinion, it works much better in a limited context, when I use it from the web browser or just use the chat. However, it is useful in **Agent** mode for code generation. Usually, I ask it very silly things, or when I'm not sure if my approach makes sense. Well, because surely it has tried this before, right? Regarding the things I disabled from this plugin, it's worth mentioning that the autocomplete can really eat up my laptop's memory and it's not that useful. You could even say that "Autocomplete" makes you look like an idiot, but that's probably a topic for another post.

- [Jetbrains Assistant](https://plugins.jetbrains.com/plugin/22282-jetbrains-ai-assistant) - Nothing helps in programming like another AI assistant! Moreover, paid and from JetBrains. It is, in a sense, significantly better at debugging and suggesting than its competitor Copilot. No wonder, after all, it's a certain area to be developed. Of course, as long as there are other products or services that offer similar services. However, it must be said that it needs to be looked into. It's as resource-intensive as its competitor. It offers a pleasant and more readable interface and I can confidently say that it helped me solve several problems during my daily coding.

- [Database Management](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) - This explorer is really convenient. You can manipulate table views, quickly adjust the view, filters, and choose a suitable driver for your database. It summarizes the data very nicely and I can quickly see what I have inside. I can wholeheartedly recommend it if we care about a quick overview of the database. However, this client can also fail. In my case, it was the driver for the database when accessing the AWS MySQL database. I couldn't delete a record or view the changes made. Tunneling is possible, but it needs to be configured correctly. Anyway, a solid 7/10! But nothing beats the magic of writing queries in the terminal.

- [Docker](https://plugins.jetbrains.com/plugin/7724-docker) - I don't remember the last time I used it, because I do most things in the console.

- [FTP](https://plugins.jetbrains.com/plugin/13125-ftp-sftp-webdav-connectivity) - I usually only run this plugin to log into the server. I know I should use the terminal here. And I think I'll quickly switch to the terminal. It's worth mentioning the synchronization feature using **rsync**, it has really saved my skin when I had to quickly upload changes or fix a bug in production after a not-so-well-tested deployment.

- [Symfony](https://plugins.jetbrains.com/plugin/7219-symfony-plugin) - a lot of useful functions, this is a plugin that I recommend. Especially for beginners and those learning the [Symfony](https://symfony.com/) framework.

In summary, plugins are essential if we want to be productive, yet we gain more knowledge by not using these plugins as developers. By solving integration problems and directly interacting with the software, we can understand much better "what the author meant". It's a pity that I discovered this only recently. Better late than never!

Before I started the project, I had to disable unnecessary addons and restart my laptop five times. Additionally, I had to configure double the amount of memory on the Swap partition to even start screen sharing. I had to properly configure the entire project, ignore the appropriate folders, just to reduce the amount of memory used. This is really worrying, especially when working with larger projects. It delayed and bothered me in my daily work. One might suggest that most people work in PHP using a Mac, which can handle such loads without any problems. I wonder if it's okay, especially since I only recently started measuring how much power my laptop can consume when running at full capacity. It ended up that after disabling most of the unused plugins and skipping the files generated by the applications, I was finally able to work normally. Probably, you also need to optimize not only the code that we write but also the tools that we use must be properly configured for this purpose. It's a bit tempting to leave things as we found them.

Aside from the resource issues, the second important factor is that even if we have the ability to preview running processes, PHPStorm does many things automatically for us.

- Choosing the PHP version from the `composer.json` file,
- Installing dependencies.
- Fixing configuration errors for us.
- Auto-importing dependencies
- Task lists
- Debugging
- Code generation (with AI plugins)

So why did I decide to try switching to an older, free alternative?
{% include figure.liquid path="assets/img/posts/netbeans/usage.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

Below is NetBeans and above is PHPStorm... it eats memory like a rabbit eats cabbage :-)
This is certainly due to the fact that with great power comes even greater indexation process.
