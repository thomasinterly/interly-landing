/* =========================================================================
   INTERLY — Données mock
   ========================================================================= */

export const CATEGORIES = {
  tech:     { label: "Tech",     color: "var(--cat-tech)" },
  creative: { label: "Créatif",  color: "var(--cat-creative)" },
  business: { label: "Business", color: "var(--cat-business)" },
  lang:     { label: "Langues",  color: "var(--cat-lang)" },
  soft:     { label: "Soft",     color: "var(--cat-soft)" },
};

// — Petites validations : avatars (initiales + teinte) —
export const PEERS = [
  { id: "p1", name: "Diego Ferraro",  initials: "DF", hue: 18 },
  { id: "p2", name: "Sanne de Vries", initials: "Sd", hue: 168 },
  { id: "p3", name: "Yuki Tanaka",    initials: "YT", hue: 268 },
  { id: "p4", name: "Omar Haddad",    initials: "OH", hue: 42 },
  { id: "p5", name: "Lina Costa",     initials: "LC", hue: 330 },
  { id: "p6", name: "Tom Bakker",     initials: "TB", hue: 210 },
  { id: "p7", name: "Aïcha Ndiaye",   initials: "AN", hue: 140 },
];

// — Profil principal —
export const PROFILE = {
  name: "Maya Rahimi",
  handle: "maya",
  role: "Product Designer & Creative Technologist",
  flag: "🇳🇱",
  stats: { skills: 9, validations: 128, followers: 2840 },
};

// — Skills (la skill grid) —
export const SKILLS = [
  {
    id: "ui", name: "UI Design", cat: "creative", icon: "layout",
    level: 95, levelLabel: "Expert", validations: 24,
    peers: ["p2", "p3", "p5", "p1"],
    blurb: "Interfaces produit, design systems, états & edge cases.",
    linked: ["exp-fintech", "exp-studio"],
  },
  {
    id: "proto", name: "Prototyping", cat: "creative", icon: "sparkle",
    level: 88, levelLabel: "Avancé", validations: 19,
    peers: ["p3", "p6", "p1"],
    blurb: "Prototypes haute-fidélité, micro-interactions, motion.",
    linked: ["exp-studio", "exp-bootcamp"],
  },
  {
    id: "react", name: "React & TypeScript", cat: "tech", icon: "code",
    level: 82, levelLabel: "Avancé", validations: 17,
    peers: ["p6", "p4", "p3"],
    blurb: "Front-end produit, composants, intégration de design systems.",
    linked: ["exp-fintech", "exp-bootcamp"],
  },
];

// — Expériences (référencées par les skills, pour le aperçu au survol) —
export const EXPERIENCES = [
  {
    id: "exp-fintech", role: "Product Designer", org: "Vault (fintech)",
  },
  {
    id: "exp-studio", role: "Designer", org: "Officina Studio",
  },
  {
    id: "exp-bootcamp", role: "Mentore front-end", org: "CodeHer",
  },
];

// — Profils pour le showcase de la landing —
export const DISCOVER = [
  { name: "Diego Ferraro", handle: "diego", role: "Brand Designer", loc: "Lisbonne", flag: "🇵🇹", hue: 18,  skills: ["Brand", "Type", "Art Direction"], cat: "creative", validations: 86 },
  { name: "Sanne de Vries", handle: "sanne", role: "Product Manager", loc: "Amsterdam", flag: "🇳🇱", hue: 168, skills: ["Strategy", "Research", "Analytics"], cat: "business", validations: 142 },
  { name: "Yuki Tanaka", handle: "yuki", role: "iOS Engineer", loc: "Tokyo", flag: "🇯🇵", hue: 268, skills: ["Swift", "SwiftUI", "Motion"], cat: "tech", validations: 203 },
];
