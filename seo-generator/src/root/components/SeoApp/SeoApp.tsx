import React, { useEffect } from "react";
import VerticalLinearStepper from "./Stepper/InstructionsStepper";
import InputPromtp from "./Stepper/InputPromtp";
import { useKeywordContext } from "@/context/Context";
import { getInitialSuggestionsPromtp } from "@/Promtps/PromtsGPT";
import PhraseList from "./PhraseList";


function SeoApp() {
  return (
    <div className="ml-2 mr-2 mt-10 p-5 app-container">
      <VerticalLinearStepper />

      <PhraseList/>

    </div>
  );
};
export default SeoApp;
