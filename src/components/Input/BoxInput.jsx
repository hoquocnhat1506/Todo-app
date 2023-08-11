import React from "react";
import "./Input.css";

const BoxInput = ({
  inputValue,
  onInputChange,
  onSubmit,
  submittedValues,
  onItemClick,
}) => {
  const handleClick = (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="add details"
          value={inputValue}
          onChange={onInputChange}
        />
        <button type="submit">
          <div>Add</div>
        </button>
      </form>
      <ul>
        {submittedValues.map((value, index) => (
          <label key={index}>
            <input type="checkbox"></input>
            <p onClick={handleClick}>
              <li key={index}>{value}</li>
            </p>
          </label>
        ))}
      </ul>
    </div>
  );
};

export default BoxInput;
