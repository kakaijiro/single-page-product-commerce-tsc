import { Hero, FeaturedProducts } from "@/components";
import { type LoaderFunction } from "react-router-dom";
import { customFetch, type ProductsResponse } from "@/utils";

const url: string = "/products?featured=true";

// Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};

function Landing() {
  // const result = useLoaderData() as ProductsResponse; // use this hook where we need

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
export default Landing;
