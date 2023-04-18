import { Grid, Heading } from "@chakra-ui/react";

interface List<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  columns?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
}

const List = <T,>({
  items = [],
  renderItem,
  columns = {
    base: 1,
    sm: 3,
    md: 4,
    lg: 4,
    xl: 6,
  },
  gap = 3,
}: List<T>) => {
  if (!items.length) return <Heading color="white">No items found</Heading>;

  return (
    <Grid
      gridTemplateColumns={{
        base: `repeat(${columns.base}, 1fr)`,
        sm: `repeat(${columns.sm}, 1fr)`,
        md: `repeat(${columns.md}, 1fr)`,
        lg: `repeat(${columns.lg}, 1fr)`,
        xl: `repeat(${columns.xl}, 1fr)`,
      }}
      gap={gap}
    >
      {items.map((movie) => renderItem(movie))}
    </Grid>
  );
};

export default List;
