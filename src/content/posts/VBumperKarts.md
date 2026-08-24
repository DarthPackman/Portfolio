---
title: 'VBumper Karts: Parry-Driven Kart Combat'
pubDate: 2026-02-15
author: 'DarthPackman'
description: 'Built for VJam, VBumper Karts is a bumper-kart racing game centered on a boost-and-parry duel: charge in with a boost, or time a parry to counter an opponent charging you.'
image:
    url: 'https://img.itch.zone/aW1nLzI1NTA4MDE3LnBuZw==/original/ssehDc.png'
    alt: 'VBumper Karts cover art.'
tags: ["Game Jam", "VJam", "Unreal Engine", "Racing", "Game Design"]
---

**VBumper Karts** was built for **VJam**, a kart-racing game built around a tight risk/reward combat loop layered on top of standard driving. Movement uses WASD with a jump, but the game's identity comes from its two combat inputs: right-click to boost into an aggressive charge, and left-click to parry an incoming boost from another kart.

## Core Gameplay Loop

Racing and combat are fused rather than separated — a boosted charge can knock an opponent off course or interrupt their run, but timing a parry against that same charge flips the exchange, turning an incoming hit into a countered opportunity. That tension between racing for position and reading opponents for a well-timed parry is the core hook.

## Core Technical & Design Elements

1. **Boost & Parry System**: Built dedicated boost and parry inputs with distinct timing windows, so that landing or countering a charge requires active reads rather than passive driving.
2. **Kart Movement & Physics**: Implemented WASD-based kart movement with jumping, tuned for a bumper-kart feel rather than realistic racing physics.
3. **Jam-Scoped Iteration**: Refined the core boost/parry interaction as the primary feature within VJam's tight development window, prioritizing one well-tuned mechanic over a broader feature set.

## Final Result

VBumper Karts delivers a compact kart-combat experience where the core tension isn't just who's fastest, but who reads a boost-and-parry exchange correctly at the right moment.

You can download and play the game [here](https://darthpackman.itch.io/vbumber-karts).
You can see a small dev diary [here] (https://www.tiktok.com/@darthpackman/video/7612816305653107986).