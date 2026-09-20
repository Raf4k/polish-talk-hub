import { createFileRoute } from "@tanstack/react-router";
import { BajtLoveNavigation, BajtLoveWordmark } from "@/components/bajtlove-navigation";

export const Route = createFileRoute("/bajtlove-granie/warsztaty-umuzykalniajace")({
  head: () => ({ meta: [
    { title: "Warsztaty umuzykalniające — BajtLOVE Granie" },
    { name: "description", content: "Warsztaty umuzykalniające BajtLOVE Granie: żywe instrumenty, ruch, rytm i wspólne tworzenie muzyki przez dzieci." },
    { property: "og:title", content: "Warsztaty umuzykalniające — BajtLOVE Granie" },
    { property: "og:description", content: "Nie uczymy dzieci muzyki. Pokazujemy im, że muzyka jest w nich." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/bajtlove-granie/warsztaty-umuzykalniajace" }] }),
  component: Warsztaty,
});

function Warsztaty() {
  return <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
    <BajtLoveNavigation />
    <header className="mt-14 border-l-4 border-secondary pl-6">
      <p className="text-sm font-semibold uppercase text-secondary-foreground"><BajtLoveWordmark /></p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground md:text-5xl">Warsztaty umuzykalniające</h1>
      <p className="mt-4 text-xl font-semibold text-primary">Nie uczymy dzieci muzyki. Pokazujemy im, że muzyka jest w nich.</p>
    </header>
    <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground">
      <p>Muzyka, której można dotknąć, posłuchać i doświadczyć całym ciałem. To spotkania, podczas których dzieci nie tylko słuchają muzyki — one ją tworzą.</p>
      <p>Przyjeżdżamy do dzieci z żywymi instrumentami i zapraszamy je do wspólnego muzykowania. Akompaniujemy na gitarze i ukulele, a dzieci otrzymują własne instrumenty perkusyjne (m.in. grzechotki, guiro, pudełka akustyczne, dzwonki), dzięki którym mogą aktywnie uczestniczyć w muzycznej zabawie.</p>
      <p>Gramy, śpiewamy, klaszczemy, tupiemy, wystukujemy rytmy i poruszamy się do muzyki. Nie ma tu miejsca na bierne siedzenie — każde dziecko może znaleźć swój sposób na bycie częścią dźwiękowej przestrzeni.</p>
      <p>Podczas zajęć wykorzystujemy elementy rytmiki, muzycznych zabaw ruchowych i muzykoterapii, wspierając naturalną potrzebę dzieci do ruchu, ekspresji, odkrywania dźwięków i wspólnego działania.</p>
      <h2 className="pt-6 font-display text-3xl font-semibold text-primary">Żywy instrument. Prawdziwy dźwięk. Wspólna zabawa.</h2>
      <p>Zależy nam na tym, żeby dzieci doświadczały muzyki bezpośrednio i wszystkimi zmysłami. Słuchają brzmienia prawdziwych instrumentów, obserwują, jak powstaje dźwięk, same próbują grać i odkrywają, że muzyka może być jednocześnie zabawą, ruchem, komunikacją i sposobem wyrażania emocji.</p>
      <p>Każde spotkanie może wyglądać trochę inaczej — dopasowujemy repertuar, tempo i poziom trudności do wieku oraz możliwości grupy.</p>
      <h2 className="pt-6 font-display text-3xl font-semibold text-primary">Dla kogo?</h2>
      <p>Warsztaty są skierowane do:</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {["Rodzin z dziećmi", "Bawialni", "Żłobków", "Przedszkoli", "Uczniów szkoły podstawowej"].map((item) => <li key={item} className="rounded-md bg-secondary/20 px-4 py-3 text-center text-sm font-semibold uppercase">{item}</li>)}
      </ul>
      <p>Mogą być samodzielnym wydarzeniem, cyklem regularnych zajęć albo muzycznym uzupełnieniem większego wydarzenia rodzinnego, edukacyjnego czy kulturalnego.</p>
      <h2 className="pt-6 font-display text-3xl font-semibold text-primary">Każde dziecko ma swój rytm.</h2>
      <p>Nie trzeba umieć śpiewać. Nie trzeba znać nut. Nie trzeba „ładnie” grać.</p>
      <p>Wystarczy być, słuchać i spróbować.</p>
      <p className="font-semibold text-primary">Bo pierwsze muzyczne doświadczenia nie muszą zaczynać się od nauki — mogą zacząć się od radości ze wspólnego grania.</p>
    </div>
  </section>;
}