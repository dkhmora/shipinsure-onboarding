import React from "react";
import "./Container.css";

export default function TextInput({
  label,
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <section className="text-input-container">
      <p className="text-input-label">
        {label}
        {required ? <span className="required-asterisk">*</span> : null}
      </p>

      <input
        type="text"
        className="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </section>
  );
}
