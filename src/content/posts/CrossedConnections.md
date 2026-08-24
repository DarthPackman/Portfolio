---
title: 'Crossed Connections: A Memory-Based Repair Puzzle'
pubDate: 2026-06-01
author: 'DarthPackman'
description: 'Built for the GameDev.tv Game Jam 2026, Crossed Connections drops you in a manufacturing plant gone wrong, forcing you to memorize a broken room through a small window before working blind on a shared desk of levers, dials, and cables to fix it.'
image:
    url: 'https://img.itch.zone/aW1nLzI3NDkyMzc1LnBuZw==/original/BHsuK8.png'
    alt: 'Crossed Connections cover art.'
tags: ["Game Jam", "GameDev.tv Jam", "Godot", "GDScript", "Puzzle", "Memory", "Game Design"]
---

**Crossed Connections** was built for the **GameDev.tv Game Jam 2026**, a single-player memory puzzle game set in a manufacturing plant where everything has gone wrong and it's up to the player to fix it. Rather than seeing the puzzle directly and solving it in real time, the game forces players to memorize a room's state, then act on that memory blind — deliberately working against how most puzzle games let you look and act simultaneously.

## Core Gameplay Loop

Each of the plant's three rooms is checked through a dedicated window button: holding it raises a shutter to reveal that room's gauges, patterns, and current progress, but releasing it slams the shutter shut and cuts off the view entirely. From there, the player has to work purely from memory, using both hands across a shared desk of inputs — levers, keypads, dials, patch cables, and more — to make the tweak they believe is needed, before holding the window button again to check whether they solved the right room, or accidentally broke a different one in the process.

## Core Technical & Design Elements

1. **Peek-and-Recall Interaction Model**: Built the shutter/window system as the game's central mechanic, deliberately separating "looking" from "acting" to force memorization rather than real-time observation.
2. **Shared Multi-Room Input Panel**: Designed a single physical control desk — spanning inputs like buttons, levers, switches, keypads, knobs, sliders, patch cables, cranks, and pedals — that simultaneously affects three separate rooms, so a correct fix for one room can be an accidental break for another.
3. **Varied Locks & Outputs**: Paired inputs against locks like missing items and biometric scans, and outputs ranging from lighting changes to platform movement and pipe rotation, giving the puzzle logic real breadth despite the single shared panel.
4. **Cross-Platform Build**: Shipped both a browser-playable version and a more stable desktop build, flagging the browser version's rougher edges directly to players.

## Final Result

Crossed Connections successfully turns a simple "fix the machine" premise into a genuinely tense memory exercise, using a peek-then-commit interaction loop to make players hold an entire broken room in their head while working blind.

You can play the game [here](https://darthpackman.itch.io/crossed-connections).