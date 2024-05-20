import React from "react";

const AddNewStepButton = ({ handleAddingNewStep, newStep, setNewStep }) => {
  return (
    <div className="flex justify-center">
      {newStep === true ? (
        <button
          onClick={() => setNewStep(false)}
          style={{ border: `1px solid var(--button-border)` }}
          className="addNewStep-btn mt-5 rounded-lg text-sm font-semibold leading-5 mb-5"
        >
          - Remove step
        </button>
      ) : (
        <button
          onClick={handleAddingNewStep}
          style={{ border: `1px solid var(--button-border)` }}
          className="addNewStep-btn mt-5 rounded-lg text-sm font-semibold leading-5 mb-5"
        >
          + Add new step
        </button>
      )}
    </div>
  );
};

export default AddNewStepButton;
