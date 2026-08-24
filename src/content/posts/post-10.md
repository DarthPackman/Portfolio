---
title: 'Rising Tide: Data-Driven System Architecture for Streamer Analytics'
pubDate: 2023-11-15
author: 'DarthPackman'
description: 'A comprehensive theoretical project from COMP 2920 and COMP 3520 focused on designing a three-tiered system (Web Crawler, Database, Website) to identify emerging trends and aid small streamers in growing their viewership.'
image:
    url: 'https://drive.google.com/drive/folders/1Eu19dSCohK_GnA_gOdrSY5bmNkME45gw?usp=sharing'
    alt: 'Rising Tide logo, showing a sailboat on a wave against an orange sun.'
tags: ["Class Project", "Software Architecture", "Software Engineering", "System Design", "Web Crawler", "UML Diagrams", "Database Design"]
---

**Rising Tide** was a multi-semester design and engineering project born from a Hackathon idea. [cite_start]The goal was to design a robust, **three-tiered system** capable of analyzing massive amounts of streaming data from platforms like Twitch and YouTube to identify "rising" games, helping small streamers capitalize on emerging trends[cite: 1141, 1142]. This project demonstrated high-level competency in architectural modeling, resilience planning, and software maintenance strategy.

## Core Architectural Design and Modeling

1.  [cite_start]**Three-Tiered Architecture**: Designed a system composed of three main components: a **Web Crawler** (Python/Scrapy) for data aggregation, an **SQL Database** (modeled with classes like `Game` and `DailyMetrics`) for data storage, and a **Website** (HTML, CSS, JS, PHP) for data presentation[cite: 1144, 1167, 1168, 1169].
2.  **Agile Development Model (P.A.R.)**: Adopted a custom process called **P.A.R. (Plan, Assemble, Review)[cite_start]**, a variation of Agile that features an enhanced focus on continuous **review and learning** after each 12-week development cycle[cite: 4415, 4420, 4422].
3.  [cite_start]**Comprehensive Modeling**: Created extensive **UML documentation**, including **Class Diagrams** (for eight core entities), **Use Case Diagrams**, and **Implementation Diagrams** to visually model the system's structure and behavior[cite: 1041, 1055, 1111]. [cite_start]The implementation plan leveraged **AWS** for hosting, databases, and the web crawler infrastructure[cite: 1223].

## Software Engineering and Maintenance Strategy

1.  [cite_start]**Resilience and Dependability**: Designed a system built around **Dependability** and **Security Engineering**, utilizing third-party services like **AWS** for hardware failure mitigation and secure login via **third-party authenticators** to minimize operational risk[cite: 1060, 1591, 1608].
2.  [cite_start]**Software Maintenance Planning**: Developed a detailed **Maintenance Strategy** with a long-term goal of splitting efforts into corrective (25%), adaptive (20%), and perfective (55%) maintenance to ensure sustainability and continuous feature addition[cite: 651, 653, 661, 666].
3.  [cite_start]**Rigorous Testing Process**: Developed a testing plan that included **Unit Testing**, **Integration Testing**, and **System Testing** across all three tiers (Crawler, Database, Website), ensuring data flow integrity and reliability[cite: 942].

## Final Result

Rising Tide successfully demonstrated advanced skills in **system design, information architecture, and the software engineering lifecycle**. The project showcases the ability to design large, dependable, and secure data-driven platforms from concept through a detailed engineering blueprint.

You can view the project documentation files [here](https://drive.google.com/drive/folders/1Eu19dSCohK_GnA_gOdrSY5bmNkME45gw?usp=sharing).

