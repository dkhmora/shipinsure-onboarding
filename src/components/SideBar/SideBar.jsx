import React from "react";
import "./SideBar.css";
import Header from "./Header";
import Steps from "./Steps";
import HelpButton from "./HelpButton";

export default function SideBar({ steps }) {
  const firstFalseCompletedIndex = steps.findIndex((step) => !step.completed);
  const selectedStepTitle =
    firstFalseCompletedIndex >= 0
      ? steps[firstFalseCompletedIndex].title
      : "Success Page";

  return (
    <div className="sidebar-container">
      <Header steps={steps} />
      <Steps steps={steps} selectedStepTitle={selectedStepTitle} />
      <HelpButton />
    </div>
  );
}
