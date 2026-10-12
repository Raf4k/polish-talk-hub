import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projekty")({
  head: () => ({
    meta: [
      { title: "Projekty — Fundacja Przez Pryzmat Dźwięku" },
      {
        name: "description",
        content:
          "Zrealizowane projekty Fundacji Przez Pryzmat Dźwięku: Górnoślōnski Praktyczny Elementarz Przedszkolaka i Terapiosenki.",
      },
      { property: "og:title", content: "Projekty — Fundacja Przez Pryzmat Dźwięku" },
      {
        property: "og:description",
        content:
          "Górnoślōnski Praktyczny Elementarz Przedszkolaka i Terapiosenki — zrealizowane projekty fundacji.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projekty" }],
  }),
  component: Projekty,
});

function Projekty() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Zrealizowane projekty</h1>
      <article className="mt-10">
        <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">Górnoślōnski Praktyczny Elementarz Przedszkolaka</h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground">
          <p>„Górnoślōnski Praktyczny Elementarz Przedszkolaka” był realizowany od września do grudnia 2025 roku w partnerstwie z Przedszkolem Miejskim nr 40 z Oddziałami Integracyjnymi w Gliwicach. Projekt dofinansowano przez Ministra Edukacji Narodowej w ramach programu „Nasze Tradycje”.</p>
          <p>Celem projektu było rozwijanie u dzieci w wieku przedszkolnym więzi z regionem Górnego Śląska poprzez praktyczne, kreatywne i angażujące działania edukacyjne, które kształtują poczucie tożsamości regionalnej, szacunek dla lokalnej kultury, tradycji i gwary oraz rozwijają kompetencje społeczne, artystyczne i poznawcze. Projekt wspierał integrację dzieci, rodziców i lokalnej społeczności, promując edukację opartą na doświadczeniu, aktywnym uczestnictwie i bezpośrednim poznawaniu dziedzictwa kulturowego regionu.</p>
          <p>W ramach projektu zrealizowano szereg różnorodnych działań, które pozwoliły dzieciom odkrywać Górny Śląsk poprzez muzykę, teatr, rękodzieło, opowieści i spotkania z przedstawicielami lokalnej społeczności. Odbyły się warsztaty muzyczne prowadzone przez Kapelę Fedaków, podczas których dzieci poznawały tradycyjne brzmienia, instrumenty i muzyczne dziedzictwo regionu. Ważnym wydarzeniem był również muzyczny spektakl Słońskiej Bajarki, przybliżający najmłodszym świat śląskich opowieści, gwary i wyobraźni.</p>
          <p>Dzieci miały okazję uczestniczyć w wyjątkowym spotkaniu z tradycją podczas realizacji słuchowiska z udziałem Koła Gospodyń Wiejskich z Ornontowic. Była to okazja do poznawania lokalnych opowieści, zwyczajów i języka przekazywanego z pokolenia na pokolenie. Istotnym elementem projektu było także wspólne muzykowanie i pielęgnowanie tradycji bożonarodzeniowych. Zwieńczeniem działań był Koncert Kolęd i Pastorałek w wykonaniu Kapeli Fedaków, w którym wystąpiły również dzieci z przedszkola. Mali artyści zaprezentowali się w specjalnie przygotowanych na tę okazję strojach, co nadało wydarzeniu wyjątkowy, uroczysty charakter i pozwoliło dzieciom aktywnie uczestniczyć w kultywowaniu regionalnych tradycji.</p>
          <p>Ważną częścią projektu były spotkania z przedstawicielami dawnych zawodów i rzemiosł, dzięki którym dzieci mogły poznać specyfikę pracy i codzienne życie mieszkańców przemysłowego Górnego Śląska. Przedszkole odwiedzili między innymi górnik i hutnik, którzy przybliżyli dzieciom historię oraz znaczenie tych zawodów dla rozwoju regionu. Dodatkowo odbył się koncert górniczy orkiestry dętej, pozwalający najmłodszym doświadczyć charakterystycznego brzmienia muzyki związanej z tradycjami górniczymi i uroczystościami regionu.</p>
          <p>Projekt obejmował również warsztaty ceramiczne i teatralne, rozwijające kreatywność, wyobraźnię, zdolności manualne oraz umiejętność współpracy. Dzięki działaniom twórczym dzieci mogły nie tylko poznawać dziedzictwo kulturowe, ale także samodzielnie je interpretować i wyrażać poprzez sztukę. Uzupełnieniem programu były wycieczki do miejsc związanych z edukacją regionalną, podczas których dzieci poznawały historię, tradycje i kulturowy krajobraz Górnego Śląska w ich naturalnym otoczeniu.</p>
          <p>Wszystkie działania realizowano w sposób dostosowany do wieku i możliwości dzieci, stawiając na bezpośrednie doświadczenie, zabawę, twórczą aktywność oraz spotkania z ludźmi, którzy pielęgnują lokalne tradycje. Projekt stworzył przestrzeń do międzypokoleniowej wymiany wiedzy i doświadczeń, wzmacniając więź dzieci z miejscem, w którym dorastają, oraz budując pozytywne skojarzenia z regionalną kulturą i śląską godką.</p>
          <p>„Górnoślōnski Praktyczny Elementarz Przedszkolaka” pokazał, że edukacja regionalna może być żywym, angażującym doświadczeniem, które łączy muzykę, sztukę, historię i codzienne życie lokalnej społeczności. Dzięki różnorodnym działaniom dzieci miały możliwość poznawać swoje dziedzictwo nie tylko poprzez opowieści i ilustracje, ale przede wszystkim przez aktywne uczestnictwo, wspólne przeżywanie i twórcze działanie.</p>
        </div>
      </article>
      <article className="mt-14 border-t border-border pt-12">
        <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">Terapiosenki</h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground">
          <p>Celem projektu było stworzenie autorskich utworów muzycznych o charakterze terapeutycznym i edukacyjnym, wspierających rozwój emocjonalny, komunikację oraz dobrostan psychiczny dzieci i dorosłych.</p>
          <p>Powstałe piosenki zostały opracowane we współpracy z muzykami, pedagogami i terapeutami, tak aby mogły być wykorzystywane zarówno podczas zajęć edukacyjnych i terapeutycznych, jak i w codziennym życiu rodzin.</p>
          <p>Powstałe utwory promują uważność, empatię, współpracę oraz pozytywne wzorce komunikacji, pokazując, że muzyka może być skutecznym narzędziem wspierającym rozwój i integrację społeczną.</p>
          <p>Utwory dostępne są nieodpłatnie we wszystkich najważniejszych serwisach streamingowych, zostały wydane we współpracy z wokalistką i autorką piosenek Dominiką Kocur.</p>
          <p>Na płycie znajduje się sześć piosenek:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>„Dobrze, że jesteś”</li>
            <li>„Zegarek”</li>
            <li>„RTV&amp;AGD”</li>
            <li>„Z Tobą Mamo”</li>
            <li>„Gdy ktoś zapyta się”</li>
            <li>„Kołysanka o placu budowy”</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
