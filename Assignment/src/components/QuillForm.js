function QuillForm() {
  return (
    <form>
      <div className="initial-email flex container border mt-5 border-formBorder">
        <div className="flex items-center gap-5">
          <div className="w-10 h-10 flex justify-center items-center border rounded-lg border-formBorder">
            <img
              className="w-4 h-3"
              src="images/mail-icon.jpg"
              alt="mail-icon"
            />
          </div>
          <input
            type="text"
            className="w-full sm:w-36 text-lg font-semibold leading-7 border-none focus:outline-none"
            placeholder="Initial email"
          />
        </div>
      </div>
      <div className="h-12 border-b-0 flex container border h-50 border-formBorder">
        <input
          type="text"
          className="text-md leading-7 border-none focus:outline-none w-full text-subColor"
          placeholder="Subject"
        />
      </div>
      <div className="h-56 text-input container border border-formBorder">
        <div className="max-w-80 h-8 mt-4 flex-wrap gap-5 flex items-center justify-start">
          <img
            src="images/bold-icon.png"
            alt="bold-icon"
            className="cursor-pointer"
          />
          <img
            src="images/italic-icon.png"
            alt="italic icon"
            className="cursor-pointer"
          />
          <img
            src="images/upperLetter-icon.png"
            alt="upper letters"
            className="cursor-pointer"
          />
          <img
            src="images/lowerLetter-icon.png"
            alt="lower letters"
            className="cursor-pointer"
          />
          <img
            src="images/blockquote.png"
            alt="block quote"
            className="cursor-pointer"
          />
          <img
            src="images/image-icon.png"
            alt="image icon"
            className="cursor-pointer"
          />
          <img
            src="images/bullet-icon.png"
            alt="bullets list"
            className="cursor-pointer"
          />
          <img
            src="images/ordered-icon.png"
            alt="order list"
            className="cursor-pointer"
          />
        </div>
        <textarea
          className="h-36 resize-none overflow-hidden container p-0 mt-4 focus:outline-none"
          type="text"
        />
      </div>
    </form>
  );
}

export default QuillForm;
