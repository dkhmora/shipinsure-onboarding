import "./App.css";
import SideBar from "./components/NavBar/SideBar";
import FormContainer from "./components/Form/Container";
import { useState } from "react";
import { onboardingSteps } from "./constants";

function App() {
  const [steps, setSteps] = useState(onboardingSteps);

  const handleFormSubmit = (stepTitle, formData) => {
    const stepTitleIndex = steps.findIndex((step) => step.title === stepTitle);

    setSteps((prevVal) => {
      const curr = [...prevVal];

      curr[stepTitleIndex] = { ...curr[stepTitleIndex], completed: true };

      return curr;
    });
  };

  return (
    <div className="App">
      <SideBar steps={steps} />

      <FormContainer steps={steps} onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
