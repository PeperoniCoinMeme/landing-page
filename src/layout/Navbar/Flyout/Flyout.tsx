import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
      <a
        href={href}
        className="relative text-[var(--color-pepperoni)] font-semibold"
      >
        {children}
        {/* TODO: Render underline animation thingy */}
        <span
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-[var(--color-pepperoni)] transition-transform duration-300 ease-out"
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

export default FlyoutLink;
