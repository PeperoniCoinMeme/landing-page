import React from "react";
import "./LandingVideo.css";
import { div } from "framer-motion/client";

interface LandingVideoProps {
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
}

const LandingVideo: React.FC<LandingVideoProps> = ({
  src,
  poster,
  className,
  loop = true,
  muted = true,
  autoPlay = true,
}) => {
  return (
    <div className="m2">
      <video
        className={` ${className}`}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default LandingVideo;
