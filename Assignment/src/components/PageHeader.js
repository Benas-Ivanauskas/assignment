const PageHeader = () => {
  return (
    <div>
      <div className="flex items-center gap-5 my-5">
        <img src="images/send-arrow.png" alt="arrow send" />
        <img src="images/greater-icon.png" alt="greater icon" />
        <h3 className="text-sm/[14px] font-medium leading-5">Sequence</h3>
      </div>
      <h2 className="text-3xl weight-bold font-semibold leading-9 mb-5">
        New sequence
      </h2>
    </div>
  );
};

export default PageHeader;
