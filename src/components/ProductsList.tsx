import { formatAsDollars, type ProductsResponse } from "@/utils";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

function ProductsList() {
  const { data: products } = useLoaderData() as ProductsResponse;

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatAsDollars(price);
        return (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Card>
              <CardContent className="grid grid-cols-1 gap-y-4 p-8 md:grid-cols-3">
                <img
                  src={image}
                  alt={title}
                  className="h-64 w-full transform rounded-md object-cover transition-transform duration-300 ease-out hover:scale-105 md:h-48 md:w-48"
                />
                <div>
                  <h2 className="text-xl font-semibold capitalize">{title}</h2>
                  <h4>{company}</h4>
                </div>
                <p className="text-primary font-semibold md:ml-auto">
                  {dollarsAmount}
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsList;
