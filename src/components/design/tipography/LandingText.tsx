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
    zIndex: 1000,
    fontFamily: "montserrat",
    fontSize: "17px",
  };

  return (
    <p
      className={`text-shadow-sm font-medium transition-all max-w-2xl pointer-events-none ${
        className || ""
      }`}
      style={styles}
    >
      {children}
    </p>
  );
};

export default LandingText;
