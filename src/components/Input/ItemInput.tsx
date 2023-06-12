import { originalColors } from "@/theme/palette";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { DEFAULT_MOVIE_IMAGE } from "@/constants/constants";

type Props = {
  title: string;
  image: string | undefined;
  handleMovieDetails: () => void;
};
const ItemInput = ({
  title,
  image = DEFAULT_MOVIE_IMAGE,
  handleMovieDetails,
}: Props) => {
  return (
    <HStack
      h="50px"
      borderColor="white"
      borderBottomWidth={1}
      borderBottomColor="gray.200"
      py={2}
      _hover={{
        bg: originalColors.violet,
      }}
      onClick={handleMovieDetails}
    >
      <Box pl={1}>
        <Image
          src={image}
          width={10}
          minW={10}
          height={10}
          minHeight={10}
          alt={`Movie-${title}`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius={3}
        />
      </Box>
      <Box>
        <Text noOfLines={1}>{title}</Text>
      </Box>
    </HStack>
  );
};

export default ItemInput;
