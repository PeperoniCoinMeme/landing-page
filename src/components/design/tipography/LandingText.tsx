import React from "react";

interface LandingTextProps {
  color?: string;
  children: any;
  className?: string;
}
const LandingText: React.FC<LandingTextProps> = ({
  className,
  color,
  children,
}) => {
  const styles: React.CSSProperties = {
    color: color,
    fontFamily: "montserrat",
    fontSize: "clamp(0.8rem, 2.5vmin, 1rem)",
    zIndex: 1000,
    transition: "all ease-in-out 0.2s",
  };

  return (
    <p
      className={`transition-all max-w-2xl pointer-events-none ${
        className || ""
      }`}
      style={styles}
    >
      {children}
    </p>
  );
};

export default LandingText;
