---
title: 'IoT Sensor Game: Cloud-Linked Cooperative Gaming System'
pubDate: 2024-10-20
author: 'DarthPackman'
description: 'A cooperative IoT game system, developed for COMP 4980, inspired by Keep Talking and Nobody Explodes. This project successfully integrated an Arduino MKR IoT Carrier with the Arduino Cloud for real-time game control, scoring, and data collection.'
image:
    url: 'https://www.cobramode.com/wp-content/uploads/2021/07/cobramode-logo-website-big-1024x550.png'
    alt: 'Placeholder image for Arduino MKR IoT Carrier project.'
tags: ["Class Project", "IoT", "Arduino", "C++", "Arduino Cloud", "Hardware Integration", "Cooperative Game"]
---

[cite_start]The **IoT Sensor Game** was a final project for **COMP 4980**, focused on designing an interactive, cooperative gaming system using specialized hardware[cite: 993]. [cite_start]Inspired by **Keep Talking and Nobody Explodes**, the game requires two players—one operating the **Arduino MKR IoT Carrier** and another using an instruction manual—to solve sensor-based mini-games through clear communication[cite: 994, 997].

## Core Technical & Hardware Implementation

1.  [cite_start]**Hardware & Protocol**: Developed the system using the **Arduino MKR WiFi 1010** and the **MKR IoT Carrier**, primarily programmed in **Arduino Sketch (C/C++)**[cite: 955, 1030]. [cite_start]The system leveraged the **Arduino Cloud** for communication, linking "Things" (cloud variables) to the device for real-time control[cite: 981, 1031].
2.  [cite_start]**Modular Game Framework**: Designed a flexible and expandable framework using modular **.h and .ino files**[cite: 1034, 1048]. [cite_start]This allowed for the implementation of multiple distinct mini-games, including **Simon Says** (memory) [cite: 983, 1049][cite_start], **Whack A Mole** (reaction time) [cite: 984, 1057][cite_start], and **Lights Out** (logic puzzle)[cite: 985, 1071].
3.  [cite_start]**Advanced Timer Management**: Successfully overcame technical challenges posed by the Arduino platform's reliance on `delay` by implementing game and master timers using the **`millis`** function[cite: 990]. This ensured non-blocking code and accurate tracking for time-critical mini-games.
4.  [cite_start]**Database Integration**: Designed the system to upload session **scores and statistics** to an external database (with a future recommendation to switch to **Firebase** for stability)[cite: 1010, 1027, 1044, 1128]. [cite_start]This architecture allows for difficulty scaling and visualization of player skill progression (e.g., radar charts)[cite: 962, 1011, 1103].
5.  [cite_start]**Lights Out Logic**: Implemented the complex **Lights Out** logic by guaranteeing puzzle solvability: the setup function starts from a completed state and performs a random number of valid moves backward, ensuring any generated formation can be solved[cite: 1074].

## Final Result

[cite_start]This project delivered a functional, modular IoT prototype that successfully proved the concept of a cloud-linked, sensor-driven cooperative game[cite: 1122]. It demonstrates high-level skills in hardware programming, network communication, modular software architecture, and problem-solving within platform-specific constraints.

You can view the repository [here](https://github.com/DarthPackman/IOTGame).
