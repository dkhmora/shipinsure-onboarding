import React from "react";
import ReviewStars from "./ReviewStars";
import "./Reviews.css";

export default function ReviewSection() {
  return (
    <section>
      <ReviewStars />

      <p className="review-text">
        “In amet turpis eget donec bibendum sit congue cras. Fusce parturient
        pulvinar non a nulla dictum sit facilisi aliquet. Posuere tortor egestas
        orci vel. Ut nulla amet eget habitasse donec urna est iaculis tellus.
        Vitae morbi lorem suscipit fermentum et.”
      </p>

      <p className="review-label-text">Craig Craigford, Store Owner</p>
      <p className="review-label-text">June 2023</p>
    </section>
  );
}
