export type Service = {
  number: string;
  title: string;
  description: string;
  tag: string;
};

export type Project = {
  number: string;
  client: string;
  category: string;
  title: string;
  result: string;
  tone: string;
  accent: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const clientNames = [
  "LABEL / ONE",
  "STUDIO 02",
  "DROP / 03",
  "BRAND FOUR",
  "COLLECTION 05",
];

export const services: Service[] = [
  {
    number: "01",
    title: "Performance",
    description:
      "Paid social and search that turn new collections into considered demand.",
    tag: "MEDIA / DROPS",
  },
  {
    number: "02",
    title: "Creative systems",
    description:
      "Campaign worlds, lookbooks and content systems made for the scroll.",
    tag: "IDEA / IMAGE",
  },
  {
    number: "03",
    title: "Brand direction",
    description:
      "Positioning and visual language that make your label instantly recognisable.",
    tag: "VOICE / FORM",
  },
  {
    number: "04",
    title: "Conversion",
    description:
      "Sharper product pages, clearer offers and checkout journeys that convert.",
    tag: "SHOP / CRO",
  },
];

export const projects: Project[] = [
  {
    number: "01",
    client: "[CLIENT ALPHA]",
    category: "Launch + Performance",
    title: "A sharper launch for a new season.",
    result: "+42% SAMPLE LIFT",
    tone: "ink",
    accent: "coral",
  },
  {
    number: "02",
    client: "[CLIENT BETA]",
    category: "Campaign Direction",
    title: "A drop built to be remembered.",
    result: "+67% SAMPLE RESULT",
    tone: "sand",
    accent: "lime",
  },
  {
    number: "03",
    client: "[CLIENT GAMMA]",
    category: "Ecommerce + Conversion",
    title: "From first look to checkout.",
    result: "+31% SAMPLE GROWTH",
    tone: "blue",
    accent: "coral",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "[SAMPLE CLIENT QUOTE ABOUT A COLLECTION LAUNCH AND CREATIVE PARTNERSHIP.]",
    name: "[SAMPLE NAME]",
    role: "[SAMPLE ROLE]",
    company: "[SAMPLE LABEL]",
  },
  {
    quote:
      "[SAMPLE CLIENT QUOTE ABOUT TURNING A NEW DROP INTO MEASURABLE DEMAND.]",
    name: "[SAMPLE NAME]",
    role: "[SAMPLE ROLE]",
    company: "[SAMPLE LABEL]",
  },
];

export const faqs = [
  [
    "What kind of apparel teams do you work with?",
    "We partner with fashion labels, independent designers and apparel teams who need a sharper launch, stronger creative or a more useful growth engine. Replace this placeholder with your ideal client profile.",
  ],
  [
    "What does a typical launch engagement look like?",
    "Every engagement starts with a focused working session, then moves into a clear scope across collection strategy, creative and execution. The shape follows the launch.",
  ],
  [
    "Can you work with an existing brand team?",
    "Yes. We can plug into an in-house team, lead a focused drop sprint or own a campaign from brief through measurement.",
  ],
  [
    "How do you measure a collection launch?",
    "We agree the useful signals before we start. This might be attention, qualified demand, sell-through, conversion or a better system for learning.",
  ],
];
