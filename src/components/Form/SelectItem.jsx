import React from "react";
import RectangleIcon from "../../assets/icons/Rectangle.svg";
import RectangleCheckIcon from "../../assets/icons/RectangleCheck.svg";
import "./Form.css";

export default function SelectItem({ value, index, selected, onClick }) {
  return (
    <div
      className={`select-item-container ${
        selected ? "select-item-selected" : ""
      }`}
      onClick={() => onClick(index)}
    >
      {selected ? (
        <img
          src={RectangleCheckIcon}
          className="select-item-icon"
          alt="rectangle-icon"
        />
      ) : (
        <img
          src={RectangleIcon}
          className="select-item-icon"
          alt="rectangle-icon"
        />
      )}

      <p className="select-item-text">{value}</p>
    </div>
  );
}
