import { useKeywordContext } from "@/context/Context";
import React from "react";
import { FaSyncAlt } from "react-icons/fa";

function Suggestions() {
  const {setInitialIntentions, setInitialBadKeywords, setIsIntentionsGenerated, setIsBadKeyWordsGenerated, initialKeywords, setMainTopic, mainTopic } = useKeywordContext();
  const handleSetTopic = (keyword: string) => () => {
    setIsBadKeyWordsGenerated(false);
    setIsIntentionsGenerated(false);
    setInitialBadKeywords([]);
    setInitialIntentions([]);
    setMainTopic(keyword);
  };
  
  return (
    <div className="flex pt-5">
      {initialKeywords.map((keyword) => (
        <div className="px-2 slide-top" key={keyword.id}>
          <label className="flex  text-sm font-medium text-gray-900 dark:text-white">
            <button
              onClick={handleSetTopic(keyword.keyword)}
              id="badge-dismiss-dark"
              className="btn-suggestions-topic focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 animate-slide-top"
            >
              {keyword.keyword}
            </button>
          </label>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
