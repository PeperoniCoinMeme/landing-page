import React from "react";

interface LandingSubtitleProps {
  color?: string;
  children: any;
}
const LandingSubtitle: React.FC<LandingSubtitleProps> = ({
  color,
  children,
}) => {
  const styles: React.CSSProperties = {
    color: color,
    fontFamily: "Riffic",
    zIndex: 1000,
    fontSize: "27px",
  };

  return (
    <h2
      className="text-orange-400 mb-2 text-shadow-md flex text-4xl font-bold text-[var(--color-pepperoni)] transition pointer-events-none"
      style={styles}
    >
      {children}
    </h2>
  );
};

export default LandingSubtitle;
