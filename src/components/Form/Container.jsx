import React from "react";
import "./Form.css";
import PersonalInfoForm from "./PersonalInfoForm";
import ReviewSection from "./ReviewSection";
import MonthlyOrdersForm from "./MonthlyOrdersForm";

export default function Container({ steps }) {
  const renderForm = () => {
    const firstFalseCompletedIndex = steps.findIndex((step) => !step.completed);
    const formTitle = steps[firstFalseCompletedIndex].title;

    switch (formTitle) {
      case "Personal Info":
        return <PersonalInfoForm />;
      case "Monthly Orders":
        return <MonthlyOrdersForm />;
      case "Billing":
        return <PersonalInfoForm />;
      default:
        return <div>Error: Invalid User Role</div>;
    }
  };

  return (
    <div className="main-container">
      {renderForm()}

      <ReviewSection />
    </div>
  );
}
