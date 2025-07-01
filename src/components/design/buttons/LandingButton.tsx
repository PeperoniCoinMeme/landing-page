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
  href?: string;
  downloadName?: string;
  isDisabled?: boolean;
}

const Section: React.FC<LandingButtonProps> = ({
  className,
  children,
  bgColor = "#ff4500",
  onClick,
  href,
  downloadName,
  isDisabled,
}) => {
  const styles: React.CSSProperties = {
    backgroundColor: bgColor,
    borderColor: darkenHexColor(bgColor, 0.1),
    zIndex: 1000,
    transition: "all ease-in-out 0.2s",
  };

  if (href) {
    return (
      <a
        href={href}
        download={downloadName}
        target="_blank" // 👉 new tab
        // rel="noopener noreferrer" // ✅ good practices
        className={`landing-button ${className || ""} ${
          isDisabled ? "landing-button-disabled" : ""
        }`}
        style={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`landing-button
   ${className || ""} ${isDisabled ? "landing-button-disabled" : ""}`}
      style={styles}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Section;
