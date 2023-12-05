import "./App.css";
import SideBar from "./components/NavBar/SideBar";
import FormContainer from "./components/Form/Container";
import { useEffect, useState } from "react";
import { onboardingSteps } from "./constants";
import Header from "./components/NavBar/Header";

function App() {
  const [steps, setSteps] = useState(onboardingSteps);
  const [windowDimension, setWindowDimension] = useState(null);
  const [finalFormData, setFinalFormData] = useState({
    storeName: "",
    fullName: "",
    email: "",
    storeUrl: "",
    monthlyOrders: "",
    billingDetails: {
      cardNumber: "",
      expiration: "",
      cvc: "",
      country: "",
      zipCode: "",
    },
  });

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
  const firstFalseCompletedIndex = steps.findIndex((step) => !step.completed);

  const getCurrentFormTitle = () => {
    const formTitle =
      firstFalseCompletedIndex >= 0
        ? steps[firstFalseCompletedIndex].title
        : "Success Page";

    return formTitle;
  };

  const handleGoBack = () => {
    setSteps((prevVal) => {
      const curr = [...prevVal];
      curr[firstFalseCompletedIndex - 1] = {
        ...curr[firstFalseCompletedIndex - 1],
        completed: false,
      };

      return curr;
    });
  };

  const handleFormSubmit = (stepTitle, formData) => {
    const stepTitleIndex = steps.findIndex((step) => step.title === stepTitle);

    setSteps((prevVal) => {
      const curr = [...prevVal];

      curr[stepTitleIndex] = { ...curr[stepTitleIndex], completed: true };

      return curr;
    });

    setFinalFormData((prevVal) => ({ ...prevVal, ...formData }));
  };

  useEffect(() => {
    console.log(finalFormData);
  }, [finalFormData]);

  return (
    <div className="App">
      {isMobile ? <Header steps={steps} /> : <SideBar steps={steps} />}

      <FormContainer
        currentFormTitle={getCurrentFormTitle()}
        onSubmit={handleFormSubmit}
        onClickGoBack={handleGoBack}
      />
    </div>
  );
}

export default App;
