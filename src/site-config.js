/**
 * Single source of truth for copy, pricing, and market details.
 *
 * Photos: drop image files (.jpg, .png, .webp, .avif) into `src/photos/`.
 * They are auto-discovered, sorted alphabetically, and used across the site.
 */
export const siteConfig = {
  brand: "Pro-Foto",
  tagline: "Professional Photography",
  photographer: "Rami",

  nav: [
    { label: "Home", href: "/index.html" },
    { label: "Work", href: "/work.html" },
    { label: "Pricing", href: "/pricing.html" },
    { label: "Visit", href: "/visit.html" },
  ],

  home: {
    eyebrow: "School market",
    headline: "Real moments,\nprinted on the spot.",
    sub: "A lot of parents want a proper photo with their kid, not only another phone snap. For grade 8s, it is often the friend group while you still share a school, before everyone heads to different high schools. I keep it simple: maybe 5 to 7 photos, you pick what to print, you walk out with it the same day. Shot on a Canon EOS R50, printed on a Selphy.",
    primaryCta: { label: "See pricing", href: "/pricing.html" },
    secondaryCta: { label: "View work", href: "/work.html" },
    featureLine: "Families · grade 8 · friend groups · R50 + Selphy",
    audience: {
      eyebrow: "Why people stop here",
      headline: "Something for the wall, or the group chat.",
      sub: "Families: a picture you might actually frame or stick on the fridge. Grade 8s: your people in one shot before the year ends. Same quick visit for both. A few minutes, you choose the prints, the digital file comes with it.",
    },
    vendorsCta: {
      label: "Selling at a booth? Photos in front of it",
      href: "/visit.html#vendors",
    },
  },

  work: {
    eyebrow: "Selected work",
    headline: "Frames worth keeping.",
    sub: "Examples of what a print can look like. Tap for a larger view.",
  },

  pricing: {
    eyebrow: "Pricing",
    headline: "You pick, I print.",
    sub: "Geared toward family photos at the market and grade 8 groups who want a real memento of this year, but anyone can walk up. I take maybe 5 to 7 quick photos, you choose what gets printed. Pay at the table, cash or e-Transfer. Digital file included, email or AirDrop.",
    payAtStall: {
      eyebrow: "Website and market day",
      headlineLead: "Pay when you pick up your prints.",
      headlineEm: "Cash or e-Transfer.",
      sub: "This page is just marketing: prices and how the table works. You show up at the market for the real thing. I take the photos, you choose what to print, you pay in person right there, cash or e-Transfer. When the transfer has cleared, you get the prints and the digitals.",
    },
    currency: "$",
    tiers: [
      {
        name: "Single",
        price: "10",
        unit: "1 print",
        blurb: "One of the photos from that round.",
        features: [
          "1 print, Selphy postcard size",
          "You choose from the 5 to 7 shots I just took",
          "Digital file included, email or AirDrop",
        ],
        cta: { label: "Come by the stall", href: "/visit.html" },
        highlight: false,
      },
      {
        name: "Double",
        price: "15",
        unit: "2 prints",
        blurb: "Two prints, your picks.",
        features: [
          "2 prints",
          "You say which images and how many of each",
          "Digital file included, email or AirDrop",
        ],
        cta: { label: "Come by the stall", href: "/visit.html" },
        highlight: false,
      },
      {
        name: "Three",
        price: "20",
        unit: "3 prints",
        blurb: "Three prints from the same set.",
        features: [
          "3 prints",
          "You tell me which and how many",
          "Digital file included, email or AirDrop",
          "After that, each extra print is $5",
        ],
        cta: { label: "Come by the stall", href: "/visit.html" },
        highlight: true,
        badge: "Most popular",
      },
    ],
    addons: [],
    footnote:
      "After the first three prints, extras are $5 each. Bigger group and want a break? Ask at the table, I might be able to, no promises. Prices can change on the day. What we say at the stall is what counts.",
  },

  visit: {
    eyebrow: "Visit",
    headline: "Find me at the market.",
    sub: "In person at the school market. I take a few quick photos, you choose the prints, you go home with them. If you are a parent after a family picture, or in grade 8 and here with your friends, that is what this is for. Same easy flow either way.",
    details: {
      date: "TBD",
      time: "During school market hours",
      location: "TBD",
      stallHint: "Look for the photography table. I'll add a sign before the day.",
    },
    process: [
      {
        step: "01",
        title: "Snaps",
        body: "About 5 to 7 quick photos on a Canon EOS R50, enough to pick from, not a long block of time.",
      },
      {
        step: "02",
        title: "Pick",
        body: "You say which images you want and how many of each. I only print when we agree.",
      },
      {
        step: "03",
        title: "Print",
        body: "Selphy, postcard size. You have the paper copies in your hand, pretty fast.",
      },
    ],
    vendors: {
      eyebrow: "Other vendors at the market",
      headline: "Photo in front of your booth.",
      sub: "If you have a table here, I can take a few shots of you and whoever works it with you, in front of your setup. Good for remembering the day. Stop by the Pro-Foto table and we can set a time and a price that works.",
    },
  },

  footer: {
    line: "Pro-Foto · Canon EOS R50 · Canon Selphy",
    secondary: "School market photos you can keep.",
  },
};
