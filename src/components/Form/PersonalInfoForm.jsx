import React from "react";
import "./Container.css";
import TextInput from "./TextInput";

export default function PersonalInfoForm() {
  const handleClickUpdate = (e, label) => {
    console.log(e);
  };

  return (
    <section class="form-container">
      <h1 className="form-title-text">Welcome, {"{NAME}"}!</h1>

      <p className="form-subtitle-text">
        Let's make this easy--Please verify the information below is correct.
      </p>

      <section className="form-inputs-container">
        <section className="form-inputs-section">
          <TextInput
            label="Store Name"
            required
            textInputClassName="grey-text-input"
          />

          <TextInput
            label="Full Name"
            required
            textInputClassName="grey-text-input"
          />

          <TextInput
            label="Email Address"
            required
            textInputClassName="text-input"
            onClickUpdate={handleClickUpdate}
          />

          <TextInput
            label="Store URL"
            required
            textInputClassName="text-input"
            onClickUpdate={handleClickUpdate}
          />
        </section>

        <button className="main-button">Confirm</button>
      </section>
    </section>
  );
}
