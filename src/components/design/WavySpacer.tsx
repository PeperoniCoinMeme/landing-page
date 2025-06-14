import React from "react";

interface WavySpacerProps {
  bgWaveUrl: string;
  flip: boolean;
}

const WavySpacer: React.FC<WavySpacerProps> = ({ bgWaveUrl, flip = false }) => {
  const styles: React.CSSProperties = {
    aspectRatio: 960 / 300,
    backgroundImage: `url("${bgWaveUrl}")`,
    transform: flip ? "rotate(180deg)" : "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
    zIndex: 9999,
  };
  return <div style={styles}></div>;
};

export default WavySpacer;
