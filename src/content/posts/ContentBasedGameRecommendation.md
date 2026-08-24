---
title: 'Content-Based Game Recommendation'
pubDate: 2025-04-04
author: 'DarthPackman'
description: 'Built for COMP 4610 (Advanced Database Systems) alongside Laura Lefebvre, Ines Maria, and Pedro Costa, this project mines Amazon video game review data to generate content-based game recommendations using association rule mining.'
image:
    url: ''
    alt: 'Content-Based Game Recommendation cover art.'
tags: ["University Project", "Database Systems", "Data Mining", "Python", "Recommendation Systems"]
---

**Content-Based Game Recommendation** was built for **COMP 4610 (Advanced Database Systems)** alongside Laura Lefebvre, Ines Maria, and Pedro Costa, submitted to instructor Sukhchandan. The project set out to solve a specific problem: in an oversaturated game market, players struggle to find new titles that actually match their interests, and existing recommendation systems that lean purely on user ratings or social signals often miss the mark. The goal was a content-based system that recommends games based on their own features and relationships, rather than depending entirely on aggregated star ratings.

## Finding Usable Data

Getting workable data turned out to be the project's biggest early obstacle — most gaming platforms restrict access to their interaction data, and the team dug through roughly 20 different datasets before settling on **Amazon_Videogames_Reviews** from Kaggle, containing 50,000 reviews across items, scores, and reviewers. Cleanup involved converting Amazon's unusual 0–4 rating scale to a standard 1–5, handling missing values (mean/median for numerical fields depending on skew, "Unknown" for categorical gaps), and filtering out low-signal reviews and reviewers to leave a focused dataset of 38,244 reviews with a meaningfully higher average review count per reviewer.

## Core Technical Approach

1. **Association Rule Mining**: Used the Apriori algorithm (via the `mlxtend` Python library) to uncover patterns in how games are reviewed together, generating rules like "users who review Game A also tend to review Game B."
2. **Transactional Data Modeling**: Grouped user-game interactions by reviewer ID into a transactional format suitable for market-basket-style analysis, with categorical game titles encoded for machine readability.
3. **Tuned Rule Parameters**: Balanced `min_support`, `min_confidence`, and `min_lift` thresholds to surface meaningful, statistically significant relationships between games rather than noise — a real tuning challenge, since rules with high lift but low support serve niche audiences well, while high-confidence, moderate-lift rules generalize better to a broad one.

## Interesting Results

One standout association rule: users who reviewed both *Dead or Alive 3* and *Project Gotham Racing* showed a strong statistical likelihood of also reviewing *Final Fantasy X* — the kind of cross-genre connection a simple "similar games" list would likely never surface, but that shows up clearly once purchase/review patterns are mined at scale.

## Final Result

The project successfully demonstrates that useful, non-obvious game recommendations can be generated directly from review co-occurrence data without requiring detailed genre or thematic metadata. The team's own conclusion points to the clearest next steps: enriching the dataset with genre/theme metadata, resolving game IDs to human-readable titles for a usable end product, and adding precision/recall/F1 evaluation to measure recommendation quality more rigorously.

You can view the full project presentation [here](https://docs.google.com/presentation/d/18hnt1jppuDzZIn_wLidfz8Zq4sHXcAaQa5-lI3WWqCo/edit?usp=sharing).