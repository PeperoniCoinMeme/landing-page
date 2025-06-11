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
