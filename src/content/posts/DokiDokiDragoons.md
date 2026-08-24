---
title: 'DokiDokiDragoons: A Doki-Themed Survivor Game'
pubDate: 2025-08-16
author: 'DarthPackman'
description: 'Built for Doki Jam with a small team, DokiDokiDragoons is a Vampire Survivors-style action game set in the Dokiverse, built around a sequenced item-order weapon system and a designed (if not fully realized) chain-reaction evolution system.'
image:
    url: 'https://img.itch.zone/aW1nLzIyNzYwNzM1LnBuZw==/original/lijg0Q.png'
    alt: 'DokiDokiDragoons cover art.'
tags: ["Game Jam", "Godot", "Survivor Game", "Action", "Game Design", "Doki Jam"]
---

**DokiDokiDragoons** was built for **Doki Jam** with a small team: programming by DarthPackman, Sol (_restitutororbis), and Hyperflare; art by awildzo, Hyperflare, and DarthPackman; animation by DarthPackman and awildzo; and sound by Luca Chūba. The pitch, in the design doc's own words, was **"Vampire Survivor meets Dokibird, with chaining status effects"** — an auto-battling survivor game set in DokiVille, part of the Dokiverse, where the player's Dragoons come to Dokibird's rescue.

## Design Pillars

The game was scoped around three intentional pillars: a **humorous mood** rather than a serious tone, a setting firmly rooted in **DokiVille**, and a **heroic experience** framing the player as the rescuer riding to Dokibird's aid. The core gameplay loop follows a simple survive → kill → grow cycle: survive incoming enemies, kill them for rewards, use those rewards to grow stronger, and repeat under mounting pressure.

## Sequenced Item Order System

Rather than firing all equipped weapons independently and simultaneously (the usual survivor-genre approach), DokiDokiDragoons was designed around a chained item order: each weapon activates in sequence rather than in parallel, with short cooldowns linking one weapon's activation to the next triggering. This turns weapon loadout order into a deliberate strategic choice rather than an afterthought — the sequence itself shapes how often each weapon fires and how they interact.

## Weapon Archetypes & Chain Reactions

Weapons were designed across four families — **Regular, Long, Egg, and Chonky** — each expressed through four archetypes: Melee, Projectile, Aura, and Zone (for example, Chonky's melee form is a Hammer, while Egg's aura form is a "Rotten Egg" effect). Layered on top of this was a planned chain-reaction system between families: Chonky weapons apply crowd control and detonate into Egg-based damage-over-time effects, Long weapons apply debuffs that spread and renew, and Regular weapons sit at the center, enhanced and renewed by the others. A secondary effects system (like a "Weaken" debuff reducing enemy damage output for a set duration) was designed to layer on top of this chain further.

**Worth noting honestly:** the evolution tier of this system — upgrading base weapons into evolved forms once enough duplicates were collected — was fully designed (start → upgrade → evolution progression paths are mapped out in detail for MVP, Goal, and long-term-goal scope) but never actually got implemented within the jam's timeframe. What shipped is the base weapon roster and sequencing system, not the full evolution chain.

## Post-Jam Support

Rather than stopping at the jam deadline, the game kept receiving fixes afterward — a melee weapon trigger bug and an experience-point bug were both patched in the weeks following release, based on direct player feedback (including requests like keeping the background music playing while paused).

## Final Result

DokiDokiDragoons successfully delivers a working, sequenced-weapon survivor game with a distinct identity within the Dokiverse, backed by a genuinely ambitious systems-design document — even if the full evolution and chain-reaction vision remains a documented next step rather than a shipped feature.

You can play the game [here](https://darthpackman.itch.io/dokidokidragoons).
You can even watch some short dev diaries [here] (https://www.tiktok.com/@darthpackman/video/7534209725227912504).