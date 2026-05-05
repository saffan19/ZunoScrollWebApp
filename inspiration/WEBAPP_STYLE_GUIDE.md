# ZunoScroll — Webapp Style Guide

> A comprehensive design reference for building the ZunoScroll web application.  
> Derived from the Flutter app's live design system (`ZunoPaperColors`, `AppColors`, typography helpers, and generative art painters).

---

## 1. Design Philosophy

ZunoScroll uses a **"Warm Paper Journal"** aesthetic — think analogue notebooks, aged parchment, and ink on paper. It is warm, editorial, and human rather than cold or tech-forward.

**Core principles:**
- **Warmth over sterility** — no pure whites or pure blacks; every surface has a warm tint.
- **Editorial hierarchy** — serif headlines, sans-serif body, monospace labels.
- **Handcrafted details** — hand-drawn underlines, generative cover art, ink-like strokes.
- **Restrained motion** — subtle, tasteful transitions (220 ms ease-in-out); never flashy.
- **Paper depth** — layers of warm tones create subtle depth without heavy shadows.

---

## 2. Colour System

### 2.1 Theme Modes

The app ships with three modes. The **Parchment** mode is the signature look.

| Mode | Description |
|------|-------------|
| **Parchment** (default) | Warm cream / parchment backgrounds, dark brown ink |
| **Light** | Slightly cooler cream/white variant |
| **Dark** | Near-black dark-brown backgrounds with warm parchment text |

---

### 2.2 ZunoPaper Palette — the primary design tokens

These are the tokens you will use on 90 % of surfaces.

#### Backgrounds

| Token | Light (Parchment) | Dark | Usage |
|-------|-------------------|------|-------|
| `paper` | `#F2E8D8` | `#1A1613` | Main page background |
| `paperDeep` | `#EADCC4` | `#13100E` | Deeper inset areas, code blocks |
| `paperSoft` | `#F8F1E3` | `#23201C` | Hover states, subtle chips |
| `cardBg` | `#F2E8D8` | `#23201C` | Cards, panels, dialogs |

#### Text / Ink

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `ink` | `#1F1A17` | `#F2E8D8` | Primary headings and body text |
| `inkSoft` | `#5A4A3D` | `#C9BCA8` | Secondary / descriptive text |
| `inkMute` | `#8C7A68` | `#8C7A68` | Captions, labels, placeholders |

#### Accent / Brand Colours

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `terracotta` | `#C8553D` | `#E27659` | Primary CTA, highlights, pro badge, stream icon |
| `ochre` | `#E0A458` | `#E0A458` | Secondary accent, "for you" badge, level indicators |
| `sage` | `#88A096` | `#9CB3A7` | Enrolled / curated streams accent |

#### Structural

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `rule` | `rgba(#1F1A17, 12%)` | `rgba(#F2E8D8, 10%)` | Borders, dividers, separators |
| `heroBg` | `#1F1A17` | `#2D2620` | Hero/banner dark overlays |

---

### 2.3 AppColors — semantic / functional tokens

These sit one level above and are used throughout interactive components.

```
Primary    #E84037  — vivid red-orange (brand CTA)
PrimaryL   #F06B60  — hover/highlight variant
PrimaryD   #C22A22  — pressed / active state

Accent     #D4843C  — warm amber complement

Success    #B8950A  — warm olive-amber
Warning    #E8A020  — bright amber
Error      #C84020  — orange-red

Background #FBF0E6  — lightest parchment (app scaffold)
Surface    #F5E4D2  — card surface
SurfaceEl  #EDD5BC  — elevated / floating card
Border     #D8C0A0  — warm amber divider
```

---

### 2.4 Generative Cover Art — Stream Cover Palettes

Stream cards without a photo use deterministic generative art. Six palettes rotate based on `hash(title) % 6`.

| Index | Background | Foreground | Accent |
|-------|-----------|-----------|--------|
| 0 | `#C8553D` terracotta | `#F2E8D8` parchment | `#E0A458` ochre |
| 1 | `#E0A458` ochre | `#1F1A17` ink | `#C8553D` terracotta |
| 2 | `#88A096` sage | `#1F1A17` ink | `#E0A458` ochre |
| 3 | `#1F1A17` ink | `#F2E8D8` parchment | `#E0A458` ochre |
| 4 | `#5A4A3D` brown | `#F2E8D8` parchment | `#C8553D` terracotta |
| 5 | `#A8412C` deep terracotta | `#F2E8D8` parchment | `#E0A458` ochre |

**Cover art anatomy** (see Section 6 for full recreation guide):
- Solid background fill from palette.
- One of 5 geometric background patterns at ~22% fg opacity (diagonal stripes / dot grid / concentric arcs / wavy lines / checkerboard).
- One accent shape (circle / rotated square / triangle) in accent colour, pinned top-right area.
- A **parchment-white initials block** (`#F2E8D8`) bottom-left, italic serif initials in bg colour.
- A **"STREAM" monospace badge** (`#F2E8D8` bg, bg colour text) bottom-right.

---

## 3. Typography

### 3.1 Type Scale

ZunoScroll uses **three typefaces**, each with a specific role.

| Role | Typeface | Google Fonts | CSS fallback |
|------|----------|-------------|--------------|
| **Serif** — display/headings | Instrument Serif | `@import` | `Georgia, serif` |
| **Sans** — body / UI | DM Sans | `@import` | `system-ui, sans-serif` |
| **Mono** — labels / stats | JetBrains Mono | `@import` | `'Courier New', monospace` |
| **Script** — decorative callouts | Caveat | `@import` | `cursive` |

```html
<!-- Google Fonts import -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Caveat:wght@600;700&display=swap" rel="stylesheet">
```

### 3.2 Type Sizes & Usage

| Token | Family | Size | Weight | Usage |
|-------|--------|------|--------|-------|
| Display | Instrument Serif | 28–36px | 400 | Page section headings ("Yours", "Enrolled") |
| H1 | Instrument Serif | 22px | 700 | Screen titles |
| H2 | DM Sans | 20px | 700 | Card titles, dialog headings |
| H3 | DM Sans | 17px | 700 | Sub-section headings |
| Body | DM Sans | 15px | 400 | Descriptions, paragraph text |
| BodySm | DM Sans | 13px | 400 | Secondary info, subtitles |
| Label | DM Sans | 12px | 600 | Buttons, chips, badges |
| Caption | DM Sans | 11px | 400/600 | Metadata, timestamps |
| Mono | JetBrains Mono | 10px | 400 | Section supertitles e.g. "MY STREAMS", stats |
| Script | Caveat | 13px | 600 | Decorative callouts e.g. "✦ for you" |

**Key typographic patterns:**
- Section supertitles use **JetBrains Mono 10px, 1.5 letter-spacing, `inkMute` colour, UPPERCASE**.
- Display headings use **Instrument Serif with a hand-drawn underline** in `terracotta` or `sage`.
- Letter-spacing on DM Sans titles: `−0.3px` to `−0.5px`.
- Line-height for serif headings: `1.1`.

---

## 4. Spacing & Layout

### 4.1 Base Unit

Use an **8px base grid** throughout.

| Token | Value |
|-------|-------|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |

### 4.2 Page Padding

- Horizontal page padding: **20px** on mobile.
- Section gap: **32px** between major sections.
- Card internal padding: **14–16px** horizontal, **12–14px** vertical.

### 4.3 Border Radius

| Usage | Radius |
|-------|--------|
| Cards / panels | `14px` |
| Buttons (primary) | `10–12px` |
| Chips / badges | `8px` or `999px` (pill) |
| Bottom sheets | `24px` top corners |
| Small icons / avatars | `10px` |
| Full circle | `50%` |

---

## 5. Components

### 5.1 Cards

**Standard card:**
```css
background: var(--cardBg);          /* #F2E8D8 light / #23201C dark */
border-radius: 14px;
border: 1px solid var(--rule);      /* ~12% ink opacity */
padding: 14px 16px;
```

**No heavy box-shadows** — depth is created by layering warm background tones.  
For floating elements (dialogs, dropdowns) a very soft shadow is acceptable:
```css
box-shadow: 0 8px 32px rgba(0,0,0,0.18);
```

### 5.2 Buttons

**Primary CTA:**
```css
background: var(--terracotta);   /* #C8553D */
color: #FFFFFF;
border-radius: 10px;
padding: 8px 14px;
font: 600 13px/1 'DM Sans';
border: none;
```

**Secondary / Ghost:**
```css
background: var(--cardBg);
color: var(--inkMute);
border-radius: 10px;
padding: 8px 14px;
font: 600 13px/1 'DM Sans';
border: 1px solid var(--rule);
```

**Destructive:**
```css
background: transparent;
color: #C84020;  /* AppColors.error */
```

### 5.3 Progress Bar

- Height: **7px**, `border-radius: 8px`.
- Track: `var(--rule)` colour.
- Fill: `var(--terracotta)` (custom streams) or `var(--ochre)` (enrolled).
- Clipped with `overflow: hidden; border-radius: 8px`.

### 5.4 Badges / Chips

**Level badge:**
```css
background: rgba(200, 85, 61, 0.14);  /* terracotta 14% */
color: var(--terracotta);
border-radius: 999px;
padding: 3px 8px;
font: 700 10px 'DM Sans';
```

**PRO badge:**
```css
background: var(--terracotta);
color: #FFFFFF;
border-radius: 7px;
padding: 3px 7px;
font: 700 10px 'DM Sans';
```
Shows a star icon (⭐ or `workspace_premium`) + "PRO" or "TRIAL·Xd".

**"for you" callout chip:**
```css
background: var(--ochre);          /* #E0A458 */
color: #1F1A17;
border-radius: 6px;
padding: 4px 8px;
font: 600 13px 'Caveat';
```

### 5.5 Avatar / Initials

- Circular container, `background: var(--terracotta)`.
- White italic Instrument Serif initials (1–2 letters).
- Size: 76px on profile, 44px in list items, 36px in sidebar.

### 5.6 Section Headers (Pattern)

```
MONO LABEL (10px, 1.5 letter-spacing, inkMute, UPPERCASE)
────────────────────────────────────────
Display Serif title (28–36px)   ← has hand-drawn bezier underline
Mono counter (10px, inkMute)
```

### 5.7 Empty State

Centred card with:
1. `48×48` icon container — `terracotta` at 10% opacity bg, icon at 70% terracotta.
2. Medium-weight sans title.
3. Light-colour action hint or link in terracotta.

### 5.8 Bottom Sheet / Modal

```css
background: var(--cardBg);
border-radius: 24px 24px 0 0;
border: 1px solid rgba(var(--rule-raw), 0.18);
```

Top drag handle: `36×4px`, `border-radius: 2px`, `var(--rule) at 40% opacity`.

---

## 6. Generative Stream Cover Art (CSS/Canvas Recreation)

The Flutter app uses `StreamCoverPainter` — a deterministic canvas painter. Here is how to recreate it in JavaScript/HTML Canvas or SVG.

### Algorithm

```js
function hashTitle(s) {
  return s.split('').reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) & 0x7fffffff, 0);
}

const PALETTES = [
  { bg: '#C8553D', fg: '#F2E8D8', accent: '#E0A458' },
  { bg: '#E0A458', fg: '#1F1A17', accent: '#C8553D' },
  { bg: '#88A096', fg: '#1F1A17', accent: '#E0A458' },
  { bg: '#1F1A17', fg: '#F2E8D8', accent: '#E0A458' },
  { bg: '#5A4A3D', fg: '#F2E8D8', accent: '#C8553D' },
  { bg: '#A8412C', fg: '#F2E8D8', accent: '#E0A458' },
];

function drawStreamCover(ctx, title, w, h) {
  const hash  = hashTitle(title);
  const pal   = PALETTES[hash % 6];
  const pat   = hash % 5;
  const shape = hash % 3;

  // 1. Background
  ctx.fillStyle = pal.bg;
  ctx.fillRect(0, 0, w, h);

  // 2. Pattern (22% fg opacity)
  ctx.strokeStyle = hexToRgba(pal.fg, 0.22);
  ctx.lineWidth   = Math.max(1, w * 0.018);
  const step = w * 0.11;

  if (pat === 0) {
    // Diagonal stripes
    for (let i = -10; i < 20; i++) {
      const x0 = i * step;
      ctx.beginPath(); ctx.moveTo(x0, 0); ctx.lineTo(x0 + h, h); ctx.stroke();
    }
  } else if (pat === 1) {
    // Dot grid
    const ds = w / 7, dr = Math.max(1, w * 0.018);
    for (let r = 0; r <= 7; r++) for (let c = 0; c <= 7; c++) {
      ctx.beginPath(); ctx.arc(c * ds, r * ds, dr, 0, Math.PI * 2);
      ctx.fillStyle = hexToRgba(pal.fg, 0.22); ctx.fill();
    }
  } else if (pat === 2) {
    // Concentric arcs
    const cx = w * 0.82, cy = h * 0.82;
    [0.18, 0.36, 0.55, 0.73, 0.91].forEach(frac => {
      ctx.beginPath(); ctx.arc(cx, cy, w * frac, 0, Math.PI * 2); ctx.stroke();
    });
  } else if (pat === 3) {
    // Wavy lines
    [0.14, 0.32, 0.50, 0.68, 0.87].forEach(frac => {
      const y = h * frac;
      ctx.beginPath(); ctx.moveTo(0, y);
      for (let x = 0; x < w; x += step * 2) {
        ctx.quadraticCurveTo(x + step, y + h * 0.07, x + step * 2, y);
      }
      ctx.stroke();
    });
  } else {
    // Checkerboard 5×5
    const cell = w / 5;
    ctx.fillStyle = hexToRgba(pal.fg, 0.15);
    for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) {
      if ((r + c) % 2 === 0) ctx.fillRect(c * cell, r * cell, cell, cell);
    }
  }

  // 3. Accent shape
  ctx.fillStyle = pal.accent;
  const ax = w * (0.64 + (hash % 20) * 0.009);
  const ay = h * (0.16 + ((hash >> 3) & 7) * 0.01);
  const ar = w * 0.082;
  if (shape === 0) {
    ctx.beginPath(); ctx.arc(ax, ay, ar, 0, Math.PI * 2); ctx.fill();
  } else if (shape === 1) {
    ctx.save(); ctx.translate(ax + ar, ay + ar);
    ctx.rotate((hash % 30) * Math.PI / 180);
    ctx.fillRect(-ar, -ar, ar * 2, ar * 2);
    ctx.restore();
  } else {
    ctx.beginPath();
    ctx.moveTo(ax, ay - ar); ctx.lineTo(ax + ar, ay + ar); ctx.lineTo(ax - ar, ay + ar);
    ctx.closePath(); ctx.fill();
  }

  // 4. Initials block (bottom-left)
  const iW = w * 0.38, iH = h * 0.33;
  const iX = w * 0.13, iY = h - iH - h * 0.08;
  ctx.fillStyle = '#F2E8D8';
  ctx.fillRect(iX, iY, iW, iH);

  const initials = getInitials(title);
  const fontSize = Math.min(28, Math.max(8, iH * 0.55));
  ctx.fillStyle = pal.bg;
  ctx.font = `italic ${fontSize}px 'Instrument Serif', Georgia, serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(initials, iX + iW / 2, iY + iH / 2);

  // 5. "STREAM" badge (bottom-right)
  const bW = w * 0.33, bH = h * 0.11;
  const bX = w * 0.58, bY = h - bH - h * 0.02;
  ctx.fillStyle = '#F2E8D8';
  ctx.fillRect(bX, bY, bW, bH);
  const bFontSize = Math.min(8, Math.max(4, bH * 0.52));
  ctx.fillStyle = pal.bg;
  ctx.font = `500 ${bFontSize}px 'JetBrains Mono', monospace`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('STREAM', bX + bW / 2, bY + bH / 2);
}

function getInitials(title) {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}
```

**Usage:**
```html
<canvas id="cover" width="150" height="200"></canvas>
<script>
  const ctx = document.getElementById('cover').getContext('2d');
  drawStreamCover(ctx, 'Machine Learning', 150, 200);
</script>
```

---

## 7. Decorative Art Patterns

These are used as UI accents across the app.

### 7.1 Hand-Drawn Underline

Used under serif section titles. Implement as an SVG path or CSS `::after` pseudo-element.

```svg
<!-- Replace width with the text width in px -->
<svg width="90" height="8" viewBox="0 0 90 8" fill="none">
  <path d="M0 4.8 Q45 0.8 90 5.6" stroke="#C8553D" stroke-width="2.5"
        stroke-linecap="round" fill="none"/>
</svg>
```

- Terracotta for "Yours" / custom stream sections.
- Sage (`#88A096`) for "Enrolled" sections.
- Ochre (`#E0A458`) for analytics / discovery sections.

### 7.2 Constellation Decoration

Five dots with connecting lines — used in hero cards as a subtle flourish.

```svg
<svg width="70" height="60" viewBox="0 0 70 60" fill="none">
  <line x1="10" y1="10" x2="40" y2="20" stroke="#E0A458" stroke-width="0.8" opacity="0.3"/>
  <line x1="40" y1="20" x2="60" y2="8"  stroke="#E0A458" stroke-width="0.8" opacity="0.3"/>
  <line x1="40" y1="20" x2="50" y2="42" stroke="#E0A458" stroke-width="0.8" opacity="0.3"/>
  <line x1="50" y1="42" x2="22" y2="50" stroke="#E0A458" stroke-width="0.8" opacity="0.3"/>
  <circle cx="10" cy="10" r="2.5" fill="#E0A458" opacity="0.6"/>
  <circle cx="40" cy="20" r="2.5" fill="#E0A458" opacity="0.6"/>
  <circle cx="60" cy="8"  r="2.5" fill="#E0A458" opacity="0.6"/>
  <circle cx="50" cy="42" r="2.5" fill="#E0A458" opacity="0.6"/>
  <circle cx="22" cy="50" r="2.5" fill="#E0A458" opacity="0.6"/>
</svg>
```

### 7.3 Concentric Circles

Used on the Discover / CTA cards as a bottom-right decorative corner.

```svg
<svg width="100" height="100" viewBox="0 0 100 100" fill="none">
  <circle cx="50" cy="50" r="15" stroke="white" stroke-width="1" opacity="0.18"/>
  <circle cx="50" cy="50" r="28" stroke="white" stroke-width="1" opacity="0.18"/>
  <circle cx="50" cy="50" r="41" stroke="white" stroke-width="1" opacity="0.18"/>
  <circle cx="50" cy="50" r="54" stroke="white" stroke-width="1" opacity="0.18"/>
</svg>
```

### 7.4 Dotted Rule

Use a CSS `border-bottom` with `border-style: dashed` or an SVG dash pattern for the bottom-of-chart dotted baseline.

```css
.dotted-rule {
  border-top: 1px dashed var(--rule);
  /* or */
  background: repeating-linear-gradient(
    to right, var(--rule) 0 3px, transparent 3px 6px
  );
  height: 1px;
}
```

---

## 8. CSS Custom Properties Reference

Add these to your `:root` (and `[data-theme="dark"]` override):

```css
:root {
  /* ── ZunoPaper (Light / Parchment) ── */
  --paper:       #F2E8D8;
  --paper-deep:  #EADCC4;
  --paper-soft:  #F8F1E3;
  --card-bg:     #F2E8D8;

  --ink:         #1F1A17;
  --ink-soft:    #5A4A3D;
  --ink-mute:    #8C7A68;

  --terracotta:  #C8553D;
  --ochre:       #E0A458;
  --sage:        #88A096;

  --rule:        rgba(31, 26, 23, 0.12);

  /* ── AppColors (semantic) ── */
  --primary:     #E84037;
  --primary-l:   #F06B60;
  --primary-d:   #C22A22;
  --accent:      #D4843C;
  --success:     #B8950A;
  --warning:     #E8A020;
  --error:       #C84020;
  --border:      #D8C0A0;

  /* ── Typography ── */
  --font-serif:  'Instrument Serif', Georgia, serif;
  --font-sans:   'DM Sans', system-ui, sans-serif;
  --font-mono:   'JetBrains Mono', 'Courier New', monospace;
  --font-script: 'Caveat', cursive;
}

[data-theme="dark"] {
  --paper:       #1A1613;
  --paper-deep:  #13100E;
  --paper-soft:  #23201C;
  --card-bg:     #23201C;

  --ink:         #F2E8D8;
  --ink-soft:    #C9BCA8;

  --terracotta:  #E27659;
  --sage:        #9CB3A7;

  --rule:        rgba(242, 232, 216, 0.10);
}
```

---

## 9. Motion & Animation

| Property | Value |
|----------|-------|
| Default transition | `220ms ease-in-out` |
| Expand/collapse | `220ms` cross-fade or height transition |
| Hover scale | `scale(1.02)` or none (prefer colour shift on web) |
| Loading shimmer | Wave animation left→right, `1.4s` ease-in-out infinite |
| Page transition | Fade + slight upward translate (`translateY(8px)` → `0`) |

Avoid heavy animations. This is a reading/learning app — motion should be subtle and purposeful.

---

## 10. Iconography

The app uses **Material Icons Rounded** set, referred to via `AppIcons`.

Key icons in use:

| Icon | Usage |
|------|-------|
| `star` / `star_border` | Pro badge, featured |
| `settings_rounded` | Settings |
| `add_rounded` | New stream |
| `more_vert_rounded` | Overflow menu |
| `account_tree_rounded` | Knowledge graph |
| `info_outline_rounded` | Details |
| `logout_rounded` | Unenroll |
| `delete_rounded` | Delete stream |
| `keyboard_arrow_down/up` | Expand/collapse |
| `grid_view_rounded` | Empty state |
| `school_rounded` | Curated/enrolled stream |
| `folder_rounded` | Custom stream |
| `chevron_right_rounded` | Navigation arrow |

Use `font-size: 18–22px` for action icons, `14–16px` for inline/label icons.

---

## 11. Navigation Structure

```
Library (Home tab)
  ├── For You (hero feed)
  ├── My Streams (horizontal scroll cards)
  └── Enrolled / Curated Streams

Learn (Feed tab)
  └── Scroll-based card feed

Profile tab
  ├── User section (avatar + name + email + stream counts)
  ├── Settings tile
  ├── Upgrade to Pro banner (non-pro)
  ├── My Streams section (expandable cards)
  └── Enrolled section (expandable cards)

Settings
  ├── Theme picker (Parchment / Light / Dark)
  └── Feedback / Bug report
```

---

## 12. Pro / Upgrade Banner

Full-width terracotta banner:

```css
background: var(--terracotta);
border-radius: 16px;
padding: 16px;
```

Layout: icon container (white 20% bg) → text column → "Get Pro" white button with terracotta text.

The "Get Pro" button:
```css
background: #FFFFFF;
color: var(--terracotta);
border-radius: 10px;
padding: 8px 14px;
font: 700 13px 'DM Sans';
```

---

## 13. Stream Card (Library)

The card in the horizontal library scroll list:

- Width: `150px`, variable height.
- Top: **stream cover art** (generative or photo), `100px` tall, `border-radius: 12px`, full-width.
- Below cover: stream title (Instrument Serif 19px), category caption (DM Sans 11px inkMute).
- Bottom row: info icon button + arrow/navigate icon.
- Border: `1px solid var(--rule)`, `border-radius: 18px`.
- Background: `var(--paper)`.

Locked streams: `opacity: 0.55` + lock icon overlay.

---

## 14. Quick-Reference Color Swatches

```
Parchment family:
  ████ #F2E8D8  paper
  ████ #EADCC4  paperDeep
  ████ #F8F1E3  paperSoft

Ink family:
  ████ #1F1A17  ink
  ████ #5A4A3D  inkSoft
  ████ #8C7A68  inkMute

Accent family:
  ████ #C8553D  terracotta (light)
  ████ #E27659  terracotta (dark)
  ████ #E0A458  ochre
  ████ #88A096  sage (light)
  ████ #9CB3A7  sage (dark)

Brand:
  ████ #E84037  primary (red-orange)
  ████ #F06B60  primary light
  ████ #C22A22  primary dark
  ████ #D4843C  accent (amber)

Semantic:
  ████ #B8950A  success
  ████ #E8A020  warning
  ████ #C84020  error
```
