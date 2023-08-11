import React from "react";
import "./Completed.css";

function ItemCompleted({ isSelected, onClick }) {
  return (
    <div
      className={`box-list ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div id="item3">Completed</div>
    </div>
  );
}

export default ItemCompleted;
