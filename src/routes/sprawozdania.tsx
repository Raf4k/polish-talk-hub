import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/sprawozdania")({ head: () => ({ meta: [
  { title: "Sprawozdania — Fundacja Przez Pryzmat Dźwięku" }, { name: "description", content: "Sprawozdania Fundacji Przez Pryzmat Dźwięku." },
  { property: "og:title", content: "Sprawozdania — Fundacja Przez Pryzmat Dźwięku" }, { property: "og:description", content: "Sprawozdania Fundacji Przez Pryzmat Dźwięku." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Sprawozdania });
function Sprawozdania() { return <section className="mx-auto max-w-3xl px-6 py-16 md:py-24"><h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Sprawozdania</h1><p className="mt-6 text-lg text-muted-foreground md:text-xl">Dokumenty w tej sekcji pojawią się wkrótce.</p></section>; }
