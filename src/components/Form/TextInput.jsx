import React from "react";
import "./Container.css";

export default function TextInput({ label, value, onChange, placeholder }) {
  return (
    <section className="text-input-container">
      <p className="text-input-label">{label}</p>

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
