import React from "react";

interface LandingSubtitleProps {
  color?: string;
  children: any;
  className?: string;
}
const LandingSubtitle: React.FC<LandingSubtitleProps> = ({
  className,
  color,
  children,
}) => {
  const styles: React.CSSProperties = {
    color: color,
    fontFamily: "Riffic",
    fontSize: "clamp(1rem, 10vmin, 2rem)",
    lineHeight: 1,
    zIndex: 1000,
    transition: "all ease-in-out 0.2s",
  };

  return (
    <h2
      className={`text-orange-400 mb-2 text-shadow-md flex font-bold text-[var(--color-pepperoni)] transition pointer-events-none ${
        className || ""
      }`}
      style={styles}
    >
      {children}
    </h2>
  );
};

export default LandingSubtitle;
