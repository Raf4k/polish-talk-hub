import { createFileRoute } from "@tanstack/react-router";
import { BajtLoveNavigation, BajtLoveWordmark } from "@/components/bajtlove-navigation";
import guitarPhoto from "@/assets/bajtlove-koncert-gitara.jpeg.asset.json";
import saxPhoto from "@/assets/bajtlove-koncert-saksofon.jpeg.asset.json";
import bassPhoto from "@/assets/bajtlove-koncert-bas.jpeg.asset.json";
import percussionPhoto from "@/assets/bajtlove-koncert-perkusja.jpeg.asset.json";

export const Route = createFileRoute("/bajtlove-granie/koncerty")({
  head: () => ({
    meta: [
      { title: "Koncerty — BajtLOVE Granie" },
      { name: "description", content: "Familijne koncerty BajtLOVE Granie: MINI FLOW, FAMILY FLOW i FESTIVAL FLOW — muzyka na żywo, która łączy dzieci i rodziców." },
      { property: "og:title", content: "Koncerty — BajtLOVE Granie" },
      { property: "og:description", content: "Muzyka, która łączy dzieci i rodziców. Poznaj familijne koncerty BajtLOVE Granie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/bajtlove-granie/koncerty" }],
  }),
  component: Koncerty,
});

const photos = [
  { src: guitarPhoto.url, alt: "Gitarzystka podczas plenerowego koncertu BajtLOVE Granie" },
  { src: saxPhoto.url, alt: "Saksofonista podczas koncertu BajtLOVE Granie" },
  { src: bassPhoto.url, alt: "Basistka i gitarzystka podczas koncertu BajtLOVE Granie" },
  { src: percussionPhoto.url, alt: "Perkusista podczas koncertu BajtLOVE Granie" },
];

function FeatureList({ items }: { items: string[] }) {
  return <ul className="mt-5 grid gap-2 text-sm font-semibold uppercase text-foreground sm:grid-cols-2">
    {items.map((item) => <li key={item} className="border-l-2 border-primary pl-3">{item}</li>)}
  </ul>;
}

function Koncerty() {
  return <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
    <BajtLoveNavigation />
    <header className="mt-14 border-l-4 border-primary pl-6">
      <p className="text-sm font-semibold uppercase"><BajtLoveWordmark /></p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-foreground md:text-5xl">Koncerty</h1>
      <p className="mt-4 text-xl font-semibold text-primary">Muzyka, która łączy dzieci i rodziców.</p>
    </header>

    <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground">
      <p className="font-semibold">Muzyka nie jest produktem. Jest przestrzenią spotkania i nośnikiem wartości.</p>
      <p><BajtLoveWordmark /> to artystyczny projekt familijnych wydarzeń muzycznych, który poprzez muzykę na żywo łączy dzieci, rodziców i całe rodziny. Tworzymy koncerty, w których publiczność nie jest tylko widzem — staje się częścią muzycznej opowieści.</p>
      <p>Śpiewamy, gramy, poruszamy się, bawimy i wspólnie przeżywamy muzykę. Zależy nam na tym, aby podczas koncertu wydarzyło się coś więcej niż tylko spotkanie ze sceną. Chcemy tworzyć prawdziwą przestrzeń bliskości, radości i wspólnego doświadczania.</p>
    </div>

    <div className="mt-12 grid gap-4 sm:grid-cols-2">
      {photos.map((photo, index) => <figure key={photo.src} className={index === 0 ? "sm:col-span-2" : ""}>
        <img src={photo.src} alt={photo.alt} className={`w-full rounded-md object-cover ${index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`} loading={index === 0 ? "eager" : "lazy"} />
      </figure>)}
    </div>

    <div className="mt-14 space-y-6 text-lg leading-relaxed text-foreground">
      <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">Muzyka na żywo — tam, gdzie jest potrzebna.</h2>
      <p>BajtLOVE Granie łączy doświadczenie sceniczne, pracę z dziećmi i rodzinami oraz działalność koncertową w całej Polsce.</p>
      <p>Gramy w domach kultury, szkołach, przedszkolach i bawialniach, ale również w miejscach, w których dostęp do kultury i muzyki na żywo jest szczególnie ważny — w szpitalach, hospicjach i na oddziałach szpitalnych, również neonatologicznych czy specjalistycznych oddziałach dziecięcych.</p>
      <p>Chcemy docierać także do mniejszych miejscowości i ośrodków wiejskich, w których oferta kulturalna jest ograniczona. Wierzymy, że dostęp do żywej muzyki i wspólnego przeżywania sztuki powinien być możliwy niezależnie od miejsca zamieszkania, wieku czy sytuacji życiowej.</p>
      <p>Dlatego nie mamy jednego sztywnego formatu. Wielkość zespołu i forma wydarzenia mogą być dopasowane do przestrzeni, charakteru wydarzenia, możliwości logistycznych i budżetu organizatora.</p>
    </div>

    <h2 className="mt-16 text-center font-display text-4xl font-semibold text-foreground">Koncerty FLOW</h2>
    <div className="mt-8 grid gap-6 lg:grid-cols-3">
      <article className="rounded-md border border-primary/40 bg-primary/10 p-6">
        <h3 className="font-display text-3xl font-semibold text-primary">MINI FLOW</h3>
        <p className="mt-2 font-semibold text-foreground">Kameralne spotkanie z muzyką dla najmłodszych</p>
        <p className="mt-3 text-sm font-semibold uppercase text-muted-foreground">Żłobki • Przedszkola • Szkoły • Bawialnie</p>
        <p className="mt-5 leading-relaxed text-foreground">To kameralny, pełen interakcji format, w którym muzyka spotyka się z zabawą i edukacją. Dzieci mogą śpiewać, poruszać się, reagować na muzykę i aktywnie uczestniczyć w wydarzeniu.</p>
        <FeatureList items={["Format kameralny", "Interakcja z dziećmi", "Charakter edukacyjno-muzyczny", "Elastyczny skład — solo lub duet (gitara + sax)"]} />
      </article>
      <article className="rounded-md border border-secondary/60 bg-secondary/20 p-6">
        <h3 className="font-display text-3xl font-semibold text-secondary-foreground">FAMILY FLOW</h3>
        <p className="mt-2 font-semibold text-foreground">Pełny koncert familijny dla małych i dużych</p>
        <p className="mt-5 leading-relaxed text-foreground">To koncert, podczas którego cała rodzina spotyka się przy muzyce. Żywe brzmienie zespołu, energia sceny i interakcja z publicznością sprawiają, że dzieci i dorośli wspólnie stają się częścią wydarzenia.</p>
        <FeatureList items={["Kwartet: wokal/gitara • bas • perkusja • sax/flet", "Żywe brzmienie", "Interakcja z publicznością", "Animacje", "Wydarzenie dla całej rodziny"]} />
      </article>
      <article className="rounded-md border border-accent/60 bg-accent/20 p-6">
        <h3 className="font-display text-3xl font-semibold text-accent-foreground">FESTIVAL FLOW</h3>
        <p className="mt-2 font-semibold text-foreground">Muzyczna energia na dużą scenę</p>
        <p className="mt-5 leading-relaxed text-foreground">Największy i najbardziej widowiskowy format BajtLOVE Grania. Pełny skład zespołu, sceniczne show i dużo energii — stworzony z myślą o wydarzeniach, podczas których muzyka ma porwać dużą publiczność.</p>
        <FeatureList items={["Pełny zespół — 5–7 osób", "Sceniczne, dynamiczne show", "Duże wydarzenia plenerowe", "Festiwale • Festyny • Jarmarki • Eventy"]} />
        <p className="mt-5 font-semibold text-foreground">Energia i ogień — dla publiczności, która chce nie tylko słuchać, ale przede wszystkim być razem.</p>
      </article>
    </div>

    <div className="mt-16 space-y-6 text-lg leading-relaxed text-foreground">
      <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">Muzyczna bajka, światło czy ekologia?</h2>
      <p>Każdy koncert możemy wzbogacić o dodatkowe elementy, które nadają wydarzeniu własny charakter.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-md bg-primary/10 p-5"><h3 className="font-semibold uppercase text-primary">Muzyczna opowieść</h3><p className="mt-2 text-base">Koncert staje się bajką, w której kolejne piosenki tworzą wspólną historię.</p></div>
        <div className="rounded-md bg-secondary/20 p-5"><h3 className="font-semibold uppercase text-secondary-foreground">LED show</h3><p className="mt-2 text-base">Kolorowe, dynamiczne widowisko kuglarskie, które dodaje scenie magii i energii — niemal jak w cyrku.</p></div>
        <div className="rounded-md bg-accent/20 p-5"><h3 className="font-semibold uppercase text-accent-foreground">Quiz ekologiczny</h3><p className="mt-2 text-base">Muzyka spotyka się z edukacją, a wspólna zabawa staje się okazją do rozmowy o przyrodzie i naszej planecie.</p></div>
      </div>
      <p>Koncert o emocjach, o straszkach śląskich, o zagrożonych gatunkach zwierząt, o kosmosie, w stylu hawajskim, western. To nie bajka, z nami to wszystko jest możliwe.</p>
      <p>Możemy również połączyć kilka elementów i stworzyć wydarzenie dokładnie odpowiadające charakterowi konkretnej okazji.</p>

      <h2 className="pt-8 font-display text-3xl font-semibold text-primary md:text-4xl">Tworzymy wydarzenia szyte na miarę, pod projekt!</h2>
      <p className="font-semibold">Nie wierzymy w jeden uniwersalny scenariusz.</p>
      <p>Repertuar, tematykę, długość koncertu, skład zespołu i formę wydarzenia dopasowujemy do potrzeb organizatora, miejsca i publiczności.</p>
      <p>Możemy stworzyć koncert wokół konkretnego tematu, wydarzenia lub kampanii. Jeśli potrzebujesz — napiszemy piosenkę na zadany temat, przygotujemy autorski scenariusz albo zmienimy skład instrumentalny.</p>
      <p>BajtLOVE Granie może być kameralnym spotkaniem dla kilkunastu dzieci, rodzinnym koncertem dla kilkuset osób albo dużym plenerowym wydarzeniem, które angażuje całą publiczność.</p>
      <blockquote className="mt-10 border-l-4 border-primary pl-6 font-display text-2xl font-semibold text-primary md:text-3xl">
        Bo muzyka zaczyna się wtedy, kiedy jesteśmy razem.<br />BajtLOVE Granie — gramy po to, żeby spotkać się naprawdę.
      </blockquote>
    </div>
  </section>;
}