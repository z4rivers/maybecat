// Sponsor configuration for MaybeCat advertising
// PURRfoot is the founding sponsor

export interface Sponsor {
  name: string;
  logo: string;
  tagline: string;
  ctaText: string;
  ctaUrl: string;
}

export const currentSponsor: Sponsor = {
  name: "PURRfoot",
  logo: "/sponsors/purrfoot-logo.png",
  tagline: "The fort your cat manifested",
  ctaText: "Get the Fort — $24",
  ctaUrl: "https://purrfoot.com"
};
