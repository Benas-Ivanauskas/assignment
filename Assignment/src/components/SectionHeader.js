function SectionHeader() {
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
        <button className="btn btn--previous">Previous</button>
        <button className="btn btn--next text-white">Next</button>
      </div>
    </div>
  );
}

export default SectionHeader;
