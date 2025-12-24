import { Link } from "@tanstack/react-router";

/**
 * Not found (404) component.
 */
function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 font-bold text-4xl">404</h1>
      <p className="mb-4 text-muted-foreground">Page not found</p>
      <Link to="/" className="text-primary underline">
        Go home
      </Link>
    </div>
  );
}

export default NotFound;
