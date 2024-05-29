function QuillForm() {
  return (
    <form className="quill-form">
      <div className="initial-email flex container border mt-5">
        <div className="flex items-center gap-5">
          <div
            className="mail-icon flex justify-center items-center border rounded-lg"
            style={{ border: "1px solid var(--form-border)" }}
          >
            <img src="images/mail-icon.jpg" alt="mail-icon" />
          </div>
          <input
            type="text"
            className="initialEmail-input text-lg font-semibold leading-7 border-none focus:outline-none"
            placeholder="Initial email"
          />
        </div>
      </div>
      <div className="subject-input flex container border h-50">
        <input
          type="text"
          className="text-md leading-7 border-none focus:outline-none w-full"
          style={{ color: "var(--subject-color)" }}
          placeholder="Subject"
        />
      </div>
      <div className="text-input container border">
        <div className="toolbars mt-4 flex-wrap gap-5 flex items-center justify-start">
          <img src="images/bold-icon.png" alt="bold-icon" />
          <img src="images/italic-icon.png" alt="italic icon" />
          <img src="images/upperLetter-icon.png" alt="upper letters" />
          <img src="images/lowerLetter-icon.png" alt="lower letters" />
          <img src="images/blockquote.png" alt="block quote" />
          <img src="images/image-icon.png" alt="image icon" />
          <img src="images/bullet-icon.png" alt="bullets list" />
          <img src="images/ordered-icon.png" alt="order list" />
        </div>
        <textarea
          className="textarea-input resize-none overflow-hidden container p-0 mt-4 focus:outline-none"
          type="text"
        />
      </div>
    </form>
  );
}

export default QuillForm;
