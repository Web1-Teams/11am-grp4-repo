import React from "react";
import "../styles/Category.css";

const CategoryParents = ({ imageSrc, categoryName }) => {
  return (
    <div className="category">
      <img src={imageSrc} alt={categoryName} />
      <p>{categoryName}</p>
    </div>
  );
};
export default CategoryParents;
