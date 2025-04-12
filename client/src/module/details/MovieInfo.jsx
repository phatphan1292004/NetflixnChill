import React from "react";
import MovieTitle from "../../components/movie/MovieTitle";
import MovieMeta from "../../components/movie/MovieMeta";
import MovieGenres from "../../components/movie/MovieGenres";
import MovieDescription from "../../components/movie/MovieDescription";
import MovieCastCrew from "../../components/movie/MovieCastCrew";

const MovieInfo = () => {
  return (
    <div>
      <MovieTitle title="Best Friend" />
      <MovieMeta
        rating="8.5"
        views="536"
        year="2020" 
        duration="2 hr 25 mins"
        type="TV-DA"
      />
      <MovieGenres genres="Drama · Romance" />
      <MovieDescription
        description="Suspendisse eu porta quam, sit amet tristique sem. Maecenas
        tincidunt finibus ipsum, eget aliquet elit scelerisque non. In
        aliquet dapibus odio, ut gravida mauris elementum sit amet. Nulla
        viverra magna eget rutrum ultrices. Vestibulum suscipit neque sed
        sem dignissim, tincidunt efficitur urna faucibus."
      />
      <MovieCastCrew
        cast="Emily Carey, Sarah Neal"
        crew="Catherine Bell, Sam Davison"
      />
    </div>
  );
};

export default MovieInfo;
