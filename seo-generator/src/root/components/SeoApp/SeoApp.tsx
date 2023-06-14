import React, { useEffect } from "react";
import VerticalLinearStepper from "./Stepper/InstructionsStepper";
import InputPromtp from "./Stepper/InputPromtp";
import { useKeywordContext } from "@/context/Context";
import { getInitialSuggestionsPromtp } from "@/Promtps/PromtsGPT";
import PhraseList from "./Phrases/PhraseList";

import Stepper from "./Stepper/Stepper";

function SeoApp() {
  return (
    <div>


      <div className="mt-10 w-full flex justify-center items-center app-container">
        <div className="w-full h-full">
          <img
            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Macbook"
            className="img"
          />
        </div>



        <div className="w-full steps-container">
          <h1 className="flex items-center justify-center h-full px-10">
            <Stepper />
          </h1>
        </div>
        {/* <VerticalLinearStepper /> */}
      </div>
      <div className="pt-20">

      </div>
      <PhraseList />
    </div>

  );
};
export default SeoApp;
