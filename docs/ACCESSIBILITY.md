# Accessibility Conformance & Remediation Record

**Site:** https://ahappyhomeut.com
**Standard targeted:** WCAG 2.1 Level AA (the standard U.S. courts and the DOJ use to
measure ADA Title III website accessibility)
**Date of this audit & remediation:** 2026-10-27
**Scope:** Full single-page site (Home, Services, Why Us, About, Careers, Social,
Contact) plus the 404 page and the new Accessibility Statement page.

> Note on "100% compliant": there is no numeric ADA standard and no body that
> certifies a site as 100% compliant. This record documents a good-faith audit
> against WCAG 2.1 AA, the issues found, and the fixes applied. Keeping this record
> and acting on reported problems is what demonstrates good-faith compliance.

## Audit method

- Manual source review of every page/component (React + Tailwind).
- Programmatic color-contrast calculation (WCAG relative-luminance formula) for every
  foreground/background pairing in the design system.
- Automated scan with axe-core against the production build.
- Keyboard-only navigation and focus-order review.

## Issues found and fixed

| # | WCAG | Severity | Issue | Fix |
|---|------|----------|-------|-----|
| 1 | 1.4.3 Contrast (Minimum) | Critical | White text on the light-blue hero gradient measured 1.6–2.75:1 (needs 4.5:1). Affected the hero, the "Why Us" quote card, the Careers CTA, and the Contact call card. | Deepened `--gradient-hero` to the same hue at lower lightness so white text now clears 4.5:1 (lightest stop ≈ 5.0:1). |
| 2 | 1.4.3 Contrast | Critical | Primary buttons (`brand` / `onBrand`) measured 4.16:1. | Darkened `--brand-deep` to `214 40% 45%` → 5.3:1. |
| 3 | 1.4.3 Contrast | Major | Section "eyebrow" pills (brand-deep on brand-soft) measured 3.76:1. | Covered by the `--brand-deep` change → 4.8:1. |
| 4 | 1.4.11 Non-text Contrast | Major | Form-field borders measured 1.27:1 (needs 3:1). | Darkened `--input` to `214 30% 58%` → 3.3:1 (kept decorative `--border` soft). |
| 5 | 1.4.11 Non-text Contrast | Major | Focus ring (`--ring`) measured 2.66:1. | Set `--ring`/`--primary` to `212 50% 44%` → 5.4:1. |
| 6 | 1.4.11 Non-text Contrast | Minor | Service-card icon on hover (white on light blue) measured 1.9:1. | Hover background changed to `brand-deep` → 5.4:1. |
| 7 | 2.4.1 Bypass Blocks | Major | No "skip to main content" link; keyboard users had to tab through the whole header on every page. | Added a skip link (visible on focus) targeting `#main-content`. |
| 8 | 2.4.7 Focus Visible | Major | Plain text links (nav, footer) and the mobile menu button had no visible focus style. | Added `a:focus-visible` outline and a focus ring on the menu button. |
| 9 | 4.1.2 Name, Role, Value | Major | Mobile menu button had no `aria-expanded` / `aria-controls`; label didn't reflect state. | Added `aria-expanded`, `aria-controls`, and a state-aware label. |
| 10 | 3.3.1 Error Identification | Major | Form errors appeared only as a transient toast, not tied to the field; focus did not move to the problem. | Added inline, per-field error text with `aria-invalid` + `aria-describedby`, and focus moves to the first invalid field on submit. |
| 11 | 3.3.2 Labels or Instructions | Minor | Required fields were marked only with a visual "*"; "required" was not programmatic and "*" was not explained. | Added `aria-required`, a "Fields marked * are required" legend, and hid the decorative "*" from screen readers. |
| 12 | 2.3.3 / 2.2.2 Animation | Minor | Animations and smooth scroll ignored the OS "reduce motion" preference. | Added a `prefers-reduced-motion: reduce` media query. |
| 13 | 1.1.1 Non-text Content | Minor | Decorative icons inside labeled links/buttons were exposed to screen readers. | Added `aria-hidden="true"` to decorative icons. |
| 14 | — (enhancement) | — | No published accessibility statement or contact path for accessibility issues. | Added `/accessibility` statement page with a phone/email reporting path, linked from the footer. |

## Items already in good shape (verified, no change needed)

- Every meaningful image has descriptive `alt` text (hero, about, owner, logos).
- All form fields have real `<label>` associations.
- Page `lang="en"` is set; document title and heading hierarchy are logical.
- `<main>` landmark present; nav landmarks now have distinct names.
- Body copy, `brand-ink`, and footer text all pass contrast.

## Known limitations

- Automated tools catch roughly 30–40% of possible issues; manual testing with a real
  screen reader (VoiceOver/NVDA) is recommended periodically.
- The deepened hero/CTA blue is a deliberate, visible change from the original pale blue;
  the pale blue could not carry white text accessibly.

## Ongoing process

- Re-run the axe-core scan after any design change.
- Respond to accessibility reports (phone 801-699-7228 / Jack@ahappyhomeutah.com) and log
  the fix here with a date.

## Changelog

- **2026-10-27** — Initial WCAG 2.1 AA audit and remediation (items 1–14 above).
