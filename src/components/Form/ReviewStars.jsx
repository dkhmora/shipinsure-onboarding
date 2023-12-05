import React from "react";
import StarIcon from "../../assets/icons/Star.svg";
import "./Reviews.css";

export default function ReviewStars() {
  const starIcons = [];

  for (let i = 0; i < 5; i++) {
    starIcons.push(
      <img
        key={i}
        src={StarIcon}
        className="star-icon"
        alt={`review-star-${i}`}
      />
    );
  }

  return <section>{starIcons}</section>;
}
