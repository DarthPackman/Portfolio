---
title: 'ArtFight2025: An Infinite Runner of My Artfight Attacks'
pubDate: 2025-08-01
author: 'DarthPackman'
description: 'Built in Godot over the month of Artfight 2025, ArtFight2025 is an infinite runner starring pixel-art run cycles created as Artfight attacks, growing week by week with new characters, a leaderboard, and community-driven tuning.'
image:
    url: 'https://img.itch.zone/aW1nLzIxOTk3MDU1LnBuZw==/original/48DgCu.png'
    alt: 'ArtFight2025 cover art.'
tags: ["Godot", "GDScript", "Pixel Art", "Infinite Runner", "Artfight", "Game Design"]
---

**ArtFight2025** was built in Godot as an infinite runner starring pixel-art run cycles originally created as attacks for the annual art challenge Artfight. Rather than let a month's worth of run-cycle animations sit as standalone art pieces, the idea was to give them a shared home — an endless runner where each unlocked character represents an actual Artfight attack.

## Development Over Artfight Month

Rather than shipping once, the game grew publicly across a series of devlogs throughout July 2025: starting from a first build, then adding new characters in batches (3, 4, 6 at a time) as more Artfight attacks were completed, followed by a leaderboard, web-friendly export, and UI polish, before a final update closed things out in early August with two last characters and bug fixes. The project was also documented in a month-long dev diary series on TikTok, following the game's progress alongside the Artfight attacks that fed into it.

## Community-Driven Iteration

Player comments on itch directly shaped the game's tuning — multiple players reported trouble clearing the larger crystal obstacles, and rather than leaving it as a "skill issue," the response was iterative: first confirming it wasn't hardware-specific, then making crystals spawn later in a run, and adjusting sizing to make the jump timing more forgiving.

## Core Technical & Design Elements

1. **Character Roster Built From Real Attacks**: Each playable character corresponds to an actual pixel-art run cycle created as an Artfight attack, turning a month of art challenge output into unlockable in-game content.
2. **Endless Runner Core Loop**: Built obstacle-dodging and scrolling-world mechanics in Godot, with jump height tied to how long the jump button is held.
3. **Leaderboard System**: Added score tracking and a leaderboard UI partway through development to give repeat playthroughs a reason to keep coming back.
4. **Cross-Platform Export**: Shipped both a downloadable executable and a browser-playable HTML5 build, with fixes applied to both versions as issues came in.

## Final Result

ArtFight2025 turned a month of Artfight pixel-art attacks into a shared, playable endless runner, iterated in public based on direct player feedback rather than shipped once and left alone.

You can play the game [here](https://darthpackman.itch.io/artfight2025), and follow the month-long dev diary series on TikTok starting [here](https://www.tiktok.com/@darthpackman/video/7523081362853743928).