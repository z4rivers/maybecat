# MaybeCat Banner Ad Spec

**Site:** maybecat.com
**Traffic:** Mobile-heavy (phone + tablet), plus desktop

---

## The Space

A fixed banner pinned to the bottom of every page. Always visible — it doesn't scroll away.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                   (page content above)                   │
│                                                          │
├──────────────────────────────────────┬───────────────────┤
│           YOUR AD (80%)              │  Adopt CTA (20%)  │
│                                      │  (shelter cat)    │
├──────────────────────────────────────┴───────────────────┤
│                    bottom of screen                      │
└──────────────────────────────────────────────────────────┘
```

Your ad fills the left 80% of the banner. The right 20% is a rotating shelter cat adoption link (this is the site's mission and is always present).

**Background:** Dark navy (#0d1b2a) with amber/gold accent colors.

---

## Sizes

| | Height | Usable ad width | Safe area (after padding) |
|---|---|---|---|
| **Mobile** | 80px | ~80% of screen width | ~12px padding on all sides |
| **Desktop** | 150px | ~80% of screen width | ~20px padding on all sides |

The banner is responsive — it scales between these two sizes at the 768px breakpoint.

---

## What to Provide

### 1. Logo or ad image

| | Recommended size | Format |
|---|---|---|
| **Logo** | 400-500px wide, transparent background | PNG |
| **Full banner** (optional) | 1200 x 220px (desktop 2x) | PNG or JPG |
| **Mobile version** (optional) | 640 x 112px (mobile 2x) | PNG or JPG |

- **2x resolution recommended** for sharp display on Retina/high-DPI screens
- If you provide only a logo, it will be centered in the ad space with your tagline and CTA below/beside it
- If you provide a full banner image, it replaces the logo+text layout entirely
- Transparent PNG preferred for logos so it works on the dark navy background

### 2. Copy

| Field | Max length | Example |
|---|---|---|
| **Brand name** | — | PURRfoot |
| **Tagline** | ~40 characters | "The fort your cat manifested" |
| **CTA button text** | ~20 characters | "Get the Fort — $24" |

Keep it short — especially on mobile at 80px tall, space is tight.

### 3. Link

One destination URL. Opens in a new tab.

You can add your own tracking parameters:
```
https://yoursite.com?utm_source=maybecat&utm_medium=banner&utm_campaign=spring-2026
```

---

## What You Get Back

**Built-in tracking** (Vercel Analytics, no third-party scripts):
- **Impressions** — counted each time the page loads and your ad is shown
- **Clicks** — counted each time someone clicks your ad
- **CTR** — calculated from the above

Reports provided on request. No cookies, no tracking pixels, no third-party ad networks.

---

## Rotation

If multiple ads are running, they rotate per session (one ad per visit, randomly selected). You can request a **weight** — higher weight = shown more often.

| Weight | Meaning |
|---|---|
| 1 | Standard rotation (equal share) |
| 2 | 2x as likely to appear |
| 3 | 3x as likely to appear |

Solo advertiser = 100% of impressions, no rotation needed.

---

## Brand Constraints

- **Color context:** Your ad sits on dark navy with amber/gold accents. Light or bright creatives will pop. Dark creatives may blend in — consider a subtle border or glow.
- **No animation.** Static images only.
- **Cat-adjacent content welcome** but not required. The site is cat-themed but your product doesn't have to be.
- **Keep it fun.** MaybeCat's vibe is playful, weird, warm. Overly corporate or sterile ads will feel out of place.

---

## Checklist

Send us:

- [ ] Logo PNG (transparent, 400-500px wide) and/or full banner image
- [ ] Brand name
- [ ] Tagline (40 chars or less)
- [ ] CTA button text (20 chars or less)
- [ ] Destination URL
- [ ] Rotation weight preference (if multiple advertisers)

We handle the rest — integration, deployment, tracking.

---

## Timeline

Ads go live with the next deploy after assets are received. Typically same day.
