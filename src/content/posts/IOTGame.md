---
title: 'Cooperative IoT Sensor Game'
pubDate: 2024-11-24
author: 'DarthPackman'
description: 'Developed as a COMP4980 project at Thompson Rivers University alongside Braden Wielgoz, the Cooperative IoT Sensor Game is a two-player cooperative experience inspired by Keep Talking and Nobody Explodes, utilizing an Arduino MKR WiFi 1010 and MKR IoT Carrier to run modular mini-games linked to a cloud database.'
image:
    url: ''
    alt: 'Cooperative IoT Sensor Game'
tags: ["University Project", "IoT", "Arduino", "Game Design", "Cplusplus"]
---

**Cooperative IoT Sensor Game** was developed for COMP4980 at Thompson Rivers University alongside Braden Wielgoz. Inspired by titles like Keep Talking and Nobody Explodes and Bop It, the project combines physical hardware interaction with cooperative communication. One player operates an IoT device featuring buttons, LEDs, and an LCD screen, while the second player uses an instruction manual to decode information and guide their partner through various challenges.

Beyond the gameplay hook, the project was framed around real practical value: the chosen mini-games target skills like memory, pattern recognition, reaction time, and hand-eye coordination, with an eye toward applications like cognitive and motor-skill training for seniors or patients recovering from injuries, and early-childhood coordination practice.

## Core Technical & Design Elements

1. **Modular Game Framework**: Built using an Arduino MKR WiFi 1010 and an MKR IoT Carrier to dynamically load individual mini-game files, featuring implementations for Simon Says, Whack A Mole, Lights Out, and Light Code.
2. **Asynchronous Timer Management**: Overcame Arduino's built-in delay limitations by leveraging millis() to handle concurrent master session timers and individual game-specific logic.
3. **Cloud & Database Integration**: Utilized Arduino Cloud to initialize game sessions, stream timers, and upload match scores, with future recommendations to migrate to Firebase for enhanced stability and user progression tracking.

## Scope & Cuts

The original proposal called for 8 games and gimmicks alongside a printed manual of special rules. Mid-project, scope was pulled back to the 4 mini-games that shipped, cutting four planned two-player modes (Timed Tap, Color Code, Morse Code, and Light Password) that would have relied more heavily on the physical instruction manual.

## Final Result

The **Cooperative IoT Sensor Game** successfully proves the viability of using prefab IoT hardware to create database-linked cognitive and motor-skill training games, laying down a modular foundation for future expansion into two-player modes and web analytics.