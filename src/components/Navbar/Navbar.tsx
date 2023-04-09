import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { itemsNavbar } from "./items";

const Navbar = () => {
  return (
    <Flex flex={1} alignItems="center" pl={5}>
      <Box>
        {itemsNavbar.map((item, index) => {
          return (
            <Link key={index} p={3} href="/Home">
              {item}
            </Link>
          );
        })}
      </Box>
      <Box ml="auto" mr="30px" alignItems="center">
        <Text>Profile</Text>
      </Box>
    </Flex>
  );
};

export default Navbar;
