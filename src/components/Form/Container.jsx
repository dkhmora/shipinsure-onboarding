import React from "react";
import "./Form.css";
import PersonalInfoForm from "./PersonalInfoForm";
import ReviewSection from "./ReviewSection";
import MonthlyOrdersForm from "./MonthlyOrdersForm";
import BillingForm from "./BillingForm";

export default function Container({ steps, onSubmit }) {
  const renderForm = () => {
    const firstFalseCompletedIndex = steps.findIndex((step) => !step.completed);
    const formTitle = steps[firstFalseCompletedIndex].title;

    switch (formTitle) {
      case "Personal Info":
        return <PersonalInfoForm stepTitle={formTitle} onSubmit={onSubmit} />;
      case "Monthly Orders":
        return <MonthlyOrdersForm stepTitle={formTitle} onSubmit={onSubmit} />;
      case "Billing":
        return <BillingForm stepTitle={formTitle} onSubmit={onSubmit} />;
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
