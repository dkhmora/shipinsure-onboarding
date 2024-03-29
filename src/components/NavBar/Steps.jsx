import React from "react";
import RadioIcon from "../../assets/icons/Radio.svg";
import CheckIcon from "../../assets/icons/Check.svg";

export default function Steps({ steps, selectedStepTitle }) {
  return (
    <div className="steps-container">
      {steps.map(({ title, required, completed }, index) => (
        <div className="step-text-container" key={title}>
          {completed ? (
            <img src={CheckIcon} className="step-icon" alt="radio" />
          ) : (
            <img src={RadioIcon} className="step-icon" alt="radio" />
          )}

          <p
            className={
              completed
                ? "completed-step-text"
                : selectedStepTitle === title
                ? "selected-step-text"
                : "default-step-text"
            }
          >
            {title}
          </p>

          {required ? <p className="required-step-text">Required</p> : null}
        </div>
      ))}
    </div>
  );
}
