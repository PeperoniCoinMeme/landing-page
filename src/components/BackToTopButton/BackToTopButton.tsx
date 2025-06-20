import { useEffect, useState } from "react";
import LandingButton from "../design/buttons/LandingButton";
import { div } from "framer-motion/client";
import { arrowUp } from "../../assets";

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mainSection = document.getElementById("hero");
    if (!mainSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(mainSection);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed flex hover:bg-white/12 cursor-pointer justify-center items-center flex-col bottom-6 right-6 z-50 transition-all duration-300 rounded-full border-1 border-gray-400 p-5 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img src={arrowUp} alt="Arrow Up" className="rotate-310 text-gray-500" />
      {/* Go up */}
    </div>
  );
};

export default BackToTopButton;
