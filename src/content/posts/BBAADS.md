---
title: 'Behavioral Authentication & Anomaly Detection System'
pubDate: 2024-11-22
author: 'DarthPackman'
description: 'Built for COMP 3260 (Computer Network Security) alongside Hritwik Saini, this project layers behavior-based anomaly detection on top of Firebase Authentication — tracking typing, mouse, scroll, and navigation patterns to trigger a custom CAPTCHA or lock a suspicious account.'
image:
    url: '/Bbas.png'
    alt: 'Behavioral Authentication login page.'
tags: ["University Project", "Network Security", "Firebase", "JavaScript", "Anomaly Detection", "CAPTCHA"]
---

**Behavioral Authentication & Anomaly Detection System** was built for **COMP 3260 (Computer Network Security)** alongside Hritwik Saini, under instructor Anthony Aighobahi. The project's premise: most brute-force and bot-driven login attacks move and type in ways real humans don't, so a system that quietly watches *how* someone interacts with a login page — rather than asking them to prove anything upfront — can catch malicious activity without adding friction for legitimate users.

## Core Concept

The system layers custom behavioral analysis on top of Firebase Authentication, deliberately avoiding measures that require explicit user permission (like traditional biometrics, 2FA, or opt-in tracking) so it can run transparently on any page using it. It monitors typing speed and key variety, mouse movement/clicks/speed, time spent on page, page navigation and scroll patterns, and focus changes, scoring the session in real time. If that score drops below a suspicion threshold, the system triggers a custom CAPTCHA; continued suspicious behavior escalates to locking the account outright. A separate check compares a logged-in user's IP address against their last known one — a sudden change logs them out immediately and locks the account as a follow-up measure.

## Core Technical & Design Elements

1. **Real-Time Behavior Scoring**: JavaScript event listeners continuously track user interaction patterns and compute a live "userScore," visible in real time through the browser dev tools, which drives whether the CAPTCHA gets triggered.
2. **Custom CAPTCHA System**: Built a bespoke CAPTCHA (rather than relying on a third-party service) specifically designed to be harder for bots to bypass than standard text-based CAPTCHAs, using DALL-E-generated imagery for the visual challenge itself.
3. **Firebase-Backed Anti-Redliner Protection**: Logs each user's IP address to Firebase on login and checks it against their current IP on every interaction, logging the user out and locking the account the moment a mismatch is detected — catching session hijacking or credential sharing, not just brute-force attempts.
4. **Three-Page Reference Implementation**: Built a login page, sign-up page, and logged-in landing page to demonstrate the system end-to-end, with all authentication and security-event data flowing through Firebase's Realtime Database.

## A Note on AI Use

Per the project's own report, ChatGPT was used to help scaffold the three-page site structure, and DALL-E generated the CAPTCHA imagery — tools cited directly in the report's references alongside the academic literature the behavioral model was based on.

## Testing & Results

The team validated the system two ways: triggering the IP-change detection using a VPN to simulate an address switch mid-session, and confirming the behavior-based CAPTCHA by deliberately lowering the suspicion threshold to force it to fire. Both flows, along with their logged security events, were verified directly in the Firebase console. The one goal that didn't make it in: emailing a one-time password as a secondary response, which Firebase's built-in authentication didn't support without significantly more custom infrastructure — so every secondary response ended up converging on account locking instead.

## Final Result

The system successfully demonstrates that meaningful bot- and anomaly-detection can be layered onto an existing Firebase-authenticated site with minimal integration work — a few event listeners and a Firebase connection — while catching a wide range of suspicious behavior in real time without requiring explicit user permission or machine learning.

You can view the source code and project repository [here](https://github.com/DarthPackman/COMP3260), and see the live proof of concept [here](https://biometrics.darthpackman.com/).