import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Pillsbadge from "../MainTopic/Pillsbadge";
const steps = [
  {
    label: "Seleccione el tema principal de su sitio",
    component: <Pillsbadge />,
  },
  {
    label: "Seleccione frases a evitar",
    component: <Pillsbadge />,
  },
  {
    label: "Seleccione el temasd principal de su sitio",
    component: <Pillsbadge />,
  },

];
export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box className="max-w-400 mb-10">
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className="mb-10 "
      >
        {steps.map((step, index) => (
          <Step key={step.label} className="mb-5">
            <StepLabel
              StepIconProps={{
                classes: {

                },
              }}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {step.component}
              <Box className="mt-4">
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    style={{
                      backgroundColor: "#6559a4",
                      color: "#fff",
                      fontFamily: "Poppins",
                      borderRadius: "10px",
                    }}
                    className="mr-1"
                  >
                    {index === steps.length - 1 ? "Finalizar" : "Siguiente"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    style={{
                      backgroundColor: "#787878",
                      color: "#fff",
                      fontFamily: "Poppins",
                      borderRadius: "10px",
                    }}
                    className="mr-1"
                  >
                    Atrás
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className="p-3">
          <Button onClick={handleReset} className="mt-1 mr-1">
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
