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
import { useNavigate } from "react-router-dom";

type CardMovieProps = {
  title: string;
  image: string;
  year: string;
  voteAverage?: number;
  onClick?: () => void;
};

const CardMovie = ({
  title,
  image,
  year,
  voteAverage,
  onClick,
}: CardMovieProps) => {
  return (
    <Card
      maxW="240px"
      variant="outlined"
      borderWidth="1px"
      opacity={0.7}
      borderColor="transparent"
      backgroundColor="transparent"
      color={originalColors.white}
      borderRadius={0}
      __css={{ padding: 0 }}
      _hover={{
        borderColor: originalColors.white,
        borderWidth: 0.5,
        cursor: "pointer",
        opacity: 1,
      }}
      onClick={onClick}
    >
      <CardBody>
        <AspectRatio
          maxW="240px"
          maxH="312px"
          ratio={2 / 3}
          mb={1}
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
      </CardBody>
    </Card>
  );
};

export default CardMovie;
