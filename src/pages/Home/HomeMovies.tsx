import React from "react";
import Loading from "../../components/Loading";
import getPoulars from "../../services/movies/getPopulars";

const HomeMovies = () => {
  getPoulars();
  return (
    <div>
      <Loading />
      HomeMovies
    </div>
  );
};

export default HomeMovies;
