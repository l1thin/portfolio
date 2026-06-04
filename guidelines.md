# Agentic Blueprint: Portfolio Recreation Guidelines

**Target Reference:** https://lukebaffait.fr/
**Objective:** This document serves as a highly detailed, step-by-step blueprint for an AI agent to build a pixel-perfect React/Vite portfolio that mimics the structure, aesthetic, and interactions of the reference site, utilizing the user's specific content and assets.

---

## 1. Global Setup & Theming
- **Framework:** React 19 + Vite.
- **Styling:** Vanilla CSS (Do NOT use Tailwind unless explicitly instructed). Use CSS modules or a well-structured `index.css`.
- **Colors:**
  - Background: `#0a0a0a` (True Dark Mode).
  - Text Primary: `#ffffff` or `#f2f2f2` for high contrast.
  - Text Secondary: Muted gray (e.g., `#888888`) for supporting text.
  - Accent: A deep/muted red or matching accent color for transition panels.
- **Typography:**
  - **Body/UI:** `Inter` (Google Fonts). Used for navigation, paragraphs, and small UI elements.
  - **Display:** A stylized serif (similar to `Breton`) or a sharp technical display font. Use this for the hero tagline and large headings.

---

## 2. Core Visual Assets
The following files are located in the project root and MUST be integrated exactly as described:
- `12310771_1920_1080_24fps.mp4` -> **Hero Background Video**. Must be placed in the `hero-canvas` container, set to autoplay, loop, muted, and cover the entire screen.
- `gemini-2.5-flash-image_A_cinematic_highly_professional_studio_headshot_portrait_of_a_tech_engineer_dark-0.jpg` -> **Profile Portrait**. Used in the `Info/About` section.
- `stratum.png` -> **Project Cover for Stratum**. Used in the `Work/Projects` gallery.
- `insightx.png` -> **Project Cover for InsightX**. Used in the `Work/Projects` gallery.
- `details.md` -> **Content Source**. All text (bio, tagline, links) MUST be sourced from this file.

---

## 3. DOM Structure & Layout (Index / Home)

### A. The Preloader (`#name-layer`)
- **Structure:** A full-screen `fixed` overlay that covers the site on load (`z-index: 9999`).
- **Content:** A sequence that spells out the developer's name (e.g., "Lithin Jose.").
- **Animation:** Use GSAP or Framer Motion. Elements fade/slide in sequentially, hold for a moment, and then the entire overlay translates vertically (or fades out) to reveal the Hero section.

### B. The Transition Panel (`#transition-panel`)
- **Structure:** A fixed container containing two colored panels (one dark `#0a0a0a`, one accent color).
- **Behavior:** Triggered on route changes. The panels sweep across the screen (e.g., from bottom to top) to hide the outgoing page, then sweep away to reveal the incoming page, avoiding hard browser reloads.

### C. The Hero Section (`#hero`)
- **Structure:** `100vh` full-screen section.
- **Background (`.hero-canvas`):** Contains the looping `.mp4` video. Set `object-fit: cover; opacity: 0.6;` to ensure text remains readable.
- **Foreground Overlay (`.hero-content`):**
  - **Tagline (`.hero-tagline`):** Centered horizontally and vertically. Very large typography. Source the text from `details.md` ("AI Engineer & Machine Learning Developer..."). Use a mix of the display font and `Inter`.
  - **Divider (`.hero-line`):** A 1px horizontal line (`border-top: 1px solid rgba(255,255,255,0.1)`) positioned near the bottom of the screen, separating the center content from the footer nav.

### D. The Bottom Navigation Bar (`.hero-bar`)
- **Positioning:** Fixed or absolute positioned at the bottom of the viewport, under `.hero-line`. Flexbox layout with `justify-content: space-between`.
- **Layout:**
  - **Left (`.hero-bar-left`):** Developer's initials or version indicator (e.g., `v1.0`).
  - **Center (`.hero-bar-center`):** Social Links (GitHub, LinkedIn, Instagram). Sourced from `details.md`. Separated by a `/` span (e.g., `GitHub / LinkedIn / Instagram`).
  - **Right (`.hero-bar-right`):** Internal Page Navigation (`Work`, `Info`, `Contact`).

---

## 4. Micro-Interactions (CRITICAL)
To achieve the exact "Creative Developer" feel, the following interactive elements must be implemented:

- **The Scramble Hover Effect (`.chr-hover`):** 
  - Apply this to ALL links in the bottom navigation bar.
  - **Behavior:** On `mouseenter`, the text characters quickly scramble into random symbols/letters (e.g., `#@%*`) for ~200-300ms before resolving back to their original word.
  - **Implementation:** Recommend writing a custom React hook `useScrambleText` or utilizing a library like `gsap.TextPlugin` or a lightweight scramble library.

- **Smooth Scrolling:** Implement a smooth scroll library (like Lenis or Locomotive Scroll) to ensure scroll behaviors feel buttery smooth, heavy, and premium.

---

## 5. Sub-Pages Implementation Plan
*(Based on the `.hero-bar-right` navigation)*

### /works (Projects)
- A full-screen horizontal or vertical scroll gallery.
- Display large cards featuring `stratum.png` and `insightx.png`.
- On hover, the cover image scales slightly (`transform: scale(1.05)`) with a smooth transition.
- Display the Tech Stack, Description, and Links over or alongside the images.

### /info (About Me & Skills)
- A minimalist typographic layout.
- Use the Profile Portrait (`gemini-2.5-flash-image...jpg`). Apply a grayscale filter (`filter: grayscale(100%)`) that reverts to color on hover.
- Display the Bio and a clean grid/list of the Skills categorized in `details.md`.

---

## 6. Execution Checklist for the Agent
1. **Initialize App:** `npx create-vite . --template react`.
2. **Configure Assets:** Move video and images to the `public/` or `src/assets/` directory.
3. **Build Core Components:** `Hero`, `Preloader`, `TransitionPanel`.
4. **Implement Global CSS:** Set CSS variables for `#0a0a0a` theme and fonts.
5. **Integrate Logic:** Build the scramble text hook.
6. **Construct Layout:** Build the flexbox footer nav and center tagline.
7. **Populate Data:** Hardcode or map the specific data from `details.md`.
8. **Test Interactions:** Ensure the scramble effect, preloader, and video loop are functioning flawlessly.
