import { originalColors } from "@/theme/palette";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TCardPopularsProps } from "./types";

const CardPopulars = ({
  idMovie,
  title,
  year,
  description,
  banner,
}: TCardPopularsProps) => {
  return (
    <Card flex={1} h="md" borderRadius="none">
      <CardBody bgImage={banner} bgSize="cover">
        <Stack flex={1} h="100%" justifyContent="flex-end">
          <Box bgColor="rgba(0, 0, 0, .6)" width="500px" p={3} borderRadius={2}>
            <Heading size="md" color={originalColors.white}>
              {`${title}(${year})`}
            </Heading>
            <Text color={originalColors.white} noOfLines={2} mt={1}>
              {description}
            </Text>
            <Button variant="solid" colorScheme="red" mt={2}>
              Details
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardPopulars;
