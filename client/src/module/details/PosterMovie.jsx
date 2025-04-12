import React from "react";

const PosterMovie = ({ leftOffset, posterUrl }) => {
  return (
    <>
      <div className={`absolute bottom-0 left-[${leftOffset}] transform translate-x-[125px] translate-y-1/2 z-20 flex gap-10 items-end px-6`}>
        {/* Poster */}
        <div className="w-[500px]">
          <img
            src={posterUrl}
            alt="Movie Poster"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default PosterMovie;
