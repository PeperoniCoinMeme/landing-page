import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader: React.FC = () => {
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev >= 100) {
  //         clearInterval(interval);
  //         return 100;
  //       }
  //       return prev + 0.3;
  //     });
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, []);

  // const getEmoji = () => {
  //   if (progress < 30) return "😐";
  //   if (progress < 60) return "🙂";
  //   if (progress < 90) return "😄";
  //   if (progress <= 100) return "🤩";
  // };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      {/* Loader 1 */}
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>

      {/* Loader 2 | 3 (Comment out the css code ) */}
      {/* <div className="loader"></div> */}

      {/* <div className="flex flex-col items-center gap-4 w-[90%] max-w-md">
        <div className="relative w-full h-6 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-yellow-400 transition-all duration-100 ease-in-out rounded-full"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 text-xl"
            style={{ left: `calc(${progress.toFixed(0)}% - 12px)` }}
          >
            {getEmoji()}
          </div>
        </div>
        <p className="text-yellow-300 text-lg font-semibold">{progress}%</p>
      </div> */}
    </div>
  );
};

export default Loader;
