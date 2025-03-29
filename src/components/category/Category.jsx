import React from "react";

const Category = ({
  heading = '',
  items = [], 
}) => {
  return (
    <div className="col-span-1">
      <h4 className="font-bold text-lg mb-2 text-primary">{heading}</h4>
      <ul className="space-y-4 text-sm">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
