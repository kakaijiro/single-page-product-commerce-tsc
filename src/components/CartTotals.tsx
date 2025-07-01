import { useAppSelector } from "@/hooks";
import { formatAsDollars } from "@/utils";
import { Card, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
    (state) => state.cartState,
  );
  return (
    <Card className="bg-muted p-8">
      <CartTotalRow label="Subtotal" amount={cartTotal} />
      <CartTotalRow label="Shipping" amount={shipping} />
      <CartTotalRow label="Tax" amount={tax} />
      <CardTitle className="mt-4">
        <CartTotalRow label="Order Total" amount={orderTotal} lastRow />
      </CardTitle>
    </Card>
  );
}

export default CartTotals;

type CartTotalRowProps = {
  label: string;
  amount: number;
  lastRow?: boolean;
};

function CartTotalRow({ label, amount, lastRow }: CartTotalRowProps) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatAsDollars(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="-my-2" />}
    </>
  );
}
