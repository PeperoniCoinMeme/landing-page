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
  GiftIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { logo } from "../../assets";
import PricingContent from "./Content/Pricing";
import TokenomicsContent from "./Content/Tokenomics";
import AboutContent from "./Content/About";
import MeltingCheese from "../../components/MeltingCheese/MeltingCheese";
import FlyoutLink from "./Flyout/Flyout";

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
      <nav className="fixed bg-[var(--color-cheese)] top-0 left-0 z-150 w-full shadow-lg flex justify-between px-3 py-8 h-1 items-center">
        <div id="logo" className="w-12 flex flex-row gap-3 items-center ">
          <img src={logo} alt="" className="hover:scale-120 transition-all" />
          <p className="text-gray-900 font-extrabold text-xl">PEPERONI</p>
        </div>

        <div className="flex justify-between w-6/12">
          {/* Deprecated | No nav links */}
          {/* <div className="flex flex-row">
            <FlyoutLink href="#" FlyoutContent={PricingContent}>
              Pricing
            </FlyoutLink>
            <FlyoutLink href="#" FlyoutContent={AboutContent}>
              About
            </FlyoutLink>
            <FlyoutLink href="#" FlyoutContent={TokenomicsContent}>
              Tokenomics
            </FlyoutLink>
          </div> */}
        </div>
        <button
          onClick={toggleMenu}
          className="text-[var(--color-pepperoni)] relative p-[14px] "
        >
          <Bars3Icon className="h-7 w-7 absolute top-0 left-0" />
        </button>

        {/* Melting Cheese Images  */}
        <MeltingCheese />
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

export default Navbar;
