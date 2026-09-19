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
        Wszystko zaczęło się od macierzyństwa.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        W 2024 roku powstała fundacja, w której muzyka i sztuka spotykają się z życiem rodzinnym. Wspólne doświadczenie i przeżywanie sztuki jest początkiem ważnej rozmowy, odkrywania siebie i bycia razem.
      </p>

      <blockquote className="mt-12 border-l-4 border-primary py-2 pl-6">
        <p className="font-display text-xl font-medium italic text-foreground md:text-2xl">
          „Kiedy zostałam mamą, moje spojrzenie na świat zmieniło się. Zaczęłam na nowo przyglądać się temu, co naprawdę ważne — bliskości, relacjom, obecności i temu, jaki świat chcemy tworzyć dla naszych dzieci.
        </p>
        <p className="mt-4 font-display text-xl font-medium italic text-foreground md:text-2xl">
          Jako artystka poczułam, że chcę ten świat budować poprzez muzykę i sztukę. Tak powstała idea Fundacji Przez Pryzmat Dźwięku — z potrzeby tworzenia przestrzeni, w której rodziny mogą być razem, doświadczać, tworzyć, słuchać i rozwijać się."
        </p>
        <footer className="mt-4 text-base font-normal not-italic text-muted-foreground">
          — Dominika Kocur
        </footer>
      </blockquote>

      <p className="mt-12 text-lg leading-relaxed text-foreground md:text-xl">
        Wierzymy, że sztuka może wychowywać, uwrażliwiać i łączyć. Wspólne muzykowanie może budować bliskość, a kontakt z kulturą może zostać z dzieckiem na całe życie. Wierzę też, że w trosce o rodzinę, nie możemy zapominać o rodzicach, o ich potrzebach, rozwoju i własnym świecie.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Tworzymy ambitne i jakościowe projekty artystyczne, warsztaty rozwojowe i kreatywne, działania arteterapeutyczne, muzykoterapię, rodzinne muzykowanie oraz projekty związane z kulturą rodzimą i regionalną.
      </p>

      <blockquote className="mt-12 border-l-4 border-primary py-2 pl-6">
        <p className="font-display text-xl font-medium italic text-foreground md:text-2xl">
          „To fundacja tworzona z serca — z doświadczenia, które najpierw przeżyłam sama, a dziś chcę podać dalej."
        </p>
        <footer className="mt-4 text-base font-normal not-italic text-muted-foreground">
          — Dominika Kocur
        </footer>
      </blockquote>

      <p className="mt-12 text-lg leading-relaxed text-foreground md:text-xl">
        Chcemy, by sztuka była nie tylko wydarzeniem, ale sposobem na bycie bliżej siebie.
      </p>
      <p className="mt-6 font-display text-2xl font-semibold text-primary md:text-3xl">
        Nasz cel?
      </p>
      <p className="mt-2 font-display text-2xl font-semibold text-foreground md:text-3xl">
        Słuchać. Tworzyć. Łączyć. Inspirować.
      </p>
      <p className="mt-2 font-display text-2xl font-semibold text-primary md:text-3xl">
        Przez Pryzmat Dźwięku.
      </p>

      {/* Zdjęcie zarządu */}
      <div className="mt-16">
        <img
          src={zarzadAsset.url}
          alt="Zarząd Fundacji Przez Pryzmat Dźwięku — dwie współzałożycielki w profesjonalnej sesji zdjęciowej"
          loading="lazy"
          className="mx-auto w-full max-w-md rounded-lg object-cover shadow-lg"
        />
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Dominika Kocur po lewej, Małgorzata Kramarz po prawej
        </p>
      </div>
    </section>
  );
}
