---
title: 'Manhunt: Location-Based Multiplayer Stealth'
pubDate: 2022-11-20
author: 'DarthPackman'
description: 'A cutting-edge, location-based multiplayer game developed for COMP 3160. Manhunt combines real-world hide-and-seek with digital tracking, demonstrating advanced integration of Google Maps API and a real-time database.'
image:
    url: 'https://github.com/DarthPackman/Handshake-Murder/blob/main/manhubnt.png'
    alt: 'Manhunt Gameplay.'
tags: ["Class Project", "Mobile Development", "Android Studio", "Java", "Firebase", "Google Maps API", "Location-Based Game", "Multiplayer"]
---

[cite_start]**Manhunt** is an innovative, location-based mobile game that transforms the classic game of Hunter into an intricate game of cat and mouse using modern technology[cite: 1025, 1096]. [cite_start]Developed for **COMP 3160 (Mobile App Development 2)**, the project's core challenge was building a robust, real-time tracking system capable of supporting fluid multiplayer gameplay across a large geographic area[cite: 42, 1112].

## Core Technical Implementation

1.  [cite_start]**Real-Time Data Architecture (Firebase)**: Structured and managed all game state and player data using a **Firebase Realtime Database**[cite: 55, 1125]. [cite_start]The database controls player roles, game timers, and crucial game flow transitions (Gamestate)[cite: 74, 1130].
2.  [cite_start]**Location Services Integration (Google Maps API)**: Integrated the **Google Maps API** and Android location services to obtain the user’s latitude and longitude[cite: 55, 111, 1169, 1184]. [cite_start]This data is continuously updated to the Firebase database for real-time position tracking[cite: 142, 1197].
3.  [cite_start]**Advanced Stealth Mechanic**: Implemented a core stealth feature where the **Hunter's map displays the Hunted player positions only briefly every minute**[cite: 31, 276, 1102, 1282]. [cite_start]This periodic update creates a sophisticated "last known position" mechanic, encouraging strategic movement[cite: 43, 1113].
4.  [cite_start]**Tagging System**: Created a secure, synchronized tagging system where a successful tag requires the Hunter to input a unique, randomly generated **TAG number** provided by the Hunted player[cite: 90, 300, 1148, 1288].
5.  [cite_start]**Robust Game Logic**: Managed complex win conditions: Hunters win by tagging 90% of players, or Hunted players win if over 10% remain untagged at the end of the game timer[cite: 309, 310, 1292, 1293].

## Final Result

Manhunt is a powerful demonstration of full-stack mobile development, successfully combining a real-time backend with complex location APIs to create a high-stakes, engaging multiplayer experience. [cite_start]This project laid the foundation for future work, including plans for adding features like Geo Fencing and customizable settings[cite: 171, 180, 1226, 1235].

You can view the repository [here](https://github.com/DarthPackman/Manhunt).
