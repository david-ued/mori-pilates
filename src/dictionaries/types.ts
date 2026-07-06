export interface PriceTier {
  label: string;
  price: string;
  note?: string;
  highlight?: boolean;
}

export interface ClassPlan {
  name: string;
  subtitle: string;
  description: string;
  tiers: PriceTier[];
}

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  /** teaching languages, shown when the instructor teaches in more than the default language */
  languages?: string;
}

export interface Dict {
  meta: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    classes: { title: string; description: string };
    instructors: { title: string; description: string };
    journal: { title: string; description: string };
  };
  nav: {
    home: string;
    about: string;
    classes: string;
    instructors: string;
    journal: string;
    book: string;
  };
  hero: {
    philosophy: string;
    slogan: string;
    tagline: string;
    cta: string;
    scroll: string;
  };
  home: {
    aboutTitle: string;
    aboutKicker: string;
    aboutBody: string;
    aboutCta: string;
    servicesKicker: string;
    servicesTitle: string;
    servicesBody: string;
    services: { title: string; body: string }[];
    servicesCta: string;
    proofKicker: string;
    proofTitle: string;
    proofBody: string;
    testimonials: { quote: string; name: string; detail: string }[];
    beforeAfterNote: string;
    finalCtaTitle: string;
    finalCtaBody: string;
  };
  about: {
    kicker: string;
    title: string;
    storyTitle: string;
    storyParagraphs: string[];
    studioKicker: string;
    studioTitle: string;
    studioParagraphs: string[];
    studioClosing: string;
    valuesTitle: string;
    values: { title: string; body: string }[];
    locationKicker: string;
    locationTitle: string;
    addressLabel: string;
    address: string;
    contactLabel: string;
    contactNote: string;
    openMap: string;
    directionsTitle: string;
    directions: { title: string; body: string }[];
    mapNote: string;
    rulesKicker: string;
    rulesTitle: string;
    ruleGroups: { title: string; rules: string[] }[];
  };
  classes: {
    kicker: string;
    title: string;
    intro: string;
    bookCta: string;
    trialCta: string;
    pilates: {
      title: string;
      subtitle: string;
      intro: string;
      plans: ClassPlan[];
    };
    seitai: {
      title: string;
      subtitle: string;
      intro: string;
      plans: ClassPlan[];
      discountNote: string;
    };
    perClass: string;
    faqNote: string;
  };
  instructors: {
    kicker: string;
    title: string;
    intro: string;
    certsLabel: string;
    languagesLabel: string;
    list: Instructor[];
    joinNote: string;
  };
  journal: {
    kicker: string;
    title: string;
    intro: string;
    categories: { news: string; knowledge: string; interview: string };
    filterAll: string;
    readMore: string;
    backToList: string;
    empty: string;
  };
  cta: {
    lineBook: string;
    lineTrial: string;
    lineContact: string;
    floating: string;
  };
  footer: {
    blurb: string;
    linksTitle: string;
    visitTitle: string;
    contactTitle: string;
    lineLabel: string;
    rights: string;
  };
  common: {
    imagePlaceholder: string;
  };
}
