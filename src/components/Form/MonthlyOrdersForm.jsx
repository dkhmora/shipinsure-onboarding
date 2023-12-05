import React, { useState } from "react";
import "./Form.css";
import Select from "./Select";
import { numberOfOrdersSelection } from "../../constants";

export default function MonthlyOrdersForm() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleInputChange = (value) => {
    setSelectedIndex(() => value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", numberOfOrdersSelection[selectedIndex]);
  };

  const validateForm = () => {
    return selectedIndex !== null;
  };

  return (
    <section class="form-container">
      <h1 className="form-title-text">Tell us a bit about your store!</h1>

      <p className="form-subtitle-text">
        We’d love to hear more about your Shopify experience. On average, how
        many orders do you typically receive each month?
      </p>

      <form className="form-inputs-container" onSubmit={handleSubmit}>
        <section className="form-inputs-section">
          <Select
            items={numberOfOrdersSelection}
            selectedIndex={selectedIndex}
            onClick={handleInputChange}
          />
        </section>

        <button
          className={`form-submit-button ${
            !validateForm() ? "disabled-form-submit-button" : ""
          }`}
          type="submit"
          disabled={!validateForm()}
        >
          Next
        </button>
      </form>
    </section>
  );
}
