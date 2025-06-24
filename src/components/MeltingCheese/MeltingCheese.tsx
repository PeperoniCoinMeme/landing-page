import React from "react";
import {
  cheeseCenter,
  cheeseLeft,
  cheeseRight,
  meltingCheese,
} from "../../assets";

const MeltingCheese = () => {
  // const cheesePositions = Array.from({ length: 50 }, (_, i) => i);
  return (
    <div className="relative flex flex-row gap-0 z-5">
      <img
        src={meltingCheese}
        alt=""
        className="absolute top-0 left-0 z-0 min-w-full md:h-100"
      />
    </div>

    // <div className="relative flex flex-row gap-0 z-5">
    //   <img
    //     src={cheeseLeft}
    //     alt=""
    //     className="absolute z-50 left-0 top-0 w-2xl rotate-180 w-115"
    //   />
    //   <img
    //     src={cheeseCenter}
    //     alt=""
    //     className="absolute z-40 left-50 top-0 w-2xl w-300"
    //   />
    //   <img
    //     src={cheeseRight}
    //     alt=""
    //     className="absolute z-50 right-0 top-0 w-2xl rotate-180 w-115"
    //   />
    // </div>
  );
};

export default MeltingCheese;
