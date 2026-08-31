export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface WhyFeature {
  num: string;
  image: string;
  title: string;
  desc: string;
}

export const site = {
  name: "Eddinet",
  url: "https://eddinet.com/",
  tagline: "ROI-focused Digital Growth, Marketing & Technology Partner",
  phones: ["+91 70428 40441", "+91 92895 93792"],
  email: "contact@eddinet.com",
  address: "Okhla Industrial Estate, Phase I, New Delhi - 110020",
  addressNote: "Okhla Phase I, New Delhi (Near ESI Hospital)",
  hours: "Mon - Sat: 10:00 AM - 7:00 PM",
  whatsapp: "https://wa.me/917042840441",
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
  },
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Understand the Business",
    desc: "We start with your business model, audience, competitive landscape and buying journey - not a list of services.",
  },
  {
    num: "02",
    title: "Identify the Growth Constraint",
    desc: "We locate the single thing most limiting your growth - visibility, conversion, technology or operations.",
  },
  {
    num: "03",
    title: "Select the Right Services",
    desc: "Only the capabilities that solve the constraint are recommended, chosen for outcome rather than breadth.",
  },
  {
    num: "04",
    title: "Build the Required Systems",
    desc: "Marketing, creative, web, apps and infrastructure are built as connected parts of one growth system.",
  },
  {
    num: "05",
    title: "Measure Performance",
    desc: "Everything is tied to business outcomes - leads, transactions, retention and efficiency - with transparent reporting.",
  },
  {
    num: "06",
    title: "Continuously Improve",
    desc: "Data, search behaviour and business signals guide ongoing optimisation, so the system compounds over time.",
  },
];

export const whyFeatures: WhyFeature[] = [
  {
    num: "01",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
    title: "Marketing + Technology Together",
    desc: "Campaigns, websites, applications and infrastructure are planned as connected parts of one system - not separate vendor hand-offs.",
  },
  {
    num: "02",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    title: "ROI as the Starting Point",
    desc: "Services are selected according to the business outcome they need to support: leads, transactions, retention, efficiency or brand growth.",
  },
  {
    num: "03",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    title: "Full-Funnel Thinking",
    desc: "Organic, paid, content, creative, web and technology capabilities work together instead of operating as isolated activities.",
  },
  {
    num: "04",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&q=80",
    title: "Data-Backed Decisions",
    desc: "Performance, search behaviour, user behaviour and business signals guide optimisation - not assumptions carried over from other clients.",
  },
  {
    num: "05",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    title: "Custom Strategy",
    desc: "The approach is shaped around your business model, audience, competitive landscape and buying journey rather than a templated playbook.",
  },
  {
    num: "06",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80",
    title: "Built for Long-Term Growth",
    desc: "The objective is sustainable visibility, reliable technology and measurable business value - not vanity metrics.",
  },
];