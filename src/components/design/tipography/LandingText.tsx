import React from "react";

interface LandingTextProps {
  color?: string;
  children: any;
}
const LandingText: React.FC<LandingTextProps> = ({ color, children }) => {
  const styles: React.CSSProperties = {
    color: color,
  };

  return (
    <p
      className="text-shadow-md font-bolder transition-all max-w-2xl"
      style={styles}
    >
      {children}
    </p>
  );
};

export default LandingText;
