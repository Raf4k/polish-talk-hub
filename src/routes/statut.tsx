import { createFileRoute } from "@tanstack/react-router";
import statutAsset from "../assets/statut-fundacji-2024.pdf.asset.json";
export const Route = createFileRoute("/statut")({ head: () => ({ meta: [
  { title: "Statut — Fundacja Przez Pryzmat Dźwięku" }, { name: "description", content: "Statut Fundacji Przez Pryzmat Dźwięku." },
  { property: "og:title", content: "Statut — Fundacja Przez Pryzmat Dźwięku" }, { property: "og:description", content: "Statut Fundacji Przez Pryzmat Dźwięku." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Statut });
function Statut() { return <section className="mx-auto max-w-3xl px-6 py-16 md:py-24"><p className="mb-3 text-sm font-semibold uppercase text-primary">Dokumenty fundacji</p><h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Statut</h1><p className="mt-6 text-lg text-muted-foreground md:text-xl">Statut Fundacji Przez Pryzmat Dźwięku z dnia 10 grudnia 2024 roku.</p><a href={statutAsset.url} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Otwórz statut PDF</a></section>; }
