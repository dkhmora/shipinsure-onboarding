import React from "react";
import "./Container.css";

export default function TextInput({
  label,
  value,
  onChange,
  placeholder,
  required,
  onClickUpdate,
}) {
  return (
    <section className="main-text-input-container">
      <p className="text-input-label">
        {label}
        {required ? <span className="required-asterisk">*</span> : null}
      </p>

      <div className="text-input-container">
        <input
          type="text"
          className="text-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />

        {onClickUpdate ? (
          <button
            className="text-input-update-button"
            onClick={(e) => onClickUpdate(e, label)}
          >
            <span className="update-button-text">update</span>
          </button>
        ) : null}
      </div>
    </section>
  );
}
