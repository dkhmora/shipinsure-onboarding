import React from "react";
import SelectItem from "./SelectItem";
import "./Form.css";

export default function Select({ items, selectedIndex, onClick }) {
  return (
    <div>
      {items.map((item, index) => (
        <SelectItem
          value={item}
          index={index}
          key={`${item}${index}`}
          selected={selectedIndex === index}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
