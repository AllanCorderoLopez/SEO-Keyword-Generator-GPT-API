import React, { useEffect, useRef } from 'react';
import PhrasesSkeleton from './PhrasesSkeleton';
import gsap from "gsap";

const ParallaxPills: React.FC = () => {


  return (
    <div  className="w-full  overflow-auto  overflow-y-hidden" >
      <section >
        <div className="w-full  flex">
          <div   className='w-10 z-50  shadow-inner-shadow '></div>
        <PhrasesSkeleton />
        <div className='w-10 z-50  shadow-inner-shadow '></div>

        </div>
      </section>
      {/* <section ref={(ref) => sectionsRef.current[1] = ref as HTMLDivElement}>
      <div className="w-full text-center items-center mx-3 	">
        <PhrasesSkeleton/>
        </div>
      </section> */}
    </div>
  );
};

export default ParallaxPills;
