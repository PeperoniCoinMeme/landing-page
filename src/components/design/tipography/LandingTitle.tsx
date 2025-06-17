import React from "react";

interface LandingTitleProps {
  color?: string;
  children: any;
}
const LandingTitle: React.FC<LandingTitleProps> = ({ color, children }) => {
  const styles: React.CSSProperties = {
    color: color,
    fontFamily: "bangers",
  };

  return (
    <h2
      className="text-orange-400 text-5xl mb-2 text-shadow-md flex text-4xl font-bold hover:text-yellow-300 text-[var(--color-pepperoni)] transition"
      style={styles}
    >
      {children}
    </h2>
  );
};

export default LandingTitle;
