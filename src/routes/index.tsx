import { createFileRoute } from "@tanstack/react-router";
import heroUrl from "../assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Fundacja Przez Pryzmat Dźwięku — Muzyka zmienia sposób, w jaki patrzymy na świat",
      },
      {
        name: "description",
        content:
          "Wierzymy, że muzyka zmienia sposób, w jaki patrzymy na świat i siebie nawzajem. Tworzymy przestrzeń, w której kultura, muzyka i sztuka spotykają się z życiem rodzinnym.",
      },
      { property: "og:title", content: "Fundacja Przez Pryzmat Dźwięku" },
      {
        property: "og:description",
        content:
          "Wierzymy, że muzyka zmienia sposób, w jaki patrzymy na świat i siebie nawzajem.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <img
          src={heroUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 text-center">
          <h1 className="mx-auto max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            WIERZYMY, ŻE MUZYKA ZMIENIA SPOSÓB W JAKI PATRZYMY NA ŚWIAT I SIEBIE NAWZAJEM
          </h1>
        </div>
      </section>

      {/* Mission content */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-lg leading-relaxed text-foreground md:text-xl">
          Dlatego tworzymy przestrzeń, w której kultura, muzyka i sztuka spotykają się z życiem rodzinnym. Inspirujemy, rozwijamy wrażliwość i budujemy relacje, pokazując, że wspólne przeżywanie sztuki może być początkiem ważnej rozmowy, odkrywania siebie i bycia razem.
        </p>

        <blockquote className="my-12 border-l-4 border-primary py-2 pl-6">
          <p className="font-display text-xl font-medium italic text-foreground md:text-2xl">
            Przez Pryzmat Dźwięku patrzymy na świat trochę inaczej.
            <br />
            Słuchamy uważniej. Patrzymy głębiej. Tworzymy razem.
          </p>
        </blockquote>

        <p className="text-lg leading-relaxed text-foreground md:text-xl">
          Prowadzimy działania artystyczne, edukacyjne i kulturalne dla dzieci, rodziców i całych rodzin. Organizujemy warsztaty, wydarzenia, koncerty i projekty, które pozwalają doświadczać sztuki nie tylko jako odbiorcy, ale przede wszystkim jako uczestnika i twórcy.
        </p>

        <blockquote className="my-12 border-l-4 border-primary py-2 pl-6">
          <p className="font-display text-xl font-medium italic text-foreground md:text-2xl">
            Bo wierzymy, że muzyka to coś więcej niż dźwięki.
            <br />
            Sztuka to coś więcej niż obraz.
            <br />
            A wspólne tworzenie to coś więcej niż zajęcia.
          </p>
        </blockquote>

        <p className="text-lg leading-relaxed text-foreground md:text-xl">
          To sposób na budowanie więzi. Rozwijanie wyobraźni. Odkrywanie własnego głosu.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
          Chcemy, aby rodziny miały więcej okazji do wspólnego przeżywania, tworzenia i zachwytu. Aby dzieci dorastały w bliskości z kulturą, a rodzice odkrywali, że sztuka może być jednym z najpiękniejszych języków porozumienia.
        </p>

        <blockquote className="my-12 border-l-4 border-primary py-2 pl-6">
          <p className="font-display text-2xl font-semibold text-primary md:text-3xl">
            Tworzymy kulturę, która łączy.
          </p>
        </blockquote>

        <p className="text-center text-lg font-medium text-foreground md:text-xl">
          Dołącz do nas i zobacz świat przez Pryzmat Dźwięku.
        </p>
      </section>
    </>
  );
}
