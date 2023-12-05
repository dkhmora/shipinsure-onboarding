import React from "react";
import "./Container.css";
import PersonalInfoForm from "./PersonalInfoForm";
import ReviewSection from "./ReviewSection";

export default function Container() {
  return (
    <div className="main-container">
      <PersonalInfoForm />

      <ReviewSection />
    </div>
  );
}
