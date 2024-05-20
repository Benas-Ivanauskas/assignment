import React from "react";

const ProgressBar = () => {
  return (
    <div className="container pt-0 text-sm/[14px]">
      <div className="columnn-auto flex justify-between text-center">
        <div className="flex flex-col justify-center items-center">
          <div
            className="h-6 w-6 flex justify-center items-center rounded-xl mb-3"
            style={{
              border: "1px solid var(--purple-color)",
            }}
          >
            <img className="tick-icon" src="images/tick.png" alt="tick-png" />
          </div>
          <span className="pb-1 font-semibold leading-5">Name & Product</span>
          <span className="mb-5 descriptions">
            Provide sequence name & product
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className="h-6 w-6 flex justify-center items-center rounded-xl mb-3"
            style={{
              border: "1px solid var(--purple-color)",
            }}
          >
            <img className="dot-icon" src="images/dot.png" alt="tick-png" />
          </div>
          <span className="pb-1 font-semibold leading-5">Sequence steps</span>
          <span className="mb-5 descriptions">
            Create sequence steps for your sequence
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className="h-6 w-6 flex justify-center items-center rounded-xl mb-4"
            style={{
              border: "1px solid var(--purple-color)",
            }}
          >
            <img className="tick-icon" src="images/tick.png" alt="tick-png" />
          </div>
          <span className="pb-1 font-semibold leading-5">Summary</span>
          <span className="mb-5 descriptions">Summary of your sequence</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
