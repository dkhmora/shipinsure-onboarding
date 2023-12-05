import React from "react";
import "./Container.css";

export default function PersonalInfoForm() {
  return (
    <section>
      <h1 className="form-title-text">Welcome, {"{NAME}"}!</h1>

      <p className="form-subtitle-text">
        Let's make this easy--Please verify the information below is correct.
      </p>
    </section>
  );
}
