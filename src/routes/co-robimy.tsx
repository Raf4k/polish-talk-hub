import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/co-robimy")({
  head: () => ({ meta: [
    { title: "Co robimy — Fundacja Przez Pryzmat Dźwięku" },
    { name: "description", content: "Działania artystyczne, edukacyjne i kulturalne Fundacji Przez Pryzmat Dźwięku." },
    { property: "og:title", content: "Co robimy — Fundacja Przez Pryzmat Dźwięku" },
    { property: "og:description", content: "Poznaj działania artystyczne, edukacyjne i kulturalne fundacji." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: CoRobimy,
});

function CoRobimy() {
  return <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
    <p className="mb-3 text-sm font-semibold uppercase text-primary">Kultura, edukacja, relacje</p>
    <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Co robimy</h1>
    <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">Prowadzimy działania artystyczne, edukacyjne i kulturalne dla dzieci, rodziców i całych rodzin. Organizujemy warsztaty, wydarzenia, koncerty i projekty, które zapraszają do uczestnictwa i wspólnego tworzenia.</p>
    <Link to="/projekty" className="mt-10 inline-flex rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Zobacz projekty</Link>
  </section>;
}
