import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Error() {
  const error = useRouteError();
  console.log(error);

  // if 404
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-primary text-9xl font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we could not find the page you are looking for.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary">
              <Link to="/">Go back home</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  // else
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center text-4xl font-bold">There was an error...</h4>
    </main>
  );
}
export default Error;
