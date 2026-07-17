# Project Architecture

## Overview

This project is a premium personal portfolio website for:

Brand:

</D> Professor Danya

Purpose:

Showcase AI engineering, automation systems, web development and product thinking.

The portfolio should feel like a digital product experience, not a traditional developer resume.

Core principle:

"Build less. Build better."


# Documentation

The docs folder contains project intelligence and development guidelines.

Includes:

- BRAND.md — brand identity and positioning
- DESIGN_SYSTEM.md — visual rules and design principles
- PROJECT_RULES.md — development constraints
- CONTENT_GUIDE.md — writing and communication rules
- ROADMAP.md — project evolution plan
- ARCHITECTURE.md — technical structure
- PROMPTS.md — AI collaboration instructions


# Technology Stack

## Core

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS


## UI and Animation

- Framer Motion
- Custom reusable components
- CSS animations where appropriate


# Development Principles

Priority:

1. Quality
2. Maintainability
3. Performance
4. Visual experience

Avoid unnecessary complexity.

Prefer clean architecture over fast hacks.


# Folder Structure

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Navigation
│   │   └── Footer
│   │
│   ├── sections/
│   │   ├── Hero
│   │   ├── Projects
│   │   ├── Services
│   │   ├── About
│   │   └── Contact
│   │
│   └── ui/
│       ├── Buttons
│       ├── Cards
│       ├── Badges
│       └── Animation components
│
├── lib/
│   ├── data/
│   ├── utils.ts
│   └── configuration
│
└── types/

# Component Architecture

## Sections

Section components control:

- page composition
- layout
- content order

They should not contain duplicated UI patterns.


## UI Components

Reusable components belong in:

components/ui

Examples:

- Button
- Card
- Badge
- Container
- Animation wrappers


## Data Driven Content

Large content blocks should be separated from UI.

Prefer:

lib/data/

instead of hardcoded content inside components.


# TypeScript Rules

Use:

- strict typing
- interfaces
- predictable component props

Avoid:

- any type
- duplicated logic
- unnecessary abstractions


# Component Development Rules

Components should be:

- small and focused
- reusable when possible
- strongly typed
- easy to maintain

Avoid:

- large monolithic components
- duplicated UI
- mixing data and presentation logic


# Design Architecture

The visual system uses four levels of depth.


## Level 0 — Environment

Background:

- graphite
- subtle lighting
- atmosphere
- minimal gradients


## Level 1 — Structure

Sections:

- typography
- spacing
- layout


## Level 2 — Product Interfaces

Interactive surfaces:

- cards
- dashboards
- system previews
- visualizations


## Level 3 — Featured Elements

Important elements:

- Hero
- flagship projects
- main calls to action


# Animation Rules

Animations should be:

- subtle
- intentional
- performance friendly

Prefer:

- opacity transitions
- small movements
- interface state changes

Avoid:

- excessive effects
- distracting motion
- unnecessary animations

Always support:

prefers-reduced-motion


# Change Rules

Before modifying code:

1. Understand existing architecture.
2. Reuse existing components.
3. Avoid changing unrelated sections.
4. Keep the design system consistent.

Major structural changes require review.


# Future Expansion

Architecture should allow adding:

- Case studies
- Blog
- AI experiments
- Client projects
- Interactive product demos
- SEO optimization
- Open Graph previews
- Analytics
- Performance monitoring

without rewriting the project.