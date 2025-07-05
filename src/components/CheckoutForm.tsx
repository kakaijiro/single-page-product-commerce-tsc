import { type ActionFunction, Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatAsDollars, type Checkout } from "@/utils";
import { toast } from "sonner";
import { clearCart } from "@/features/cart/cartSlice";
import { type ReduxStore } from "@/store";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;

    if (!name || !address) {
      toast.error("Please fill out all fields", {
        description: ``,
      });
      // [NOTE] toast should not be called via action function because action function usually invokes outside rerendering. this case is exceptional where no redirection, returning null and using sonner
      return null;
    }
    const user = store.getState().userState.user;
    if (!user) {
      toast.error("Please fill out all fields");
      return null;
    }

    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const result = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );
      console.log(result);
      store.dispatch(clearCart());
      toast.success("Order placed", {
        description: ``,
      });
      // this toast() still works.
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      toast.error("Order failed...", {
        description: ``,
      });
      return null;
    }
  };

function CheckoutForm() {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="mb-4 text-xl font-medium">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <SubmitBtn text="Place Your Order" className="mt-4" />
    </Form>
  );
}

export default CheckoutForm;
