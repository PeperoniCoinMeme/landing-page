// GlowingTokenOrbit.tsx
import React from "react";
import "./GlowingTokenOrbit.css";

import { BackgroundCircles } from "../design/Hero";

interface Props {
  imageSrc: string;
  label?: string;
}

const GlowingTokenOrbit: React.FC<Props> = ({ imageSrc, label }) => {
  return (
    <div className="relative h-[100vh] items-center flex">
      <div className="glow-wrapper">
        <div className="glow-core">
          <img src={imageSrc} alt="token" className="token-img" />
          {label && <span className="glow-label">{label}</span>}
        </div>
        <div className="glow-ring" />
      </div>
      <BackgroundCircles />
    </div>
  );
};

export default GlowingTokenOrbit;
