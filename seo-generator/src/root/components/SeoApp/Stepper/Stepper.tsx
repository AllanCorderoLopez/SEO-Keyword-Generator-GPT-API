import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import SelectMainTopic from "../MainTopic/SelectMainTopic";
import SelectBadWords from "../BadWords/SelectBadWords";
import SelectIntentions from "../Intentions/SelectIntentions";
import { useKeywordContext } from "@/context/Context";
import PhraseList from "../Phrases/PhraseList";
import MiddlephraseList from "../Phrases/MiddlephraseList";

const Step1Component = () => (
  <div>
    <h1 className="font-bold text-3xl">
      Describe tu sitio web.
    </h1>
  </div>
);

const steps = [
  <SelectMainTopic />,
  <SelectBadWords />,
  <SelectIntentions />,
  <MiddlephraseList />,
];

export default function Example() {
  const { setActiveStep, activeStep } = useKeywordContext();

  const handleNext = () => setActiveStep((cur) => cur + 1);
  const handlePrev = () => setActiveStep((cur) => cur - 1);

  return (
    <div className=" py-4 px-8 ">
      <Stepper activeStep={activeStep} className="hidden">
        <Step
          className={`stepper ${activeStep === 0 ? "active" : "sd"}step-pill`}
          onClick={() => setActiveStep(0)}
        >
          
        </Step>
        <Step
          className={`stepper ${activeStep === 1 ? "active" : "inactive"}`}
          onClick={() => setActiveStep(1)}
        >
          2
        </Step>
        <Step
          className={`stepper ${activeStep === 2 ? "active" : "inactive"}`}
          onClick={() => setActiveStep(2)}
        >
          3
        </Step>
        <Step
          className={`stepper ${activeStep === 3 ? "active" : "inactive"}`}
          onClick={() => setActiveStep(3)}
        >
          4
        </Step>
        
      </Stepper>

      <div className="mt-16">{steps[activeStep]}</div>
      <div className="mt-16 flex justify-between"></div>
    </div>
  );
}
