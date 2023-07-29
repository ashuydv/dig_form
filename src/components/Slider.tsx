import React, { useState } from "react";
import SliderStep from "./SliderStep";

const Slider: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [numSteps, setNumSteps] = useState<number>(2); // Default number of steps

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  const handleNumStepsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumSteps(value);
  };

  const generateSteps = () => {
    const steps = [];
    for (let i = 1; i <= numSteps; i++) {
      steps.push(
        <SliderStep
          key={i}
          stepNumber={i}
          title={`STEP ${i}`}
          description={`Description for Step ${i}`}
          active={activeStep === i}
          onClick={handleStepClick}
          totalSteps={numSteps}
        />
      );
    }
    return steps;
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container py-12 mx-auto flex flex-wrap">
        <div className="flex flex-wrap flex-col space-y-8 -my-8 w-full">
          <div>
            <label htmlFor="steps">Steps: </label>
            <input
              type="number"
              name="steps"
              id="steps"
              placeholder="Enter number of steps"
              value={numSteps}
              onChange={handleNumStepsChange}
            />
          </div>
          <div className="flex items-start">{generateSteps()}</div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
