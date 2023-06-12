import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const RatingFilterIcon = ({ iconsCount }: { iconsCount: number }) => {
  let arrayIcons = new Array();
  for (let index = 0; index < iconsCount; index++) {
    arrayIcons.push(<StarIcon key={index} color="yellow.400" boxSize={5} />);
  }
  return <Box>{arrayIcons}</Box>;
};

export default RatingFilterIcon;
