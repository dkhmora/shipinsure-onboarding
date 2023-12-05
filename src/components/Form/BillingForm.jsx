import React, { useState } from "react";
import PlaidIcon from "../../assets/icons/PlaidLogo.svg";
import "./Form.css";
import TextInput from "./TextInput";
import PaymentMethodIcons from "./PaymentMethodIcons";
import QuestionIcon from "../../assets/icons/Question.svg";

export default function BillingForm({ stepTitle, onSubmit }) {
  const [formData, setFormData] = useState({
    billingDetails: {
      cardNumber: "",
      expiration: "",
      cvc: "",
      country: "",
      zipCode: "",
    },
  });

  const {
    billingDetails: { cardNumber, expiration, cvc, country, zipCode },
  } = formData;

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      billingDetails: { ...prevData.billingDetails, [fieldName]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(stepTitle, formData);
  };

  const validateForm = () => {
    const errors = {};

    // Basic required validation
    if (!cardNumber.trim()) {
      errors.cardNumber = "Card Number is required";
    }

    if (!expiration.trim()) {
      errors.expiration = "Expiration is required";
    }

    if (!cvc.trim()) {
      errors.cvc = "CVC is required";
    }

    if (!country.trim()) {
      errors.country = "Country is required";
    }

    if (!zipCode.trim()) {
      errors.zipCode = "Zip Code is required";
    }

    return errors;
  };

  const errors = validateForm();
  const formValid = Object.keys(errors).length === 0;

  return (
    <section className="form-container">
      <div className="form-title-container">
        <h1 className="form-title-text">
          ShipInsure is free, here is how it works
        </h1>
        <img src={QuestionIcon} className="question-icon" alt="question" />
      </div>

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
            value={cardNumber}
            placeholder="1111 2222 3333 4444"
            onChange={(value) => handleInputChange("cardNumber", value)}
            textInputClassName="text-input"
            hasError={errors.email}
            postpend={<PaymentMethodIcons />}
          />

          <div className="multi-column-input-container">
            <TextInput
              label="Expiration"
              value={expiration}
              placeholder="MM/YY"
              onChange={(value) => handleInputChange("expiration", value)}
              textInputClassName="text-input"
              hasError={errors.email}
              style={{ flexShrink: 1 }}
            />
            <TextInput
              label="CVC"
              value={cvc}
              placeholder="123"
              onChange={(value) => handleInputChange("cvc", value)}
              required
              textInputClassName="text-input"
              hasError={errors.email}
              style={{ flexShrink: 1 }}
            />
          </div>

          <div className="multi-column-input-container">
            <TextInput
              label="Country"
              value={country}
              placeholder="USA"
              onChange={(value) => handleInputChange("country", value)}
              required
              textInputClassName="text-input"
              hasError={errors.email}
              style={{ flexShrink: 1 }}
            />
            <TextInput
              label="Zip Code"
              value={zipCode}
              placeholder="123456"
              onChange={(value) => handleInputChange("zipCode", value)}
              required
              textInputClassName="text-input"
              hasError={errors.email}
              style={{ flexShrink: 1 }}
            />
          </div>
        </section>

        <button
          className={`form-submit-button ${
            !formValid ? "disabled-form-submit-button" : ""
          }`}
          type="submit"
          disabled={!formValid}
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
