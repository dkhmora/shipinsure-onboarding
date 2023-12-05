import React from "react";
import RadioIcon from "../../assets/icons/Radio.svg";
import CheckIcon from "../../assets/icons/Check.svg";

export default function Steps() {
  return (
    <div class="steps-container">
      <div class="step-text-container">
        <img src={RadioIcon} class="step-icon" alt="radio" />

        <div class="selected-step-text">Personal Info</div>
      </div>

      <div class="step-text-container">
        <img src={RadioIcon} class="step-icon" alt="radio" />

        <div class="default-step-text">Monthly Orders</div>
      </div>

      <div class="step-text-container">
        <img src={RadioIcon} class="step-icon" alt="radio" />

        <div class="default-step-text">Billing</div>
      </div>
    </div>
  );
}
