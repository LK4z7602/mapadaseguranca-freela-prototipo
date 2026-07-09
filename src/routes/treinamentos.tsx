import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/treinamentos")({
  component: () => <Outlet />,
});
