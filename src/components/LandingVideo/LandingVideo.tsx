import React from "react";
import "./LandingVideo.css";

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
    <video
      className={className}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
      preload="auto"
    />
  );
};

export default LandingVideo;
