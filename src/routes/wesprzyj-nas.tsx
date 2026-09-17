import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/wesprzyj-nas")({ head: () => ({ meta: [
  { title: "Wesprzyj nas — Fundacja Przez Pryzmat Dźwięku" },
  { name: "description", content: "Dowiedz się, jak wesprzeć działania Fundacji Przez Pryzmat Dźwięku." },
  { property: "og:title", content: "Wesprzyj nas — Fundacja Przez Pryzmat Dźwięku" },
  { property: "og:description", content: "Pomóż nam tworzyć kulturę, która łączy." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: WesprzyjNas });
function WesprzyjNas() { return <section className="mx-auto max-w-3xl px-6 py-16 md:py-24"><p className="mb-3 text-sm font-semibold uppercase text-primary">Twórzmy razem</p><h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Wesprzyj nas</h1><p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">Dzięki wsparciu możemy tworzyć więcej spotkań z muzyką, sztuką i kulturą dla dzieci oraz całych rodzin.</p><p className="mt-6 border-l-4 border-accent pl-5 text-lg text-muted-foreground">Szczegóły dotyczące możliwości wsparcia pojawią się wkrótce.</p></section>; }
