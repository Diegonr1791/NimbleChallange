import { Center, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center flex={1} h="100%">
      <Spinner
        h="80px"
        w="80px"
        color="#743bfe"
        thickness="7px"
        speed="0.65s"
        emptyColor="gray.200"
      />
    </Center>
  );
};

export default Loading;
