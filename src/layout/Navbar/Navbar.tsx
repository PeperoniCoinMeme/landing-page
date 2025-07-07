import { AnimatePresence, easeOut, motion } from "framer-motion";
import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
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
import { logo, meltingCheese } from "../../assets";
import PricingContent from "./Content/Pricing";
import TokenomicsContent from "./Content/Tokenomics";
import AboutContent from "./Content/About";
import MeltingCheese from "../../components/MeltingCheese/MeltingCheese";
import FlyoutLink from "./Flyout/Flyout";
import Headroom from "../../components/Headroom/Headroom";
import Social from "@/components/Social/Social";

const menuItems = [
  { label: "Home", href: "#hero", icon: FireIcon },
  { label: "About", href: "#about", icon: FireIcon },
  { label: "Mission & Vibes", href: "#missionvibes", icon: FireIcon },
  { label: "Slice of Utility", href: "#sliceofutility", icon: FireIcon },
  { label: "Slicenomics", href: "#slicenomics", icon: FireIcon },
  { label: "RoadMap", href: "#roadmap", icon: FireIcon },
  { label: "Join to the Pizza", href: "#join", icon: FireIcon },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fontStyles: React.CSSProperties = {
    fontFamily: "Riffic",
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* <Headroom> */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full flex justify-between px-3 py-8 h-1 items-center max-w-[1920px]
    ${
      hasScrolled
        ? "backdrop-blur-sm border-b border-white/20"
        : "backdrop-blur-none border-0"
    }
    md:backdrop-blur-none md:border-0`}
      >
        <a
          href="#hero"
          id="logo"
          className="w-12 flex flex-row gap-3 items-center cursor-pointer"
        >
          <img
            src={logo}
            alt="Peperoni Coin"
            className="hover:scale-120 transition-all"
          />
          <h4
            className="text-gray-100 text-2xl text-shadow-lg"
            style={fontStyles}
          >
            PEPERONI
          </h4>
        </a>

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
          className="text-white relative p-[14px] cursor-pointer"
        >
          <Bars3Icon className="h-7 w-7 absolute top-0 left-0" />
        </button>
        {/* Melting Cheese Images  */}
      </nav>
      <MeltingCheese />

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay blur background */}
            <motion.div
              className="fixed inset-0 bg-black-800 bg-opacity-90 backdrop-blur-md z-500"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal panel */}
            <motion.div
              className="fixed z-600 inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div
                className="relative bg-dark-dough p-6 rounded-xl text-white w-6/12 space-y-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={toggleMenu}
                  className="absolute cursor-pointer z-9999 -right-20 top-3 md:right-3 text-[var(--color-pepperoni)] hover:text-red-400 transition"
                >
                  <XMarkIcon className="h-10 w-10 m-3 text-orange-100 text-shadow-lg" />
                </button>

                <h2 className="text-5xl font-bold opacity-0">🍕</h2>

                <ul className="space-y-4">
                  {menuItems.map(({ label, href, icon: Icon }, index) => (
                    <motion.li
                      key={label}
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.03,
                        ease: "easeOut",
                      }}
                    >
                      <a
                        href={href}
                        onClick={toggleMenu}
                        className="flex text-3xl font-bold text-center justify-center hover:text-yellow-300 text-white/95 transition"
                        style={fontStyles}
                      >
                        {/* <Icon className="h-5 w-5 text-yellow-500" /> */}
                        {label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Flames */}
                {/* <CryptoFlameTrail />
                <CryptoFlameTrail /> */}
                <div className="absolute -bottom-14 -left-18">
                  <Social mode="footer" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* </Headroom> */}
    </>
  );
};

export default Navbar;
