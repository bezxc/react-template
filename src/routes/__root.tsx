import { createRootRoute } from "@tanstack/react-router";
import { Layout } from "@/app/layout";

export const Route = createRootRoute({
  component: () => <Layout />,
});
