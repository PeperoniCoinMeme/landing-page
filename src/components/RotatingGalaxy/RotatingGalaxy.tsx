import { peperoniPizza } from "@/assets";
import React from "react";

interface RotatingGalaxyProps {
  zIndex: number;
}

const RotatingGalaxy: React.FC<RotatingGalaxyProps> = ({ zIndex }) => {
  return (
    <div className="absolute md:-top-15 -left-52 md:-left-1/2 md:translate-x-1/2 opacity-75 pointer-events-none">
      <img
        src={peperoniPizza}
        alt="Pepperoni Pizza"
        style={{
          zIndex: zIndex - 1,
          transformOrigin: "center center",
          animation: "clockSpin 50s linear infinite",
        }}
        className="w-[525px] relative md:-right-38 -right-28"
      />
      <style>{`
            @keyframes clockSpin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
    </div>
  );
};

export default RotatingGalaxy;
