---
layout: page
title: projects.titles.project17
description: projects.descriptions.project17
img: assets/img/projects/file-upload1.png
importance: 1
category: web-development
---


# Project Description

This is a Symfony application created as part of a recruitment project for a PHP programmer position. Its purpose was to assess my skills in this programming platform and to fulfill the following requirements:

- The first page contains a form with three fields: First Name, Last Name, Attachment.
- The form fields are validated. First name and last name cannot be empty, and the file can only contain images no larger than 2MB.
- Data from the form is asynchronously saved in the database. After submission, a message is displayed indicating success or failure.
- The second page contains a list of data added through the form. This page is protected against unauthorized access.

The most important aspect of the application is the [code](https://github.com/Ziumper/file-upload), but I'm still including application screenshots below.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid  path="assets/img/projects/file-upload1.png" title="list" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/file-upload2.png" title="successfully validated form" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/file-upload3.png" title="validation" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    GUI screens of the application
</div>

## Used Technologies

As part of the project, I got acquainted with the following technologies and tools:

- [Symfony 7](https://symfony.com/7)
- [PHPUnit](https://phpunit.de/index.html)
- [Intervention Image](https://github.com/Intervention/image)
- [Doctrine](https://www.doctrine-project.org/)
