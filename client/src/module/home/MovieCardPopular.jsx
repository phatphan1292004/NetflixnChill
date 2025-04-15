import { useState, useRef } from "react";
import HoverCardPreview from "./HoverCardPreview";

const MovieCardPopular = ({  duration, rating, height, movie }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const cardRef = useRef(null);
  const timeoutRef = useRef(null);
  console.log(movie);
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
      <div className="p-3 text-white transition rounded-lg cursor-pointer">
        <img
         src={movie.thumb_url?.includes("https://img.phimapi.com/")
                                ? movie.thumb_url
                                : `https://img.phimapi.com/${movie.thumb_url}`
                        }
                                            alt={movie.name}
          
          className={`rounded-lg mb-4 object-cover w-full ${
            height || "h-auto"
          }`}
        />
        <h3 className="text-lg font-medium truncate">{movie.name}</h3>
        <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
          <span>{movie.year}</span>
          <span>{duration}</span>
          <span>{rating}</span>
        </div>
      </div>

      {/* HoverCard Preview */}
      <HoverCardPreview
        alignRight={alignRight}
        showPreview={showPreview}
        movie={movie}
        duration={duration}
        rating={rating}
      />
    </div>
  );
};

export default MovieCardPopular;
