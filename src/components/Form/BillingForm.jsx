import React, { useState } from "react";
import PlaidIcon from "../../assets/icons/PlaidLogo.svg";
import "./Form.css";
import TextInput from "./TextInput";
import PaymentMethodIcons from "./PaymentMethodIcons";

export default function BillingForm() {
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
      <h1 className="form-title-text">
        ShipInsure is free, here is how it works
      </h1>

      <p className="form-subtitle-text">
        In order to pay claims, ShipInsure refunds the customer directly or
        completes repurchases from your store. As our widget collects premiums
        from customers during checkout, your billing info is needed for
        ShipInsure to collect those premiums every month.
      </p>

      <form className="form-inputs-container" onSubmit={handleSubmit}>
        <section className="form-inputs-section">
          <TextInput
            label="Card Number"
            value={storeName}
            placeholder="1111 2222 3333 4444"
            onChange={(value) => handleInputChange("storeName", value)}
            required
            textInputClassName="text-input"
            hasError={errors.email}
            postpend={<PaymentMethodIcons />}
          />
        </section>

        <button
          className={`form-submit-button ${
            !formValid ? "disabled-form-submit-button" : ""
          }`}
          type="submit"
          disabled={formValid}
        >
          Next
        </button>

        <p className="or-text">or</p>

        <button className="plaid-button" onClick={() => {}}>
          <img src={PlaidIcon} className="plaid-icon" alt="plaid-logo" />
        </button>

        <button className="go-back-button" onClick={(e) => {}}>
          <span className="go-back-text">Go Back</span>
        </button>
      </form>
    </section>
  );
}
