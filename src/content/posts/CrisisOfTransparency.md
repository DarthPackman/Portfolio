---
title: 'Crisis of Transparency'
pubDate: 2024-08-15
author: 'DarthPackman'
description: 'A COMP 4910 capstone project built for TRU Faculty of Law professor Matt Malone: a fully scripted, 66-page scrollable parallax website examining the decline of Canada'"'"'s Access to Information Act.'
image:
    url: '/crisis-of-transparency-banner.png'
    alt: 'Crisis of Transparency site screenshot.'
tags: ["University Project", "Capstone", "Astro", "React", "Web Development", "Netlify"]
---

**Crisis of Transparency** was developed as the COMP 4910 capstone project alongside Carlos Avila and Ian Fuentes, in partnership with client Matt Malone, Assistant Professor at TRU's Faculty of Law. The brief was to turn a fully scripted research report into an interactive, cross-platform website — timed to land ahead of a proposed reform of Canada's Access to Information Act.

## What the Site Covers

The site walks through the history and current state of Canadian government transparency law: the rise of freedom-of-information legislation internationally and across the provinces, the 2006 and 2015 federal election platforms that promised sweeping reforms (under Stephen Harper and Justin Trudeau respectively), the funding cuts that followed each promise, and the resulting decline in the Information Commissioner's ability to process complaints. It closes with a set of concrete policy recommendations drawn from expert reports, including the Information Commissioner's own 2015 reform proposals.

## Design Constraints

The client's requirements shaped the site's format directly: no clickable navigation or points of accidental interaction, one continuous scrollable experience rather than discrete pages, and a target read time under 15 minutes. The final build spans 66 scrollable sections contained in a single massive parallax object, with zero page transitions.

## Core Technical & Design Elements

1. **Astro-Based Static Site**: Chose Astro specifically because the project needed no database or backend logic, while still supporting rich animation through its React integration and strong documentation for a tight capstone timeline.
2. **Two Implementation Passes**: The first pass built the scroll experience around modular `FlipCard.astro` components; the second pass replaced that structure with a single continuous `ParallaxContent.jsx` component paired with a custom `TypeWriter.jsx` text-reveal effect for a more cinematic scroll.
3. **Cross-Device Testing**: Verified across Chrome, Safari, and Firefox on desktop, plus real mobile/tablet hardware (Pixel 8, Galaxy S24 Ultra, Pixel Tablet, iPhone 13 Mini, iPad Air) to confirm the parallax scroll held up across screen sizes and browsers.
4. **Production Pipeline**: Used Milanote for storyboarding the full 66-section narrative before development, Photoshop for visual assets, and HandBrake/VideoProc to compress embedded video clips for web delivery.

## Known Issues

A couple of cross-platform quirks were documented rather than fully resolved within the project timeline: the site starts zoomed in on some mobile browsers, and embedded videos fail to load on Safari.

## Final Result

Crisis of Transparency successfully translated a dense legal and political research report into an accessible, single-scroll web experience, built specifically to reach a general audience ahead of pending federal legislative reform.

You can view the project repository [here](https://github.com/DarthPackman/CrisisOfTransparency), and the live site [here](https://crisisoftransparency.netlify.app/).