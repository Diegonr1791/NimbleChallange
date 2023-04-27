import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardBanner from "@/components/Card/CardBanner";
import { Grid } from "@chakra-ui/react";
import { getYear } from "@/utils/date";
import { useQuery } from "@tanstack/react-query";
import { FETCH_POPULAR_MOVIES } from "@/api/constantsApi";
import getPopulars from "@/api/controllers/movies/getPopulars";
import Loading from "../Loading";
import { getRandomElements } from "@/utils/getRandomElements";

type MulticarouselProps = {
  onClickDetail: (id: number) => void;
};

const MultiCarousel = ({ onClickDetail }: MulticarouselProps) => {
  const { data, isLoading } = useQuery([FETCH_POPULAR_MOVIES], getPopulars);
  const movies = data && getRandomElements(data, 4);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (isLoading) return <Loading />;

  return (
    <Grid flex={1}>
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots
        slidesToSlide={1}
        infinite
        autoPlay
      >
        {movies &&
          movies.map((movie, index: number) => {
            return (
              <CardBanner
                key={index}
                onClickDetail={() => onClickDetail(movie.id)}
                title={movie?.title}
                description={movie?.overview}
                banner={movie?.bannerPath}
                year={getYear(movie?.releaseDate)}
              />
            );
          })}
      </Carousel>
    </Grid>
  );
};

export default MultiCarousel;
