import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/wolontariat")({ head: () => ({ meta: [
  { title: "Wolontariat — Fundacja Przez Pryzmat Dźwięku" },
  { name: "description", content: "Dołącz do wolontariatu Fundacji Przez Pryzmat Dźwięku. Pomagaj tworzyć kulturę, która łączy." },
  { property: "og:title", content: "Wolontariat — Fundacja Przez Pryzmat Dźwięku" },
  { property: "og:description", content: "Dołącz do wolontariatu Fundacji Przez Pryzmat Dźwięku." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Wolontariat });
function Wolontariat() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="mb-3 text-sm font-semibold uppercase text-primary">Dołącz do nas</p>
      <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Wolontariat</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>
          Szukamy osób, które chcą dzielić się swoim czasem, energią i talentami.
          Wolontariat w Fundacji Przez Pryzmat Dźwięku to możliwość współtworzenia
          wydarzeń kulturalnych, warsztatów i projektów, które łączą rodziny przez sztukę i muzykę.
        </p>
        <p className="border-l-4 border-secondary pl-6 italic text-foreground">
          Każda para rąk, które pomagają, to jeden więcej powód, by tworzyć razem.
        </p>
        <p>
          Szczegółowe informacje o możliwościach wolontariatu pojawią się wkrótce.
        </p>
      </div>
    </section>
  );
}
