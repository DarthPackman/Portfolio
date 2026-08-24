---
title: 'Handshake Murder: Mobile Deduction Game'
pubDate: 2022-10-15
author: 'DarthPackman'
description: 'Developed as part of a Mobile App Development course, Handshake Murder is a digital take on the theatre game of the same name — a social deduction experience where players secretly hunt for a murderer hidden among physical handshakes.'
image:
    url: ''
    alt: 'Handshake Murder game banner.'
tags: ["University Project", "Mobile App Development", "Android", "Deduction", "Game Design", "Java"]
---

**Handshake Murder** was developed for **COMP 2160, Mobile App Development 1** (Fall 2022) as a digital adaptation of the theatre game of the same name, and was Transhuman Games' first project. In the original party game, one player is secretly the murderer and moves through the group shaking hands — anyone they choose to "kill" during a handshake falls dead moments later, and the surviving players try to work out who's responsible before it's too late. The app's goal was to fully automate that experience: tracking roles, handling handshakes electronically, and managing voting and win conditions without anyone needing to keep score by hand.

## Designed Gameplay Loop

The planned flow had players join or host a lobby, then land on a shared in-game screen showing a player count/health bar, a killer progress bar, a timer, a handshake button, and a vote button. Investigators would go around shaking hands (pressing the handshake button while holding phones together) while quietly trying to identify the murderer; the murderer would appear to shake hands normally, but their vote button doubled as a secret kill button. A killed investigator would feel a vibration alert immediately, then a second vibration 10 seconds later confirming their death. Investigators could end the game early by accusing the right (or wrong) player through the vote screen, with a wrong guess costing them their own life.

## Core Technical & Design Elements

1. **Dual Role Architecture**: Designed around two server-side roles (Host & Client) layered against two gameplay roles (Murderer & Investigators), with the murderer's UI intentionally mirroring the investigator's to keep their identity hidden.
2. **Proximity-Based Handshake Detection**: The original plan called for phone-to-phone "handshakes" over direct WiFi, later explored via NFC as an alternative detection method.
3. **Feedback-Driven State Changes**: Designed vibration and notification-sound cues to communicate hidden game state (a successful kill, an impending death) without giving away information to nearby players.

## Scope & Reality

This project ended up being more design exercise than finished product. The handshake detection layer — first attempted over direct WiFi, then reworked around NFC — never reached a reliably working state and was ultimately deprecated rather than shipped. Supporting features like a statistics screen and in-app settings were scoped as stretch goals from the start and didn't make it in either. What did come together was the underlying app architecture: the lobby system, shared state management, and the dual-role structure that the (non-functional) handshake layer was meant to plug into.

## Final Result

Handshake Murder is best understood as a proof-of-concept for the app's architecture and social-deduction design rather than a fully working game — the core mobile app structure came together, but the physical handshake mechanic that the whole concept depends on remained unreliable through the course's timeline.

You can view the source code and project repository [here](https://github.com/DarthPackman/Handshake-Murder).