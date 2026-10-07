# Royal Wedding Invitation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a hyper-realistic, mobile-first traditional Indian royal wedding invitation landing page featuring an interactive 3D wax-seal envelope unboxing, customizable background video loop, realistic botanical petal physics, multi-day itinerary with 1-tap calendar buttons, palace concierge, and digital RSVP/blessing book.

**Architecture:** Single Page Application powered by Vite, React 19, TypeScript, and Tailwind CSS v4. Modular component hierarchy isolating the interactive unboxing state, background video layer, canvas particle simulation, itinerary timeline, and stateful RSVP/blessing systems.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React, Vitest, HTML5 Canvas 2D.

**Spec:** `docs/superpowers/specs/2026-10-07-royal-wedding-invitation-design.md`

## Global Constraints
- Zero audio controllers or unsolicited sound anywhere in the UI.
- Background video must include mobile attributes: `autoPlay`, `muted`, `loop`, `playsInline`, `preload="auto"`.
- Mobile form inputs must have `font-size >= 16px` to prevent iOS viewport auto-zooming.
- Colors strictly adhere to the royal palette: Royal Crimson (`#801B31`), Imperial Emerald (`#0E3B2F`), Antique Gold (`#D4AF37`), Ivory (`#FCFAF6`), Obsidian (`#1A1615`).
- Zero fake status dots, emerald blip lights, or cheesy pulsing badges.

## Review Focus
- **Video failed to load / Low power mode**: Display high-res royal palace backdrop with animated ambient lighting and mandala pattern so the page never renders a black box.
- **Mobile Safari calendar tap**: Must correctly download a `.ics` calendar invitation file or open native Google Calendar with complete event timestamps and palace address.
- **Envelope re-openability**: Allow guests to re-seal or replay the envelope unboxing ceremony anytime from a quiet luxury button.
- **RSVP local state resilience**: Guest RSVPs and submitted blessings persist across browser refreshes via localStorage and allow instant 1-click `.csv` export.
- **Canvas petal performance on mobile**: Petal count throttled to 18 on viewports < 768px, with `requestAnimationFrame` paused when page is backgrounded or user prefers reduced motion.

---

### Task 1: Project Scaffolding & Setup

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/index.css`
- Create: `vitest.config.ts`

**Interfaces:**
- Produces: Working React 19 + TypeScript + Tailwind v4 + Vitest development and build environment.

- [ ] **Step 1: Create package.json with dependencies**
  - Dependencies: `react`, `react-dom`, `lucide-react`, `canvas-confetti`
  - DevDependencies: `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`, `@tailwindcss/vite`, `tailwindcss`, `vitest`
- [ ] **Step 2: Create Vite and TypeScript configurations**
  - `vite.config.ts` with React and Tailwind plugins
  - `tsconfig.json` with strict type checking
- [ ] **Step 3: Create index.html and index.css with royal Google Fonts**
  - Include *Cinzel Decorative*, *Cinzel*, and *Plus Jakarta Sans* fonts
  - Define metallic gold gradient utilities and deckle-edge shadow styles
- [ ] **Step 4: Run npm install and verify dev server build**
  - Run: `npm install`
  - Run: `npm run build`
- [ ] **Step 5: Commit**
  - `git add . && git commit -m "chore: scaffold project with React 19, Tailwind v4 and TypeScript"`

---

### Task 2: Wedding Configuration & Data Model

**Files:**
- Create: `src/config/weddingData.ts`
- Create: `src/types/wedding.ts`
- Test: `tests/weddingData.test.ts`

**Interfaces:**
- Produces: `WeddingConfig` interface and `WEDDING_DATA` constant containing couple names, dates, events, venue coordinates, dress codes, and background video path.

- [ ] **Step 1: Write failing test in tests/weddingData.test.ts**
  - Test that `WEDDING_DATA` has couple names, 5 multi-day ceremonies, venue details, and valid video path.
- [ ] **Step 2: Run test to verify it fails**
  - Run: `npx vitest run tests/weddingData.test.ts`
- [ ] **Step 3: Implement src/types/wedding.ts and src/config/weddingData.ts**
  - Export `WEDDING_DATA` with Aarav & Ananya, Udaipur palace coordinates, Haldi, Mehendi, Sangeet, Pheras, Reception schedules.
- [ ] **Step 4: Run test to verify it passes**
  - Run: `npx vitest run tests/weddingData.test.ts`
- [ ] **Step 5: Commit**
  - `git add src/config/ src/types/ tests/weddingData.test.ts && git commit -m "feat: add royal wedding configuration and types"`

---

### Task 3: Calendar Utility & Countdown Hook

**Files:**
- Create: `src/utils/calendar.ts`
- Create: `src/hooks/useCountdown.ts`
- Test: `tests/calendar.test.ts`
- Test: `tests/useCountdown.test.ts`

**Interfaces:**
- Produces: `generateGoogleCalendarUrl(event: WeddingEvent): string`
- Produces: `generateIcsContent(event: WeddingEvent): string`
- Produces: `useCountdown(targetDate: string): { days: number, hours: number, minutes: number, seconds: number, isExpired: boolean }`

- [ ] **Step 1: Write failing tests in tests/calendar.test.ts and tests/useCountdown.test.ts**
  - Test valid ICS format with `BEGIN:VCALENDAR`, `SUMMARY`, `LOCATION`, `END:VCALENDAR`
  - Test Google Calendar URL parameter encoding
  - Test countdown calculations
- [ ] **Step 2: Run tests to verify they fail**
  - Run: `npx vitest run tests/calendar.test.ts tests/useCountdown.test.ts`
- [ ] **Step 3: Implement calendar utilities and countdown hook**
  - Add date formatting and blob download trigger in `src/utils/calendar.ts`
  - Add interval ticker in `src/hooks/useCountdown.ts`
- [ ] **Step 4: Run tests to verify they pass**
  - Run: `npx vitest run tests/calendar.test.ts tests/useCountdown.test.ts`
- [ ] **Step 5: Commit**
  - `git add src/utils/calendar.ts src/hooks/useCountdown.ts tests/ && git commit -m "feat: add calendar generator and countdown hook"`

---

### Task 4: High-Performance Canvas Petal Particle Engine

**Files:**
- Create: `src/components/PetalCanvas.tsx`
- Test: `tests/PetalCanvas.test.ts`

**Interfaces:**
- Produces: `<PetalCanvas active={boolean} density="normal" | "burst" />`
- Simulates realistic 3D tumbling physics for Kashmiri rose and golden Marigold petals.

- [ ] **Step 1: Write unit test for petal initialization and density settings**
  - Verify petal pool sizing and resize listener cleanup.
- [ ] **Step 2: Run test to verify it fails**
  - Run: `npx vitest run tests/PetalCanvas.test.ts`
- [ ] **Step 3: Implement PetalCanvas with HTML5 Canvas 2D engine**
  - Petal physics with X/Y/Z rotational oscillation, flutter drag, gravity, wind drift.
  - Distinct velvet red rose petal paths and ruffled marigold petal arcs.
  - Auto-throttling on mobile screens (`window.innerWidth < 768`).
- [ ] **Step 4: Run test to verify it passes**
  - Run: `npx vitest run tests/PetalCanvas.test.ts`
- [ ] **Step 5: Commit**
  - `git add src/components/PetalCanvas.tsx tests/PetalCanvas.test.ts && git commit -m "feat: implement high-performance canvas petal particle engine"`

---

### Task 5: Background Video Layer with Graceful Fallbacks

**Files:**
- Create: `src/components/BackgroundVideo.tsx`
- Test: `tests/BackgroundVideo.test.ts`

**Interfaces:**
- Produces: `<BackgroundVideo videoSrc={string} posterSrc?: string />`

- [ ] **Step 1: Write test for video element attributes and fallback display**
  - Ensure `autoPlay`, `muted`, `loop`, `playsInline` attributes exist.
- [ ] **Step 2: Run test to verify it fails**
  - Run: `npx vitest run tests/BackgroundVideo.test.ts`
- [ ] **Step 3: Implement BackgroundVideo component**
  - Fixed background container with rich dark/gold vignette overlay.
  - Error and low-power fallback to animated regal palace gradient and mandala.
- [ ] **Step 4: Run test to verify it passes**
  - Run: `npx vitest run tests/BackgroundVideo.test.ts`
- [ ] **Step 5: Commit**
  - `git add src/components/BackgroundVideo.tsx tests/BackgroundVideo.test.ts && git commit -m "feat: add background video layer with mobile safeguards"`

---

### Task 6: Interactive 3D Realistic Wax-Seal Envelope & Unboxing Hero

**Files:**
- Create: `src/components/WaxSealEnvelope.tsx`
- Create: `src/components/InvitationHero.tsx`
- Test: `tests/WaxSealEnvelope.test.ts`

**Interfaces:**
- Produces: `<WaxSealEnvelope isOpen={boolean} onOpen={() => void} />`
- Produces: `<InvitationHero weddingData={WeddingConfig} onReplayEnvelope={() => void} />`

- [ ] **Step 1: Write test for envelope open state transition and callback trigger**
- [ ] **Step 2: Run test to verify it fails**
  - Run: `npx vitest run tests/WaxSealEnvelope.test.ts`
- [ ] **Step 3: Implement WaxSealEnvelope and InvitationHero**
  - Realistic handmade deckle-edge paper styling and gold embossed filigree.
  - 3D tactile red wax seal with couple monogram `A & A` and radial highlights.
  - Tap interaction with flap flip animation (`rotateX`) and petal shower burst.
  - Unfolded hero card with Sanskrit blessing, couple names, and live countdown timer.
- [ ] **Step 4: Run test to verify it passes**
  - Run: `npx vitest run tests/WaxSealEnvelope.test.ts`
- [ ] **Step 5: Commit**
  - `git add src/components/WaxSealEnvelope.tsx src/components/InvitationHero.tsx tests/ && git commit -m "feat: add 3D wax-seal envelope and invitation hero"`

---

### Task 7: Sacred Shloka & Royal Couple Story

**Files:**
- Create: `src/components/CoupleStory.tsx`

**Interfaces:**
- Produces: `<CoupleStory couple={CoupleInfo} />`

- [ ] **Step 1: Implement CoupleStory with Ganesh Shloka and Jharokha portrait frames**
  - Sacred Shloka calligraphy: *"वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ..."*
  - Dual royal portraits with ornate gold jharokha arch frames.
  - Authentic narrative of Aarav & Ananya's journey.
- [ ] **Step 2: Commit**
  - `git add src/components/CoupleStory.tsx && git commit -m "feat: add couple story with sacred shloka and royal arch portraits"`

---

### Task 8: Multi-Day Royal Itinerary & Attire Lookbook

**Files:**
- Create: `src/components/ItinerarySection.tsx`
- Test: `tests/ItinerarySection.test.ts`

**Interfaces:**
- Produces: `<ItinerarySection events={WeddingEvent[]} />`

- [ ] **Step 1: Write test for event card rendering and calendar triggers**
- [ ] **Step 2: Implement ItinerarySection with swipeable/tabbed ceremonies**
  - Haldi, Mehendi, Sangeet, Vedic Pheras, and Grand Reception cards.
  - Dress codes with color swatches and fabric suggestions.
  - 1-tap "Add to Apple Calendar (.ics)" and "Add to Google Calendar" buttons.
  - Google Maps directions button for each ceremony hall.
- [ ] **Step 3: Run test to verify it passes**
  - Run: `npx vitest run tests/ItinerarySection.test.ts`
- [ ] **Step 4: Commit**
  - `git add src/components/ItinerarySection.tsx tests/ItinerarySection.test.ts && git commit -m "feat: add multi-day itinerary and attire lookbook"`

---

### Task 9: Palace Concierge & Travel Guide

**Files:**
- Create: `src/components/PalaceConcierge.tsx`

**Interfaces:**
- Produces: `<PalaceConcierge venue={VenueInfo} />`

- [ ] **Step 1: Implement PalaceConcierge with tabs for Venue, Transit, Stay & Tips**
  - Details for Jagmandir Island Palace & Lake Pichola.
  - Udaipur Maharana Pratap Airport (UDR) flight guide and private boat jetties.
  - Interactive palace map embed and coordinate links.
- [ ] **Step 2: Commit**
  - `git add src/components/PalaceConcierge.tsx && git commit -m "feat: add palace concierge and travel guide"`

---

### Task 10: Interactive RSVP & Blessing Book

**Files:**
- Create: `src/components/RSVPModal.tsx`
- Create: `src/components/BlessingWall.tsx`
- Create: `src/hooks/useLocalStorage.ts`
- Test: `tests/RSVPModal.test.ts`

**Interfaces:**
- Produces: `<RSVPModal isOpen={boolean} onClose={() => void} onSubmit={(rsvp) => void} />`
- Produces: `<BlessingWall blessings={Blessing[]} onAddBlessing={(b) => void} />`
- Produces: CSV export utility for the couple to download guest lists.

- [ ] **Step 1: Write test for RSVP form validation and CSV export generator**
- [ ] **Step 2: Run test to verify it fails**
  - Run: `npx vitest run tests/RSVPModal.test.ts`
- [ ] **Step 3: Implement RSVPModal and BlessingWall**
  - Guest fields: Name, events attending, dietary needs, DJ song request.
  - Celebration confetti on submission + local storage persistence.
  - "Export Guest List (.csv)" button for the couple.
  - Interactive blessing stream where guests post warm wishes with timestamps.
- [ ] **Step 4: Run test to verify it passes**
  - Run: `npx vitest run tests/RSVPModal.test.ts`
- [ ] **Step 5: Commit**
  - `git add src/components/RSVPModal.tsx src/components/BlessingWall.tsx src/hooks/useLocalStorage.ts tests/ && git commit -m "feat: add interactive RSVP and blessing wall"`

---

### Task 11: Navigation Bar & Sticky Mobile Controls

**Files:**
- Create: `src/components/NavigationBar.tsx`

**Interfaces:**
- Produces: `<NavigationBar onOpenRSVP={() => void} />`
- Sticky royal header with couple monogram and quick links; mobile bottom floating RSVP action bar.

- [ ] **Step 1: Implement NavigationBar with gold foil borders and backdrop blur**
- [ ] **Step 2: Commit**
  - `git add src/components/NavigationBar.tsx && git commit -m "feat: add responsive royal navigation bar and mobile RSVP trigger"`

---

### Task 12: End-to-End Assembly, Polish & Build Verification

**Files:**
- Create: `src/App.tsx`
- Public assets: High-res palace video loop and SVG filigree assets

- [ ] **Step 1: Assemble full royal invitation layout in src/App.tsx**
  - Coordinate unboxing state, video background, falling petals, sections, modals.
- [ ] **Step 2: Add palace video background asset and verify playback**
- [ ] **Step 3: Run comprehensive test suite and build verification**
  - Run: `npm test`
  - Run: `npm run build`
- [ ] **Step 4: Test mobile viewports (375px, 390px, 412px, 768px, 1440px)**
- [ ] **Step 5: Commit**
  - `git add . && git commit -m "feat: complete royal wedding invitation landing page assembly"`
