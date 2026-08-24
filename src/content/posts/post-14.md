---
title: 'Behavioral Authentication & Anomaly Detection System'
pubDate: 2024-11-20
author: 'DarthPackman'
description: 'A security-focused project for COMP 3260 demonstrating how websites can enhance security using behavioral biometrics. [cite_start]The system tracks user interactions to build an authentication profile and detect anomalous, bot-like activity in real-time[cite: 1929, 1932].'
image:
    url: 'https://www.cobramode.com/wp-content/uploads/2021/07/cobramode-logo-website-big-1024x550.png'
    alt: 'Cobramode logo.'
tags: ["Class Project", "Network Security", "Behavioral Biometrics", "Anomaly Detection", "Web Development", "JavaScript", "Firebase"]
---

[cite_start]This project, developed for **COMP 3260 (Computer Network Security)**, focused on implementing a robust, non-traditional security layer using **behavioral biometrics**[cite: 1930]. [cite_start]The system is designed to function automatically without requiring explicit user permission, making it simple to implement on any site that uses Firebase authentication[cite: 1931, 1933].

## Core Technical Implementation

1.  [cite_start]**Behavioral Biometric Tracking (JavaScript)**: Implemented extensive client-side **JavaScript tracking** to collect granular user behavior metrics and generate a real-time `userScore`[cite: 1979, 1980, 1934]. Tracked metrics included:
    * [cite_start]**Keystroke Dynamics**: Speed and variety of keyboard presses[cite: 1902, 1918].
    * [cite_start]**Mouse Activity**: Movement speed, path, and click activity[cite: 1902, 1918].
    * [cite_start]**Session Metrics**: Time spent on page, scrolling activity, and window focus changes[cite: 1979].
2.  [cite_start]**Real-Time Anomaly Detection & Response**: The system triggers a **custom CAPTCHA** (designed with DALL·E-generated images to be harder for AI to bypass [cite: 1960, 1966][cite_start]) if the `userScore` falls below a suspicious behavior threshold[cite: 1902, 1980].
3.  [cite_start]**Anti-Redliner IP Change Detection**: Programmed a crucial anti-brute force measure that uses a custom **JavaScript fetch function** to grab the user's current IP address[cite: 1981, 1982]. [cite_start]If the IP address changes while the user is logged in, the system automatically **logs the user out** and increments an `ipChangeCount`, ultimately leading to an **account lock** if suspicious activity continues[cite: 1903, 1984, 1992].
4.  [cite_start]**Full-Stack Integration (Firebase)**: Leveraged **Firebase** for user authentication and to securely store security data, including `ipAddress`, `captchaTriggerCount`, and `accountLock` status, which informs the secondary response mechanisms[cite: 1901, 1977, 1978].

## Final Result

[cite_start]This project delivered a working security prototype that is simple to integrate and monitor[cite: 1904, 1932]. [cite_start]It successfully demonstrates expertise in implementing advanced security concepts against attacks, specifically passive behavioral authentication and anomaly detection, within a full-stack web environment[cite: 1927, 1929].

You can view the repository [here](https://github.com/DarthPackman/COMP3260).