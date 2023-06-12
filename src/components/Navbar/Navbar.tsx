import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { pages } from "./pageItems";
import { originalColors } from "@/theme/palette";
import SearchInput from "../Input/SearchInput/SearchInput";

const Navbar = () => {
  return (
    <Flex flex={1} alignItems="center" flexWrap="wrap">
      <Flex>
        <Box w="5" />
        <Heading color={originalColors.white} pr={3}>
          NimbleMovies
        </Heading>
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
      </Flex>
      <Flex
        ml={{ base: 3, md: "auto" }}
        mr="20px"
        alignItems="center"
        w={{ base: "100%", sm: "auto" }}
      >
        <SearchInput />
      </Flex>
    </Flex>
  );
};

export default Navbar;
