import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wolontariat")({
  head: () => ({
    meta: [
      { title: "Wolontariat — Fundacja Przez Pryzmat Dźwięku" },
      {
        name: "description",
        content:
          "Dołącz do wolontariatu Fundacji Przez Pryzmat Dźwięku. Szukamy animatorów, fotografów, twórców rolek, montażystów, osób od social mediów i nie tylko.",
      },
      {
        property: "og:title",
        content: "Wolontariat — Fundacja Przez Pryzmat Dźwięku",
      },
      {
        property: "og:description",
        content:
          "Dołącz do wolontariatu Fundacji Przez Pryzmat Dźwięku. Wspólnie twórzmy kulturę, która łączy rodziny przez sztukę i muzykę.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/wolontariat" }],
  }),
  component: Wolontariat,
});

function Wolontariat() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
        Wolontariat
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Masz trochę czasu, głowę pełną pomysłów albo talent, którym chcesz się
        podzielić? Dołącz do nas!
      </p>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Szukamy osób, które chcą dzielić się swoim czasem, energią i talentami.
        Wolontariat w Fundacji Przez Pryzmat Dźwięku to możliwość współtworzenia
        wydarzeń kulturalnych, warsztatów i projektów, które łączą rodziny przez
        sztukę i muzykę.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Nie musisz być profesjonalistą. Liczy się zaangażowanie, otwartość i
        chęć działania razem.
      </p>

      <h2 className="mt-12 font-display text-2xl font-semibold text-primary md:text-3xl">
        Kogo szukamy?
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Do naszych działań zapraszamy między innymi:
      </p>

      <ul className="mt-6 space-y-5 text-lg leading-relaxed text-foreground md:text-xl">
        <li>
          <span className="mr-2">🎨</span>
          <strong className="font-semibold">Animatorów i animatorki</strong> –
          osoby, które lubią pracę z dziećmi, rodzinami i prowadzenie
          kreatywnych aktywności.
        </li>
        <li>
          <span className="mr-2">📷</span>
          <strong className="font-semibold">Fotografów i fotografki</strong> –
          osoby, które chcą zatrzymywać w kadrach najważniejsze momenty naszych
          wydarzeń.
        </li>
        <li>
          <span className="mr-2">🎬</span>
          <strong className="font-semibold">Twórców i twórczynie rolek</strong>{" "}
          – osoby z pomysłami na krótkie, ciekawe materiały do mediów
          społecznościowych.
        </li>
        <li>
          <span className="mr-2">✂️</span>
          <strong className="font-semibold">Montażystów i montażystki</strong> –
          osoby, które potrafią zamienić nagrane materiały w dynamiczne rolki i
          krótkie filmy.
        </li>
        <li>
          <span className="mr-2">📱</span>
          <strong className="font-semibold">Osoby od social mediów</strong> –
          jeśli lubisz pisać posty, wymyślać treści i opowiadać o tym, co robimy,
          chętnie Cię poznamy.
        </li>
        <li>
          <span className="mr-2">🤝</span>
          <strong className="font-semibold">
            Osoby do kontaktu z organizatorami wydarzeń
          </strong>{" "}
          – jeśli dobrze czujesz się w komunikacji, lubisz nawiązywać kontakty i
          organizować współpracę, możesz wesprzeć nas w kontaktach z
          instytucjami, artystami i partnerami.
        </li>
        <li>
          <span className="mr-2">🎵</span>
          <strong className="font-semibold">
            Osoby z talentami artystycznymi i muzycznymi
          </strong>{" "}
          – jeśli śpiewasz, grasz, tworzysz albo masz pomysł na warsztaty,
          również znajdzie się dla Ciebie przestrzeń.
        </li>
      </ul>

      <h2 className="mt-12 font-display text-2xl font-semibold text-primary md:text-3xl">
        Nie widzisz tutaj swojej roli?
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        To nic nie szkodzi. Wolontariat to nie gotowa lista stanowisk. Jeśli masz
        pomysł, umiejętność albo po prostu chcesz zrobić coś dobrego razem z
        nami – napisz.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Możesz pomagać przy jednym wydarzeniu, zaangażować się w konkretny
        projekt albo zostać z nami na dłużej. Wspólnie znajdziemy formę, która
        będzie dobra dla Ciebie i dla Fundacji.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
        Każda para rąk, każdy pomysł i każdy talent, który do nas dołącza, to
        jeden więcej powód, by tworzyć razem.
      </p>

      <h2 className="mt-12 font-display text-2xl font-semibold text-primary md:text-3xl">
        Chcesz dołączyć?
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
        Napisz do nas i opowiedz kilka słów o sobie – co lubisz robić, czym
        możesz się podzielić i w jakich działaniach chciał(a)byś pomóc.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-primary md:text-xl">
        Czekamy na Ciebie! 💛
      </p>
    </section>
  );
}
