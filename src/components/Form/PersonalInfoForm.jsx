import React, { useState } from "react";
import "./Container.css";
import TextInput from "./TextInput";

export default function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    storeName: "",
    fullName: "",
    email: "",
    storeUrl: "",
  });

  const { storeName, fullName, email, storeUrl } = formData;

  const handleClickUpdate = (e, label) => {
    console.log(e);
  };

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const validateForm = () => {
    // Basic required validation
    if (
      !storeName.trim() ||
      !fullName.trim() ||
      !email.trim() ||
      !storeUrl.trim()
    ) {
      return false;
    }

    // Simple email validation
    if (!email.includes("@")) {
      return false;
    }

    return true;
  };

  return (
    <section class="form-container">
      <h1 className="form-title-text">Welcome, {"{NAME}"}!</h1>

      <p className="form-subtitle-text">
        Let's make this easy--Please verify the information below is correct.
      </p>

      <form className="form-inputs-container" onSubmit={handleSubmit}>
        <section className="form-inputs-section">
          <TextInput
            label="Store Name"
            value={storeName}
            onChange={(value) => handleInputChange("storeName", value)}
            required
            textInputClassName="grey-text-input"
          />

          <TextInput
            label="Full Name"
            value={fullName}
            onChange={(value) => handleInputChange("fullName", value)}
            required
            textInputClassName="grey-text-input"
          />

          <TextInput
            label="Email Address"
            value={email}
            onChange={(value) => handleInputChange("email", value)}
            required
            textInputClassName="text-input"
            onClickUpdate={handleClickUpdate}
          />

          <TextInput
            label="Store URL"
            value={storeUrl}
            onChange={(value) => handleInputChange("storeUrl", value)}
            required
            textInputClassName="text-input"
            onClickUpdate={handleClickUpdate}
          />
        </section>

        <button
          className={`form-submit-button ${
            !validateForm() ? "disabled-form-submit-button" : ""
          }`}
          type="submit"
          disabled={!validateForm()}
        >
          Confirm
        </button>
      </form>
    </section>
  );
}
