import { Flex, Link } from "@chakra-ui/react";
import { itemsNavbar } from "./items";

const Navbar = () => {
  return (
    <Flex flexDir="column">
      {itemsNavbar.map((item, index) => {
        return <Link key={index}>{item}</Link>;
      })}
    </Flex>
  );
};

export default Navbar;
