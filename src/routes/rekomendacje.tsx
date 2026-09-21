import { createFileRoute } from "@tanstack/react-router";
import rekomendacjeFinalAsset from "../assets/Rekomendacje_final.pdf.asset.json";
import rekomendacjaBecekAsset from "../assets/Rekomendacja_BECEK.pdf.asset.json";

export const Route = createFileRoute("/rekomendacje")({
  head: () => ({
    meta: [
      { title: "Rekomendacje — Fundacja Przez Pryzmat Dźwięku" },
      {
        name: "description",
        content:
          "Rekomendacje dla zespołu BajtLOVE Granie i Fundacji Przez Pryzmat Dźwięku od partnerów i instytucji kultury.",
      },
      {
        property: "og:title",
        content: "Rekomendacje — Fundacja Przez Pryzmat Dźwięku",
      },
      {
        property: "og:description",
        content:
          "Rekomendacje dla zespołu BajtLOVE Granie od partnerów i instytucji kultury.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Rekomendacje,
});

function RekomendacjaCard({
  title,
  source,
  date,
  summary,
  highlights,
  href,
  filename,
}: {
  title: string;
  source: string;
  date: string;
  summary: string;
  highlights: string[];
  href: string;
  filename: string;
}) {
  return (
    <article className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
        Rekomendacja
      </p>
      <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
        {title}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {source} · {date}
      </p>
      <p className="mt-4 text-justify text-base leading-relaxed text-foreground/90">
        {summary}
      </p>
      <ul className="mt-4 space-y-2">
        {highlights.map((h) => (
          <li
            key={h}
            className="flex gap-2 text-sm text-muted-foreground"
          >
            <span aria-hidden="true" className="mt-1 text-accent-foreground">
              ❧
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
        Otwórz PDF — {filename}
      </a>
    </article>
  );
}

function Rekomendacje() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="mb-3 text-sm font-semibold uppercase text-primary">
        O nas w opinii partnerów
      </p>
      <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
        Rekomendacje
      </h1>
      <p className="mt-6 text-lg text-muted-foreground md:text-xl">
        Z dumą dzielimy się opiniami instytucji i partnerów, z którymi
        współpracowaliśmy. To dla nas najcenniejsze potwierdzenie, że muzyka
        naprawdę łączy — dzieci, rodziców i całe społeczności.
      </p>

      <div className="mt-10 space-y-8">
        <RekomendacjaCard
          title="Starosta Pszczyński"
          source="Starostwo Powiatowe w Pszczynie"
          date="24 czerwca 2026 r."
          summary="Starosta Pszczyński udziela pisemnych rekomendacji dla zespołu BajtLOVE Granie za występ podczas Rodzinnego Pikniku „Bezpieczny Powiat”, zorganizowanego w Starostwie Powiatowym w Pszczynie. Koncert był dedykowany szczególnie dzieciom — najmłodsi uczestnicy byli przez cały czas aktywnie zaangażowani w zabawę, chętnie uczestniczyli we wspólnym śpiewaniu i animacjach."
          highlights={[
            "Piosenki dobrane tak, aby doskonale bawiły dzieci i dorosłych — pod sceną zgromadziła się bardzo duża liczba uczestników.",
            "Zespół wykazał się pełnym profesjonalizmem — muzycznym i organizacyjnym.",
            "Świetny kontakt z publicznością i doskonałe wyczucie potrzeb najmłodszych odbiorców.",
            "Występ BajtLOVE Granie stał się jednym z najważniejszych punktów programu pikniku.",
          ]}
          href={rekomendacjeFinalAsset.url}
          filename="Rekomendacje_final.pdf"
        />

        <RekomendacjaCard
          title="Bytomskie Centrum Kultury"
          source="Katarzyna Lazar, Kierowniczka Działu Dotacji i Kreacji"
          date="8 sierpnia 2025 r."
          summary="Bytomskie Centrum Kultury rekomenduje współpracę z Panią Dominiką Kocur i zespołem BajtLOVE Granie przy wakacyjnym projekcie plenerowym PARKOBAJTLE. Autorskie teksty, opowiadania muzyczne i piosenki nadają spotkaniom oryginalności i oferują odbiorcom nową jakość kultury muzycznej."
          highlights={[
            "Rodzice z najmłodszymi dziećmi korzystają z oferty i wychodzą ubogaceni o prawdziwe dźwięki wielu instrumentów.",
            "Zespół prezentuje zaangażowanie i kreatywność, jaką daje publiczności.",
            "Współpraca zadowala nie tylko na polu muzycznym, ale również ludzkim.",
            "Mamy nadzieję cieszyć się tą zawodową relacją także podczas innych kulturalnych projektów.",
          ]}
          href={rekomendacjaBecekAsset.url}
          filename="Rekomendacja_BECEK.pdf"
        />
      </div>
    </section>
  );
}
