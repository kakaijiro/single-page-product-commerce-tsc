import { Form, useLoaderData, Link } from "react-router-dom";
import { Button } from "./ui/button";
import type { ProductsResponseWithParams } from "@/utils";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="grid items-center gap-x-4 gap-y-4 rounded-md border px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* search */}
      <FormInput
        label="search product"
        name="search"
        type="search"
        defaultValue={search}
      />
      {/* categories */}
      <FormSelect
        label="select category"
        name="category"
        options={meta.categories}
        defaultValue={category}
      />
      {/* companies */}
      <FormSelect
        label="select company"
        name="company"
        options={meta.companies}
        defaultValue={company}
      />
      {/* order */}
      <FormSelect
        label="order by"
        name="order"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />
      {/* price */}
      <FormRange label="price" name="price" defaultValue={price} />
      {/* shipping */}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
      />
      <Button type="submit" size="sm" className="mb-2 self-end">
        Search
      </Button>
      <Button
        type="submit"
        asChild
        size="sm"
        variant="outline"
        className="mb-2 self-end"
      >
        <Link to="/products">Reset</Link>
      </Button>
    </Form>
  );
}

export default Filters;
