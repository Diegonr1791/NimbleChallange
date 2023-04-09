import { Box, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { originalColors } from "@/theme/palette";

const Header = () => {
  return (
    <Grid >
      <Flex flex={1}>
        <Box w="20" />
        <Heading color={originalColors.white}>NimbleMovies</Heading>
        <Navbar/>
      </Flex>
      <Divider />
    </Grid>
  );
};

export default Header;
