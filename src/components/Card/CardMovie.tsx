import { StarIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Card,
  CardBody,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

type CardMovieProps = {
  title: string;
  image: string;
  year: string;
  voteAverage?: number;
};

const CardMovie = ({ title, image, year, voteAverage }: CardMovieProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      maxW="240px"
      variant="elevated"
      borderRadius={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(true)}
    >
      <CardBody>
        <AspectRatio maxW="240px" maxH="312px" ratio={2 / 3}>
          <Image
            src={image}
            alt="Image"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          />
        </AspectRatio>
        <Stack m={2} spacing="3">
          <Divider />
          <Heading size="sm" noOfLines={1}>
            {title}
          </Heading>
          <HStack>
            <Text>{year}</Text>
            <StarIcon color="yellow.400" boxSize={5} />
            <Text mt="1" fontWeight="bold">
              {voteAverage} / 10
            </Text>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardMovie;
