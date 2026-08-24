---
title: 'Mask The Man: A Security Camera Stealth Puzzle'
pubDate: 2026-01-25
author: 'DarthPackman'
description: 'Built for Global Game Jam 2026, Mask The Man is a top-down stealth game where you guide a masked thief past a network of security cameras — get caught in a solid rec-light beam, and it is game over.'
image:
    url: ''
    alt: 'Mask The Man cover art.'
tags: ["Game Jam", "Global Game Jam", "Stealth", "Puzzle", "Game Design"]
---

**Mask The Man** was built for **Global Game Jam 2026**, a top-down stealth puzzle game told from the perspective of a building's security camera network. The player guides a masked thief through a space watched by CCTV, timing movement to stay out of camera sightlines — get caught while a camera's rec light goes solid, and the run ends immediately.

## Core Gameplay Loop

Movement is point-and-click, with the win condition tied to reaching an exit gate and the loss condition tied to a camera successfully spotting the thief. The tension comes entirely from reading camera coverage and timing: cameras stay locked to fixed positions, and player success depends on threading gaps in their field of view rather than reacting to a mobile pursuer.

## Core Technical & Design Elements

1. **Point-and-Click Navigation**: Built character movement around a click-to-move system rather than direct control, suited to a slower, planning-first stealth pace.
2. **Camera-Based Detection System**: Implemented a lose condition tied directly to camera sightlines, with a visual "rec light" indicator communicating detection risk to the player in real time.
3. **CCTV Visual Filter**: Styled the game's presentation around a security-camera aesthetic, reinforcing the framing that the player is always being watched from a fixed, external viewpoint rather than experiencing the world directly.
4. **Level-Based Progression**: Structured multiple levels with their own camera layouts and exit gates, plus supporting menu, pause, and win/lose feedback systems.

## Final Result

Mask The Man successfully delivers a tightly-scoped stealth puzzle built entirely around camera-sightline tension, using a simple point-and-click loop and a strong CCTV visual hook to make the "don't get seen" premise immediately readable.

You can download and play the game [here](https://darthpackman.itch.io/mask-the-man).
You can watch a quick dev diary [here] (https://www.tiktok.com/@darthpackman/video/7612814994685676807).