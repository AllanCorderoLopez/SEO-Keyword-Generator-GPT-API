import React, { useEffect, useRef } from 'react';
import PhrasesSkeleton from './PhrasesSkeleton';
import gsap from "gsap";

const ParallaxPills: React.FC = () => {


  return (
<div className="w-full rounded-lg mt-10 overflow-x-hidden">
  <section className="pointer-events-none">
    <div className="w-full mb-20 rounded-lg ajust overflow-y-hidden flex">
      <PhrasesSkeleton />
    </div>
  </section>
</div>



  );
};

export default ParallaxPills;
