import { originalColors } from "@/theme/palette";
import { As, HStack, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { isAbsolute } from "path";
import { memo, useState } from "react";

type TChipProps = {
  item: string;
  icon: As | undefined;
  size: string;
  onClick: () => void;
  isActive: boolean;
};
const Chip = ({ item, icon, size, onClick, isActive = false }: TChipProps) => {
  return (
    <HStack spacing={4}>
      <Tag
        size={size}
        key={size}
        variant="solid"
        bgColor={originalColors.violet}
        fontWeight="normal"
        onClick={onClick}
        cursor="pointer"
      >
        {isActive && <TagLeftIcon boxSize="12px" as={icon} />}

        <TagLabel>{item}</TagLabel>
      </Tag>
    </HStack>
  );
};

export default memo(Chip);
