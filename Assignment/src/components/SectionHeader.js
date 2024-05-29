function SectionHeader({
  handleNextBtn,
  completed,
  handlePreviousBtn,
  isLastStep,
}) {
  return (
    <div
      className="sequence-steps flex justify-between pb-5 border-b flex-wrap lg:flex-wrap"
      style={{ borderBottom: "1px solid var(--form-border)" }}
    >
      <div>
        <h3 className="text-lg font-semibold leading-7 mb-1 ">
          Sequence steps
        </h3>
        <p className="font-normal text-sm leading-5 mb-2">
          Create steps for your sequence
        </p>
      </div>
      <div className="flex gap-4 ">
        {completed ? (
          <>
            <button
              className="btn btn--next text-white"
              onClick={handleNextBtn}
            >
              {completed || isLastStep ? "Completed" : "Next"}
            </button>
          </>
        ) : (
          <>
            <button className="btn btn--previous" onClick={handlePreviousBtn}>
              Previous
            </button>
            <button
              className="btn btn--next text-white"
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
