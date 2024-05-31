function ProgressBar({ progressBarObj, completed, step }) {
  return (
    <div className="flex flex-row justify-between w-full">
      {progressBarObj &&
        progressBarObj.map((progressStep, index) => (
          <div
            key={progressStep.id}
            className="flex flex-col items-center text-center p-4"
          >
            <div>
              {completed || step > index ? (
                <p className="step-index-active">
                  <img src="images/tick.png" alt="steps tick" />
                </p>
              ) : (
                <p
                  className={
                    index === step
                      ? "step-index-active"
                      : "step-index-notActive"
                  }
                >
                  <span className="w-2 h-2 bg-purple rounded"></span>
                </p>
              )}
            </div>
            <div className="mb-2 font-bold">{progressStep.step}</div>
            <div className="mb-2">{progressStep.information}</div>
          </div>
        ))}
    </div>
  );
}

export default ProgressBar;
