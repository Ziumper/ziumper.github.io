---
layout: post
title: "🧹 How to Remove Recipes from the `extra` Section in composer.json"
date: 2025-09-22
tags: php, composer, symfony, symfony-flex
description: "A quick guide to understanding and cleaning up the `extra` section in composer.json, especially Symfony recipes."
thumbnail: assets/img/posts/cyber-broom.png
giscus_comments: true
---

When working with PHP projects, especially those using Symfony,
you might encounter the `extra` section in your `composer.json`file.
This section often contains recipes that help configure your project.
However, over time, you may want to remove or clean up these recipes.

## What is the `extra` Section in composer.json?

The `extra` section is a special place in your `composer.json` file for custom configuration.  
It is used by Composer plugins, frameworks (like Symfony), and scripts to store additional settings.

### Example

```json
{
  "extra": {
    "symfony": {
      "allow-contrib": true,
      "recipes": {
        "symfony/console": {
          "version": "1.0",
          "ref": "abcdef"
        }
      }
    }
  }
}
```

## For what I used the `extra` section?

Well I used it to store Symfony Flex recipes.
Symfony Flex is a Composer plugin that helps manage Symfony applications by automating the installation and configuration of
packages. When you install a package that has a recipe, Symfony Flex adds configuration files and settings to your project automatically.
You may prefer to remove some of these recipes if they are no longer needed or if you want to customize your setup.
In my case it was docker setup that I didn't need.

```json
{
  "extra": {
    "symfony": {
      "allow-contrib": true,
      "docker": false
    }
  }
}
```

## Symfony flex

The Flex recipes make a few assumptions about your project's directory structure. Some of these assumptions can be customized by adding a key under the extra section of your composer.json file. For example, to tell Flex to copy any PHP classes into src/App instead of src:

```json
{
  "...": "...",

  "extra": {
    "src-dir": "src/App"
  }
}
```

## Troubleshooting

If you encounter issues after removing recipes, try the following steps:

- Run `composer install` to refresh your dependencies.
- Check for missing configuration files or environment variables.
- Review Symfony documentation for any manual steps required after recipe removal.

## Additional Resources

- [Symfony Recipes Documentation](https://symfony.com/doc/current/setup/flex.html)
- [Composer Extra Section](https://getcomposer.org/doc/04-schema.md#extra)
