import React from "react";
import "./Container.css";
import TextInput from "./TextInput";
import ReviewSection from "./ReviewSection";

export default function PersonalInfoForm() {
  return (
    <section class="form-container">
      <h1 className="form-title-text">Welcome, {"{NAME}"}!</h1>

      <p className="form-subtitle-text">
        Let's make this easy--Please verify the information below is correct.
      </p>

      <section className="form-inputs-container">
        <section className="form-inputs-section">
          <TextInput label="Store Name" required />

          <TextInput label="Full Name" required />

          <TextInput label="Email address" required />

          <TextInput label="Store URL" required />
        </section>

        <button className="main-button">Confirm</button>
      </section>

      <ReviewSection />
    </section>
  );
}
