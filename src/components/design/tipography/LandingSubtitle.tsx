import React from "react";

interface LandingSubtitleProps {
  children: any;
}
const LandingSubtitle: React.FC<LandingSubtitleProps> = ({ children }) => {
  const fontStyles: React.CSSProperties = {
    fontFamily: "bangers",
  };

  return (
    <h2
      className="text-orange-400 text-xl mb-2 text-shadow-md flex text-4xl font-bold text-[var(--color-pepperoni)] transition"
      style={fontStyles}
    >
      {children}
    </h2>
  );
};

export default LandingSubtitle;
