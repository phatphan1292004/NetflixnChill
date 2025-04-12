import React from "react";
import RecommendItem from "./RecommendItem";

const RecommendList = ({ items }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Recommended For You</h2>
      <div className="flex gap-6 mb-8">
        {items.map((item, index) => (
          <RecommendItem
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendList;
