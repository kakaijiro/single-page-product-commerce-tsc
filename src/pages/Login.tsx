import {
  Form,
  Link,
  redirect,
  type ActionFunction,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubmitBtn, FormInput } from "@/components";
import { customFetch } from "@/utils";
import { toast } from "sonner";
import { type ReduxStore } from "@/store";
import { loginUser } from "@/features/user/userSlice";
import { useAppDispatch } from "@/hooks";
import { type AxiosResponse } from "axios";
import { useEffect } from "react";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response: AxiosResponse = await customFetch.post(
        "/auth/local",
        data,
      );
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      store.dispatch(loginUser({ username, jwt }));
      return redirect("/");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed", {
        description: ``,
      });
      return null;
    }
  };

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("from") === "checkout") {
      toast.error("Please login to continue", {
        description: ``,
      });
    }
  }, [location]);

  const loginAsGuestUser = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      dispatch(loginUser({ username, jwt }));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed", {
        description: ``,
      });
    }
  };

  return (
    <section className="grid h-screen place-items-center">
      <Card className="bg-muted w-96">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput type="email" label="email" name="identifier" />
            <FormInput type="password" name="password" />
            <SubmitBtn text="Login" className="mt-4 w-full" />
            <Button
              type="button"
              variant="outline"
              onClick={loginAsGuestUser}
              className="mt-4 w-full"
            >
              Guest User
            </Button>
            <p className="mt-4 text-center">
              Not a member yet?
              <Button type="button" asChild variant="link">
                <Link to="/register">Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Login;
