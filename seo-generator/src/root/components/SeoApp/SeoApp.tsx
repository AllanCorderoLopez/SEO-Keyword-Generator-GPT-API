import React, { useEffect } from "react";
import InputPromtp from "./InputPromtp";
import { useKeywordContext } from "@/context/Context";
import GetInitialSuggestions from "./GetInitialSuggestions";


function SeoApp() {
  const { initialKeywords } = useKeywordContext();
  return (
    <div className="ml-2 mr-2 app-container">
      <InputPromtp />
      <GetInitialSuggestions />
    </div>
  );
}

export default SeoApp;
