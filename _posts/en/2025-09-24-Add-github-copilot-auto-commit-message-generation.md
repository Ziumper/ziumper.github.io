---
layout: post
title: "How integrate GitHub Copilot to generate commit messages automatically?"
date: 2025-09-24
tags: git github productivity copilot
description: "This post explains how to use GitHub Copilot to generate commit messages automatically, improving productivity and ensuring clear commit history."
thumbnail: assets/img/posts/githubcopilot.png
giscus_comments: true
---

The most important part of working in a team is communication. And one of the most important ways to communicate with your team is through commit messages.
A good commit message should be clear, concise, and informative. It should describe what changes were made and why they were made.
However, writing good commit messages can be time-consuming and tedious.
That's where GitHub Copilot comes in. GitHub Copilot is an AI-powered code completion tool that can help you write code faster and more efficiently.
But did you know that GitHub Copilot can also help you write better commit messages? In this post, we'll show you how to
use GitHub Copilot to generate commit messages automatically.

## Step 1: Add GitHub Copilot template to your repository

To get started, you need to add a GitHub Copilot template to your repository. This template will provide GitHub Copilot with the necessary context to generate commit messages.
You can create a new file in your repository called `.github/git-commit-instructions.md` and add the following content:

```
# Git Commit Instructions

When making a commit, please follow these guidelines to ensure clarity and consistency in our commit history.
Provide description in the commit message.
* Describe the changes made in the commit and intended impact on the codebase in new lines.
* Make sure to include:
    * What was changed (e.g., added feature, fixed bug, updated documentation).
    * Why the change was necessary (e.g., to improve performance, fix an issue, enhance user experience).
    * Any relevant details that help understand the context of the change.
* Elaborate on the reasoning behind the changes and any relevant context that may help reviewers understand the
commit better.
```

This template provides guidelines for writing good commit messages and will help GitHub Copilot generate better commit messages.

## Step 2: Use GitHub Copilot to generate commit messages

Once you have added the template to your repository, you can start using GitHub Copilot to generate commit messages.
When you are ready to make a commit, you can use one of the following IDE editors that support GitHub Copilot:

- Visual Studio Code
- JetBrains IDEs (e.g., IntelliJ IDEA, PyCharm, WebStorm)
- Neovim

When you click the commit message editor button, GitHub Copilot will suggest a commit message based on the changes
you have made and the guidelines provided in the template. GitHub Copilot will automatically suggest a commit message based on
the changes you have made and the guidelines provided in the template.

## Conclusion

Using GitHub Copilot to generate commit messages automatically can help you write better commit messages and improve your productivity.
By adding a GitHub Copilot template to your repository and using one of the supported IDE editors
that support GitHub Copilot, you can easily generate clear and informative commit messages.
Give it a try and see how it can improve your workflow!
I'm already using it and I love it! 😊
