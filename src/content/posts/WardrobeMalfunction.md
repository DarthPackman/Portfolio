---
title: 'Wardrobe Malfunction: A Frantic Backstage Costume Game'
pubDate: 2026-08-29
author: 'DarthPackman'
description: 'Built in GameMaker for VJam Take 2 alongside Shroudy Software and AWildSun Games, Wardrobe Malfunction puts you in the role of a backstage costume designer with 90 seconds to dress a bare mannequin, hitting the audience expectations for CAMP, EDGE, EMO, POSH and RIZZ before the tomatoes start flying.'
image:
    url: '/WardrobeMalfunction.webp'
    alt: 'Wardrobe Malfunction title screen with red stage curtains and PLAY and EXIT buttons.'
tags: ["Game Jam", "VJam", "GameMaker", "Game Design"]
---

**Wardrobe Malfunction** was built in GameMaker for **VJam Take 2** (August 16-29, 2026) alongside [Shroudy Software](https://shroudysoftware.itch.io/) and [AWildSun Games](https://awildsun.itch.io/). It's a fast-paced dress-up game set in the chaos backstage at a theatre. The actor is due on stage in 90 seconds, and as the costume designer it's your job to get them dressed for the part.

## Core Gameplay Loop

Each round gives you a role to dress for, such as "Buster the Melancholy Outlaw, Tailor-Master of the Suite", and a bare mannequin. Arrow buttons let you browse heads, tops, and bottoms from your wardrobe, and every piece adds value to five style motifs: **CAMP, EDGE, EMO, POSH, and RIZZ**. A white tick mark on each motif bar shows what the audience expects. Get your outfit to or past the mark and you earn a star, and miss it and you don't.

Miss too many marks and the outfit is a flop, and the tomatoes start flying. Three flops overall and you're fired.

## Progression

Each week of shows ends with a visit to the **Boutique**, where you add new pieces to your wardrobe. The score is your total stars before you get fired, so every run is a push to build a deeper, better-matched wardrobe before the flops catch up with you.

## Core Technical & Design Elements

1. **Motif-Based Scoring System**: Designed five style motifs that every clothing piece contributes to, so outfit building is a quick matching puzzle rather than picking the "best" item.
2. **Audience Expectation Thresholds**: Each role sets its own target for every motif, shown as a tick mark on the bar, which turns the dress-up loop into a readable pass/fail check.
3. **Time Pressure & Flop System**: A 90-second clock and a three-flop limit create the tension, with the role-flavored prompts keeping the tone comedic rather than punishing.
4. **Weekly Boutique Progression**: Shows are grouped into weeks, with a shop between them that expands your wardrobe and rewards long runs.

## Final Result

Wardrobe Malfunction turns a simple dress-up premise into a short, replayable scramble: read the role, match the audience's motifs, and keep your flops low enough to survive the week.

You can play the game on [GX.games](https://gx.games/games/zm06u0/wardrobemalfunction/) or [itch.io](https://darthpackman.itch.io/wardrobe-malfunction), and view the source code [here](https://github.com/DarthPackman/WardrobeMalfunction).
