import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/hooks";

function CartButton() {
  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart,
  );

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative flex items-center justify-center"
    >
      <Link to="/cart">
        <ShoppingCart />
        <span className="bg-primary absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full text-xs text-white">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
