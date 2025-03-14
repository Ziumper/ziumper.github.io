---
page_id: repositories
layout: page
permalink: /repositories/
title: repositories
description: Welcome inside vault of code, where I post my most recent, valuable code repositories and stats about it.
nav: true
nav_order: 4
---

## Stack Overflow

![](https://img.shields.io/stackexchange/stackoverflow/r/6695238?color=orange&label=reputation&logo=stackoverflow&style=for-the-badge&cacheSeconds=86400)

---

## Daily Dev

## <a href="https://app.daily.dev/ziumper"><img src="https://api.daily.dev/devcards/v2/ms4hmNxr453B3wP7kaNo8.png?type=wide&r=jp7" width="652" alt="Ziumper's Dev Card"/></a>

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
