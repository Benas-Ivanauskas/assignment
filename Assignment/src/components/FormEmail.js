import React, { useState } from "react";
import AddNewStepButton from "./AddNewStepButton";
import FormPhone from "./FormPhone";
import QuillForm from "./QuillForm";

const Form = () => {
  const [newStep, setNewStep] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleAddingNewStep = () => {
    setNewStep(true);
  };
  return (
    <>
      <QuillForm />
      {newStep && (
        <FormPhone phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      )}
      <AddNewStepButton
        handleAddingNewStep={handleAddingNewStep}
        newStep={newStep}
        setNewStep={setNewStep}
      />
    </>
  );
};

export default Form;
