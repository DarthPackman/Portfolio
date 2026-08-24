---
title: 'Dungeoneer: Procedural Content Generation Capstone'
pubDate: 2023-12-04
author: 'DarthPackman'
description: 'Developed in Unity as a Procedural Content Generation capstone project, Dungeoneer is a 3rd-person Z-targeting dungeon crawler featuring runtime and baked PCG systems for map layouts, dynamic enemy generation, and adaptive music.'
image:
    url: 'https://img.itch.zone/aW1nLzE0MTc4Mjc1LnBuZw==/original/4QGnZk.png'
    alt: 'Dungeoneer'
tags: ["University Project", "Unity", "Procedural Content Generation", "PCG", "Game Design", "Csharp"]
---

**Dungeoneer** was developed in Unity as a PCG capstone project alongside Gustavo Kang Shim and Zion Chong, serving as an exploration into comprehensive procedural systems. The core experience combines a 3rd-person Z-targeting dungeon crawler framework with algorithmic generation across multiple pillars, including map layouts, enemy generation, and adaptive audio.

## Core Technical & Design Elements

1. **Procedural Map Design & Layouts**: Utilized a SeedManager and RoomHolder architecture where a world seed and XY coordinates pick room types, wall variations, and rotations to construct the dungeon structure.
2. **Algorithmic Enemy Generation**: Employed character seed logic to procedurally assemble modular model pieces, determine stats, handle spawn locations, and establish patrol orders and states.
3. **Adaptive Procedural Music**: Implemented a MusicController that uses room seeds to select preset song structures (such as chorus, verse, and bridge) and mood-based audio files—including piano, guitar bass, and drums—complete with pitch modifications.

## Final Result

**Dungeoneer** successfully demonstrates a multi-faceted application of procedural content generation, integrating baked and runtime systems to deliver a highly replayable and dynamic dungeon-crawling experience.

You can download and play the game [here](https://darthpackman.itch.io/dungeoneer).