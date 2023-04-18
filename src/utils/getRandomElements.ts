export const getRandomElements = (array: any, numElement: number) => {
  return [...array]
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, numElement);
};
