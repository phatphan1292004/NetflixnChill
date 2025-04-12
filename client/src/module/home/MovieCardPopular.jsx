import { useState, useRef } from "react";
import HoverCardPreview from "./HoverCardPreview";

const MovieCardPopular = ({ title, image, year, duration, rating, height }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const cardRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const shouldAlignRight = rect.left + 700 > viewportWidth; // preview rộng ~500px
        setAlignRight(shouldAlignRight);
      }
      setShowPreview(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowPreview(false);
    }, 200); // delay ẩn để tránh giật khi rê chuột qua lại nhanh
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Movie Card */}
      <div className="p-3 rounded-lg transition text-white cursor-pointer">
        <img
          src={image}
          alt={title}
          className={`rounded-lg mb-4 object-cover w-full ${
            height || "h-auto"
          }`}
        />
        <h3 className="text-lg font-medium truncate">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
          <span>{year}</span>
          <span>{duration}</span>
          <span>{rating}</span>
        </div>
      </div>

      {/* HoverCard Preview */}
      <HoverCardPreview
        alignRight={alignRight}
        showPreview={showPreview}
        videoSrc="/banner.mp4"
        title={title}
        year={year}
        duration={duration}
        rating={rating}
        genres={["Action", "Crime", "Thriller"]}
      />
    </div>
  );
};

export default MovieCardPopular;
