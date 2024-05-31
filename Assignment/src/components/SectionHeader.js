function SectionHeader({
  handleNextBtn,
  completed,
  handlePreviousBtn,
  isLastStep,
}) {
  return (
    <div className="sequence-steps flex justify-between pb-5 flex-wrap lg:flex-wrap border-b border-b-1 border-formBorder">
      <div>
        <h3 className="text-xl font-semibold leading-7 mb-1 ">
          Sequence steps
        </h3>
        <p className="font-normal text-base leading-5 mb-2">
          Create steps for your sequence
        </p>
      </div>
      <div className="flex gap-4 ">
        {completed ? (
          <>
            <button
              className="btn bg-purple text-white"
              onClick={handleNextBtn}
            >
              {completed || isLastStep ? "Completed" : "Next"}
            </button>
          </>
        ) : (
          <>
            <button
              className="btn border border-btnBorder border-b-1"
              onClick={handlePreviousBtn}
            >
              Previous
            </button>
            <button
              className="btn bg-purple text-white"
              onClick={handleNextBtn}
            >
              {completed || isLastStep ? "Finish" : "Next"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;
