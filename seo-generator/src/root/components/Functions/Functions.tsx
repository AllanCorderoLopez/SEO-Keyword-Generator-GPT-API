import React from "react";
import Image from "next/image";

import img1 from "../../../assets/1.svg";
import img2 from "../../../assets/2.svg";
import img3 from "../../../assets/3.svg";
import img4 from "../../../assets/4.svg";
import ParallaxContainer from "./ParallaxContainer";
function Functions() {
  return (
    <section id="functions" className="bg-white py-20  mb-5  w-full ">
      <div className="flex cont1 items-center px-40 justify-between mb-20">
        <div className="mr-10 parallax-container rounded-lg bg-gray-100 ">
          <div className="p-5">
            <div className=" z-10 fadeInUp animate-delay-100">
              <Image src={img1} width={80} height={20} alt="logo" />
            </div>
            <a>
              <h5 className="m text-md font-bold tracking-tight text-gray-800 dark:text-white">
              Maximiza tu inversión en marketing.
              </h5>
            </a>
            <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
            Maximiza el retorno de tu inversión en marketing digital con SEO web.    
                   </p>
          </div>
        </div>
        <div className="mr-10 parallax-container rounded-lg bg-gray-100 ">
          <div className="p-5">
            <Image src={img3} width={80} height={20} alt="logo" />

            <a>
              <h5 className="m text-md font-bold tracking-tight text-gray-800 dark:text-white">
              Aumenta tu visibilidad en los motores de búsqueda.
              </h5>
            </a>
            <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
            Destaca en línea y alcanza nuevos clientes con una mayor visibilidad en los motores de búsqueda.
            </p>
          </div>
        </div>
        <div className="mr-10 parallax-container rounded-lg bg-gray-100 ">
          <div className="p-5">
            <Image src={img4} width={80} height={20} alt="logo" />

            <a>
              <h5 className="m text-md font-bold tracking-tight text-gray-800 dark:text-white">
              Posiciona tu negocio por encima de la competencia.
              </h5>
            </a>
            <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
            Supera a la competencia y conquista el mercado posicionando tu negocio en la cima.
            </p>
          </div>
        </div>
        
      </div>
      <div className="px-40 pr-52 0">
      <ParallaxContainer/>

      </div>
    </section>
  );
}

export default Functions;
