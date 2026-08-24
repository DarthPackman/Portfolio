---
title: 'Text Trials: A Text-Based Autobattler'
pubDate: 2024-11-01
author: 'DarthPackman'
description: 'Developed for COMP 3140 (Object Oriented Design and Programming), Text Trials is a text-based dungeon-crawling autobattler in C++, built around a reusable state machine that drives character combat, leveling, and equipment.'
image:
    url: ''
    alt: 'Text Trials gameplay transcript.'
tags: ["University Project", "Object Oriented Design", "C++", "Autobattler", "State Machine", "Game Design"]
---

**Text Trials** was developed for **COMP 3140 (Object Oriented Design and Programming)** as a text-based, dungeon-crawling autobattler, drawing inspiration from games like Team Fight Tactics and Super Auto Pets. Players create a character, choose a class-defining "adventurer type," pick their starting weapon and armor, then descend through a series of dungeon rooms fighting enemies, leveling up, and looting new gear along the way — culminating in a final boss fight after ten rounds.

## Core Gameplay Loop

Character creation is presented as a short flavor-text interview: the player names their character, picks an adventurer type (like "The Unbreakable Shield" for higher defense, or "The Blinding Whirlwind" for faster attack cooldowns), then chooses a weapon and armor set, each with its own tradeoffs between power, speed, and protection. From there, the player fights through dungeon rooms — the dungeon grows larger as the character levels up — gaining experience, looting equipment, and occasionally finding consumables like health potions in post-battle chests.

## Core Technical & Design Elements

1. **Reusable State Machine Architecture**: Built a `CharacterState` base class driving `AttackState`, `DefendState`, and `IdleState`, so that both the player character and enemies share the same underlying combat logic rather than duplicating behavior per character type.
2. **Stat-Driven Combat Resolution**: Damage is calculated by comparing the attacker's offense against the defender's armor and defense stats — if an attack doesn't exceed the defender's threshold, no damage gets through, but repeated attacks can still stun-lock a defending enemy.
3. **Modular Equipment System**: Separated `Weapon` and `Armour` into their own classes feeding into `Offense`/`Defense` calculations, letting equipment swaps directly modify combat math without touching character or state logic.
4. **Combat Pacing Systems**: Added combat cooldowns and passive healing between fights, so encounters have rhythm beyond pure stat checks — confirmed through testing sessions tracking cooldown timing and post-combat regeneration.

## Sample Playthrough

Welcome to the Text Trials, who knows where your adventure might lead.
Before you venture out I will need to know more about you.
What should I call you adventurer?
Enter Character Name: Gavin
How do people describe you?
Enter Character Type:

The Unbreakable Shield – A Higher Defense Adventurer who can brush off more damage.
The Living Bastion – A Faster Recovery Adventurer who can take a hit and get back into the fight.
The Colossal Crusher – A Higher Damage Adventurer who can hit enemies for more damage.
The Blinding Whirlwind – A Faster Cool Down Adventurer who can swing their weapon more often.
1
Welcome to the Text Trials, Gavin, The Unbreakable Shield.
...
You have found yourself in front of a dungeon with 1 room(s).
You have encountered an enemy!
It's a weak enemy!
In room 0, you encounter a Wolf!
Wolf is now Defending
Gavin is now Attacking
Gavin has attacked for 150 damage.
Wolf has taken 50 damage.
...
Wolf has been defeated.
You have defeated the Wolf!
Congratulations! You have cleared the 1 dungeon and found a chest with a health potion inside.

Welcome to the Text Trials, who knows where your adventure might lead.
Before you venture out I will need to know more about you.
What should I call you adventurer?
Enter Character Name: Gavin
How do people describe you?
Enter Character Type:

The Unbreakable Shield – A Higher Defense Adventurer who can brush off more damage.
The Living Bastion – A Faster Recovery Adventurer who can take a hit and get back into the fight.
The Colossal Crusher – A Higher Damage Adventurer who can hit enemies for more damage.
The Blinding Whirlwind – A Faster Cool Down Adventurer who can swing their weapon more often.
1
Welcome to the Text Trials, Gavin, The Unbreakable Shield.
...
You have found yourself in front of a dungeon with 1 room(s).
You have encountered an enemy!
It's a weak enemy!
In room 0, you encounter a Wolf!
Wolf is now Defending
Gavin is now Attacking
Gavin has attacked for 150 damage.
Wolf has taken 50 damage.
...
Wolf has been defeated.
You have defeated the Wolf!
Congratulations! You have cleared the 1 dungeon and found a chest with a health potion inside.


## Final Result

Text Trials successfully demonstrates a clean object-oriented approach to game combat, using a shared state machine to drive consistent behavior across every character in the game while keeping equipment, stats, and combat resolution cleanly separated and independently testable.

You can view the source code and project repository [here](https://github.com/DarthPackman/Text-Trials).