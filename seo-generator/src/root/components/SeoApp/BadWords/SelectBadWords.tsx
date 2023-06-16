import { useEffect, useState } from "react";
import { keywordSEO, useKeywordContext } from "@/context/Context";
import React from "react";
import Masonry from "react-masonry-css";
import { FaCheck, FaPlus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { getInitialBadWordsPrompt } from "@/Promtps/PromtsGPT";
import fetchCompletion from "@/api/GPTAPI";
import Pillsbadge from "../MainTopic/Pillsbadge";
import PillsLoader from "../PillsLoader";
function SelectBadWords() {
  const {
    isBadKeyWordsGenerated,
    mainTopic,
    setActiveStep,
    setInitialBadKeywords,
    badKeywords,
    setSelectedBadKeywords,
    selectedBadKeywords,
    setIsBadKeyWordsGenerated,
  } = useKeywordContext();
  const [initialBadSuggestions, setInitialBadSuggestions] = useState("");

  const GetInitialSuggestions = async () => {
    const prompt = getInitialBadWordsPrompt(mainTopic);
    const completion = await fetchCompletion(prompt);
    setInitialBadSuggestions(completion);
    const cleanedKeywords = completion.replace(/^\[|\[|\]|\].|\.|\,$/g, " ");
    const keywordArray = cleanedKeywords.split(", ");
    const keywordSEOArray: keywordSEO[] = keywordArray.map(
      (keyword: string, index: number) => ({
        id: index + 1,
        keyword: keyword.trim(),
      })
    );
    setInitialBadKeywords(keywordSEOArray);
    setIsBadKeyWordsGenerated(true);
    return 0;
  };
  const handleNext = () => setActiveStep((cur) => cur + 1);
  const handlePrev = () => setActiveStep((cur) => cur - 1);
  useEffect(() => {
    if (isBadKeyWordsGenerated === false) {
      GetInitialSuggestions();
    }
  }, [isBadKeyWordsGenerated]);


  const handleKeywordClick = (keyword: keywordSEO) => {
    if (selectedBadKeywords.includes(keyword)) {
      setSelectedBadKeywords(selectedBadKeywords.filter((kw) => kw !== keyword));
    } else {
      setSelectedBadKeywords([...selectedBadKeywords, keyword]);
    }
  };

  return (
    <div className="step-container ">
      <h1 className="font-bold text-4xl">
        Palabras que no quieres que aparezcan en tu contenido.
        
      </h1>

      <h1 className="font-medium text-medium text-gray-800 pt-2">
        Son importantes para la reputación de tu sitio.
      </h1>
      <div className="pt-14 animate-slide-top">
        {isBadKeyWordsGenerated === false ? (
          <PillsLoader />
        ) : (
          badKeywords.map((keyword) => (
            <button
              id={keyword.id.toString()}
              className={` mx-2 focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2 mb-2 ${
                selectedBadKeywords.includes(keyword)
                  ? "btn-suggestions-bad-clicked"
                  : "btn-suggestions-bad"
              }`}
              key={keyword.id}
              onClick={() => handleKeywordClick(keyword)}
            >
              <div className="flex">
                {keyword.keyword}
                {selectedBadKeywords.includes(keyword) ? (
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
          disabled={badKeywords.length === 0}
        >
          Atrás
        </button>
        <button
          onClick={handleNext}
          className={`mt-1 ml-2 btn-suggestions-topic focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 animate-slide-top ${
            selectedBadKeywords.length !== 0 ? "" : "opacity-60"
          }`}
          disabled={selectedBadKeywords.length === 0 }
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default SelectBadWords;
