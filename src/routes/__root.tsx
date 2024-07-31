import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <main className="bg-slate-800">
      <div className="p-2 flex container mx-auto text-white text-xl gap-10 ">
        <Link to="/" className="text-white [&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="text-white [&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  ),
});
