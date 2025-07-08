import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import LandingButton from "../design/buttons/LandingButton";
import LandingSubtitle from "../design/tipography/LandingSubtitle";
import LandingText from "../design/tipography/LandingText";

interface DialogProps {
  setOpen: any;
}

const ComingSoon: React.FC<DialogProps> = ({ setOpen }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  function closeMenu(): void {
    setMenuOpen(false);
    setOpen(false);
  }

  return (
    <div className="fixed inset-0 bg-opacity-90 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex flex-col justify-center items-center max-w-md text-white w-full text-center gap-3"
      >
        <LandingSubtitle className="animate-bounce">
          🚧 Coming Soon 🚧
        </LandingSubtitle>
        <LandingText className="px-10">
          We’re building something amazing. Check back soon!
        </LandingText>
        <LandingButton onClick={() => closeMenu()} className="my-5">
          Close
        </LandingButton>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
