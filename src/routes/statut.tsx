import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/statut")({ head: () => ({ meta: [
  { title: "Statut — Fundacja Przez Pryzmat Dźwięku" }, { name: "description", content: "Statut Fundacji Przez Pryzmat Dźwięku." },
  { property: "og:title", content: "Statut — Fundacja Przez Pryzmat Dźwięku" }, { property: "og:description", content: "Statut Fundacji Przez Pryzmat Dźwięku." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Statut });
function Statut() { return <section className="mx-auto max-w-3xl px-6 py-16 md:py-24"><h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Statut</h1><p className="mt-6 text-lg text-muted-foreground md:text-xl">Dokumenty w tej sekcji pojawią się wkrótce.</p></section>; }
