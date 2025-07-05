import { useAppSelector } from "@/hooks";
import { CheckoutForm, SectionTitle, CartTotals } from "@/components";
import { type LoaderFunction, redirect } from "react-router-dom";
import { toast } from "sonner";
import { type ReduxStore } from "@/store";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<Response | null> => {
    const user = store.getState().userState.user;

    if (!user) {
      return redirect("/login?from=checkout");
    }

    return null;
  };

function Checkout() {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}
export default Checkout;
