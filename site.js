// =============================================================================
// EDGEHOLME — SITE DATA
// Single source of truth. Migrate this to Shopify metafields / products API.
// =============================================================================

const SITE = {
  name: 'Edgeholme',
  tagline: 'Modern Outdoor Lighting.',
  email: 'hello@edgeholme.com',
  phone: '',
  location: 'Kansas City, MO',
  social: {
    instagram: '#',
    pinterest: '#',
  },
};

const NAV_LINKS = [
  { label: 'Home',    href: '/' },
  { label: 'Shop',    href: '/shop/' },
  { label: 'Trade',   href: '/trade/' },
  { label: 'About',   href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

const PRODUCTS = [
  {
    id: 'wsb-24',
    name: 'Wall Sconce',
    variant: '24"',
    slug: 'wall-sconce-24',
    msrp: 285,
    shortDescription: 'A precise, architectural profile for entryways, garage flanks, and garden walls.',
    description: 'The 24" Wall Sconce is the most versatile fixture in the Edgeholme collection. Its slim vertical profile reads cleanly against brick, stucco, board-and-batten, and modern smooth finishes alike. Designed for single-fixture applications and symmetrical pairs at entry doors.',
    finish: 'Matte Black',
    material: 'Die-cast aluminum',
    dimensions: { height: '24"', width: '4"', depth: '3.5"', weight: '4.2 lbs' },
    specs: [
      { label: 'Input Voltage',    value: '120V AC' },
      { label: 'Wattage',          value: '18W integrated LED' },
      { label: 'Color Temperature',value: '2700K Warm White' },
      { label: 'Lumens',           value: '1,100 lm' },
      { label: 'CRI',              value: '90+' },
      { label: 'IP Rating',        value: 'IP65 Wet Location Rated' },
      { label: 'Lifespan',         value: '50,000 hours' },
      { label: 'Dimming',          value: 'Compatible with most leading-edge dimmers' },
      { label: 'Finish',           value: 'Matte Black powdercoat' },
      { label: 'Material',         value: 'Die-cast aluminum' },
      { label: 'Mounting',         value: 'Single-gang electrical box' },
      { label: 'UL Listed',        value: 'Yes — Wet Location' },
    ],
    applications: [
      'Entry door pairs',
      'Garage flanking',
      'Garden and landscape walls',
      'Covered porches',
      'Fence and gate columns',
    ],
    faqs: [
      {
        q: 'Is this fixture dimmable?',
        a: 'Yes. The WSB-24 is compatible with most leading-edge (TRIAC) dimmers. We recommend Lutron Caseta or Leviton for reliable performance.',
      },
      {
        q: 'What electrical box does this mount to?',
        a: 'Standard single-gang outdoor electrical box, new construction or retrofit. The mounting plate is included.',
      },
      {
        q: 'Can it be used in covered outdoor areas?',
        a: 'Yes. The IP65 rating qualifies it for wet locations — covered or uncovered.',
      },
      {
        q: 'Is a ground wire required?',
        a: 'Yes. A ground wire is required for safe installation. All necessary hardware is included.',
      },
    ],
    shipping: 'Ships within 5–7 business days. Delivered via UPS Ground in custom protective packaging.',
    warranty: '5-year limited warranty on LED module and housing. Finish warranted against peeling, cracking, and fading for 3 years under normal outdoor conditions.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    ],
  },
  {
    id: 'wsb-36',
    name: 'Wall Sconce',
    variant: '36"',
    slug: 'wall-sconce-36',
    msrp: 345,
    shortDescription: 'The standard for larger facades, double-car garages, and statement entryways.',
    description: 'The 36" Wall Sconce is the workhorse of the Edgeholme collection — proportioned for the scale of most American residential facades. Equally at home flanking a wide entryway or anchoring the corners of a garage elevation.',
    finish: 'Matte Black',
    material: 'Die-cast aluminum',
    dimensions: { height: '36"', width: '4"', depth: '3.5"', weight: '5.8 lbs' },
    specs: [
      { label: 'Input Voltage',    value: '120V AC' },
      { label: 'Wattage',          value: '24W integrated LED' },
      { label: 'Color Temperature',value: '2700K Warm White' },
      { label: 'Lumens',           value: '1,600 lm' },
      { label: 'CRI',              value: '90+' },
      { label: 'IP Rating',        value: 'IP65 Wet Location Rated' },
      { label: 'Lifespan',         value: '50,000 hours' },
      { label: 'Dimming',          value: 'Compatible with most leading-edge dimmers' },
      { label: 'Finish',           value: 'Matte Black powdercoat' },
      { label: 'Material',         value: 'Die-cast aluminum' },
      { label: 'Mounting',         value: 'Single-gang electrical box' },
      { label: 'UL Listed',        value: 'Yes — Wet Location' },
    ],
    applications: [
      'Wide entry door pairs',
      'Double-car garage flanking',
      'Larger residential facades',
      'Commercial entryways',
      'Courtyard and patio walls',
    ],
    faqs: [
      {
        q: 'Is this fixture dimmable?',
        a: 'Yes. The WSB-36 is compatible with most leading-edge (TRIAC) dimmers. We recommend Lutron Caseta or Leviton for reliable performance.',
      },
      {
        q: 'How does this compare to the 24" version?',
        a: 'Same profile, housing, and finish — scaled to a taller form factor. The 36" is better suited to facades above 10 feet or wider entry configurations.',
      },
      {
        q: 'What electrical box does this mount to?',
        a: 'Standard single-gang outdoor electrical box. The mounting plate accommodates new construction and retrofit boxes.',
      },
      {
        q: 'Can two fixtures be wired to a single switch?',
        a: 'Yes. Standard parallel wiring. Total load for a pair is 48W — well within standard 15A circuit limits.',
      },
    ],
    shipping: 'Ships within 5–7 business days. Delivered via UPS Ground in custom protective packaging.',
    warranty: '5-year limited warranty on LED module and housing. Finish warranted against peeling, cracking, and fading for 3 years under normal outdoor conditions.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    ],
  },
  {
    id: 'wsb-48',
    name: 'Wall Sconce',
    variant: '48"',
    slug: 'wall-sconce-48',
    msrp: 415,
    shortDescription: 'For architectural statements — tall facades, grand entries, and commercial-scale residential.',
    description: 'The 48" Wall Sconce is designed for scale. At four feet tall, it commands presence on larger facades without competing with the architecture. Ideal for custom homes, modern farmhouses, and projects where proportion is everything.',
    finish: 'Matte Black',
    material: 'Die-cast aluminum',
    dimensions: { height: '48"', width: '4"', depth: '3.5"', weight: '7.4 lbs' },
    specs: [
      { label: 'Input Voltage',    value: '120V AC' },
      { label: 'Wattage',          value: '32W integrated LED' },
      { label: 'Color Temperature',value: '2700K Warm White' },
      { label: 'Lumens',           value: '2,100 lm' },
      { label: 'CRI',              value: '90+' },
      { label: 'IP Rating',        value: 'IP65 Wet Location Rated' },
      { label: 'Lifespan',         value: '50,000 hours' },
      { label: 'Dimming',          value: 'Compatible with most leading-edge dimmers' },
      { label: 'Finish',           value: 'Matte Black powdercoat' },
      { label: 'Material',         value: 'Die-cast aluminum' },
      { label: 'Mounting',         value: 'Single-gang electrical box' },
      { label: 'UL Listed',        value: 'Yes — Wet Location' },
    ],
    applications: [
      'Grand residential entries',
      'Tall facade applications',
      'Custom and spec homes',
      'Modern farmhouse exteriors',
      'High-ceiling covered porches',
    ],
    faqs: [
      {
        q: 'Is special mounting required for the 48" fixture?',
        a: 'No. It mounts to a standard single-gang box. We recommend verifying stud or blocking availability at the install height for added security on wood-framed walls.',
      },
      {
        q: 'Is this appropriate for commercial projects?',
        a: 'Yes. The 48" is UL Listed for wet locations and built to the same specification as our residential lineup. It performs well in light commercial applications.',
      },
      {
        q: 'Is this fixture dimmable?',
        a: 'Yes. Compatible with most leading-edge (TRIAC) dimmers.',
      },
      {
        q: 'How much does it weigh?',
        a: '7.4 lbs. Standard residential electrical boxes rated for 35 lbs or more will support it without issue.',
      },
    ],
    shipping: 'Ships within 5–7 business days. Delivered via UPS Ground in custom protective packaging.',
    warranty: '5-year limited warranty on LED module and housing. Finish warranted against peeling, cracking, and fading for 3 years under normal outdoor conditions.',
    heroImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
    ],
  },
];

const TRADE_BENEFITS = [
  { title: '15% Trade Discount',         description: 'Applied automatically to all orders placed through your trade account.' },
  { title: 'Priority Customer Support',  description: 'Direct access to our team — no queues, no bots.' },
  { title: 'Project Quoting',            description: 'Volume quotes for projects of any scale, turned around within one business day.' },
  { title: 'Spec Sheets & Resources',    description: 'Full specification documentation, CAD files, and photometric data.' },
  { title: 'Installation Resources',     description: 'Detailed installation guides and rough-in templates for your crews.' },
  { title: 'Dedicated Support',          description: 'A single point of contact who knows your account and your projects.' },
];

const FOUNDING_TRADE_BENEFITS = [
  { title: '20% Lifetime Trade Pricing', description: 'The best discount we offer — locked in permanently, regardless of future pricing changes.' },
  { title: 'Early Inventory Access',     description: 'First allocation on new stock before it opens to the general market.' },
  { title: 'Priority Production',        description: 'Your projects move to the front of the queue during high-demand periods.' },
  { title: 'Direct Founder Access',      description: 'A direct line — not a support ticket. Real conversations about your projects.' },
  { title: 'Product Influence',          description: 'Your feedback shapes what we build next. Founding partners are the first to know about new SKUs.' },
  { title: 'Locked-In Pricing',          description: 'Price increases do not apply to founding partners. What you see today is what you pay, always.' },
];

const FOUNDER_STORY = {
  yearsExperience: 'Nearly a decade',
  focus: [
    'Spent nearly a decade running operations for consumer product brands — managing supply chains, launching products, and building the systems that make reliable fulfillment possible.',
    'Edgeholme started with a simple observation: the outdoor lighting market is full of either cheap imports with inconsistent quality, or luxury architectural fixtures priced out of reach for most projects.',
    'There is a gap in the middle — for builders, designers, and homeowners who want something that looks considered, ships reliably, and holds up. That is what this collection is built to be.',
  ],
};

const WHY_EDGEHOLME = [
  {
    title: 'Focused Collection',
    body: 'Three sizes. One finish. One fixture family. Designed to work together across an entire project without a single mismatched element.',
  },
  {
    title: 'Reliable Fulfillment',
    body: 'Inventory is held and ships within days, not weeks. No long lead times, no factory delays, no surprises on project timelines.',
  },
  {
    title: 'Built for Projects',
    body: 'Trade pricing, volume quotes, and spec documentation built in from the start — not as an afterthought.',
  },
];

// Export for use across all pages
if (typeof module !== 'undefined') {
  module.exports = { SITE, NAV_LINKS, PRODUCTS, TRADE_BENEFITS, FOUNDING_TRADE_BENEFITS, FOUNDER_STORY, WHY_EDGEHOLME };
}
