import { originalColors } from "@/theme/palette";
import { StarIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RATING_VALUES } from "./utils";

type RatingFilterListProps = {
  defaultValue?: number;
  onConfirm: (value: number) => void;
};

const labelStyles = {
  mt: "2",
  fontSize: "md",
  ml: "-1",
};

const RatingFilterList = ({
  defaultValue = 10,
  onConfirm = () => {},
}: RatingFilterListProps) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  const onConfirmPress = () => {
    if (!Number(sliderRef.current?.value)) return;

    onConfirm(Number(sliderRef.current?.value));
  };

  return (
    <HStack>
      <Slider
        defaultValue={defaultValue}
        min={0}
        max={10}
        step={1}
        ml={2}
        ref={sliderRef}
        onChangeEnd={onConfirmPress}
      >
        {RATING_VALUES.map((rating, index) => (
          <SliderMark
            key={index}
            value={rating}
            color="white"
            opacity={0.7}
            {...labelStyles}
            mr={3}
          >
            {rating}
          </SliderMark>
        ))}
        <SliderTrack bg="white">
          <Box bgColor={originalColors.violet} />
          <SliderFilledTrack bg={originalColors.violet} />
        </SliderTrack>
        <SliderThumb boxSize={4} />
      </Slider>
    </HStack>
  );
};

export default RatingFilterList;
