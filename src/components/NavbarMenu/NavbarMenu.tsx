import { FireIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Social from "../Social/Social";

const fontStyles: React.CSSProperties = {
  fontFamily: "Riffic",
};

const menuItems = [
  { label: "Home", href: "#hero", icon: FireIcon },
  { label: "About", href: "#about", icon: FireIcon },
  { label: "Mission & Vibes", href: "#missionvibes", icon: FireIcon },
  { label: "Slice of Utility", href: "#sliceofutility", icon: FireIcon },
  { label: "Slicenomics", href: "#slicenomics", icon: FireIcon },
  { label: "RoadMap", href: "#roadmap", icon: FireIcon },
  { label: "Join to the Pizza", href: "#join", icon: FireIcon },
];

interface NavbarMenuProps {
  setOpen: any;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ setOpen }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  function closeMenu(): void {
    setMenuOpen(false);
    setOpen(false);
  }
  return (
    <>
      {/* Overlay blur background */}
      <motion.div
        className="fixed inset-0 bg-opacity-90 backdrop-blur-md z-500 bg-black-800"
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
            onClick={() => closeMenu()}
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
                  onClick={() => closeMenu()}
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
  );
};

export default NavbarMenu;
