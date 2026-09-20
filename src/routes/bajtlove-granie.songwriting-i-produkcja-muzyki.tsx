import { createFileRoute } from "@tanstack/react-router";
import { BajtLoveNavigation, BajtLoveWordmark } from "@/components/bajtlove-navigation";

export const Route = createFileRoute("/bajtlove-granie/songwriting-i-produkcja-muzyki")({
  head: () => ({ meta: [
    { title: "Songwriting i produkcja muzyki — BajtLOVE Granie" },
    { name: "description", content: "Warsztaty pisania piosenek dla dzieci — od pierwszego pomysłu, przez komponowanie i nagranie, aż do własnego utworu." },
    { property: "og:title", content: "Songwriting i produkcja muzyki — BajtLOVE Granie" },
    { property: "og:description", content: "Od pierwszego pomysłu do własnej piosenki." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/bajtlove-granie/songwriting-i-produkcja-muzyki" }] }),
  component: Songwriting,
});

function Songwriting() {
  return <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
    <BajtLoveNavigation />
    <header className="mt-14 border-l-4 border-accent pl-6">
      <p className="text-sm font-semibold uppercase text-accent-foreground"><BajtLoveWordmark /></p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground md:text-5xl">Songwriting i produkcja muzyki</h1>
      <p className="mt-4 text-xl font-semibold text-primary">Warsztaty pisania piosenek</p>
    </header>
    <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground">
      <h2 className="font-display text-3xl font-semibold text-primary">Od pierwszego pomysłu do własnej piosenki.</h2>
      <p>Podczas warsztatów wspólnie z dziećmi piszemy, komponujemy i nagrywamy prawdziwy utwór muzyczny. Rozmawiamy o tym, co jest dla nich ważne, szukamy tematów, wymyślamy słowa, melodię i rytm, a następnie wspólnie nadajemy im muzyczną formę.</p>
      <p>Nie przyjeżdżamy tylko po to, żeby poprowadzić zajęcia. Przyjeżdżamy razem stworzyć coś nowego, ważnego, co jest naprawdę ich.</p>
      <p>Możemy pojawić się w przedszkolu, szkole czy świetlicy wsparcia dziennego z naszym mobilnym studiem nagrań i na miejscu przeprowadzić cały proces — od pierwszego pomysłu aż po gotową piosenkę.</p>
      <p>Dzieci stają się autorami i wykonawcami własnego utworu. Doświadczają tego, że ich pomysły są ważne, że można je wyrazić, rozwijać i zamienić w coś, co naprawdę istnieje.</p>
      <p>To doświadczenie buduje sprawczość, pewność siebie i poczucie własnej wartości, a jednocześnie uczy współpracy, słuchania innych, podejmowania decyzji i odpowiedzialności za wspólne dzieło.</p>
      <p>A na koniec zostaje coś wyjątkowego — prawdziwa piosenka, nagrana przez dzieci, której mogą słuchać, dzielić się nią z bliskimi i powiedzieć: „To my ją stworzyliśmy”.</p>
      <p className="border-l-4 border-accent pl-6 font-display text-3xl font-semibold text-primary">Od pomysłu. Przez muzykę. Do własnego utworu.</p>
    </div>
  </section>;
}