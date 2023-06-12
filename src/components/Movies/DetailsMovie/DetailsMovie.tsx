import { originalColors } from "@/theme/palette";
import { HStack, Heading, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { StarIcon } from "@chakra-ui/icons";

interface MovieDetailProps {
  title: string;
  releaseYear: string;
  genresNames: string;
  voteCount?: number;
  voteAverage?: number;
  popularity?: number;
  productionCompanies: string;
  overview: string;
}

const TitleMovie = styled(Heading)`
  color: white;
  padding: 0;
  margin: 0;
  font-style: italic;
`;
const ItemText = styled(Text)`
  color: white;
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const DetailsMovie = ({
  title,
  releaseYear,
  genresNames,
  voteCount,
  voteAverage,
  popularity,
  productionCompanies,
  overview,
}: MovieDetailProps) => {
  return (
    <Stack>
      <TitleMovie>{title}</TitleMovie>
      {!!releaseYear && (
        <ItemText fontWeight="bold" color={originalColors.white} fontSize="20">
          {releaseYear}
        </ItemText>
      )}
      {!!genresNames && <ItemText>{genresNames}</ItemText>}
      {!!voteCount && (
        <HStack pt={2}>
          <Icon
            as={AiFillHeart}
            color={originalColors.lightgreen}
            boxSize={5}
          />
          <ItemText>{voteCount}</ItemText>
        </HStack>
      )}
      {!!popularity && (
        <HStack>
          <Icon
            as={BsFillPeopleFill}
            color={originalColors.lightgreen}
            boxSize={5}
          />
          <ItemText>{popularity} - Popularity</ItemText>
        </HStack>
      )}
      {!!voteAverage && (
        <HStack>
          <StarIcon color={originalColors.lightgreen} boxSize={5} />
          <ItemText>{voteAverage}</ItemText>
        </HStack>
      )}
      {!!productionCompanies && (
        <VStack alignItems="flex-start" pt={5}>
          <ItemText>Production</ItemText>
          <ItemText fontStyle="italic">{productionCompanies}</ItemText>
        </VStack>
      )}
      {!!overview && (
        <VStack alignItems="flex-start" pt={5} w={{base:"50%", sm:"auto"}}>
          <ItemText>Overview</ItemText>
          <Text color={originalColors.white}>{overview}</Text>
        </VStack>
      )}
    </Stack>
  );
};

export default DetailsMovie;
