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

  const { storeName, fullName, email, storeUrl } = formData;

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

        <button className="main-button" type="submit">
          Confirm
        </button>
      </form>
    </section>
  );
}
