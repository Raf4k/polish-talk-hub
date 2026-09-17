import { createFileRoute } from "@tanstack/react-router";
import zarzadAsset from "../assets/zarzad.jpeg.asset.json";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nas — Fundacja Przez Pryzmat Dźwięku" },
      {
        name: "description",
        content:
          "Poznaj Fundację Przez Pryzmat Dźwięku. Tworzymy przestrzeń, w której kultura, muzyka i sztuka spotykają się z życiem rodzinnym.",
      },
      { property: "og:title", content: "O nas — Fundacja Przez Pryzmat Dźwięku" },
      {
        property: "og:description",
        content:
          "Poznaj Fundację Przez Pryzmat Dźwięku. Tworzymy przestrzeń, w której kultura, muzyka i sztuka spotykają się z życiem rodzinnym.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/o-nas" }],
  }),
  component: ONas,
});

function ONas() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
        O nas
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Fundacja Przez Pryzmat Dźwięku tworzy przestrzeń, w której kultura, muzyka i
        sztuka spotykają się z życiem rodzinnym. Inspirujemy, rozwijamy
        wrażliwość i budujemy relacje, pokazując, że wspólne przeżywanie sztuki
        może być początkiem ważnej rozmowy, odkrywania siebie i bycia razem.
      </p>
      <blockquote className="mt-12 border-l-4 border-primary py-2 pl-6">
        <p className="font-display text-xl font-medium italic text-foreground md:text-2xl">
          Przez Pryzmat Dźwięku patrzymy na świat trochę inaczej.
          <br />
          Słuchamy uważniej. Patrzymy głębiej. Tworzymy razem.
        </p>
      </blockquote>
      <p className="mt-12 text-lg leading-relaxed text-foreground md:text-xl">
        Prowadzimy działania artystyczne, edukacyjne i kulturalne dla dzieci,
        rodziców i całych rodzin. Organizujemy warsztaty, wydarzenia, koncerty i
        projekty, które pozwalają doświadczać sztuki nie tylko jako odbiorcy,
        ale przede wszystkim jako uczestnika i twórcy.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Bo wierzymy, że muzyka to coś więcej niż dźwięki. Sztuka to coś więcej
        niż obraz. A wspólne tworzenie to coś więcej niż zajęcia. To sposób na
        budowanie więzi. Rozwijanie wyobraźni. Odkrywanie własnego głosu.
      </p>

      {/* Zdjęcie zarządu */}
      <div className="mt-16">
        <img
          src={zarzadAsset.url}
          alt="Zarząd Fundacji Przez Pryzmat Dźwięku — dwie współzałożycielki w profesjonalnej sesji zdjęciowej"
          loading="lazy"
          className="mx-auto w-full max-w-md rounded-lg object-cover shadow-lg"
        />
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Zarząd Fundacji Przez Pryzmat Dźwięku: Małgorzata Kramarz (Przewodnicząca Zarządu) i Dominika Kocur (Wiceprzewodnicząca Zarządu)
        </p>
      </div>
    </section>
  );
}
