import React from "react";

const MovieCastCrew = ({ cast, crew }) => (
  <div className="text-sm">
    <p className="mb-2">
      <span className="font-semibold text-white">Cast:</span> {cast}
    </p>
    <p>
      <span className="font-semibold text-white">Crew:</span> {crew}
    </p>
  </div>
);

export default MovieCastCrew;
