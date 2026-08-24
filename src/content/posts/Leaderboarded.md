---
title: 'Leaderboarded: A Social Platform for Gamers'
pubDate: 2025-03-28
author: 'DarthPackman'
description: 'Built for COMP 3450 (Human-Computer Interaction Design) alongside Laura Lefebvre and Seth Christopher, Leaderboarded is a social network for gamers that blends in-depth, multi-category game reviews with follows, feeds, and achievements, grounded in real user research.'
image:
    url: '/leaderboarded-banner.png'
    alt: 'Leaderboarded homepage feed showing game reviews.'
tags: ["University Project", "Human-Computer Interaction", "UX Research", "Figma", "Firebase", "Social Platform"]
---

**Leaderboarded** was developed for **COMP 3450 (Human-Computer Interaction Design)** alongside Laura Lefebvre and Seth Christopher, pitched as a social network for gamers to review, discover, and connect over games. The core problem it set out to solve: existing review platforms either lean on disconnected professional critic scores (Metacritic, IGN) or oversimplify community feedback into a binary thumbs up/down (Steam), while offering little social interaction around the reviews themselves.

## Concept

Rather than a single aggregate score, Leaderboarded lets users rate games across multiple categories — gameplay, story, visuals, audio, and replayability — giving reviews more depth than a star rating alone. Reviews live inside a social feed built around following trusted reviewers rather than strangers, with achievements and a points system layered in to reward consistent, in-depth contribution. The platform was also designed with a secondary audience in mind: indie developers, who could use aggregated and anonymized review data as a lightweight alternative to scattered forum feedback.

## UX Research Process

Before any design work started, the team ran a genuine research pass: an online survey drew **78 responses from gamers** and **5 from game developers**, supplemented by **8 in-person interviews** conducted in the university's CS Help Room. The findings shaped real product decisions — for example, interview feedback about review fatigue led directly to the 5-star-plus-comment format used in the final design, and concerns raised about review bias and fake reviews pushed reporting and trust features into the requirements. The team also built a user persona ("Dedicated Darla") and a full use-case walkthrough for posting a review to ground the design in a concrete scenario before wireframing began.

## Design & Prototyping Iteration

The prototype went through a documented feedback loop: early user testing flagged issues like accidental review clicks, dropdown menus that didn't close properly, and a follow button that didn't visually update after being pressed — all of which were fixed in later iterations. Other requested features, like private accounts and private reviews, were explicitly scoped out as beyond the project's timeline and flagged as future work rather than quietly dropped.

## Usability Testing Results

A pilot usability study ran over two days with users completing three core tasks — finding a game and reviewer, following a user, and editing/posting a review — while the team collected both observational data and a post-task satisfaction survey (13 responses). Average satisfaction scores landed at **4.46/5 for navigation ease**, **4.46/5 for finding information**, **4.54/5 for speed and responsiveness**, and **4.15/5 for both visual appeal and likelihood to recommend** — with visual appeal and recommendation likelihood identified as the platform's weakest points, pointing toward color scheme and layout polish as the clearest next steps.

## Current Status

The live site is a functional front-end build demonstrating the core use cases — login, a homepage feed of friend and stranger activity, search, review creation/editing, and following — though its backend has since expired, leaving it as a proof-of-concept snapshot of the UI work from the course rather than a persistently live product.

## Final Result

Leaderboarded successfully demonstrates a complete HCI design process from research through usability testing, translating real user pain points around game review platforms into a socially-driven, multi-category review system validated with actual users rather than assumptions.

You can view the source code and project repository [here](https://github.com/DarthPackman/Leaderboarded), and the front-end proof of concept [here](https://leaderboarded.darthpackman.com/).