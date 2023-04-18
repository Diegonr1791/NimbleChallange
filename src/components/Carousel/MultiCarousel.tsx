import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardBanner from "@/components/Card/CardBanner";
import { Grid } from "@chakra-ui/react";
import { TApiData } from "@/api/controllers/movies/adapters/formatPopularsMovies";
import { getYear } from "@/utils/date";

type MulticarouselProps = {
  data: TApiData;
  onClickDetail: (id: number) => void;
};

const MultiCarousel = ({ data, onClickDetail }: MulticarouselProps) => {
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
        infinite
        autoPlay
      >
        {data.map((movie, index: number) => {
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
