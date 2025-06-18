import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { formatAsDollars, type ProductsResponse } from "@/utils";

function ProductsGrid() {
  const { data: products } = useLoaderData() as ProductsResponse;
  return (
    // product gird
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmout = formatAsDollars(price);
        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card>
              <CardContent className="p-4">
                <img
                  src={image}
                  alt={title}
                  className="tranform h-64 w-full rounded-md object-cover transition-transform duration-300 ease-out hover:scale-105 md:h-48"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold capitalize">{title}</h2>
                  <p className="text-primary mt-2 font-light">{dollarsAmout}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
