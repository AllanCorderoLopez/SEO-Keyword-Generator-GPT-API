import React, { useEffect } from "react";
import VerticalLinearStepper from "./Stepper/InstructionsStepper";
import InputPromtp from "./Stepper/InputPromtp";
import { useKeywordContext } from "@/context/Context";
import { getInitialSuggestionsPromtp } from "@/Promtps/PromtsGPT";
import PhraseList from "./Phrases/PhraseList";

import Stepper from "./Stepper/Stepper";
import ShareComponent from "./ShareComponent";

function SeoApp() {
  return (
    <section id="app">
      
      <div className=" w-full flex justify-center items-center app-container bg-gray-200">
        <div className="w-full h-full">
          <img
            src="https://www.aquitureforma.com/blog/wp-content/uploads/2021/03/portadabona.png"
            alt="Macbook"
            className="img"
          />
        </div>

        <div></div>
        <div className="w-full  steps-container">
          <h1 className="flex items-center justify-center h-full px-10">
            <Stepper />
          </h1>
        </div>
        <div></div>
      </div>


      {/* <div id="loader">
  <div id="shadow"></div>
  <div id="box"></div>
</div>
<h4>Loader #6</h4> */}
    </section>
  );
}
export default SeoApp;
