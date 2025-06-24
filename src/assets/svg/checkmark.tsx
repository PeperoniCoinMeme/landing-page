import React from "react";

const Checkmark = () => {
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="#10B981"
          strokeWidth="2"
          fill="transparent"
        />
        <path
          d="M16 24L22 30L34 18"
          stroke="#10B981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <br />
      </svg>
    </>
  );
};

export default Checkmark;
