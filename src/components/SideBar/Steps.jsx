import React from "react";
import RadioIcon from "../../assets/icons/Radio.svg";
import CheckIcon from "../../assets/icons/Check.svg";

export default function Steps({ steps }) {
  return (
    <div className="steps-container">
      {steps.map(({ title, required, completed }, index) => (
        <div className="step-text-container">
          {completed ? (
            <img src={CheckIcon} className="step-icon" alt="radio" />
          ) : (
            <img src={RadioIcon} className="step-icon" alt="radio" />
          )}

          <p className="default-step-text">{title}</p>

          {required ? <p className="required-step-text">Required</p> : null}
        </div>
      ))}
    </div>
  );
}
