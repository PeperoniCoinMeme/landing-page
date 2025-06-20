import React from "react";
import Arrow from "../../assets/svg/Arrow";
import { GradientLight } from "../design/GradientLight";
import ClipPath from "../../assets/svg/ClipPath";
import LandingText from "../design/tipography/LandingText";
import LandingSubtitle from "../design/tipography/LandingSubtitle";

interface OverlayCardProps {
  item: {
    id: string;
    backgroundUrl: string;
    imageUrl: string;
    title: string;
    text: string;
    light?: boolean;
    iconUrl: string;
  };
}

const OverlayCard: React.FC<OverlayCardProps> = ({ item }) => {
  return (
    <div
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[14rem]"
      style={{
        backgroundImage: `url(${item.backgroundUrl})`,
      }}
      key={item.id}
    >
      <div className="relative z-2 flex flex-col h-[15rem] p-[2rem] pointer-events-none overflow-hidden">
        <LandingSubtitle>{item.title}</LandingSubtitle>
        <LandingText color="white">{item.text}</LandingText>
        <div className="flex items-center mt-auto">
          <img src={item.iconUrl} width={30} height={30} alt={item.title} />
          <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
            Explore more
          </p>
          <Arrow />
        </div>
      </div>

      {item.light && <GradientLight />}

      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: "url(#benefits)" }}
      >
        <div className="absolute inset-0 hover:scale-110 transition-all">
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              width={340}
              height={362}
              alt={item.title}
              className="w-full h-full object-cover transition-all"
            />
          )}
        </div>
      </div>

      <ClipPath />
    </div>
  );
};

export default OverlayCard;
