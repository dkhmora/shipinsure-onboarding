import "./App.css";
import SideBar from "./components/NavBar/SideBar";
import FormContainer from "./components/Form/Container";
import { useEffect, useState } from "react";
import { onboardingSteps } from "./constants";
import Header from "./components/NavBar/Header";

function App() {
  const [steps, setSteps] = useState(onboardingSteps);
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension && windowDimension <= 1024;

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
      {isMobile ? <Header steps={steps} /> : <SideBar steps={steps} />}

      <FormContainer steps={steps} onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
