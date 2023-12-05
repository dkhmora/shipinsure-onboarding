import React, { useState } from "react";
import "./Form.css";
import TextInput from "./TextInput";

export default function PersonalInfoForm({ stepTitle, onSubmit }) {
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
    onSubmit(stepTitle, formData);
  };

  const validateForm = () => {
    const errors = {};

    // Basic required validation
    if (!storeName.trim()) {
      errors.storeName = "Store Name is required";
    }

    if (!fullName.trim()) {
      errors.fullName = "Full Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!storeUrl.trim()) {
      errors.storeUrl = "Store URL is required";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(storeUrl)) {
      errors.storeUrl = "Invalid URL format";
    }

    return errors;
  };

  const errors = validateForm();
  const formValid = Object.keys(errors).length === 0;

  return (
    <section className="form-container">
      <div className="form-title-description-container">
        <h1 className="form-title-text">Welcome, {"{NAME}"}!</h1>

        <p className="form-subtitle-text">
          Let's make this easy--Please verify the information below is correct.
        </p>
      </div>

      <form className="form-inputs-container" onSubmit={handleSubmit}>
        <section className="form-inputs-section">
          <TextInput
            label="Store Name"
            value={storeName}
            onChange={(value) => handleInputChange("storeName", value)}
            required
            textInputClassName="grey-text-input"
            hasError={errors.email}
          />

          <TextInput
            label="Full Name"
            value={fullName}
            onChange={(value) => handleInputChange("fullName", value)}
            required
            textInputClassName="grey-text-input"
            hasError={errors.fullName}
          />

          <TextInput
            label="Email Address"
            value={email}
            onChange={(value) => handleInputChange("email", value)}
            required
            textInputClassName="text-input"
            onClickUpdate={handleClickUpdate}
            hasError={errors.email}
          />

          <TextInput
            label="Store URL"
            value={storeUrl}
            onChange={(value) => handleInputChange("storeUrl", value)}
            required
            textInputClassName="text-input"
            onClickUpdate={handleClickUpdate}
            hasError={errors.storeUrl}
          />
        </section>

        <button
          className={`form-submit-button ${
            !formValid ? "disabled-form-submit-button" : ""
          }`}
          type="submit"
          disabled={!formValid}
        >
          Confirm
        </button>
      </form>
    </section>
  );
}
