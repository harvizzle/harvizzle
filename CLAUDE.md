This project is for building and maintaining a music artist website for harvizzle, optimized for profit and return visits.
Primary goals, in order:

Get visitors listening immediately — zero friction
Convert listeners into fans who come back
Convert fans into buyers and supporters
Build a direct audience relationship (email list)

Tech rules:

Static HTML, CSS, minimal JS only
No frameworks, no build tools, no dependencies
Single CSS file organized into labeled sections
Relative paths only, deployable on Netlify or GitHub Pages

Design rules:

Visually striking and emotionally immediate — not timid, not template-feeling
Strong typographic hierarchy and bold scale contrast
High contrast — dark backgrounds are welcome, so is strong black-on-white
One accent color used sparingly on calls to action
Mobile-first
No clutter, no fake luxury, no startup UI patterns
No animations unless explicitly requested

Revenue architecture:

Bandcamp embeds are the center of gravity on the music page
Every music page should have a visible path to buy or support
Email capture integrated naturally — no pop-ups
Platform links present on every relevant page
Structure ready for merch, featured releases, and press sections without a rebuild

Content rules:

Only use provided content
Use clearly labeled placeholders where content is missing
Do not invent artist information

Behavior rules:

Make strong design decisions without over-explaining
Build first, summarize after
Ask only when a decision genuinely cannot be made without input
Default to bold and intentional over safe and bland

---

## Current design

- Dark (#0a0a0a) background, white text, accent #0f91ff (matches Bandcamp embeds)
- System sans-serif font stack
- Everything centered with max-width: 960px
- CSS variables in :root for easy global changes
- Bandcamp embeds use bgcol=0a0a0a and linkcol=0f91ff to match the site

## File structure

```
index.html          — Homepage: name, featured release, email capture, platform links
music.html          — Full catalog: 3-column grid of Bandcamp embeds with buy links
about.html          — Bio page
contact.html        — Contact links
styles.css          — All styles, labeled sections, CSS variables
script.js           — Minimal JS (near-empty)
CLAUDE.md           — This file

content/            — Editable text content
assets/images/      — Images if needed
assets/logo/        — Logo if needed
```

## CSS sections (search to jump)

RESET, COLORS, TYPOGRAPHY, LAYOUT, HOME PAGE, EMAIL CAPTURE, MUSIC PAGE, ABOUT PAGE, CONTACT PAGE, SHARED / UTILITY, RESPONSIVE

## How to make common edits

- **Change accent color**: Edit --accent and --accent-hover in :root COLORS section. Also update Bandcamp embed linkcol= to match.
- **Change site width**: Edit --max-width in :root.
- **Change tagline**: In index.html, find .home-tagline and replace text.
- **Add a release**: In music.html, copy a .release block inside .releases grid. Paste Bandcamp iframe, update buy link.
- **Change featured release**: In index.html, update the iframe src in .home-featured.
- **Add platform links**: Uncomment lines in .home-platforms, footer, about-links.
- **Update bio**: Replace placeholder text in about.html .about-content.
- **Add email service**: Replace [YOUR-EMAIL-SERVICE-ENDPOINT] in form action attributes across index.html and music.html.
- **Add merch page**: Create merch.html, add nav link, create .merch-section styles in SHARED / UTILITY.

## Platform links

- Bandcamp: https://harvizzle.bandcamp.com
- YouTube: https://www.youtube.com/@harvizzle
- SoundCloud: https://soundcloud.com/harvizzle
