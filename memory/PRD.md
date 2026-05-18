# CKP Tétouan — Landing Page

## Original Problem Statement
Cinematic, ultra-premium landing page for physiotherapy & wellness brand
"CKP TÉTOUAN — Centre de Kinésithérapie Iman El Jemaati" in Tétouan, Morocco.
Fusion of Apple minimalism, Linear precision, Stripe fluidity, luxury wellness clinic.
French language. Awwwards-tier feel.

## User Choices
- Appointment CTA: WhatsApp direct (`wa.me/212611992124`) — no booking form, no backend
- Real contact: 286 N° 2, Av. Hassan II, Tetouan 93000 — Tel: 06 11 99 21 24
- Palette: Teal sarcelle (#2BA89E, from logo) + ivory / sand / sage / champagne / charcoal / gold
- Imagery: Unsplash cinematic photography
- Language: French only

## Architecture
- **Frontend**: React 19 + Tailwind + Framer Motion + lucide-react (no backend changes)
- **Routing**: Single page `/` rendering `<Landing>`
- **Fonts**: Fraunces (serif headings) + Outfit (sans body) via Google Fonts
- **No backend / no DB writes** — purely static showcase + WhatsApp deep linking

## Sections Implemented (2026-05-18)
1. Floating glass Navbar + mobile menu + sticky CTA
2. Cinematic Hero — parallax, mouse-reactive ambient light, particles, heartbeat line, glass floating CTA card, "10+ ans" expertise badge
3. Counters strip (10+ ans / 1200+ patients / 25 techniques / 98% satisfaction) animated via IntersectionObserver
4. About — Iman El Jemaati portrait + bio + diagnostic/follow-up cards
5. Services — horizontal scroller with 6 premium cards (Kiné, Massage, Sport, Lombaire, Posture, Drainage)
6. Human Motion — interactive SVG silhouette with 6 pulsing hotspots + zone pills + glass detail panel
7. Recovery Journey — 4 numbered steps grid (Bilan / Plan / Soin / Retour)
8. Wellness Experience — full-bleed parallax with editorial overlay
9. Testimonials — carousel with glass cards, 3 quotes, dot pagination
10. Appointment — dark hero block with WhatsApp/call CTAs + address/phone/hours
11. Footer — brand, nav, contact, signature italic quote

## Signature Design Moves
- Loading curtain with shimmer bar
- Heartbeat ECG line under hero
- Mouse-reactive radial teal glow + parallax blobs
- Magnetic CTA buttons with hover lift
- Reveal-on-scroll blur-to-focus across sections
- Glassmorphism (light + dark) + grain SVG overlay
- Cinematic gold + teal accent pairing

## Test Results (Iteration 1)
- Frontend: 100% success — 18/18 features verified
- Zero console errors
- All 6 WhatsApp CTAs validated (`wa.me/212611992124`)
- Mobile menu, hotspots, services scroller, testimonials carousel — all functional
- Responsive verified at 375 / 768 / 1440px

## Prioritised Backlog (P0 → P2)
- **P1 — Replace placeholder Unsplash photos** with authentic clinic photography (Iman + interior shots)
- **P1 — Real testimonials** with patient consent
- **P2 — Multi-language toggle** (FR/AR) if reach expansion needed
- **P2 — SEO meta & OpenGraph image** for share previews
- **P2 — Google Maps embed** in appointment section
- **P2 — Add Instagram feed strip** or recent posts gallery
- **P2 — Email capture** for clinic newsletter (would require backend + Resend)
