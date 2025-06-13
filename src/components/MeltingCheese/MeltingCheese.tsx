import React from "react";
import { meltingCheese } from "../../assets";

const MeltingCheese = () => {
  const cheesePositions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="z-50">
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
