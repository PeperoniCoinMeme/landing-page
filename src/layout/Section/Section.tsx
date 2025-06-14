import React from "react";

interface SectionProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({
  className,
  id,
  children,
  bgColor,
}) => {
  const styles: React.CSSProperties = {
    backgroundColor: bgColor,
  };
  return (
    <div
      id={id}
      className={`relative flex flex-col md:flex-row
   ${className || ""}`}
      style={styles}
    >
      {children}
    </div>
  );
};

export default Section;
