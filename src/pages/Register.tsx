import { type ActionFunction, Form, Link, redirect } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubmitBtn, FormInput } from "@/components";
import { customFetch } from "@/utils";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const result = await customFetch.post("/auth/local/register", data);
    console.log(result);
    toast.success("Registered. Please login", {
      description: ``,
    });
    return redirect("/login");
  } catch (error) {
    const errorMsg =
      error instanceof AxiosError
        ? error.response?.data.error.message
        : "Registration Failed";
    toast.error("Registration Failed", {
      description: errorMsg,
    });
    return null;
  }
};
// since action is defined in the same page, we don't need to define action in the Form component below.

function Register() {
  return (
    <section className="grid h-screen place-items-center">
      <Card className="bg-muted w-96">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput type="text" name="username" />
            <FormInput type="email" name="email" />
            <FormInput type="password" name="password" />
            <SubmitBtn text="Submit" className="mt-4 w-full" />
            <p className="mt-4 text-center">
              Already a member?
              <Button type="button" asChild variant="link">
                <Link to="/login">Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Register;
