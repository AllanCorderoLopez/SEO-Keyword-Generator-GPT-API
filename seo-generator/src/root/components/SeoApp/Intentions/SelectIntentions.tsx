import {
  getInitialBadWordsPrompt,
  getInitialIntentions,
} from "@/Promtps/PromtsGPT";
import fetchCompletion from "@/api/GPTAPI";
import { keywordSEO, phareList, useKeywordContext } from "@/context/Context";
import { Console } from "console";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import PillsLoader from "../PillsLoader";

function SelectIntentions() {
   const {
    setIsIntentionsGenerated,
    isIntentionsGenerated,
    intentions,
    mainTopic,
    setActiveStep,
    setInitialIntentions,
    setSelectedIntentions,
    selectedIntentions,
    selectedBadKeywords,
    setIsLoadedPhrases,
    setPhrases,
  } = useKeywordContext();
  const handleNext = () => {
    setActiveStep((cur) => cur + 1);
    const phraseList: phareList = {
      topic: mainTopic,
      badWords: selectedBadKeywords,
      intentions: selectedIntentions,
      amountOfKeywords: 15,
    };
    setPhrases(phraseList);
    setIsLoadedPhrases(false)

  }
  const handlePrev = () => setActiveStep((cur) => cur - 1);
  const GetInitialSuggestions = async () => {
    const prompt = getInitialIntentions(mainTopic);
    const completion = await fetchCompletion(prompt);
    console.log(completion);
    setInitialIntentions(completion);
    const cleanedKeywords = completion.replace(/^\[|\[|\]|\].|\.|\,$/g, " ");
    const keywordArray = cleanedKeywords.split(", ");
    const keywordSEOArray: keywordSEO[] = keywordArray.map(
      (keyword: string, index: number) => ({
        id: index + 1,
        keyword: keyword.trim(),
      })
    );
    console.log(keywordSEOArray);
    setInitialIntentions(keywordSEOArray);
    setIsIntentionsGenerated(true);
  };
  const handleKeywordClick = (keyword: keywordSEO) => {
    if (selectedIntentions.includes(keyword)) {
      setSelectedIntentions(selectedIntentions.filter((kw) => kw !== keyword));
    } else {
      setSelectedIntentions([...selectedIntentions, keyword]);
    }
    console.log(selectedIntentions);
  };

  useEffect(() => {
    if (isIntentionsGenerated === false &&  mainTopic !== "") {
      GetInitialSuggestions();
      setSelectedIntentions([]);
    }
  }, [isIntentionsGenerated]);

  return (
    <div className="step-container">
      <h1 className="font-bold text-4xl">Marca las intenciones de tu sitio.</h1>
      <h1 className="font-medium text-medium text-gray-800 pt-2">
        Determina el contenido al que quieres aplicar SEO.
      </h1>
      <div className="pt-14">
        {isIntentionsGenerated === false  ? (
          <PillsLoader />
        ) : (
          intentions.map((keyword) => (
            <button
              id={keyword.id.toString()}
              className={` mx-2 focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2 mb-2 ${
                selectedIntentions.includes(keyword)
                  ? "btn-suggestions-bad-clicked"
                  : "btn-suggestions-bad"
              }`}
              key={keyword.id}
              onClick={() => handleKeywordClick(keyword)}
            >
              <div className="flex">
                {keyword.keyword}
                {selectedIntentions.includes(keyword) ? (
                  <BsCheckLg className="ml-3 mt-1" />
                ) : (
                  <AiOutlinePlus className="ml-3 mt-1" />
                )}
              </div>
            </button>
          ))
        )}
      </div>
      <div className="flex mt-10 justify-between	mr-10">
        <button
          onClick={handlePrev}
          className={`mt-1 ml-2 btn-suggestions-topic focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 animate-slide-top ${
            mainTopic !== "" ? "" : "opacity-60"
          }`}
        >
          Atrás
        </button>
        <button
          onClick={handleNext}
          className={`mt-1 ml-2 btn-suggestions-topic focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 animate-slide-top ${
            selectedIntentions.length !== 0 ? "" : "opacity-60"
          }`}
          disabled={selectedIntentions.length === 0 }
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default SelectIntentions;
