import React from "react";
import "../styles/Category.css";

const Category = ({ imageSrc, categoryName }) => {
  return (
    <div className="category">
      <img src={imageSrc} alt={categoryName} />
      <p>{categoryName}</p>
    </div>
  );
};
export default Category;
