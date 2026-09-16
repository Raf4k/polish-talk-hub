import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bajtlove-granie")({
  head: () => ({
    meta: [
      { title: "BajtLOVE Granie — Fundacja Przez Pryzmat Dźwięku" },
      {
        name: "description",
        content:
          "BajtLOVE Granie — projekt Fundacji Przez Pryzmat Dźwięku. Informacje o projekcie wkrótce.",
      },
      { property: "og:title", content: "BajtLOVE Granie — Fundacja Przez Pryzmat Dźwięku" },
      {
        property: "og:description",
        content:
          "BajtLOVE Granie — projekt Fundacji Przez Pryzmat Dźwięku.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/bajtlove-granie" }],
  }),
  component: BajtLoveGranie,
});

function BajtLoveGranie() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
        BajtLOVE Granie
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
        Informacje o projekcie BajtLOVE Granie pojawią się wkrótce.
      </p>
    </section>
  );
}
