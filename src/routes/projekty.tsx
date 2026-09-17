import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projekty")({
  head: () => ({
    meta: [
      { title: "Projekty — Fundacja Przez Pryzmat Dźwięku" },
      {
        name: "description",
        content:
          "Projekty Fundacji Przez Pryzmat Dźwięku. Informacje o naszych projektach pojawią się wkrótce.",
      },
      { property: "og:title", content: "Projekty — Fundacja Przez Pryzmat Dźwięku" },
      {
        property: "og:description",
        content:
          "Projekty Fundacji Przez Pryzmat Dźwięku.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projekty" }],
  }),
  component: Projekty,
});

function Projekty() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
        Projekty
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
        Informacje o projektach Fundacji Przez Pryzmat Dźwięku pojawią się wkrótce.
      </p>
    </section>
  );
}
