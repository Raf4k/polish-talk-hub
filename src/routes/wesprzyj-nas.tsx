import { createFileRoute } from "@tanstack/react-router";
import posterAsset from "../assets/zrzutka-poster.png.asset.json";

const ZRZUTKA_URL = "https://zrzutka.pl/a38ux8";

export const Route = createFileRoute("/wesprzyj-nas")({
  head: () => ({
    meta: [
      { title: "Wesprzyj nas — Fundacja Przez Pryzmat Dźwięku" },
      { name: "description", content: "Dowiedz się, jak wesprzeć działania Fundacji Przez Pryzmat Dźwięku." },
      { property: "og:title", content: "Wesprzyj nas — Fundacja Przez Pryzmat Dźwięku" },
      { property: "og:description", content: "Pomóż nam tworzyć kulturę, która łączy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WesprzyjNas,
});

function WesprzyjNas() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="mb-3 text-sm font-semibold uppercase text-primary">Twórzmy razem</p>
      <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Wesprzyj nas</h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Dzięki wsparciu możemy tworzyć więcej spotkań z muzyką, sztuką i kulturą dla dzieci oraz całych rodzin.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
        <a
          href={ZRZUTKA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          aria-label="Otwórz zrzutkę w nowej karcie"
        >
          <img
            src={posterAsset.url}
            alt="Plakat zrzutki — Organizacja koncertów z elementami muzykoterapii, cel 50 000 zł"
            width={452}
            height={640}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </a>
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Organizacja koncertów z elementami muzykoterapii
          </h2>
          <p className="text-base leading-relaxed text-foreground">
            Pomóż nam rozwijać działania naszej fundacji! Zbieramy środki na działania statutowe,
            aby mogła dalej działać, realizować ważne społecznie projekty i stopniowo się rozwijać.
            Naszą fundację tworzą wolontariuszki artystki z Gliwic. To dzięki ich zaangażowaniu, pracy
            i pasji możemy docierać do dzieci i rodzin.
          </p>
          <p className="text-sm font-medium text-muted-foreground">
            Cel zrzutki: <span className="font-semibold text-foreground">50 000 zł</span>
          </p>
          <a
            href={ZRZUTKA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Wesprzyj nas na zrzutka.pl →
          </a>
        </div>
      </div>
    </section>
  );
}
