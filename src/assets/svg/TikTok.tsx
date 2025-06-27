import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TikTokIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="1.8em"
    height="1.8em"
    preserveAspectRatio="xMidYMid meet"
    fill="currentColor"
  >
    <path d="M204.8 76.8a76.79 76.79 0 01-44.8-14.4v70.4a76.8 76.8 0 11-76.8-76.8v32a44.8 44.8 0 1044.8 44.8V0h32a44.8 44.8 0 0044.8 44.8v32z" />
  </svg>
);
