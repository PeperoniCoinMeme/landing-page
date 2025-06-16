import React from "react";

interface LandingHeroProps {
  children: any;
}
const LandingHero: React.FC<LandingHeroProps> = ({ children }) => {
  const fontStyles: React.CSSProperties = {
    fontFamily: "bangers",
  };

  return (
    <h2
      className="text-orange-400 text-6xl mb-2 text-shadow-md flex text-4xl font-bold hover:text-yellow-300 text-[var(--color-pepperoni)] transition"
      style={fontStyles}
    >
      {children}
    </h2>
  );
};

export default LandingHero;
