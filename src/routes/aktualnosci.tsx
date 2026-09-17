import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/aktualnosci")({ head: () => ({ meta: [
  { title: "Aktualności — Fundacja Przez Pryzmat Dźwięku" },
  { name: "description", content: "Aktualności i najnowsze wydarzenia Fundacji Przez Pryzmat Dźwięku." },
  { property: "og:title", content: "Aktualności — Fundacja Przez Pryzmat Dźwięku" },
  { property: "og:description", content: "Aktualności i najnowsze wydarzenia fundacji." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Aktualnosci });
function Aktualnosci() { return <section className="mx-auto max-w-3xl px-6 py-16 md:py-24"><p className="mb-3 text-sm font-semibold uppercase text-primary">Bądź na bieżąco</p><h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Aktualności</h1><p className="mt-6 text-lg text-muted-foreground md:text-xl">Najnowsze informacje o wydarzeniach i działaniach fundacji pojawią się wkrótce.</p></section>; }
