export const formatAsDollars = (price: string | number): string => {
  const dollarsAmount = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) / 100);
  return dollarsAmount;
};
