import React from "react";
import "../styles/Category.css";

const Category = ({ imageSrc, label }) => {
  return (
    <div className="category">
      <img src={imageSrc} alt={label} />
      <p>{label}</p>
    </div>
  );
};

export default Category;
