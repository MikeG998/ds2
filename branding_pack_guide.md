---

## 1. **Brand “One Pager” (Top-level Reference)**

- **Brand Name, Tagline**\
  **DealSurge.co** — Lead generation, engineered for growth.

- **Core Value Proposition**

  DealSurge.co delivers high-quality leads and scalable growth for ambitious UK/EU businesses. Whether you want us to run your entire lead generation engine or simply plug directly into your pipeline, our modular stack gives you the edge: proven performance, full transparency, and the ability to own your system if you want to scale on your terms. Get the results of a top agency—with the flexibility, control, and tech advantage only DealSurge.co provides.

- **Tone/Personality**\
  Professional, solutions-focused, clear, value-driven. Always communicate as experts—every touchpoint should build trust and credibility.

---

## 2. **Logo & Icon System**

- **Primary Logo:**
  - SVG, PNG (transparent, on white, on dark)
- **Favicon/Icon:**
  - Simple version for web, apps, social
- **Spacing/Exclusion Zone:**
  - Clear rules for use on assets (e.g., X-height, minimum size)

---

## 3. **Colour Palette**

- **Core Base:**
  - *Pure White* (#FFFFFF) — Background
  - *Graphite Black* (#181A1B) — Text/Icons
- **Primary Accents:**
  - *Process Cyan* (#10B8EC)
  - *Electric Teal* (#24D1C6)
  - *Lime Green* (#7AD13F)
  - *Signal Red* (#ED4848)
- **Secondary & Pop Colours:**
  - *Sunburst Yellow* (#FFD600) — attention, badges, micro-highlights
  - *Purple Indigo* (#6C47FF) — creative accent, section dividers
  - *Rose Pink* (#FF5C8A) — subtle highlight/accent on cards or icons
  - *Slate Grey* (#ECEEF1) — soft backgrounds/cards
  - *Gunmetal* (#2D333A) — UI contrast, secondary text
- **Guidelines:**
  - Up to 8–10 total, to allow visual interest and hierarchy (never visually overwhelming)
  - All accents should be bold and used with intent, never randomly
  - Gradients permitted *only* for large-section backgrounds, never buttons or text
- **Accessibility:**
  - All UI and body text must pass high contrast

---

## 4. **Typography**

- **Font Family:**

  - **Brand Name / Headlines:** Montserrat Bold or SemiBold — geometric, modern sans-serif for authority and clarity
  - **Slogan / Subheadings:** IBM Plex Sans Regular — clean, professional, web-native
  - **Body Text:** IBM Plex Sans Regular or Montserrat Regular (use for long-form, web/app content)
  - **Fallbacks:** system-ui, Arial, sans-serif (for universal compatibility)

- **Hierarchy:**

  - **Headings/Brand Name:** Bold/SemiBold, Title Case (not all caps), tight letter spacing (-1% to 0%), line height 1.1–1.2
  - **Slogan/Subheading:** Regular, 18–22px, slightly increased letter spacing (0% to +2%), line height 1.3–1.4
  - **Body Text:** Regular, 16–18px, generous line height (1.6–1.75), clear paragraph spacing
  - **Buttons/CTAs:** Montserrat Bold, uppercase or Title Case, increased letter spacing (+2% to +4%)
  - **Meta/Captions:** IBM Plex Sans Light/Italic, smaller, always high contrast

- **Usage Guidelines:**

  - Never mix more than 2 font families per screen.
  - No rounded/playful/serif/script fonts—only geometric sans-serifs.
  - Use weight, size, and spacing—not colour—for hierarchy and clarity.
  - Test legibility at all sizes, including mobile and small headers.
  - All text must pass accessibility and contrast standards.

- **Usage Examples:**

  - **Headline:** DEAL SURGE — Montserrat Bold, 36–48px, -1% letter spacing, #181A1B
  - **Slogan:** Lead generation, engineered for growth. — IBM Plex Sans Regular, 18–22px, #2D333A
  - **Body:** “We help you own your leads…” — IBM Plex Sans Regular, 16–18px, #181A1B
  - **CTA Button:** BOOK YOUR GROWTH CALL — Montserrat Bold, 18px, uppercase, +2% letter spacing, #FFF on #24D1C6

---

## 5. **Imagery/Icons/Graphics**

- **Illustrations:**
  - Minimal line/outline, vibrant accents from pop palette
  - Use splashes of yellow, teal, purple, pink for vibrancy (never bland or monochrome-only)
  - No stock photos, no playful/rounded cartoons
- **Screenshots:**
  - Show the stack in action (n8n, Budibase, dashboards, etc.)
  - Highlight features with accent overlays or pop-colour highlights

---

## 6. **Voice & Messaging**

**Overview:**

- Speak with authority, clarity, and respect for the reader’s time—always value-first and solutions-focused.
- Never patronising, never fluffy. Every message should build trust and reflect professional expertise.
- Direct, but approachable; helpful, but never salesy.
- Always evidence-driven: focus on proof, outcomes, transparency, and ownership.

**Core Messaging Pillars:**

- Modular, high-performance systems that can scale with or without us.
- Data ownership, transparency, and flexibility—clients are in control.
- UK/EU operator bias—practical, not theoretical. No US SaaS hype, just results.
- Partnership as a mindset: we plug in, scale, or hand over based on need.

**SEO/Website Pages:**

- Each page should speak directly to the vertical or use case (“Property Lead Generation,” “Financial Services Growth,” etc) with practical, technical depth and no generic filler.
- Highlight specific results and systems—real use cases, real workflows, real wins.
- Always include a “next step” CTA: book a call, get a demo, download a playbook, etc.

**Newsletter/Free Value Content:**

- Slightly more conversational, still expert-led.
- Share transparent playbooks, teardown guides, performance data, and actionable experiments.
- Never clickbait. Every tip should have immediate, provable value (show your work, give templates, link to real workflows).
- Use this channel to educate and attract—subscribers should feel they’re getting insight not found anywhere else.

**Headline/Tagline Examples:**

- "Great product. Weak pipeline. Let’s fix that."
- "Lead generation, engineered for growth."
- "Your stack. Your data. Your results."
- "Plug in. Scale up. Own it."

---

## 7. **UI Components Reference**

We use **Tailwind CSS as the base utility framework. shadcn/ui and Radix UI are preferred for adaptable, maintainable, and business-focused components.** All UI should be easy to override, extend, or replace as the site scales.

- **Buttons:**
  - Sharp or pill corners, bold font (Montserrat Bold), strong accent backgrounds or borders
  - Drop shadows and gradients allowed for large CTAs only
  - Palette colour can be adapted for context (not just primary)
  - Always clear hover/focus states
- **Cards:**
  - White, tinted, or light gradient backgrounds
  - Strong accent borders or badges when needed
  - Simple, adaptable layouts that “pop” with colour and whitespace
- **Forms:**
  - Clear borders, bold labels, accessible focus states
  - Use Radix or shadcn/ui for multi-step, advanced logic
  - Wide touch targets and clear feedback for errors/success
- **Navigation:**
  - Sticky or static, brand accent highlights, CTA always visible
  - Support for gradients/colourful backgrounds (never plain/grey)
- **Iconography:**
  - Use Heroicons, Lucide, or custom SVGs, with accent or pop colours as needed

**Component Library Approach:**

- Tailwind CSS for base styling.
- shadcn/ui and Radix UI for components that need to be easily adapted or scaled.
- Custom components or overrides encouraged for unique landing and conversion needs.

**SEO-Ready Future Pages:**

- Astro is integrated to enable fast, scalable, and SEO-optimized pages, especially for landing, vertical, and long-form content.
- Components should be portable and easy to use across React, Next.js, and Astro for maximum flexibility.

**Guidelines:**

- Avoid “default” or bland UI—every page/block should use at least one accent/pop colour and clear spacing.
- Never lock the project into a single component system; adaptability and future-proofing are priorities.

---

## 8. **Downloadable Assets**

- Export all key assets (logo, favicon, colour palette, font files if open license) in a /brand folder ready for devs/designers.

---

## 9. **Usage Sheet**

- One-page PDF/Notion doc showing “do’s and don’ts,” plus references for any third-party designers or partners.

---

## **What to Avoid**

- Boring, flat monochrome.
- Overly “safe” enterprise or bland SaaS look.
- Agency clichés, fake “testimonial” stock shots, complicated overlays, too many fonts, SaaS-like playful branding.
- Single-library lock-in for components—always pick the best fit for each case.

---

### **Action Steps**

1. **Write the “brand one pager.”**
2. **Design logo variations (use Figma, Adobe, or even an AI tool for draft concepts).**
3. **Build your palette and typography sample as a style tile (Figma or Notion snapshot).**
4. **Export, document, and upload for use across site, socials, docs, and product.**

---

If you want, I can:

- Draft the actual “brand one pager” in your tone.
- Suggest some Figma/AI logo tools that fit your stack and brief.
- Build the copy for your “Usage Sheet” so contractors/designers don’t screw it up.

**Want to start with the “brand one pager”? Or should I give logo direction/options first?**

