import { airbnb, binance, coinbase, dropbox } from "../assets";

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
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
};

export const roadMapCards: RoadMapCards[] = [
  {
    review:
      "The Great PEPE Launch - Our token rises like dough in a warm kitchen! Initial toppings (liquidity) added to the crypto pizza oven. Whitepaper served with extra cheese.",
    imgPath: "/images/pepe-phase1.png",
    logoPath: "/images/pepe-logo.png",
    title: "Phase 1: Dough Preparation (Q1 2023)",
    date: "Ingredients: Token minting, Website launch, First 1000 Pizza Lovers",
  },
  {
    review:
      "PEPE Staking goes live - Earn extra toppings by locking your slices! First major exchange listing (PizzaSwap). Community grows faster than a yeast infection (the good kind!).",
    imgPath: "/images/pepe-phase2.png",
    logoPath: "/images/pepe-logo.png",
    title: "Phase 2: Sauce Spread (Q2 2023)",
    date: "Achievements: 10,000 holders, PEPE Merch Store, First PizzaDAO vote",
  },
  {
    review:
      "PEPE goes multi-chain - Like delivering to new neighborhoods! PEPE DeFi Kitchen opens with yield farming. First real-world pizza bought with PEPE (historic moment captured on blockchain).",
    imgPath: "/images/pepe-phase3.png",
    logoPath: "/images/pepe-logo.png",
    title: "Phase 3: Cheese Melt (Q3 2023)",
    date: "Milestones: 100M market cap, PEPE Visa Card, First PEPE-themed pizzeria",
  },
  {
    review:
      "PEPE Ecosystem sizzles - NFT toppings collection drops. PEPE becomes official currency of 3 pizza chains. Community burns 50% supply in the Great Pizza Oven event.",
    imgPath: "/images/pepe-phase4.png",
    logoPath: "/images/pepe-logo.png",
    title: "Phase 4: Golden Crust (Q4 2023)",
    date: "To the moon: PEPE ATM in Naples, Elon Musk tweets about us, 1B MCap",
  },
  {
    review:
      "PEPE World Domination - Franchise PEPE pizzerias worldwide. Launch PEPE Space Program (actual pizza delivery to ISS). Secret project: The Pepperoni Protocol (shhh!).",
    imgPath: "/images/pepe-phase5.png",
    logoPath: "/images/pepe-logo.png",
    title: "Phase 5: Infinite Toppings (2024+)",
    date: "Final goal: One PEPE = One Pizza (universal basic pizza achieved)",
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
