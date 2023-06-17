import { useKeywordContext } from "@/context/Context";
import React from "react";
import PhraseList from "./PhraseList";

function MiddlephraseList() {
  const { setActiveStep,setIsLoadedPhrases,setPhrases,setPhrasesThatIntrest } = useKeywordContext();


  const handlePrev = () => {
    setActiveStep((cur) => cur - 1);
    setIsLoadedPhrases(false);
    setPhrasesThatIntrest([])
  }

  return (
    <div className="step-container  middle-step-container">
      <h1 className="font-bold text-4xl">
        Hemos generado estas frases que potenciaran el SEO de tu sitio.
      </h1>
      <PhraseList />
      <div className="flex justify-between	mr-10 ">
        <button
          onClick={handlePrev}
          className="mt-5 ml-2 btn-suggestions-topic focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 animate-slide-top
          "
        >
          Atrás
        </button>
      </div>
    </div>
  );
}

export default MiddlephraseList;
