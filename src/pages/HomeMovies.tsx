import React from "react";
import getPoulars from "../services/movies/getPopulars";

const HomeMovies = () => {
  getPoulars();
  return <div>HomeMovies</div>;
};

export default HomeMovies;
