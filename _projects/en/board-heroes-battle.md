---
layout: page
title: Board Heroes Battle
description: Augmented reality turn based board game for the Android platform
img: assets/img/projects/BoardHeroesBattle_unreal_castle.jpg
importance: 4
category: game-dev
---

# Project Description

The aim of this project was to analyze and compare selected aspects of developing, functionality, and operation of augmented reality applications on the Android platform using Unity and Unreal Engine game engines. Additionally, it involved conducting a comparative analysis and playability research of hybrid games in the context of enriching traditional board gameplay and expanding its multiplayer capabilities.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/BoardHeroesBattle_unity.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid  path="assets/img/projects/BoardHeroesBattle_unreal.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/BoardHeroesBattle_unreal_castle.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

# Functionality and Gameplay

The game upon which the applications were based is a blend of turn-based strategy (TBS) with the Dungeon-Crawler board game genre. The application, to combine gameplay types and expand the range of gaming experiences, utilizes AR technology. Through this technology, elements of computer games are transferred into the real world. Using AR, character models, a virtual die, and dungeon room are overlaid onto the physical game board for gameplay. The technology employs image tracking to place them on the captured image from the device's camera and simulate their placement in any room. The game utilizes an AR interface for augmented images.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/board_heroes_battle_main_menu.png" title="main-menu" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
     <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid  path="assets/img/projects/bhb_solo.png" title="solo game menu" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/bhb_lan.png" title="lan game menu" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

The game allows for both single-player and LAN multiplayer modes. Players aim to navigate through dungeons prepared in the form of boards with opponents they combat in turn-based gameplay. Each dungeon consists of several such boards in the form of 4 rooms. Characters fight by performing one of 3 actions in the order determined by the character's statistics. The player aims to defeat opponents on all boards through strategic selection of hero action targets, and in multiplayer gameplay, also cooperative elements. Randomness is introduced in the form of bonuses awarded through dice rolls or random functions. The game is composed of distinctive dungeons comprising thematic boards and unique opponents. The available player characters also possess characteristic class elements found in role-playing games, adding variety to the gameplay through unconventional environments, colorful characters, strategic selection of their movements, statistics, and unique abilities. An additional attraction is the extension of the user interface with AR buttons. Special markers are printed on the board, which, when covered by hand, trigger the execution of a specific action, replacing virtual buttons placed on the phone screen in the user interface.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/board.jpg" title="example board" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example of game board used in AR gameplay as image target 
</div>

To summarize, the following functionalities were implemented:

- Multiplayer and single-player modes with turn-based gameplay in augmented reality
- Image tracking
- Various levels and characters with unique abilities
- Balanced gameplay level
- Virtual die
- User-friendly interface
- Special effects and animations during combat
- Virtual buttons in augmented reality
- Optimized gameplay for performance

## Challenges

During the project development, several traps and challenges were overcome. Here are some of them:

- Ensuring consistency in visual layer and gameplay in both applications. Both Unity and Unreal Engine provide their own abstractions for creating AR applications. Despite differences, similar gameplay and mechanics were ensured.
- Implementation of local network gameplay in an AR world. Real-time synchronization of each player, when each has their own device and camera, required numerous technological compromises on both Unity and Unreal Engine sides.
- Combining a board game with a mobile AR application - the hybrid aspect introducing new mechanics to the game required tackling not only digital aspects but also designing traditional board games.

## Technologies Used

In the course of project implementation, I became acquainted with the following technologies and tools:

- Android Studio
- ARCore
- C++
- C#
- Unreal Engine
- Unity
- Blender
- Photoshop
- Gimp
- Visual Studio
- Unreal Engine Blueprints
- Unity Editor Profiler
- Export from Unity to Unreal Engine
- Profiling tools in Android Studio
