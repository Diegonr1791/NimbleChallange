import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";

interface SearchInputProps {
  setValue: (value: string) => void;
  containerProps?: React.ComponentProps<typeof HStack>;
  inputProps?: React.ComponentProps<typeof Input>;
}

const SearchInput = ({
  setValue,
  containerProps = {},
  inputProps = {
    placeholder: "Search",
    backgroundColor: "white",
    borderRadius:"3px"
  },
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    return setValue(inputRef.current?.value || "");
  };

  return (
    <HStack {...containerProps}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          {...inputProps}
          ref={inputRef}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleChange();
            }
          }}
        />
      </InputGroup>
    </HStack>
  );
};

export default SearchInput;
