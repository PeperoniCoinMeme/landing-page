import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TelegramIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 240"
    fill="currentColor"
  >
    <path d="M120 0C53.73 0 0 53.73 0 120s53.73 120 120 120 120-53.73 120-120S186.27 0 120 0zm55.95 82.93l-22.4 105.62c-1.7 7.67-6.2 9.56-12.56 5.95l-34.65-25.6-16.7 16.1c-1.85 1.85-3.4 3.4-6.95 3.4l2.45-34.6 63-56.85c2.75-2.45-0.6-3.8-4.25-1.35l-77.95 49.05-33.6-10.5c-7.3-2.3-7.45-7.3 1.55-10.8l131.5-50.7c6.1-2.3 11.45 1.35 9.45 10.2z" />
  </svg>
);
