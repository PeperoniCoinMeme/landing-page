import React from "react";

interface SectionProps {
  className: string;
  id: string;
  children: any;
}

const Section: React.FC<SectionProps> = ({ className, id, children }) => {
  return (
    <div
      id={id}
      className={`relative flex flex-col md:flex-row
   ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
