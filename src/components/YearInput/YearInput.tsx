import { Button, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { inRange } from "lodash";
import { useRef, useState } from "react";

interface YearInputProps {
  onConfirm: (value: string) => void;
  defaultValue?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  containerProps?: React.ComponentProps<typeof Flex>;
  inputProps?: React.ComponentProps<typeof Input>;
}

const YearInput = ({
  onConfirm = () => {},
  defaultValue,
  min = 1900,
  max = new Date().getFullYear() + 1,
  placeholder = "Insert a year",
  containerProps = {},
  inputProps = {
    bgColor: "white",
  },
}: YearInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = () => {
    if (
      !!inputRef.current?.value &&
      !inRange(Number(inputRef.current?.value), min, max)
    )
      return setIsInvalid(true);

    return onConfirm(inputRef.current?.value || "");
  };

  return (
    <Flex alignItems="flex-start" {...containerProps}>
      <VStack flex={1}>
        <Input
          w="100%"
          isInvalid={isInvalid}
          defaultValue={defaultValue}
          placeholder={placeholder}
          ref={inputRef}
          type="number"
          step="1"
          onChange={() => setIsInvalid(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              inputRef.current?.blur();
              handleChange();
            }
          }}
          {...inputProps}
        />
        {isInvalid && (
          <Text fontSize="sm" color="red.500">
            Insert a valid year
          </Text>
        )}
      </VStack>
    </Flex>
  );
};

export default YearInput;
