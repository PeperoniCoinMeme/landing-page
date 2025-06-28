import {
  airbnb,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  binance,
  coinbase,
  dropbox,
  pepeClimbing,
  pepeFitStrong,
  pepeLogo,
  pepePets,
  pepePresident,
  pepeSpy,
  pepeWarrior,
} from "../assets";

type Client = {
  id: string;
  logo: string;
  name: string;
};

type FooterLink = {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
};

type SocialMedia = {
  id: string;
  icon?: any;
  link: string;
  name: string;
};

type Words = {
  text: string;
  imgPath?: string;
};

type logoIconsList = {
  name?: string;
  imgPath?: string;
};

type Testimonials = {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
};

type RoadMapCards = {
  review: string;
  title: string;
  date: string;
};

type OverlayCards = {
  id: string;
  backgroundUrl: string;
  imageUrl: string;
  title: string;
  text: string;
  iconUrl: string;
  light?: boolean;
};

export const overlayCards: OverlayCards[] = [
  {
    id: "1",
    backgroundUrl: bg1,
    imageUrl: pepeFitStrong,
    title: "Ask Anything",
    text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    iconUrl: pepeLogo,
  },
  {
    id: "2",
    backgroundUrl: bg2,
    imageUrl: pepeWarrior,
    title: "Ask Anything",
    text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    iconUrl: pepeLogo,
  },
  {
    id: "3",
    backgroundUrl: bg3,
    imageUrl: pepePresident,
    title: "Ask Anything",
    text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    iconUrl: pepeLogo,
    light: true,
  },
  {
    id: "4",
    backgroundUrl: bg4,
    imageUrl: pepeSpy,
    title: "Ask Anything",
    text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    iconUrl: pepeLogo,
  },
  {
    id: "5",
    backgroundUrl: bg5,
    imageUrl: pepeClimbing,
    title: "Ask Anything",
    text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    iconUrl: pepeLogo,
    light: true,
  },
  {
    id: "6",
    backgroundUrl: bg6,
    imageUrl: pepePets,
    title: "Ask Anything",
    text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    iconUrl: pepeLogo,
  },
];

export const roadMapCardsA: RoadMapCards[] = [
  {
    review:
      "The official $PEPERONI listing on a Solana’s DEX. Let the swaps begin and the oven starts warming.",
    title: "M1: Token Goes Live on Solana’s DEX",
    date: "Phase 1: Dough Preparation",
  },
  {
    review:
      "Launch the on-chain most valuable pizza in the history where the community fights for meme glory and $PEPERONI.",
    title: "M2: Bake the Most Valuable Pizza Over the World",
    date: "Phase 2: Sauce Spread",
  },
];
export const roadMapCardsB: RoadMapCards[] = [
  {
    review:
      "A full-stack toolkit for meme creators, degens, and community builders powered by $PEPERONI.",
    title: "M3: Peperoni as a Service (PaaS)",
    date: "Phase 3: Cheese Melt",
  },
  {
    review:
      "Grab the hottest meme merch straight from the oven. Think “Redbubble meets meme coin culture”: but spicy, fast, and fueled by $PEPERONI.",
    title: "M4: Merchandising Store Goes Live",
    date: "Phase 4: Golden Crust",
  },
  {
    review:
      "Enable $PEPERONI as the native payment method across all our services. From tools to merch, the pepper gets you in.",
    title: "M5: $PEPERONI as Payment Integration",
    date: "Phase 5: Spicy Utility",
  },
  {
    review:
      "Launch meme tokens without code in minutes. Think “$DOGE Launcher” but Solana-speed and peppered with vibes.",
    title: "M6: Meme Coin Launchpad",
    date: "Phase 6: Meme Foundry",
  },
  {
    review:
      "Drop spicy tokens to your meme-loving followers, no devs needed. Think “Solana faucet meets meme campaign” fast, fun, and powered by $PEPERONI.",
    title: "M7: Meme Airdrop Tool",
    date: "Phase 7: Pepper Rain",
  },
  {
    review:
      "Permissionless wallet-based forms for token sales, whitelists, contests, and more. No Google Forms only meme forms.",
    title: "M8: Meme On-Chain Form Tool",
    date: "Phase 8: Form Revolution",
  },
];

export const testimonials: Testimonials[] = [
  {
    name: "Pepperoni Paolo",
    mentions: "@PapaPepperoni",
    review:
      "I can't believe how delicious this tokenomics model is! The PEPE token distribution is as perfectly balanced as a classic Margherita pizza. The vesting schedule? Crispy like a wood-fired crust! Mangia bene!",
    imgPath: "/images/pepe1.png",
  },
  {
    name: "Marinara Maria",
    mentions: "@SaucySatoshi",
    review:
      "Working with the PeperoniDAO was a slice of heaven! Their token burn mechanism is hotter than our brick oven, and the liquidity pools are deeper than our homemade sauce. Bellissimo!",
    imgPath: "/images/pepe2.png",
  },
  {
    name: "Mozzarella Mike",
    mentions: "@CheesyChain",
    review:
      "This is the most mouthwatering tokenomics I've ever tasted! The staking rewards are more generous than my Nonna's portions, and the roadmap is clearer than our pizza window. When moon? When lambo? When delivery?",
    imgPath: "/images/pepe3.png",
  },
  {
    name: "Basilico Bob",
    mentions: "@CryptoCalzone",
    review:
      "The PEPE token's utility is as multi-layered as our stuffed crust! From governance toppings to DeFi garnishes, every bite delivers flavor. Even my crypto-skeptic uncle wants a piece!",
    imgPath: "/images/pepe4.png",
  },
  {
    name: "Olive Olivia",
    mentions: "@ExtraToppings",
    review:
      "The Peperoni ecosystem is the perfect blend - like the ideal cheese-to-sauce ratio. Their cross-chain bridge works smoother than our pizza cutter, and the community is warmer than our oven!",
    imgPath: "/images/pepe5.png",
  },
  {
    name: "Anchovy Antonio",
    mentions: "@FancyTopping",
    review:
      "At first I was skeptical like pineapple on pizza, but PEPE's tokenomics won me over! The buyback mechanism is more reliable than our 30-minute delivery guarantee. Now I'm HODLing like it's a limited edition truffle pizza!",
    imgPath: "/images/pepe6.png",
  },
];

export const words: Words[] = [
  { text: "Spicy Memes", imgPath: "/images/memes.svg" },
  { text: "Pizza Power", imgPath: "/images/pizza.svg" },
  { text: "Blockchain Sauce", imgPath: "/images/blockchain.svg" },
  { text: "Pepper Army", imgPath: "/images/community.svg" },
  { text: "Token Drops", imgPath: "/images/airdrop.svg" },
  { text: "Memeconomics", imgPath: "/images/economy.svg" },
  { text: "HODL the Slice", imgPath: "/images/hodl.svg" },
];

export const logoIconsList: logoIconsList[] = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

export const clients: Client[] = [
  {
    id: "client-1",
    logo: airbnb,
    name: "Dominos Crypto",
  },
  {
    id: "client-2",
    logo: binance,
    name: "Pizza Hut DAO",
  },
  {
    id: "client-3",
    logo: coinbase,
    name: "Papa Johns Blockchain",
  },
  {
    id: "client-4",
    logo: dropbox,
    name: "Mama Mia Crypto Pizzeria",
  },
];

export const footerLinks: FooterLink[] = [
  {
    title: "PEPERONI Links",
    links: [
      {
        name: "Whitepaper",
        link: "#whitepaper",
      },
      {
        name: "How To Buy",
        link: "#how-to-buy",
      },
      {
        name: "Pizza Tracker",
        link: "#pizza-tracker",
      },
      {
        name: "Memes Gallery",
        link: "#memes",
      },
      {
        name: "Pizza Warranty",
        link: "#warranty",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Pizza Party",
        link: "#pizza-party",
      },
      {
        name: "Delivery Drivers",
        link: "#drivers",
      },
      {
        name: "Recipe Contest",
        link: "#contest",
      },
      {
        name: "Pizza Blog",
        link: "#blog",
      },
      {
        name: "Toppings Vote",
        link: "#vote",
      },
    ],
  },
  {
    title: "Partners",
    links: [
      {
        name: "Pizza Chains",
        link: "#partners",
      },
      {
        name: "Become a Pepperoni Partner",
        link: "#partner-with-us",
      },
    ],
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: "social-media-1",
    // icon: twitter,
    link: "https://twitter.com/peperonicoin",
    name: "Twitter",
  },
  {
    id: "social-media-2",
    // icon: telegram,
    link: "https://t.me/peperonicoin",
    name: "Telegram",
  },
  {
    id: "social-media-3",
    // icon: dextools,
    link: "#dextools",
    name: "DEXTools",
  },
  {
    id: "social-media-4",
    // icon: coinmarketcap,
    link: "#cmc",
    name: "CoinMarketCap",
  },
];

type GalleryItem = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Paisaje Montañoso",
    description: "Hermoso atardecer en las montañas con colores vibrantes",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    title: "Bosque Encantado",
    description: "Sendero a través de un bosque denso con luz solar filtrada",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1429087969512-1e85aab2683d",
    title: "Océano Infinito",
    description: "Vista panorámica del océano con olas rompiendo",
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Lago Sereno",
    description: "Aguas cristalinas reflejando las montañas circundantes",
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "Neblina Matutina",
    description: "Amanecer en el campo con neblina y rayos de sol",
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    title: "Selva Tropical",
    description: "Vegetación exuberante en un entorno de selva húmeda",
  },
  {
    id: "7",
    imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    title: "Formaciones Rocosas",
    description: "Extrañas formaciones geológicas bajo un cielo dramático",
  },
  {
    id: "8",
    imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969",
    title: "Ciudad Nocturna",
    description: "Skyline urbano iluminado en la noche con rascacielos",
  },
];
