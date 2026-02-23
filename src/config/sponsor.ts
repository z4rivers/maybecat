// Sponsor configuration for MaybeCat advertising
// Supports multiple sponsors with weighted random selection

export interface Sponsor {
  name: string;
  logo?: string;
  image?: string;
  tagline?: string;
  ctaText?: string;
  ctaUrl?: string;
  weight?: number;
}

export const sponsors: Sponsor[] = [
  {
    name: "PURRfoot",
    logo: "/sponsors/purrfoot-logo.png",
    tagline: "The fort your cat manifested",
    ctaText: "Get the Fort — $24",
    ctaUrl: "https://purrfoot.com",
  },
];

// Backward compat
export const currentSponsor: Sponsor = sponsors[0];
