import React from "react";

interface LandingHeroProps {
  color?: string;
  children: any;
  className?: string;
}

const LandingHero: React.FC<LandingHeroProps> = ({
  className,
  color,
  children,
}) => {
  const styles: React.CSSProperties = {
    color: color,
    fontFamily: "Riffic",
    zIndex: 1000,
  };

  return (
    <h2
      className={`text-orange-400 text-5xl md:text-6xl mb-4 text-shadow-lg flex text-4xl font-bold hover:text-yellow-300 text-[var(--color-pepperoni)] transition pointer-events-none ${
        className || ""
      }`}
      style={styles}
    >
      {children}
    </h2>
  );
};

export default LandingHero;
