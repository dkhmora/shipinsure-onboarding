import React from "react";
import RadioIcon from "../../assets/icons/Radio.svg";
import CheckIcon from "../../assets/icons/Check.svg";
import { onboardingSteps } from "../../constants";

export default function Steps() {
  return (
    <div class="steps-container">
      {onboardingSteps.map(({ title, required, completed }, index) => (
        <div class="step-text-container">
          {completed ? (
            <img src={CheckIcon} class="step-icon" alt="radio" />
          ) : (
            <img src={RadioIcon} class="step-icon" alt="radio" />
          )}

          <div class="default-step-text">{title}</div>

          {required ? <div class="required-step-text">Required</div> : null}
        </div>
      ))}
    </div>
  );
}
