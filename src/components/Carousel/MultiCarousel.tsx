import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardPopulars from "@/components/Card/CardPopulars";
import { Grid, Stack, Text, Flex } from "@chakra-ui/react";
import { TApiData } from "@/api/controllers/movies/adapters/formatPopularsMovies";
import { getYear } from "@/utils/date";
import { log } from "console";

type MulticarouselProps = {
  data: TApiData;
};

const MultiCarousel = ({ data }: MulticarouselProps) => {
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

  return (
    <Grid flex={1}>
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots
        slidesToSlide={1}
        renderDotsOutside
        infinite
      >
        {data.map((movie, index: number) => {
          return (
            <CardPopulars
              key={index}
              idMovie={movie.id}
              title={movie?.title}
              description={movie?.overview}
              banner={movie?.posterPath}
              year={getYear(movie?.releaseDate)}
            />
          );
        })}
      </Carousel>
    </Grid>
  );
};

export default MultiCarousel;
