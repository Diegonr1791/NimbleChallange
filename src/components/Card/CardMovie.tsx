import { StarIcon } from "@chakra-ui/icons";
import { originalColors } from "@/theme/palette";
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
import { DEFAULT_MOVIE_IMAGE } from "@/constants/constants";

type CardMovieProps = {
  title?: string;
  image?: string;
  year?: string;
  voteAverage?: number;
  onClick?: () => void;
  isFull?: boolean;
};

const CardMovie = ({
  title,
  image = DEFAULT_MOVIE_IMAGE,
  year,
  voteAverage,
  onClick,
  isFull,
}: CardMovieProps) => {
  return (
    <Card
      maxW={isFull ? "240px" : "auto"}
      variant="outlined"
      borderWidth="1px"
      opacity={isFull ? 0.7 : 1}
      borderColor="transparent"
      backgroundColor="transparent"
      color={originalColors.white}
      borderRadius={0}
      __css={{ padding: 0 }}
      _hover={{
        borderColor: originalColors.white,
        borderWidth: 0.5,
        cursor: isFull ? "pointer" : "",
        opacity: 1,
      }}
      onClick={onClick}
    >
      <CardBody>
        <AspectRatio
          maxW={isFull ? "240px" : "auto"}
          maxH={isFull ? "312px" : "auto"}
          ratio={2 / 3}
          mb={isFull ? 1 : 0}
          bgColor="red.300"
        >
          <Image
            src={image}
            alt="Image"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          />
        </AspectRatio>
        {isFull && (
          <>
            <Divider />
            <Stack m={2} spacing="3">
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
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default CardMovie;
