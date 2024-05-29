import { useState } from "react";
import SectionHeader from "./SectionHeader";
import FormEmail from "./FormEmail";
import ProgressBar from "./ProgressBar";

const progressBarObj = [
  {
    id: 0,
    step: "Name & Product",
    information: "Provide sequence name & product",
    component: null,
  },
  {
    id: 1,
    step: "Sequense steps",
    information: "Create sequence steps for your sequence",
    component: FormEmail,
  },
  {
    id: 2,
    step: "Summary",
    information: "Summary of your sequence",
    component: null,
  },
];

function SectionPage() {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNextBtn = () => {
    if (step < progressBarObj.length - 1) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePreviousBtn = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const CurrentComponent = progressBarObj[step].component;
  return (
    <>
      <ProgressBar
        progressBarObj={progressBarObj}
        completed={completed}
        step={step}
      />
      <SectionHeader
        handleNextBtn={handleNextBtn}
        handlePreviousBtn={handlePreviousBtn}
        isLastStep={step === progressBarObj.length - 1}
        completed={completed}
      />
      {CurrentComponent && <CurrentComponent />}
    </>
  );
}

export default SectionPage;
