import { AnimatePresence, easeOut, motion } from "framer-motion";
import { div } from "framer-motion/client";
import React, { useState } from "react";
import {
  XMarkIcon,
  Bars3Icon,
  CurrencyDollarIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

const menuItems = [
  { label: "Tokenomics", href: "#tokenomics", icon: CurrencyDollarIcon },
  { label: "Roadmap", href: "#roadmap", icon: MapIcon },
  { label: "FAQ", href: "#faq", icon: QuestionMarkCircleIcon },
  { label: "About", href: "#about", icon: FireIcon },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full shadow-md h-[1rem] flex justify-between bg-orange-400 px-3 py-8">
        <div id="logo" className="w-12 hover:shadow-md">
          {/* <img src={pepeLogo} alt="" /> */}
        </div>

        <div className="flex justify-center w-8/12 ">
          <FlyoutLink href="#" FlyoutContent={PricingContent}>
            Pricing
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={AboutContent}>
            About
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={TokenomicsContent}>
            Tokenomics
          </FlyoutLink>
          <button
            onClick={toggleMenu}
            className="text-white relative p-[14px] "
          >
            <Bars3Icon className="h-7 w-7 absolute top-0 left-0" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay blur background */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-40"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal panel */}
            <motion.div
              className="fixed z-50 inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div
                className="relative bg-dark-dough p-6 rounded-xl shadow-xl text-white w-6/12 space-y-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={toggleMenu}
                  className="absolute top-3 right-3 text-white hover:text-red-400 transition"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <h2 className="text-2xl font-bold text-center">
                  🍕 Peperoni Menu
                </h2>

                <ul className="space-y-4">
                  {menuItems.map(({ label, href, icon: Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        onClick={toggleMenu}
                        className="flex items-center gap-3 text-lg hover:text-yellow-300 transition"
                      >
                        {/* <Icon className="h-5 w-5 text-yellow-500" /> */}
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Flames */}
                {/* <CryptoFlameTrail />
                <CryptoFlameTrail /> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

interface FlyoutLinkProps {
  children?: any;
  href?: any;
  FlyoutContent?: any;
}

const FlyoutLink: React.FC<FlyoutLinkProps> = ({
  children,
  href,
  FlyoutContent,
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit px-5"
    >
      <a href={href} className="relative text-white">
        {children}
        {/* TODO: Render underline animation thingy */}
        <span
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-orange-300 transition-transform duration-300 ease-out"
        />
      </a>
      {/* TODO: Render flyout content */}
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black "
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = ({}) => {
  return (
    <div className="h-auto w-64 bg-amber-50 p-6 shadow-xl rounded-lg border-2 border-amber-200">
      <h3 className="text-xl font-bold text-amber-800 mb-2">
        🍕 PEPERONI COIN
      </h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600">Price:</span>
        <span className="font-bold text-red-600">$0.42</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600">24h Change:</span>
        <span className="font-bold text-green-600">+12.5%</span>
      </div>
      <div className="mt-4 bg-red-100 p-2 rounded-md text-center">
        <p className="text-xs text-red-800">
          NEW: Buy 100 PEPE = Free pizza airdrop!
        </p>
      </div>
    </div>
  );
};
const TokenomicsContent = ({}) => {
  return (
    <div className="h-auto w-64 bg-orange-50 p-6 shadow-xl rounded-lg border-2 border-orange-200">
      <h3 className="text-xl font-bold text-orange-800 mb-4">🧀 TOKENOMICS</h3>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-orange-600">Liquidity</span>
            <span className="text-sm font-bold">50%</span>
          </div>
          <div className="w-full bg-orange-200 rounded-full h-2">
            <div
              className="bg-orange-600 h-2 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-red-600">Burned</span>
            <span className="text-sm font-bold">20%</span>
          </div>
          <div className="w-full bg-red-200 rounded-full h-2">
            <div
              className="bg-red-600 h-2 rounded-full"
              style={{ width: "20%" }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-amber-600">Team</span>
            <span className="text-sm font-bold">10%</span>
          </div>
          <div className="w-full bg-amber-200 rounded-full h-2">
            <div
              className="bg-amber-600 h-2 rounded-full"
              style={{ width: "10%" }}
            ></div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-orange-700 italic">
        "Like a pizza, every slice matters."
      </p>
    </div>
  );
};
const AboutContent = ({}) => {
  return (
    <div className="h-auto w-64 bg-red-50 p-6 shadow-xl rounded-lg border-2 border-red-200">
      <h3 className="text-xl font-bold text-red-800 mb-3">
        🔥 ABOUT PEPERONI COIN
      </h3>
      <p className="text-sm text-red-700 mb-4">
        The first crypto backed by <span className="font-bold">real pizza</span>
        . Earn yields, then redeem for delivery.
      </p>
      <div className="bg-white p-3 rounded-md border border-red-300">
        <p className="text-xs text-gray-700">
          <span className="font-bold text-red-600">Roadmap Q3 2024:</span>
          <br />- Staking = 🍕 rewards
          <br />- Ingredient NFTs
        </p>
      </div>
      <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-sm font-bold transition">
        Join our Telegram!
      </button>
    </div>
  );
};

export default Navbar;
