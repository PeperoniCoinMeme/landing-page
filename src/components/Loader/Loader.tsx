import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-semibold text-yellow-300">
          Loading content...
        </p>
      </div>
    </div>
  );
};

export default Loader;
