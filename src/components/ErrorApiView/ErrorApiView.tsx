import { Button, Heading, Stack } from "@chakra-ui/react";

interface ErrorApiViewProps {
  onRetry?: () => void;
}

const ErrorApiView = ({ onRetry }: ErrorApiViewProps) => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Heading color="red.500">Something went wrong...</Heading>;
      {onRetry && (
        <Stack>
          <Heading color="red.500">Wait a moment and </Heading>
          <Button colorScheme="red" onClick={onRetry}>
            Try again
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default ErrorApiView;
