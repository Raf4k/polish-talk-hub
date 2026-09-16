import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Fundacja Przez Pryzmat Dźwięku" },
      {
        name: "description",
        content:
          "Galeria Fundacji Przez Pryzmat Dźwięku. Zdęcia z naszych wydarzeń, warsztatów i projektów pojawią się wkrótce.",
      },
      { property: "og:title", content: "Galeria — Fundacja Przez Pryzmat Dźwięku" },
      {
        property: "og:description",
        content:
          "Galeria Fundacji Przez Pryzmat Dźwięku.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

function Galeria() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
        Galeria
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
        Zdjęcia z wydarzeń, warsztatów i projektów Fundacji Przez Pryzmat Dźwięku pojawią się wkrótce.
      </p>
    </section>
  );
}
