import React from "react";

interface BackgroundImageProps {
  imageUrl: string;
  children?: React.ReactNode;
  className?: string;
  overlayColor?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  children,
  className = "",
  overlayColor = "rgba(0, 0, 0, 0.3)",
}) => {
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat overflow-visible ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        // backgroundImage: `linear-gradient(to bottom, ${overlayColor}, ${overlayColor}), url(${imageUrl})`,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
