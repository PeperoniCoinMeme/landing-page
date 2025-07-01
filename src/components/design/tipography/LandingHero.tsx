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
    fontSize: "clamp(1.5rem, 10vmin, 4rem)",
    lineHeight: 1,
    zIndex: 1000,
    transition: "all ease-in-out 0.2s",
  };

  return (
    <h2
      className={`text-orange-400 mb-4 text-shadow-lg flex font-bold hover:text-yellow-300 text-[var(--color-pepperoni)] transition pointer-events-none ${
        className || ""
      }`}
      style={styles}
    >
      {children}
    </h2>
  );
};

export default LandingHero;
