import React from "react";
import "./StarBackground.css";

const generateStars = (count: number) => {
  return Array.from({ length: count }).map((_, i) => {
    const cx = `${Math.random() * 100}%`;
    const cy = `${Math.random() * 100}%`;
    const r = Math.random() * 1.2 + 0.3;

    return (
      <circle
        key={i}
        className="star"
        cx={cx}
        cy={cy}
        r={r}
        style={{ "--i": i } as React.CSSProperties}
      />
    );
  });
};

const StarBackground = () => {
  return (
    <div className="stars-wrapper">
      {[0, 1, 2].map((_, s) => (
        <svg
          key={s}
          className="stars"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          {generateStars(100)}
        </svg>
      ))}

      <svg
        className="extras"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stopColor="rgba(255,255,255,.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        <g transform="rotate(-135)">
          <ellipse
            className="comet comet-a"
            fill="url(#comet-gradient)"
            cx="0"
            cy="0"
            rx="150"
            ry="2"
          />
        </g>
        <g transform="rotate(20)">
          <ellipse
            className="comet comet-b"
            fill="url(#comet-gradient)"
            cx="100%"
            cy="0"
            rx="150"
            ry="2"
          />
        </g>
        <g transform="rotate(300)">
          <ellipse
            className="comet comet-c"
            fill="url(#comet-gradient)"
            cx="40%"
            cy="100%"
            rx="150"
            ry="2"
          />
        </g>
      </svg>
    </div>
  );
};

export default StarBackground;
