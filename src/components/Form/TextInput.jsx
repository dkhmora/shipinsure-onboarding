import React from "react";
import "./Form.css";

export default function TextInput({
  label,
  value,
  onChange,
  placeholder,
  required,
  onClickUpdate,
  textInputClassName,
  hasError,
  postpend,
  style,
}) {
  return (
    <section className="main-text-input-container" style={style}>
      <p className="text-input-label">
        {label}
        {required ? <span className="required-asterisk">*</span> : null}
      </p>

      <div className="text-input-container">
        <input
          type="text"
          className={textInputClassName}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />

        {onClickUpdate ? (
          <button
            className={`text-input-update-button ${
              hasError ? "disabled-update-button-text" : ""
            }`}
            disabled={hasError}
            onClick={(e) => onClickUpdate(e, label)}
          >
            <span className="update-button-text">update</span>
          </button>
        ) : null}

        <div className="text-input-postpend-container">{postpend}</div>
      </div>
    </section>
  );
}
