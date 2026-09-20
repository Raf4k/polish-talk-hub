import { createFileRoute } from "@tanstack/react-router";
import { BajtLoveNavigation, BajtLoveWordmark } from "@/components/bajtlove-navigation";

export const Route = createFileRoute("/bajtlove-granie/")({
  head: () => ({
    meta: [
      { title: "BajtLOVE Granie — Fundacja Przez Pryzmat Dźwięku" },
      { name: "description", content: "Koncerty familijne, warsztaty umuzykalniające oraz songwriting i produkcja muzyki w projekcie BajtLOVE Granie." },
      { property: "og:title", content: "BajtLOVE Granie — Fundacja Przez Pryzmat Dźwięku" },
      { property: "og:description", content: "Poznaj trzy obszary projektu BajtLOVE Granie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/bajtlove-granie" }],
  }),
  component: BajtLoveGranie,
});

function BajtLoveGranie() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="text-center font-display text-4xl font-semibold md:text-6xl">
        <BajtLoveWordmark />
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
        Muzyka, która łączy dzieci i rodziców. Wybierz obszar, który chcesz poznać.
      </p>
      <div className="mt-12"><BajtLoveNavigation /></div>
    </section>
  );
}