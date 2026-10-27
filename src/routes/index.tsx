import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buscaminas" },
      { name: "description", content: "Juego de buscaminas en el navegador." },
      { property: "og:title", content: "Buscaminas" },
      { property: "og:description", content: "Juego de buscaminas en el navegador." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <h1 className="text-4xl font-bold text-foreground">Buscaminas</h1>
    </main>
  );
}
