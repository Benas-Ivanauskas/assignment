import React from "react";

const AddNewStepButton = ({ handleAddingNewStep, newStep, setNewStep }) => {
  return (
    <div className="flex justify-center">
      {newStep === true ? (
        <button
          onClick={() => setNewStep(false)}
          className="px-3 py-2 mt-5 rounded-lg text-sm font-semibold leading-5 mb-5 border-b-1 addNewStep-btn"
        >
          - Remove step
        </button>
      ) : (
        <button
          onClick={handleAddingNewStep}
          className="mt-5 px-3 py-2 rounded-lg text-sm font-semibold leading-5 mb-5 addNewStep-btn"
        >
          + Add new step
        </button>
      )}
    </div>
  );
};

export default AddNewStepButton;
