import React, { useState } from "react";
import TextInput from "./TextInput";
import "./Form.css";

export default function MonthlyOrdersForm() {
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
    } else if (!email.includes("@")) {
      errors.email = "Invalid email format";
    }

    if (!storeUrl.trim()) {
      errors.storeUrl = "Store URL is required";
    }

    return errors;
  };

  const errors = validateForm();
  const formValid = Object.keys(errors).length === 0;

  return (
    <section class="form-container">
      <h1 className="form-title-text">Tell us a bit about your store!</h1>

      <p className="form-subtitle-text">
        We’d love to hear more about your Shopify experience. On average, how
        many orders do you typically receive each month?
      </p>

      <form className="form-inputs-container" onSubmit={handleSubmit}>
        <section className="form-inputs-section"></section>

        <button
          className={`form-submit-button ${
            !formValid ? "disabled-form-submit-button" : ""
          }`}
          type="submit"
          disabled={formValid}
        >
          Next
        </button>
      </form>
    </section>
  );
}
