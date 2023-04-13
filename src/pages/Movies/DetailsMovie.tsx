import { Grid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const DetailsMovie = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Grid flex={1} bgColor="red">
      <Text>Details movie {id}</Text>
    </Grid>
  );
};

export default DetailsMovie;
