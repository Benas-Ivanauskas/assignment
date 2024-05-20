import { FaPhoneVolume } from "react-icons/fa";

function FormPhone({ phoneNumber, setPhoneNumber }) {
  return (
    <form className="phone-form">
      <div className="flex container border mt-5 py-3 rounded-lg">
        <div className="flex items-center gap-5">
          <div
            className="mail-icon flex justify-center items-center border"
            style={{ border: "1px solid var(--form-border)" }}
          >
            <FaPhoneVolume />
          </div>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="number"
            className="phone-input text-lg font-semibold leading-7 focus:outline-none"
            placeholder="Phone: +1 (234) 567"
          />
        </div>
      </div>
    </form>
  );
}

export default FormPhone;
