import { Box, Flex, Link } from "@chakra-ui/react";
import { pages } from "./pageItems";
import { originalColors } from "@/theme/palette";
import SearchInput from "../Imput/SearchImput/SearchInput";

const Navbar = () => {
  const onChangeSearch = (search: string) => {
    console.log("search");
  };
  return (
    <Flex flex={1} alignItems="center" pl={5}>
      <Box>
        {pages.map((page, index) => {
          const isActive = location.pathname === page.path;
          return (
            <Link
              key={index}
              p={3}
              href={page.path}
              color={originalColors.white}
              _hover={{ textDecoration: "none" }}
            >
              {page.name}
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
