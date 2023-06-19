import { getInitialSuggestionsPromtp } from "@/Promtps/PromtsGPT";
import fetchCompletion from "@/api/GPTAPI";
import { keywordSEO } from "@/context/Context";
import { useKeywordContext } from "../../../../context/Context";
import React, { use, useEffect, useState } from "react";
import { FaRegLightbulb, FaSyncAlt } from "react-icons/fa";
import Suggestions from "./Suggestions";
import PillsLoader from "../PillsLoader";

function SelectMainTopic() {

  const {
    setInitialKeywords,
    setIsTopicsGenerated,
    isTopicsGenerated,
    setIsBadKeyWordsGenerated,
    setIsIntentionsGenerated,
    setActiveStep,
    setSelectedIntentions,
    setSelectedBadKeywords,
  } = useKeywordContext();

  const {
    setInitialBadKeywords,
    setInitialIntentions,
    setMainTopic,
    mainTopic,
  } = useKeywordContext();

  const handleFieldChange = (fieldName: string, value: string) => {
    setMainTopic(value);
    setIsBadKeyWordsGenerated(true);
    setIsIntentionsGenerated(true);
    setInitialBadKeywords([]);
    setInitialIntentions([]);
    setSelectedIntentions([]);
    setSelectedBadKeywords([]);
    if (value === "") {
      setIsBadKeyWordsGenerated(true);
      setIsIntentionsGenerated(true);
      setInitialBadKeywords([]);
      setInitialIntentions([]);
    }
  };

  const [initialSuggestions, setInitialSuggestions] = useState("");
  
  const GetInitialSuggestions = async () => {
    const prompt = getInitialSuggestionsPromtp();
    const completion = await fetchCompletion(prompt);
    console.log(completion);// TODO: Dont use console messages
    setInitialSuggestions(completion);
    const cleanedKeywords = completion.replace(/^\[|\[|\]|\].|\.|\,$/g, " ");
    const keywordArray = cleanedKeywords.split(", ");
    const keywordSEOArray: keywordSEO[] = keywordArray.map(
      (keyword: string, index: number) => ({
        id: index + 1,
        keyword: keyword.trim(),
      })
    );
    setInitialKeywords(keywordSEOArray);
    setIsTopicsGenerated(true);
    return 0;
  };

  useEffect(() => {
    if (isTopicsGenerated === false) {
      setMainTopic("");
    }
    setIsBadKeyWordsGenerated(false);
  }, []);

  const handleNext = () => {
    setActiveStep((cur) => cur + 1);
    setIsBadKeyWordsGenerated(false);
    setIsIntentionsGenerated(false);
    setInitialBadKeywords([]);
    setInitialIntentions([]);
    setSelectedIntentions([]);
    setSelectedBadKeywords([]);
  }
  
  return (
    <div className="step-container pt-10">
      <h1 className="font-bold text-4xl">
        Describe tu sitio web.
      </h1>
      <div className="pt-10 flex">
        <input
          value={mainTopic}
          onChange={(e) => handleFieldChange("keyword", e.target.value)}
          type="email"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Escribe el tema principal de su sitio"
        />
        <button
          onClick={handleNext}
          className={`mt-1 ml-2 btn-suggestions-topic focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 animate-slide-top ${
            mainTopic !== "" ? "" : "opacity-60"
          }`}
          disabled={mainTopic === ""}
        >
          Siguiente
        </button>
      </div>
      <div className="block">
        <div className="flex">
          <h1 className="font-medium text-medium text-gray-800 pt-5">
            ¿No está seguro?
          </h1>
          <div className="flex h1-color-suggestion">
            <button
              onClick={() => GetInitialSuggestions()}
              className="font-medium text-medium px-2 pt-4 "
            >
              Mira algunas sugerencias
            </button>
            <div className="pt-6 flex">
              <FaRegLightbulb />
            </div>
          </div>

          <div className="font-medium text-medium pt-5 pl-5 h1-color-suggestion">
            <button
              onClick={() => GetInitialSuggestions()}
              >
              <FaSyncAlt />
            </button>
          </div>
        </div>
        <div>
          <Suggestions />
        </div>
      </div>
    </div>
  );
}

export default SelectMainTopic;
