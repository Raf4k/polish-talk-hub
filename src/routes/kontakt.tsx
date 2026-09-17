import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/kontakt")({ head: () => ({ meta: [
  { title: "Kontakt — Fundacja Przez Pryzmat Dźwięku" },
  { name: "description", content: "Dane kontaktowe Fundacji Przez Pryzmat Dźwięku w Gliwicach." },
  { property: "og:title", content: "Kontakt — Fundacja Przez Pryzmat Dźwięku" },
  { property: "og:description", content: "Skontaktuj się z Fundacją Przez Pryzmat Dźwięku." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Kontakt });
function Kontakt() { return <section className="mx-auto max-w-3xl px-6 py-16 md:py-24"><p className="mb-3 text-sm font-semibold uppercase text-primary">Porozmawiajmy</p><h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Kontakt</h1><div className="mt-8 border-l-4 border-secondary pl-6 text-lg leading-relaxed"><p className="font-semibold text-foreground">Fundacja Przez Pryzmat Dźwięku</p><address className="mt-2 not-italic text-muted-foreground">ul. Zwycięstwa 1<br />44-100 Gliwice</address><p className="mt-5 text-muted-foreground">Adres e-mail i numer telefonu pojawią się wkrótce.</p></div></section>; }
