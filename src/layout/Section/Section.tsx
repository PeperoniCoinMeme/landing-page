import React from "react";

interface SectionProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
  bgColor?: string;
  backgroundSvg?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  className,
  id,
  children,
  bgColor,
  backgroundSvg,
}) => {
  const styles: React.CSSProperties = {
    background: bgColor,
  };
  const bgStyles: React.CSSProperties = {
    backgroundImage: `url("${backgroundSvg}")`,
    // transform: flip ? "rotate(180deg)" : "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    zIndex: 0,
  };
  return (
    <div
      id={id}
      className={`relative flex flex-col md:flex-row max-w-100vh
   ${className || ""}`}
      style={styles}
    >
      {/* Background svg */}
      {backgroundSvg && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={bgStyles}
        ></div>
      )}
      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default Section;
