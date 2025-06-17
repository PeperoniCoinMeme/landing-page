import React from "react";

interface LandingButtonProps {
  className?: string;
  children: string;
  bgColor?: string;
}

const Section: React.FC<LandingButtonProps> = ({
  className,
  children,
  bgColor = "#ff4500",
}) => {
  const styles: React.CSSProperties = {
    backgroundColor: bgColor,
  };
  //   const bgStyles: React.CSSProperties = {};
  return (
    <button
      className={`landing-button
   ${className || ""}`}
      style={styles}
    >
      {children}
    </button>
  );
};

export default Section;
