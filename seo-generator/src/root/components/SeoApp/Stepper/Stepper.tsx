import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import SelectMainTopic from "../MainTopic/SelectMainTopic";
import SelectBadWords from "../BadWords/SelectBadWords";

const Step1Component = () => (
  <div>
    <h1 className="font-bold text-3xl">
      ¿Qué tipo de negocio estás desarrollando?
    </h1>
  </div>
);
const Step2Component = () => <div>Contenido del Paso 2</div>;
const Step3Component = () => <div>Contenido del Paso 3</div>;

const steps = [<SelectMainTopic />, <SelectBadWords />, <Step3Component />];

export default function Example() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep((cur) => cur + 1);
  const handlePrev = () => setActiveStep((cur) => cur - 1);

  return (
    <div className=" py-4 px-8">
      <Stepper activeStep={activeStep}>
        <Step
          className={`stepper ${activeStep === 0 ? "active" : "inactive"}`}
          onClick={() => setActiveStep(0)}
        >
          1
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
      </Stepper>

      <div className="mt-16">{steps[activeStep]}</div>
      <div className="mt-16 flex justify-between">
        <Button
          className="btn-prev-step"
          onClick={handlePrev}
          disabled={activeStep === 0}
        >
          Atrás
        </Button>
        <Button
          className="btn-next-step"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
