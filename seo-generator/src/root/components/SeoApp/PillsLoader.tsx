import React from "react";

function PillsLoader() {
  return (
    <div className=" loader">
      <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
        <div className="flex items-center w-full space-x-2">
          <div className="h-8 bg-gray-500 rounded-lg   w-32"></div>
          <div className="h-8 bg-gray-700 rounded-lg   w-24"></div>
          <div className="h-8 bg-gray-700 rounded-lg   w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-8 bg-gray-500 rounded-lg   w-full"></div>
          <div className="h-8 bg-gray-700 rounded-lg   w-full"></div>
          <div className="h-8 bg-gray-700 rounded-lg   w-24"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[400px]">
          <div className="h-8 bg-gray-700 rounded-lg   w-full"></div>
          <div className="h-8 bg-gray-500 rounded-lg   w-80"></div>
          <div className="h-8 bg-gray-700 rounded-lg   w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-8 bg-gray-500 rounded-lg   w-full"></div>
          <div className="h-8 bg-gray-700 rounded-lg   w-full"></div>
          <div className="h-8 bg-gray-700 rounded-lg   w-24"></div>
        </div>
      </div>
    </div>
  );
}

export default PillsLoader;
