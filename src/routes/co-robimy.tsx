import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/co-robimy")({
  head: () => ({
    meta: [
      { title: "Co robimy — Fundacja Przez Pryzmat Dźwięku" },
      {
        name: "description",
        content:
          "Działania artystyczne, edukacyjne i społeczne Fundacji Przez Pryzmat Dźwięku: muzyka, sztuka, projekty rodzinne, arteterapia, kultura regionalna i wydarzenia.",
      },
      {
        property: "og:title",
        content: "Co robimy — Fundacja Przez Pryzmat Dźwięku",
      },
      {
        property: "og:description",
        content:
          "Poznaj działania artystyczne, edukacyjne i społeczne Fundacji Przez Pryzmat Dźwięku.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/co-robimy" }],
  }),
  component: CoRobimy,
});

function CoRobimy() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
        Co robimy?
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Tworzymy i realizujemy projekty artystyczne, edukacyjne i społeczne, w
        których muzyka i sztuka stają się narzędziem wspólnego doświadczenia,
        rozwoju i budowania relacji.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Nasze działania kierujemy przede wszystkim do dzieci, rodziców i całych
        rodzin, ale tworzymy również projekty skierowane do artystów,
        edukatorów, instytucji kultury i lokalnych społeczności.
      </p>

      {/* Muzyka */}
      <h2 className="mt-12 font-display text-2xl font-semibold text-primary md:text-3xl">
        🎵 Muzyka
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Tworzymy i organizujemy:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-8 text-lg leading-relaxed text-foreground md:text-xl">
        <li>rodzinne koncerty i wydarzenia muzyczne,</li>
        <li>warsztaty muzyczne dla dzieci i rodzin,</li>
        <li>zajęcia z zakresu wspólnego muzykowania,</li>
        <li>projekty edukacji muzycznej,</li>
        <li>
          spotkania i działania angażujące dzieci w aktywne słuchanie i
          tworzenie muzyki,
        </li>
        <li>projekty łączące muzykę z innymi dziedzinami sztuki.</li>
      </ul>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Interesuje nas zarówno muzyka współczesna, rozrywkowa, jak i
        tradycyjna, lokalna oraz inspirowana kulturą regionu.
      </p>

      {/* Sztuka i działania kreatywne */}
      <h2 className="mt-12 font-display text-2xl font-semibold text-primary md:text-3xl">
        🎨 Sztuka i działania kreatywne
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Realizujemy warsztaty artystyczne i kreatywne, które pozwalają dzieciom i
        dorosłym eksperymentować z różnymi formami sztuki.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Tworzymy projekty wykorzystujące m.in. muzykę, plastykę, ruch, słowo i
        działania performatywne.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Łączymy różne dziedziny, tworząc projekty interdyscyplinarne, w których
        uczestnicy nie są tylko odbiorcami, ale również współtwórcami.
      </p>

      {/* Projekty rodzinne */}
      <h2 className="mt-12 font-display text-2xl font-semibold text-primary md:text-3xl">
        👨‍👩‍👧‍👦 Projekty rodzinne
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Projektujemy wydarzenia i warsztaty, w których dzieci i rodzice
        uczestniczą razem.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Tworzymy rodzinne koncerty, spektakle, animacje, warsztaty, spotkania
        artystyczne i wydarzenia, które można przeżywać wspólnie –
        niezależnie od wieku czy wcześniejszego doświadczenia ze sztuką.
      </p>

      {/* Rozwój, arteterapia i muzykoterapia */}
      <h2 className="mt-12 font-display text-2xl font-semibold text-primary md:text-3xl">
        🧠 Rozwój, arteterapia i muzykoterapia
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Tworzymy działania wykorzystujące sztukę, muzykę i proces twórczy jako
        formę wspierania rozwoju i dobrostanu.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Realizujemy warsztaty arteterapeutyczne i muzykoterapeutyczne oraz
        projekty, w których twórczość staje się przestrzenią do pracy z
        emocjami, komunikacją, relacjami i samoekspresją.
      </p>

      {/* Kultura rodzima i regionalna */}
      <h2 className="mt-12 font-display text-2xl font-semibold text-primary md:text-3xl">
        🌿 Kultura rodzima i regionalna
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Tworzymy projekty związane z kulturą, tradycją i dziedzictwem naszego
        regionu.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Sięgamy po lokalne historie, muzykę, zwyczaje i twórczość, szukając
        współczesnych sposobów na ich przedstawianie i przekazywanie kolejnym
        pokoleniom.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Łączymy tradycję ze współczesną edukacją artystyczną, aby kultura
        lokalna mogła być żywym doświadczeniem, a nie tylko wspomnieniem.
      </p>

      {/* Wydarzenia i projekty artystyczne */}
      <h2 className="mt-12 font-display text-2xl font-semibold text-primary md:text-3xl">
        🎭 Wydarzenia i projekty artystyczne
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Tworzymy własne wydarzenia oraz współpracujemy przy projektach
        realizowanych wspólnie z artystami, edukatorami, instytucjami kultury,
        organizacjami i lokalnymi partnerami.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Przygotowujemy:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-8 text-lg leading-relaxed text-foreground md:text-xl">
        <li>koncerty,</li>
        <li>warsztaty,</li>
        <li>cykle wydarzeń,</li>
        <li>projekty edukacyjne,</li>
        <li>wydarzenia rodzinne,</li>
        <li>działania artystyczne w przestrzeni lokalnej,</li>
        <li>projekty międzypokoleniowe.</li>
      </ul>

      {/* Współpraca */}
      <h2 className="mt-12 font-display text-2xl font-semibold text-primary md:text-3xl">
        🤝 Współpraca
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Ważną częścią naszej działalności jest współpraca.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Do realizacji projektów zapraszamy artystów, muzyków, animatorów,
        edukatorów, terapeutów, twórców i lokalne instytucje.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Tworzymy projekty wspólnie – od pomysłu, przez przygotowanie, aż po
        realizację wydarzenia.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Nasze działania łączą kilka obszarów:
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {[
          "MUZYKA",
          "SZTUKA",
          "EDUKACJA",
          "RODZINA",
          "ROZWÓJ",
          "KULTURA REGIONALNA",
        ].map((area) => (
          <span
            key={area}
            className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold tracking-wide text-primary"
          >
            {area}
          </span>
        ))}
      </div>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Z tych obszarów tworzymy projekty, które mogą przyjmować różne formy –
        od kameralnych warsztatów i rodzinnego muzykowania po większe wydarzenia
        artystyczne i projekty społeczne.
      </p>
    </section>
  );
}
