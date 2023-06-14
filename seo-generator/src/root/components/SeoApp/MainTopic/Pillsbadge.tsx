import { keywordSEO, useKeywordContext } from "@/context/Context";
import React, { useEffect, useState } from "react";
import fetchCompletion from "@/api/GPTAPI";
import { getInitialSuggestionsPromtp } from "@/Promtps/PromtsGPT";

function Pillsbadge() {
  const { initialKeywords, setMainTopic, mainTopic } = useKeywordContext();

  const handleSetTopic = (keyword: string) => () => {
    setMainTopic(keyword);
  };

  const handleFieldChange = (fieldName: string, value: string) => {
    setMainTopic(value);
  };

  const { setInitialKeywords, setIsTopicsGenerated, isTopicsGenerated } =
    useKeywordContext();

  const [initialSuggestions, setInitialSuggestions] = useState("");

  const GetInitialSuggestions = async () => {
    const prompt = getInitialSuggestionsPromtp();
    const completion = await fetchCompletion(prompt);
    console.log(completion);
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
  };

  useEffect(() => {
    if (isTopicsGenerated === false) {
      GetInitialSuggestions();
    }
  }, []);
  return (
    <div className="pt-5">
      <div className="flex grid grid-cols-3 justify-evenly">
        {initialKeywords.map((keyword) => (
          <div className="" key={keyword.id}>
            <label className="flex   text-sm font-medium text-gray-900 dark:text-white">
              <button
                onClick={handleSetTopic(keyword.keyword)}
                id="badge-dismiss-dark"
                className="text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 font-medium rounded-full text-sm px-3 py-1 mr-2 mb-2 w-auto"
              >
                {keyword.keyword}
              </button>
            </label>
          </div>
        ))}
      </div>
      <h1 className="pb-5 pt-5 text-sm">
        Si no encuentras tu tema, puedes escribir uno.
      </h1>
      <input
        value={mainTopic}
        onChange={(e) => handleFieldChange("lastname", e.target.value)}
        type="email"
        id="helper-text"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder="Escribe el tema principal de su sitio"
      />
    </div>
  );
}

export default Pillsbadge;
