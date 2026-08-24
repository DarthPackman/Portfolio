---
title: 'The Tea: Anonymous Localized Forum'
pubDate: 2023-04-05
author: 'DarthPackman'
description: 'Developed for COMP 3540 (Advanced Web Design & Programming), The Tea is an anonymous web forum where users can share localized posts based on geographic coordinates, featuring CRUD operations and dynamic vote scoring.'
image:
    url: '/thetea.webp'
    alt: 'The Tea landing page, "Let\'s Spill The Tea" in pink.'
tags: ["University Project", "Web Development", "PHP", "MySQL", "Geolocation"]
---

**The Tea** was developed as the term project for **COMP 3540 (Advanced Web Design & Programming)**. The application serves as an anonymous web forum allowing users to "Spill The Tea" by creating, editing, and interacting with posts localized to their current geographic region via browser GPS permissions.

## Core Technical Features

1. **Geolocation & Spatial Organization**: Integrates browser location data with database storage, capturing latitude and longitude coordinates (`CO_LONG`, `CO_LAT`) for every post to sort and display relevant local content, with the main feed populated by proximity and sorted by most recent.
2. **Full CRUD User & Post Architecture**: Built using a PHP controller and model framework (`theTea_controller.php`, `theTea_mainPage.php`, `theTea_accountPage.php`) backed by a MySQL database managed via phpMyAdmin, supporting full user account creation, credential editing, account deletion, and full post lifecycle management (create, edit, delete).
3. **Interactive Voting System**: Implements an upvote and downvote mechanism that dynamically updates a post's `SCORE` value in real time.
4. **Custom Responsive UI**: Styled with a cohesive pink aesthetic featuring a teacup logo, custom modal dialogs, and dedicated screens for login, sign-up, posting, settings, and account management.

## Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript (Geolocation API, Modal Logic)
* **Backend**: PHP (MVC-style controller pattern)
* **Database**: MySQL managed via phpMyAdmin (`TEA_USERS`, `TEA_POSTS` schemas)

## Scope Notes

Account management was deliberately kept minimal given the anonymous nature of the site — just email and password, with no public profile beyond that. Commenting was scoped out as a deliberate future addition, since it was judged to need edit-history tracking to work properly, and that felt out of scope for the term timeline.

You can view the project repository and documentation [here](https://github.com/DarthPackman/TheTea).