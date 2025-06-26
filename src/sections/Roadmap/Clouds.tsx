import React from "react";
import { cloud1, cloud2, cloud3 } from "@/assets";

const Clouds = () => {
  return (
    <>
      <div className="absolute top-300 left-270 pointer-events-none">
        <img
          src={cloud1}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-155 left-70 pointer-events-none">
        <img
          src={cloud2}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-130 left-140 pointer-events-none">
        <img
          src={cloud3}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>

      <div className="absolute top-450 left-5 pointer-events-none">
        <img
          src={cloud1}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-320 left-120 pointer-events-none">
        <img
          src={cloud2}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-300 left-140 pointer-events-none">
        <img
          src={cloud3}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-50 left-240 pointer-events-none">
        <img
          src={cloud2}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
    </>
  );
};

export default Clouds;
