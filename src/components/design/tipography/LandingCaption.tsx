import React from "react";

interface LandingCaptionProps {
  color?: string;
  children: any;
  className?: string;
}
const LandingCaption: React.FC<LandingCaptionProps> = ({
  className,
  color,
  children,
}) => {
  const styles: React.CSSProperties = {
    color: color,
    zIndex: 1000,
    fontFamily: "montserrat",
    fontSize: "14px",
    transition: "all ease-in-out 0.2s",
  };

  return (
    <p
      className={`text-shadow-sm font-medium transition-all max-w-lg pointer-events-none ${
        className || ""
      }`}
      style={styles}
    >
      {children}
    </p>
  );
};

export default LandingCaption;
