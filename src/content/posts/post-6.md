---
title: 'Dungeoneer: Seed-Based Runtime PCG Dungeon Crawler'
pubDate: 2023-10-15
author: 'DarthPackman'
description: 'A 3rd-person, Z-targeting dungeon crawler developed in Unity for COMP 4980. This project showcases advanced runtime procedural content generation (PCG) for environments, characters, enemy stats, and music.'
image:
    url: 'https://darthpackman.itch.io/dungeoneer'
    alt: 'Dungeoneer title screen showing a character with a torch.'
tags: ["Class Project", "Procedural Generation", "Unity", "C#", "Game Development", "Runtime Generation", "Modular Design"]
---

[cite_start]**Dungeoneer** was a multi-faceted group project for **COMP 4980 (Procedural Content Generation)** that shifted from a walking simulator to a **3rd-person Z-Targeting Dungeon Crawler**[cite: 3007]. [cite_start]This project was a deep dive into **seed-based, adaptive PCG** [cite: 2882, 2886][cite_start], where core game elements—from the terrain mesh to individual enemy attributes—are generated *at runtime* based on a central world seed[cite: 3035].

## Core PCG Systems & Implementation

1.  [cite_start]**Modular Room Generation (Grid-Based PCG)**: Implemented a proprietary **grid-set system** to manage tile generation, ensuring room types (A, B, C) only spawn in designated areas (e.g., C-types only in corners) to create structurally sound dungeons[cite: 3029, 3032]. [cite_start]Rooms are instantiated and destroyed using colliders for efficient **chunk loading**[cite: 3034].
2.  **Character & Enemy PCG (My Contribution)**: Led the development of **Character PCG** in **C#**, where the **CharacterSeed** dictates multiple parameters at runtime, including:
    * [cite_start]**Visuals**: Randomizing armor pieces and head models[cite: 3036].
    * [cite_start]**Mechanical Stats**: Generating enemy attributes like movement speed, attack strength, and detection range[cite: 3036].
    * [cite_start]**Patrol AI**: Determining the enemy's patrol path and order using the **CharacterSeed** to add mechanical variety[cite: 3037].
3.  [cite_start]**Dynamic Music Integration**: Assisted with a novel **mood-based music generation** system where a room's seed determines a mood value, which, in turn, selects pre-generated audio files (piano, bass, drums) with matching mood values, ensuring sonic coherence[cite: 3015, 3019].

## Final Result

[cite_start]Dungeoneer is a showcase of my ability to implement complex, multi-layered PCG systems in a challenging development environment (Unity)[cite: 2944]. [cite_start]It demonstrates expertise in using modular design to create high-variance content, including custom enemy AI states (Attack, Chase, Patrol) and traversal mechanics (Jump, Dodge Roll)[cite: 2964, 2966].

You can play the game on [Itch.io](https://darthpackman.itch.io/dungeoneer).