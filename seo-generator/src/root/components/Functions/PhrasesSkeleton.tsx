import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function PhrasesSkeleton() {


  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

    // const containerRef = useRef(null);
    // const element = containerRef.current;
  
    // gsap.fromTo(
    //   element,
    //   {
    //     xPercent: -100,
    //   },
    //   {
    //     xPercent: 0,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: element,
    //       scrub: true,
    //       start: "top bottom",
    //       end: "bottom top",
    //     },
    //   }
    // );
  }, []);
  

  return (
    <div className="items-center text-center overflow-x-auto flex">
      <div className="w-10 cl"></div>
      <div className="phrase-container2 h-full w-full block" >
        <div
          className="flex items-center py-5 space-x-10 "
          style={{ minWidth: "100%" }}
        >
          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>

          <div className="py-3 px-4 bg-gray-200 rounded-lg max-w-xl inline-block whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
        </div>
        <div
          className="flex items-center py-5 space-x-10 "
          style={{ minWidth: "100%" }}
        >
          <div className="py-3 px-4 bg-gray-200 rounded-lg inline-block max-w-xl	ml-20 whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>

          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          <div className="py-3 px-4 bg-gray-200 rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
        </div>
        <div
          className="flex items-center py-5 space-x-10 "
          style={{ minWidth: "100%" }}
        >
          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>

          <div className="py-3 px-4 bg-gray-200 rounded-lg max-w-xl inline-block whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
        </div>
        <div
          className="flex items-center py-5 space-x-10 "
          style={{ minWidth: "100%" }}
        >
          <div className="py-3 px-4 bg-gray-200 rounded-lg inline-block max-w-xl	ml-3 whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>

          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          <div className="py-3 px-4 bg-gray-200 rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default PhrasesSkeleton;
