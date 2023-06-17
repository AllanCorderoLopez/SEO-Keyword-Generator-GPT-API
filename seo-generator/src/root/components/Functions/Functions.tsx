import React from "react";
import Image from "next/image";

import img1 from "../../../assets/1.svg";
import img2 from "../../../assets/2.svg";
import img3 from "../../../assets/3.svg";
import img4 from "../../../assets/4.svg";
import ParallaxPills from "./ParallaxPills";
import ParallaxContainer from "./ParallaxContainer";
function Functions() {
  return (
    <section className="bg-white py-20  w-full ">
      <div className="flex items-center px-40 justify-between">
        <div className="mr-10 bg-white rounded-lg bg-gray-100 ">
          <div className="p-5">
            <div className=" z-10 fadeInUp animate-delay-100">
              <Image src={img1} width={80} height={20} alt="logo" />
            </div>
            <a>
              <h5 className="m text-md font-bold tracking-tight text-gray-800 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div className="mr-10 bg-white rounded-lg bg-gray-100 ">
          <div className="p-5">
            <Image src={img3} width={80} height={20} alt="logo" />

            <a>
              <h5 className="m text-md font-bold tracking-tight text-gray-800 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div className="mr-10 bg-white rounded-lg bg-gray-100 ">
          <div className="p-5">
            <Image src={img4} width={80} height={20} alt="logo" />

            <a>
              <h5 className="m text-md font-bold tracking-tight text-gray-800 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        
      </div>
      <div className="px-40 pr-52 pt-20">
      <ParallaxContainer/>

      </div>
    </section>
  );
}

export default Functions;
