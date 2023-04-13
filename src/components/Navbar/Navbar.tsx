import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { itemsNavbar } from "./items";
import { originalColors } from "@/theme/palette";
import SearchInput from "../Imput/SearchImput/SearchInput";

const Navbar = () => {
  const onChangeSearch = (search: string) => {
    console.log("search");
  };
  return (
    <Flex flex={1} alignItems="center" pl={5}>
      <Box>
        {itemsNavbar.map((item, index) => {
          return (
            <Link key={index} p={3} href="/Home" color={originalColors.white} _hover={{textDecoration:"none"}}>
              {item}
            </Link>
          );
        })}
      </Box>
      <Box ml="auto" mr="20px" alignItems="center">
        <SearchInput setValue={onChangeSearch} />
      </Box>
    </Flex>
  );
};

export default Navbar;
