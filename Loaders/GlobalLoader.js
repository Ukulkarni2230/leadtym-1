// GlobalLoader.js
import React from "react";

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#FFFEF9] dark:bg-black  z-50">
      <div className="flex space-x-2 mb-4">
        <div className="w-8 h-8 gradient-bg rounded-full animate-bounce"></div>
        <div className="w-8 h-8 gradient-bg rounded-full animate-bounce200"></div>
        <div className="w-8 h-8 gradient-bg rounded-full animate-bounce400"></div>
      </div>
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">
        Loading...
      </h1>
    </div>
  );
};

export default GlobalLoader;
