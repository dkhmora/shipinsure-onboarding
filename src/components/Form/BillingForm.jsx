import React, { useState } from "react";
import PlaidIcon from "../../assets/icons/PlaidLogo.svg";
import "./Form.css";

export default function BillingForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", e);
  };

  const validateForm = () => {
    return null;
  };

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
        <section className="form-inputs-section"></section>

        <button
          className={`form-submit-button ${
            !validateForm() ? "disabled-form-submit-button" : ""
          }`}
          type="submit"
          disabled={!validateForm()}
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
