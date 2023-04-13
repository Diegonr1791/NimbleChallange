import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useNavigateToMovieDetails = () => {
  const navigate = useNavigate();

  const navigateToMovieDetails = useCallback(
    (id: number) => {
      navigate(`/detail/${id}`);
    },
    [navigate]
  );

  return navigateToMovieDetails;
};

export default useNavigateToMovieDetails;
