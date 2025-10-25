---
layout: post
title: "Alternative IDE for PHP? Apache NetBeans, but not only!"
date: 2025-10-08
tags: php, ide, netbeans
description: "Why not PHPStorm? Why not VIM or Visual Studio Code? For some time, I have been looking for a tool that is not overloaded with features, yet useful and powerful enough to make everyday work easier."
thumbnail: https://netbeans.apache.org/_/images/apache-netbeans.svg
giscus_comments: true
toc:
  sidebar: left
---

This post will be a bit longer, as I want to present the pains and the journey this IDE has gone through
from old software to its newer version. I also want to focus on the drawbacks and, in a sense, show
what working in Apache NetBeans looks like today. When did I come across it? Why did I start using it only recently,
and why does it seem that this IDE is making a comeback! I will also try to present how to configure the IDE and my first impressions.

## PHPStorm

It's not that PHPStorm is bad. It's very good! You could even say, maybe too good.
What I like in software is the feeling that I have control over what I'm doing.
Unfortunately, with JetBrains products, I miss that.
I've always liked to look under the hood of tools and toys I used as a child, and I guess that stayed with me.

Therefore, I decided to dig deeper into the IDE itself.
However, the closed source code doesn't really encourage writing plugins.
You really have to read the documentation.
You need knowledge of programming languages like Kotlin or Gradle.
That's quite a big entry point for developers who haven't had much contact with Java.

From a user's perspective, it's a very good tool for people starting their programming adventure with PHP.
It has a lot of helpful magic, which makes programming in it feel much easier.
Unfortunately, this comes at a cost in terms of computer resources. Of course, it also depends on how many "conveniences" you need during your work.
Overall, it's a very interesting business model, where you make the user dependent on your product. Sounds familiar, right?

The more, the easier it gets, the more likely we are to use this tool, even at a much higher price.
In this case, fortunately, you can always use Notepad and struggle with missing semicolons.
A tear falls... Meanwhile, people are already generating entire applications using modern AI tools.

Who knows, maybe IDEs should serve a similar purpose.
But the most important part is ahead.
Why might PHPStorm not be the best available IDE, and why it might be worth focusing on alternative options.
In this post, I'd like to look at the alternative: Apache NetBeans.

On a daily basis, developer tools can be a bit overwhelming. PhpStorm automatically installs a lot of resource-hungry plugins, such as:

- [Github Copilot](https://plugins.jetbrains.com/plugin/17718-github-copilot) - a plugin that allows you to conveniently use GitHub Copilot. It's quite useful, but its resource consumption with certain configurations can be problematic. Everyone has limited resources, especially when programming on a laptop. In my opinion, it works much better in a limited context, when I use it from a web browser or just use the chat. However, it is useful in **Agent** mode for code generation. I usually ask it very silly questions, or when I'm not sure if my approach makes sense. Surely, it has tried this before, right? Of the features I disabled in this plugin, it's worth mentioning autocomplete, which can eat up my laptop's memory and isn't that useful. You could even say that "Autocomplete" makes you dumb, but that's a topic for another post.

- [Jetbrains Assistant](https://plugins.jetbrains.com/plugin/22282-jetbrains-ai-assistant) - Nothing helps with programming like another AI assistant! Plus, it's paid and from JetBrains. In some ways, it's much better at debugging and suggesting than its competitor Copilot. No wonder, it's an area to be explored. Of course, as long as there are other products or services that offer similar features. It's just as resource-hungry as its competitor. It offers a pleasant and more readable interface, and I can confidently say it helped me solve several problems during daily coding.

- [Database Management](https://plugins.jetbrains.com/plugin/10925-database-tools-and-sql-for-webstorm) - This explorer is really convenient. You can manipulate table views, quickly adjust views, filters, and choose the right driver for your database. It nicely summarizes data and I can quickly review what's inside. I wholeheartedly recommend it if you need a quick database overview. However, even this client can fail. In my case, it was the database driver when accessing an AWS MySQL database. I couldn't delete a record or preview changes made. Tunneling is possible, but you need to configure it well. Anyway, a solid 7/10! But nothing beats the magic of writing queries in the terminal.

- [Docker](https://plugins.jetbrains.com/plugin/7724-docker) - I don't remember the last time I used it, since I do most things in the console.

- [FTP](https://plugins.jetbrains.com/plugin/13125-ftp-sftp-webdav-connectivity) - I usually launch this plugin just to log into the server. I know I should use the terminal here. And I will probably switch to the terminal soon. It's worth mentioning the synchronization feature using **rsync**, which has really saved me more than once when I had to quickly upload changes or fix a bug in production after a not-so-well-tested deployment.

- [Symfony](https://plugins.jetbrains.com/plugin/7219-symfony-plugin) - lots of useful features, this is a plugin I recommend. Especially for beginners and those learning the [Symfony](https://symfony.com/) framework.

Summing up, plugins are essential if you want to be productive, but as developers, you gain more knowledge by not using these plugins.
By solving integration problems and interacting directly with the software, you can understand much better "what the author had in mind." It's a pity I only discovered this recently. Better late than never!

Before I launched the project, I managed to disable unnecessary add-ons and restart my laptop five times.
Additionally, I had to configure double the amount of memory on the Swap partition just to be able to start screen sharing.
I had to properly configure the whole project, ignore the right folders, just to reduce memory usage.
This is really worrying, especially when working with larger projects.
It delayed and bothered me in my daily work. You might think that most people working in PHP use a Mac, which can handle such loads without much trouble. I wonder if that's really okay, especially since I only recently started measuring how much power my laptop can consume when working at full capacity. It ended up that after disabling most unused plugins and skipping project files generated by applications, I was finally able to work normally. Most likely, you need to optimize not only the code you write, but also the tools you use must be properly configured for this purpose. It's a bit tempting to leave things as you found them.

Apart from resource issues, the second important factor is that even if you have the ability to view running processes, PHPStorm does a lot of things automatically for you.

- Choosing the PHP version from the `composer.json` file,
- Installing dependencies.
- Fixing configuration errors for you.
- Auto-importing dependencies
- Task lists
- Debugging
- Code generation (with AI plugins)

## Apache Netbeans

To begin, it's worth mentioning the history of Apache NetBeans. It is an integrated development environment that was originally created mainly for Java programming, but now supports several programming languages, including PHP. The general timeline looks as follows:

- **1996** – At Charles University in Prague, a group of students starts the Xelfi project, one of the first Java IDEs written in Java.
- **1997-1998** – The Xelfi project is developed further and its name changes to NetBeans.
- **1999** – Sun Microsystems buys NetBeans from the creators in Prague and begins official development, releasing it as open source software.
- **2000-2010** – NetBeans develops dynamically, gaining support for new Java versions and other technologies. It becomes one of the most popular IDEs for Java developers.
- **2010** – Oracle acquires Sun Microsystems and thus becomes the owner of the NetBeans project.
- **2016** – Oracle decides to donate NetBeans to the Apache Software Foundation, starting the project's incubation process.
- **2018** – NetBeans officially becomes an Apache project and receives the name Apache NetBeans. The first version under the Apache brand is released – Apache NetBeans 9.0.
- **2018-present** – Apache NetBeans is actively developed by the open source community. New versions are released regularly, supporting the latest technologies and programming languages.

{% include figure.liquid path="assets/img/posts/netbeans/netbeans_ide.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

### Configuration

Configuring NetBeans is relatively simple, though it requires a few steps:
NetBeans can be downloaded directly from the Apache website. The installer is available for all popular operating systems.
The most convenient way is to download Apache NetBeans directly from the [repository](https://github.com/apache/netbeans/releases).

After installation, it's worth reviewing the available plugins. NetBeans natively supports PHP, but you can install support for other languages.
Above all, I recommend enabling the default PHP plugin.

{% include figure.liquid path="assets/img/posts/netbeans/netbeans_php_plugin.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

Additionally, I recommend installing this plugin via GitHub: [netbeans-php-enhancements](https://github.com/junichi11/netbeans-php-enhancements/releases)
or via the plugin portal [plugin link](https://plugins.netbeans.apache.org/catalogue/?id=29)

To install the plugin, simply download and unpack it, then go to Tools -> Plugins -> Downloaded and select the file in the \*.nbm format.

{% include figure.liquid path="assets/img/posts/netbeans/plugin_instruction.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

After installation, it should look as follows:

{% include figure.liquid path="assets/img/posts/netbeans/php-enhancments.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

In the settings, you need to specify the path to the PHP interpreter

{% include figure.liquid path="assets/img/posts/netbeans/cli_inerpreter.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

### Debugging

When it comes to debugging, we have the following option.

{% include figure.liquid path="assets/img/posts/netbeans/Debugging.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

You also need to install [Xdebug Helper](https://chromewebstore.google.com/detail/xdebug-helper-by-jetbrain/aoelhdemabeimdhedkidlnbkfhnhgnhm)
and set the appropriate IDE key.

{% include figure.liquid path="assets/img/posts/netbeans/xdebug_netbeans.png" class="img-fluid rounded z-depth-1"  zoomable=true %}

When debugging with Docker, you can run test code in Docker as follows:

```
docker compose exec -e XDEBUG_MODE=debug -e XDEBUG_CONFIG="start_with_request=trigger idekey=netbeans client_host=host.docker.internal client_port=9003" myServiceInDocker vendor/bin/phpunit'
```

### Git Integration

NetBeans has built-in GIT support, which allows convenient work with repositories directly from the IDE, but unfortunately it doesn't work quite as I would expect, so here I recommend arming yourself with terminal work. Most likely, you need to wait for bug fixes.

### Personalization

The ability to customize themes, keyboard shortcuts, and window layouts.

### Advantages

- **Lightweight** – NetBeans is noticeably less resource-intensive than PHPStorm. It runs smoothly even on older computers.
- **Open Source** – Completely free, with no license restrictions.
- **Support for many languages** – Besides PHP, it works great with Java, JavaScript, HTML, C/C++.
- **Built-in tools** – Debugger, profiler, GIT integration, support for frameworks (e.g., Symfony, Laravel).
- **Stability** – Rarely crashes, and updates are regular.
- **Simple configuration** – You can start working quickly without installing dozens of extensions.

### Disadvantages

- **Autocomplete** – Works well but requires using PHPDoc. In PHPStorm, suggestions are more advanced and do not require such detailed documentation.
- **Fewer plugins** – The NetBeans community is smaller than, for example, VSCode, so the number of available extensions is limited.
- **Appearance** – The user interface is somewhat outdated compared to the competition.
- **No native Docker integration** – You have to configure the environment manually, which can be inconvenient when working with containers.
- **Static code analysis** – Works, but is not as extensive as in PHPStorm.
- **Fewer educational materials** – It's harder to find up-to-date tutorials and community support.

### Example use cases

NetBeans works great in small and medium PHP projects where you don't need advanced refactoring tools or cloud integration. It's ideal for people who value simplicity and stability while still wanting access to basic IDE features.

### Comparison of NetBeans with other IDEs

| Feature / IDE     | NetBeans    | PHPStorm       | Visual Studio Code | Sublime Text     |
| ----------------- | ----------- | -------------- | ------------------ | ---------------- |
| Price             | Free (OSS)  | Paid           | Free               | Paid             |
| Performance       | Lightweight | Resource-heavy | Lightweight        | Very lightweight |
| PHP support       | Very good   | Excellent      | Good (plugins)     | Good (plugins)   |
| Debugger          | Yes         | Yes            | Yes (plugins)      | No               |
| Refactoring       | Basic       | Advanced       | Basic              | Limited          |
| GIT integration   | Yes         | Yes            | Yes                | Yes              |
| Docker            | Manual      | Built-in       | Plugins            | None             |
| Plugins           | Few         | Moderate       | Very many          | Many             |
| Customization     | Moderate    | Very high      | Very high          | High             |
| Community support | Moderate    | Very high      | Very high          | High             |
| Updates           | Regular     | Regular        | Very frequent      | Less frequent    |

## FAQ – Frequently Asked Questions

**Is NetBeans suitable for large projects?**

It is, although in very large projects it may be less efficient than PHPStorm. However, for most use cases, it is sufficient.

**Does NetBeans support PHP frameworks?**

Yes, it supports popular frameworks like Symfony, Laravel, Zend. However, this sometimes requires manual configuration.

**How is the support for unit testing?**

NetBeans allows integration with PHPUnit, and you can run tests directly from the IDE.

**Can you use NetBeans on Linux/Mac/Windows?**

Yes, NetBeans is cross-platform.

**Does NetBeans support modern PHP standards?**

Yes, it supports PHP 8.x, typing, and static code analysis tools.

**How is the support for JavaScript and frontend?**

NetBeans supports JavaScript, HTML, CSS, and frontend frameworks, although not as well as VSCode.

## Tips and tricks

- It's worth using the "Live Templates" feature for quickly inserting repetitive code snippets.
- You can configure your own keyboard shortcuts, which significantly speeds up work.
- NetBeans allows quick switching between files and classes (Ctrl+O, Ctrl+Shift+O).
- It's worth regularly updating the IDE and plugins – this improves stability and security.
- If you work with Docker, you will probably need to configure the environment manually.

## My experience and recommendations

After several months of working with NetBeans, I can say that it is a tool that lets you focus on code. It doesn't distract with an excess of options, yet provides everything needed for daily work. If you're looking for an alternative to heavy, paid IDEs – it's worth trying NetBeans. I especially recommend it to those who value simplicity, stability, and open source.

Do you have questions or your own experience with NetBeans? Share in the comments!
