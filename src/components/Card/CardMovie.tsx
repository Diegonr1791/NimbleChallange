import { originalColors } from "@/theme/palette";
import {
  AspectRatio,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

type CardMovieProps = {
  title: string;
  image: string;
  year: string;
};

const CardMovie = ({ title, image, year }: CardMovieProps) => {
  return (
    <Card maxW="240px" variant="elevated" borderRadius={0}>
      <CardBody>
        <AspectRatio maxW="240px" maxH="312px" ratio={1}>
          <Image src={image} alt="Image" objectFit="contain"/>
        </AspectRatio>
        <Stack m={2} spacing="3">
          <Divider />
          <Heading size="sm" noOfLines={1}>
            {title}
          </Heading>
          <Text>{year}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardMovie;
