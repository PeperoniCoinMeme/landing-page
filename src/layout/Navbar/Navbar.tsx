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
      <nav className="fixed top-0 left-0 z-50 w-full shadow-md flex justify-between bg-orange-400 px-3 py-8 h-1 items-center">
        <div id="logo" className="w-12 ">
          <img src={logo} alt="" className="hover:shadow-md" />
        </div>

        <div className="flex justify-between w-6/12">
          <div className="flex flex-row">
            <FlyoutLink href="#" FlyoutContent={PricingContent}>
              Pricing
            </FlyoutLink>
            <FlyoutLink href="#" FlyoutContent={AboutContent}>
              About
            </FlyoutLink>
            <FlyoutLink href="#" FlyoutContent={TokenomicsContent}>
              Tokenomics
            </FlyoutLink>
          </div>
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

export default Navbar;
