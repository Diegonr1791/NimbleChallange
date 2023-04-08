import { Flex, Link } from "@chakra-ui/react";
import { itemsNavbar } from "./items";

const Navbar = () => {
  return (
    <Flex bgColor="red">
      {itemsNavbar.map((item, index) => {
        return <Link key={index} p={3} href="/Home">{item}</Link>;
      })}
    </Flex>
  );
};

export default Navbar;
