import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/krs")({ head: () => ({ meta: [
  { title: "KRS — Fundacja Przez Pryzmat Dźwięku" }, { name: "description", content: "Dane rejestrowe Fundacji Przez Pryzmat Dźwięku." },
  { property: "og:title", content: "KRS — Fundacja Przez Pryzmat Dźwięku" }, { property: "og:description", content: "Dane rejestrowe fundacji." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Krs });
function Krs() { return <section className="mx-auto max-w-3xl px-6 py-16 md:py-24"><h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Dane rejestrowe</h1><dl className="mt-8 grid gap-4 text-lg"><div><dt className="text-muted-foreground">KRS</dt><dd className="font-semibold text-primary">0001144183</dd></div><div><dt className="text-muted-foreground">NIP</dt><dd className="font-semibold">6312727778</dd></div><div><dt className="text-muted-foreground">REGON</dt><dd className="font-semibold">540417288</dd></div></dl></section>; }
