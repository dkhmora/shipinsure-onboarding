import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import FormContainer from "./components/Form/Container";
import { useState } from "react";
import { onboardingSteps } from "./constants";

function App() {
  const [steps, setSteps] = useState(onboardingSteps);

  const handleFormSubmit = (stepTitle, formData) => {
    console.log(stepTitle, formData);
  };

  return (
    <div className="App">
      <SideBar steps={steps} />

      <FormContainer steps={steps} onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
