import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bajtlove-granie")({
  component: BajtLoveGranieLayout,
});

function BajtLoveGranieLayout() {
  return <Outlet />;
}