import React from "react";

interface LandingTitleProps {
  color?: string;
  children: any;
  className?: string;
}
const LandingTitle: React.FC<LandingTitleProps> = ({
  className,
  color,
  children,
}) => {
  const styles: React.CSSProperties = {
    color: color,
    fontFamily: "Riffic",
    fontSize: "clamp(1.2rem, 6vmin, 3.5rem)",
    lineHeight: 1,
    zIndex: 1000,
    transition: "all ease-in-out 0.2s",
  };

  return (
    <h2
      className={`text-orange-400 mb-2 text-shadow-md flex font-bold hover:text-yellow-300 text-[var(--color-pepperoni)] transition pointer-events-none ${
        className || ""
      }`}
      style={styles}
    >
      {children}
    </h2>
  );
};

export default LandingTitle;
