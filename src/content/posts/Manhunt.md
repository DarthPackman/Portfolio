---
title: 'Manhunt: Mobile Pursuit Game'
pubDate: 2022-03-15
author: 'DarthPackman'
description: 'Developed as part of a Mobile App Development course, Manhunt is a location-based mobile take on the classic game of Hunter, using a Firebase Realtime Database and the Google Maps API to track hunters and hunted in real time.'
image:
    url: '/Manhunt.webp'
    alt: 'Manhunt game banner.'
tags: ["University Project", "Mobile App Development", "Android", "Real-Time", "Game Design", "Java", "Firebase", "Google Maps API"]
---

**Manhunt** was developed for **COMP 3160, Mobile App Development 2** (Winter 2022) as a digital, location-aware reimagining of the classic outdoor game Hunter. Players join a shared lobby, are assigned the role of hunter or hunted, and use live GPS tracking to chase each other down (or evade capture) across a real-world play area.

## Core Gameplay

Once a lobby fills and the host starts the match, roughly 10% of players are assigned as hunters and the rest as hunted. Hunted players get a 2-minute head start to find a hiding spot, while hunters wait it out at their starting position. From there, both sides get live positional updates on a map view: hunted players see hunter locations, and hunters see hunted locations, both refreshing periodically over the following 15-minute round. When a hunter physically catches up to a hunted player, the hunted player reveals a randomly generated tag code, the hunter enters it into the app, and that player flips over to the hunter team. Hunters win by tagging 90% of players before time runs out; the hunted win by keeping over 10% of the group free until the timer hits zero.

## Core Technical & Design Elements

1. **Firebase Realtime Database Backend**: Lobbies, player objects, game state, and each player's live latitude/longitude are all synced through a Firebase Realtime Database, with a `gamestate` value driving the app through each phase of a match (lobby → role assignment → live play → timeout).
2. **Google Maps API Integration**: Used the Maps SDK to render each player's live position, lock down camera gestures for a cleaner in-game map, and continuously pull device location to push back into the database.
3. **Custom Countdown Timer Logic**: Built a `CountDownTimer`-driven loop that updates the on-screen timer every second while also triggering periodic location refreshes and phase transitions (e.g., ending the round and moving everyone to the results screen).
4. **Tag-Code Verification System**: Implemented a randomly generated per-player tag code that must be manually entered by a hunter to confirm a catch, preventing accidental or disputed tags.

## Known Issues

As a course project prototype, a few pieces of technical debt were documented rather than polished away: the app currently hardcodes a reference to a single lobby (`lobbies/0`) instead of dynamically creating and querying lobbies by name, the countdown timer breaks if a player's phone locks mid-round (a fix would move to timestamp-based timing via `System.currentTimeMillis()` instead of a stored timer preference), and several screens (host/join lobby, hunter/hunted play views) were designed to eventually show live player lists and maps that aren't fully wired up yet.

## Final Result

Manhunt successfully demonstrates a working location-based multiplayer prototype, combining a real-time cloud database, live GPS tracking, and simple but effective hunter/hunted mechanics that turn any outdoor space into a playable game board — including, notably, extending play indoors in ways the original physical game couldn't.

You can view the source code and project repository [here](https://github.com/DarthPackman/Manhunt), and watch a demo of it in action [here](https://youtu.be/oEHpBnhZMDQ).