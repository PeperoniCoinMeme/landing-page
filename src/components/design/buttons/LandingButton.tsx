import React from "react";

const darkenHexColor = (hex: string, amount: number = 0.2): string => {
  const num = parseInt(hex.slice(1), 16);

  let r = (num >> 16) - 255 * amount;
  let g = ((num >> 8) & 0x00ff) - 255 * amount;
  let b = (num & 0x0000ff) - 255 * amount;

  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b)));

  return `rgb(${r}, ${g}, ${b})`;
};

interface LandingButtonProps {
  className?: string;
  children: string;
  bgColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Section: React.FC<LandingButtonProps> = ({
  className,
  children,
  bgColor = "#ff4500",
  onClick,
}) => {
  const styles: React.CSSProperties = {
    backgroundColor: bgColor,
    borderColor: darkenHexColor(bgColor, 0.1),
    zIndex: 1000,
  };

  return (
    <button
      className={`landing-button
   ${className || ""}`}
      style={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Section;
