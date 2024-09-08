import React from "react";

const CategoryButton = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`category-button ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
