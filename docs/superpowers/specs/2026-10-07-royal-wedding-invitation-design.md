# Technical & Architectural Design Specification: Royal Indian Wedding Invitation Landing Page

**Date**: 2026-10-07  
**Project**: Grand Royal Wedding Invitation Web Application  
**Target Devices**: Mobile-First (Optimized for iOS Safari, Android Chrome, and Desktop Displays)  
**Aesthetic Style**: Traditional South Asian / Indian Regal Grandeur (Royal Crimson, Imperial Emerald, Antique Gold Foiling, Alabaster)

---

## 1. Executive Summary & Objective

The objective is to create an unforgettable, mobile-first luxury wedding invitation landing page for the royal union of **Aarav & Ananya** at the historic palaces of Udaipur. 

The application delivers a digital unboxing experience: starting with an interactive 3D-styled gold wax-seal envelope, bursting with marigold and rose petals upon opening, revealing a cinematic invitation layered over a customizable background video, multi-day itinerary with dress code lookbooks, palace travel concierge, 1-tap mobile calendar integration, an interactive RSVP engine, and a live guest blessing book.

Strict UX directiva: **Zero audio controllers or unsolicited sound**. Visual atmosphere is powered by an elegant, muted background video loop with an easily swappable source.

---

## 2. Architecture & Technology Stack

### 2.1 Core Frameworks & Tooling
* **Build System & Runtime**: Vite + React 19 + TypeScript
* **Styling**: Tailwind CSS v4 with custom royal design tokens and typography
* **Icons**: `lucide-react`
* **Particle Physics**: Lightweight HTML5 Canvas 2D engine for ambient and burst marigold/rose petals (60fps, GPU-accelerated, auto-pausing on battery saver and reduced motion)
* **Calendar Integration**: Native Google Calendar URL generator and client-side `.ics` file generator for Apple Calendar / Outlook

### 2.2 Directory Structure
```
d:/Wedding/
├── public/
│   ├── video/
│   │   └── wedding-bg.mp4          # Swappable user background video
│   ├── images/
│   │   ├── wax-seal.svg            # Royal monogram seal
│   │   └── palace-motifs/          # Mandap & jharokha SVG filigree
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BackgroundVideo.tsx     # Fullscreen loop with mobile safeguards & fallback
│   │   ├── PetalCanvas.tsx         # Canvas particle engine (marigold & rose petals)
│   │   ├── WaxSealEnvelope.tsx     # Interactive 3D unboxing hero
│   │   ├── InvitationHero.tsx      # Unfolded invitation card & countdown timer
│   │   ├── CoupleStory.tsx         # Sanskrit shloka, royal portraits & narrative
│   │   ├── ItinerarySection.tsx    # Multi-day events, dress codes & calendar links
│   │   ├── PalaceConcierge.tsx     # Venue details, airport transit & map guides
│   │   ├── RSVPModal.tsx           # Multi-event RSVP form with storage & export
│   │   ├── BlessingWall.tsx        # Guest wishes wall with live contribution
│   │   ├── NavigationBar.tsx       # Sticky mobile bottom bar / top royal header
│   │   └── ui/                     # Button, Badge, Modal, Card primitives
│   ├── config/
│   │   └── weddingData.ts          # Central configuration for couple names, dates, events, video
│   ├── hooks/
│   │   ├── useCountdown.ts         # High-precision wedding countdown hook
│   │   └── useLocalStorage.ts      # Persistent RSVP and blessing data
│   ├── utils/
│   │   └── calendar.ts             # ICS & Google Calendar generator
│   ├── App.tsx                     # Main layout and view choreography
│   ├── main.tsx                    # React mount entry
│   └── index.css                   # Tailwind v4 theme, fonts, and luxury borders
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 3. Visual & Design System

### 3.1 Color Palette
* **Royal Crimson / Sindoor**: `#801B31` (Primary accents, seals, regal borders)
* **Imperial Emerald**: `#0E3B2F` (Sangeet theme and evening contrast)
* **Metallic Gold Gradients**:
  * Light: `#F7E5A9`
  * Mid: `#D4AF37`
  * Deep: `#9A7B38`
* **Neutral Ivory Ground**: `#FCFAF6` and `#F5EFEB`
* **Obsidian Charcoal Text**: `#1A1615` (High-contrast, elegant readability)

### 3.2 Typography Tokens
* **Headline / Display Serif**: *Cinzel Decorative* / *Cinzel* (Royalty, Monograms, Titles)
* **Body / UI Sans**: *Plus Jakarta Sans* / *Inter* (16px minimum on mobile inputs to eliminate iOS zooming)

### 3.3 Border & Ornamentation System
* Custom SVG Indian arches (Jharokha), mandap filigree, and double hairline gold borders (`border border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.15)]`).
* Strictly **zero green blip dots, status lights, or cheesy pulsing badges**.

---

## 4. Key Functional Features & Component Specifications

### 4.1 Background Video System (`BackgroundVideo.tsx`)
* **Behavior**: Fullscreen fixed background with `autoPlay`, `muted`, `loop`, `playsInline`, `preload="auto"`.
* **Swappability**: Configured via `weddingData.backgroundVideoUrl`. Default provided with a high-definition cinematic palace/lake video loop.
* **Fallbacks**: Seamless CSS gradient + royal mandala pattern backdrop if video fails to load or user's device is in ultra-power-saving mode.
* **Contrast Layer**: Dark translucent gold vignette (`bg-black/45 backdrop-blur-[0.5px]`) ensuring flawless text readability across all video colors.

### 4.2 Interactive Royal Wax Seal Envelope Hero (`WaxSealEnvelope.tsx`)
* **State A (Folded Envelope)**:
  * 3D card envelope with textured handmade paper effect, gold foiling, and couple monogram seal (`A & A`).
  * Tap action with thumb-friendly button: *"Tap to Break Seal & Open Invitation"*.
* **State B (Seal Break & Unfold Transition)**:
  * Seal fractures visually, envelope flap opens upwards, and triggers a celebratory marigold and rose petal burst.
  * Transitions smoothly to the unveiled Royal Invitation Card.

### 4.3 Multi-Day Royal Itinerary & Attire Guide (`ItinerarySection.tsx`)
Detailed timeline of 5 traditional ceremonies:
1. **Phoolon Ki Haldi** (Day 1 Morning) — *Dress Code: Sunshine Yellow & Marigold Festive*
2. **Royal Mehendi Bazaar** (Day 1 Evening) — *Dress Code: Mint & Lime Lehengas / Kurta Pajama*
3. **The Sangeet & Sufi Night** (Day 2 Evening) — *Dress Code: Royal Emerald Velvet & Indo-Western Glamour*
4. **Shahi Baraat & Vedic Pheras** (Day 3 Afternoon) — *Dress Code: Imperial Ivory & Traditional Rajasthani Pink*
5. **Grand Imperial Reception** (Day 3 Night) — *Dress Code: Black Tie / Regal Gold & Ruby Formals*

Each card features:
* Date, timing, palace hall name, Google Maps pin link.
* **Add to Calendar**: Instant generation of `.ics` file or Google Calendar link with title, venue, and description pre-filled.

### 4.4 Palace Concierge & Travel Guide (`PalaceConcierge.tsx`)
* **Venue**: Jagmandir Island Palace & The City Palace, Udaipur, Rajasthan.
* **Transit Guide**: Maharana Pratap Airport (UDR) distance, private boat transfer details across Lake Pichola.
* **Weather & Attire Tips**: Evening breezes by the lake, comfortable footwear recommendations.

### 4.5 Digital RSVP Engine (`RSVPModal.tsx`)
* Fields: Guest Full Name, Email/Phone, Attending Ceremonies checkboxes, Dietary Requirements (Jain, Pure Vegetarian, Non-Vegetarian, Allergies), Song for the Sangeet DJ.
* Data Storage: Local browser state with persistent guest database.
* Admin Utility: **"Export Guest List (.csv)"** button for the couple to instantly download all confirmed RSVPs.

### 4.6 Blessing Wall (`BlessingWall.tsx`)
* Digital guestbook where family and friends submit loving messages and blessings.
* Rendered on a royal parchment scroll with guest names, timestamps, and gold leaf divider marks.

---

## 5. Mobile-First & Performance Standards
* **No Audio Controller**: Completely visual and silent, respecting user request.
* **No iOS Input Zoom**: All form fields set to minimum 16px text.
* **Touch Targets**: Minimum 44px x 44px for thumb comfort.
* **Smooth 60fps Canvas Loop**: Falling petal canvas automatically adjusts particle count based on screen width (35 petals on desktop, 18 on mobile) to conserve battery.
* **Safe Areas**: Padding adjusted for iPhone Dynamic Island and bottom gesture bar (`env(safe-area-inset-bottom)`).

---

## 6. Verification & Testing Plan
* **Build Verification**: `npm run build` with zero TypeScript or Tailwind compilation errors.
* **Mobile Responsiveness**: Test viewport dimensions across 375px (iPhone SE), 390px (iPhone 14/15), 412px (Android Pixel/Galaxy), and 1440px desktop.
* **Interaction Verification**:
  1. Envelope seal tap opens smoothly and triggers petal burst.
  2. Calendar buttons download valid `.ics` and open valid Google Calendar URLs.
  3. RSVP form validates required fields, stores entry, and allows CSV download.
  4. Blessing form adds new message immediately to the blessing list.
  5. Background video plays seamlessly muted in loop on mobile viewports.
