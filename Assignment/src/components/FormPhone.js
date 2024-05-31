import { FaPhoneVolume } from "react-icons/fa";

function FormPhone({ phoneNumber, setPhoneNumber }) {
  return (
    <form>
      <div className="flex container border mt-5 py-3 rounded-lg  border-formBorder">
        <div className="flex items-center gap-5">
          <div className="mail-icon flex justify-center items-center border-b-1 border-formBorder">
            <FaPhoneVolume />
          </div>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="number"
            className=" w-full text-sm sm:w-36 sm:text-base  font-semibold leading-7 focus:outline-none"
            placeholder="Phone: +1 (234) 567"
          />
        </div>
      </div>
    </form>
  );
}

export default FormPhone;
