import React from "react";
import ParallaxPills from "./ParallaxPills";

function ParallaxContainer() {
  return (
    <div className="parallax-container w-full bg-gray-100 rounded-lg px-10 pt-10">
      <div>
        <h1 className="parallax-container2 font-bold px-40  pb-10 text-gray-900 text-5xl items-center text-center">
        Resultados basados en IA.
        </h1>
        <h2 className="parallax-container2 font-medium px-40  pb-10 text-gray-500 text-xl items-center text-center">
        Adaptados a su negocio.
        </h2>
      </div>
        <div className="z-0 ">
        <ParallaxPills />

        </div>
    </div>
  );
}

export default ParallaxContainer;
