import React from "react";
import Image from "next/image";

import img1 from "../../../assets/1.svg";
import img2 from "../../../assets/2.svg";
import img3 from "../../../assets/3.svg";
import img4 from "../../../assets/4.svg";

function Jumbotron() {
  return (
    <section className="bg-color-nav py-60  w-full ">
      <div className="grid px-4 herosection ml-10 lg:gap-8 xl:gap-0  lg:grid-cols-12">
        <div className="fadeInUp  place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mt-16 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Potencie el SEO de su sitio web con IA.
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-300">
            Convierta su sitio web en una máquina de generar tráfico orgánico,
            con palabras clave que realmente le interesan a su audiencia.
          </p>
          <a
            href="#app"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-indigo-800 rounded-lg bg-white hover:bg-indigo-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
           Comenzar
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <div className="lg:mt-0 ml-20  lg:col-span-5 lg:flex relative ">
          <div className="absolute z-10 fadeInUp animate-delay-100">
            <Image src={img2} width={370} height={330} alt="logo" />
          </div>
          <div className="absolute z-20 mt-20 fadeInUp animate-delay-200">
            <Image src={img1} width={100} height={230} alt="logo" />
          </div>
          <div className="absolute z-30 mt-40 ml-72 fadeInUp animate-delay-400">
            <Image src={img3} width={100} height={230} alt="logo" />
          </div>
          <div className="absolute z-20 mt-60 fadeInUp animate-delay-600">
            <Image src={img4} width={100} height={230} alt="logo" />
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default Jumbotron;
