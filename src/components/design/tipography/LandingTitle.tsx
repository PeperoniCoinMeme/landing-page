import React from "react";

interface LandingTitleProps {
  color?: string;
  children: any;
  className: string;
}
const LandingTitle: React.FC<LandingTitleProps> = ({
  className,
  color,
  children,
}) => {
  const styles: React.CSSProperties = {
    color: color,
    fontFamily: "bangers",
    zIndex: 1000,
  };

  return (
    <h2
      className={`text-orange-400 text-5xl mb-2 text-shadow-md flex text-4xl font-bold hover:text-yellow-300 text-[var(--color-pepperoni)] transition pointer-events-none ${
        className || ""
      }`}
      style={styles}
    >
      {children}
    </h2>
  );
};

export default LandingTitle;
