import { formatAsDollars } from "@/utils";
import { useAppDispatch } from "@/hooks";
import { Button } from "./ui/button";
import { editItem, removeItem } from "@/features/cart/cartSlice";
import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";

export function FirstColumn({
  title,
  image,
}: {
  image: string;
  title: string;
}) {
  return (
    <img
      src={image}
      alt={title}
      className="h-32 w-32 rounded-lg object-cover lg:h-24 lg:w-24"
    />
  );
}

export function SecondColumn({
  title,
  company,
  productColor,
}: {
  title: string;
  company: string;
  productColor: string;
}) {
  return (
    <div className="ml-4 w-48 lg:ml-12">
      <h3 className="font-medium capitalize">{title}</h3>
      <h4 className="mt-2 text-sm capitalize">{company}</h4>
      <p className="captalize mt-4 flex items-center gap-x-2 text-sm">
        color:{" "}
        {/* <span
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: productColor,
          }}
        ></span> */}
        <span
          className="mr-2 h-4 w-4 rounded-full"
          style={{ backgroundColor: productColor }}
          // className={`bg-[${productColor}]`} doesn't work.
        ></span>
      </p>
    </div>
  );
}

export function ThirdColumn({
  amount,
  cartID,
}: {
  amount: number;
  cartID: string;
}) {
  const dispatch = useAppDispatch();

  function removeItemFromCart() {
    dispatch(removeItem(cartID));
  }

  function setAmount(value: number) {
    dispatch(
      editItem({
        cartID,
        amount: value,
      }),
    );
  }

  return (
    <div>
      <SelectProductAmount
        amount={amount}
        setAmount={setAmount}
        mode={Mode.CartItem}
      />
      <Button variant="link" className="-ml-4" onClick={removeItemFromCart}>
        remove
      </Button>
    </div>
  );
}

export function FourthColumn({ price }: { price: string }) {
  return <p className="font-medium lg:ml-auto">{formatAsDollars(price)}</p>;
}
