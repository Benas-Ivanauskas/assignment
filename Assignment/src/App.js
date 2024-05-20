import { useState } from "react";
import AddNewStepButton from "./components/AddNewStepButton";
import FormEmail from "./components/FormEmail";
import PageHeader from "./components/PageHeader";
import ProgressBar from "./components/ProgressBar";
import SectionHeader from "./components/SectionHeader";
import FormPhone from "./components/FormPhone";

function App() {
  const [newStep, setNewStep] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleAddingNewStep = () => {
    setNewStep(true);
  };
  return (
    <div className="container">
      <header>
        <PageHeader />
      </header>
      <section>
        {/* <ProgressBar /> */}
        <SectionHeader />
        <FormEmail />
        {newStep && (
          <FormPhone
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        )}
        <AddNewStepButton
          handleAddingNewStep={handleAddingNewStep}
          newStep={newStep}
          setNewStep={setNewStep}
        />
      </section>
    </div>
  );
}

export default App;
