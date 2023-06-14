import { useEffect, useState } from "react";
import { keywordSEO, useKeywordContext } from "@/context/Context";
import React from "react";
import Masonry from 'react-masonry-css';
import { FaCheck, FaPlus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { getInitialBadWordsPrompt } from "@/Promtps/PromtsGPT";
import fetchCompletion from "@/api/GPTAPI";
function SelectBadWords() {
  const {  setMainTopic, mainTopic, setInitialBadKeywords, badKeywords } = useKeywordContext();
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
    console.log(badKeywords);
    console.log(completion);
    return 0;
  }

  useEffect(() => {
    if (mainTopic !== "") {
        GetInitialSuggestions();
    }
    }, [mainTopic]);

  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const handleKeywordClick = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter((kw) => kw !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  return (
    <div className="step-container ">
      <h1 className="font-bold text-2xl">
        Palabras que no quieres que aparezcan en tu contenido.
      </h1>

      <h1 className="font-medium text-medium text-gray-800 pt-2">
        Son importantes para la reputación de tu sitio.
      </h1>
      <div className="pt-14">
        {badKeywords.map((keyword) => (
          <button
            id={keyword.id.toString()}
            className={` mx-2 focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2 mb-2 ${selectedKeywords.includes(keyword.keyword) ? "btn-suggestions-bad-clicked" : "btn-suggestions-bad"}`}
            key={keyword.id}
            onClick={() => handleKeywordClick(keyword.keyword)}
            
          >
            <div className="flex">
            {keyword.keyword}
            {selectedKeywords.includes(keyword.keyword) ?
            <BsCheckLg className="ml-3 mt-1" /> : <AiOutlinePlus className="ml-3 mt-1" />}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectBadWords;
