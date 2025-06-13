import React from "react";
import { meltingCheese } from "../../assets";

const MeltingCheese = () => {
  const cheesePositions = Array.from({ length: 50 }, (_, i) => i);
  return (
    <div className="absolute z-50">
      {cheesePositions.map((left, index) => (
        <img
          key={index}
          src={meltingCheese}
          alt=""
          className="fixed top-10 w-[170px]"
          style={{ left: `${left * 137}px` }}
        />
      ))}
    </div>
  );
};

export default MeltingCheese;
