import { Box, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Grid >
      <Flex alignItems="center" h="84px" >
        <Box w="20" />
        <Heading>Catoovies</Heading>
        <Box ml="auto" mr="30px" alignItems="center">
          <Text>Perfil</Text>
        </Box>
      </Flex>
      <Divider />
    </Grid>
  );
};

export default Header;
