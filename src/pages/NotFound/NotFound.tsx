import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, ScaleFade } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  const goBack = () => navigate("/", { replace: true });

  return (
    <Flex flex={1} h="100%" justifyContent="center" alignItems="center">
      <ScaleFade initialScale={0.1} in={show}>
        <Flex flexDir="column">
          <Heading>404 - Page Not Found!</Heading>
          <Button w="100%" mt="5" onClick={goBack}>
            Go Back
          </Button>
        </Flex>
      </ScaleFade>
    </Flex>
  );
};

export default NotFoundPage;
