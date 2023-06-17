import React from "react";
import ParallaxPills from "./ParallaxPills";

function ParallaxContainer() {

    
  return (
    <section id="IA" className=" w-full parallax-container-IA  pt-20">
      <div>
        <h1 className="parallax-container2 pt-10 font-bold px-40  pb-10 text-gray-100 text-5xl items-center text-center">
        Resultados basados en IA.
        </h1>
        <h2 className="parallax-container2 font-medium px-40  pb-10 text-gray-500 text-xl items-center text-center">
        Explora un mundo de posibilidades con nuestra tecnología de IA basada en GPT.
        </h2>
      </div>
      <ParallaxPills />

    </section>
  );
}

export default ParallaxContainer;
