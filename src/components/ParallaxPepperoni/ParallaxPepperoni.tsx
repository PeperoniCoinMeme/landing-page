import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import {
  pepperoniSlice1,
  pepperoniSlice2,
  pepperoniSlice3,
  pepperoniSlice4,
  pepperoniSlice5,
  pepperoniSlice6,
} from "../../assets";

interface ParallaxPepperoniProps {
  parallaxRef?: any;
}

export const ParallaxPepperoni: React.FC<ParallaxPepperoniProps> = ({
  parallaxRef,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute w-full">
      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.1}>
        <div className="absolute bottom-1/2 left-1/2 w-50 h-50 origin-bottom -rotate-[56deg]">
          <img
            src={pepperoniSlice1}
            alt="Pepperoni Slice 1"
            className={`w-40 h-40 -ml-50 mt-32 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-50 h-50 origin-bottom rotate-[54deg]">
          <img
            src={pepperoniSlice2}
            alt="Pepperoni Slice 2"
            className={`hidden w-40 h-40 mt-1 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-50 h-50 origin-bottom -rotate-[65deg]">
          <img
            src={pepperoniSlice3}
            alt="Pepperoni Slice 3"
            className={`w-30 h-30 ml-100 mt-52 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-50 h-50 origin-bottom -rotate-[85deg]">
          <img
            src={pepperoniSlice4}
            alt="Pepperoni Slice 4"
            className={`w-70 h-70 -ml-100 -mt-150 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-50 h-50 origin-bottom rotate-[70deg]">
          <img
            src={pepperoniSlice5}
            alt="Pepperoni Slice 5"
            className={`w-15 h-15 -ml-3 -mt-3 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-50 h-50 origin-bottom rotate-[30deg]">
          <img
            src={pepperoniSlice6}
            alt="Pepperoni Slice 6"
            className={`w-40 h-40 ml-120 mt-30 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
