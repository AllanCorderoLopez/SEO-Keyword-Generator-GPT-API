import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function PhrasesSkeleton() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const containerRef5 = useRef(null);


  useEffect(() => {
    const element = containerRef.current;
    const element2 = containerRef2.current;
    const element3 = containerRef3.current;
    const element4 = containerRef4.current;
    const element5 = containerRef4.current;
    gsap.fromTo(
      element,
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );
    
    gsap.fromTo(
      element2,
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );
    gsap.fromTo(
      element3,
      {
        xPercent: 0,
      },
      {
        xPercent: -70,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );

    gsap.fromTo(
      element4,
      {
        xPercent: 100,
      },
      {
        xPercent: -70,
        ease: "power1.inOut",
        scrollTrigger: {

          trigger: element,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
          

        },
      }
    );
gsap.fromTo(
  element5,
  {
    backgroundPositionX: "100%",
  },
  {
    backgroundPositionX: "-70%",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: element,
      scrub: true,
      start: "top bottom",
      end: "bottom top",
    },
  }
);

  }, []);
  

  return (
    <div className="items-center mb-10  ajust text-center overflow-x-auto flex"
    ref={containerRef5}>
      <div className="w-10 cl"></div>
      <div className="phrase-container2  h-full w-full block"
      ref={containerRef} > 
        <div
          className="flex items-center py-5 space-x-10 " 
          style={{ minWidth: "100%" }}
        >
          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>

          <div className="py-3 px-4 phrase-container-white rounded-lg max-w-xl inline-block whitespace-nowrap">
            <h2 className="font-medium text-black  text-xl">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>

          <div className="py-3 px-4 phrase-container-white rounded-lg max-w-xl inline-block whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
        </div>
        <div
          className="flex items-center py-5 space-x-10 "ref={containerRef3}
          style={{ minWidth: "100%" }}
        >
          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          <div className="py-3 px-4 phrase-container-white rounded-lg inline-block max-w-xl	ml-20 whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>

          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          <div className="py-3 px-4 phrase-container-white rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
        </div>
        <div
          className="flex items-center py-5 space-x-10 "ref={containerRef2}
          style={{ minWidth: "100%" }}
        >
          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>

          <div className="py-3 px-4 phrase-container-white rounded-lg max-w-xl inline-block whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          <div className="py-3 px-4 phrase-container-white rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl ">
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
          className="flex items-center py-5 space-x-10 "ref={containerRef4}
          style={{ minWidth: "100%" }}
        >
          <div className="py-3 px-4 phrase-container-white  rounded-lg inline-block max-w-xl	ml-3 whitespace-nowrap">
            <h2 className="font-medium text-gray-900  text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>

          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          <div className="py-3 px-4 phrase-container-white rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-900 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          <div className="py-3 px-4 phrase-container rounded-lg inline-block max-w-xl	 whitespace-nowrap">
            <h2 className="font-medium text-gray-200 text-xl ">
            Explora nuestra colección de bicicletas <br/> de montaña para aventuras épicas al aire libre.
            </h2>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}

export default PhrasesSkeleton;
