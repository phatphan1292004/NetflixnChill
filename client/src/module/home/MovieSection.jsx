import React from "react";
import ArrowLeft from "../../components/icons/ArrowLeft";
import ArrowRight from "../../components/icons/ArrowRight";
import CategoryHeading from "../../module/category/CategoryHeading";
import MovieCardPopular from "./MovieCardPopular";

const MovieSection = ({ title, movies = [], layout}) => {
  return (
    <div className="container">
      <div className="flex items-center justify-between w-full mt-20">
        <CategoryHeading className="text-2xl font-semibold">
          {title}
        </CategoryHeading>
        <div className="flex items-center gap-5">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
      <div className={`grid gap-6 mt-3 relative z-0 ${layout || "xl:grid-cols-5"}`}>
        {movies.map((movie, index) => (
          <MovieCardPopular key={index}  movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
