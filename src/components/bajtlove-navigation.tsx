import { Link } from "@tanstack/react-router";

const sections = [
  { label: "Koncerty", to: "/bajtlove-granie/koncerty" },
  {
    label: "Warsztaty umuzykalniające",
    to: "/bajtlove-granie/warsztaty-umuzykalniajace",
  },
  {
    label: "Songwriting i produkcja muzyki",
    to: "/bajtlove-granie/songwriting-i-produkcja-muzyki",
  },
] as const;

export function BajtLoveNavigation() {
  return (
    <nav aria-label="Obszary BajtLOVE Granie" className="grid gap-3 md:grid-cols-3">
      {sections.map((section, index) => (
        <Link
          key={section.to}
          to={section.to}
          className="flex min-h-24 items-center justify-center rounded-md border border-border bg-card px-5 py-4 text-center text-sm font-semibold uppercase leading-snug text-foreground transition-colors hover:border-primary hover:text-primary"
          activeProps={{
            className:
              index === 0
                ? "border-primary bg-primary/10 text-primary"
                : index === 1
                  ? "border-secondary bg-secondary/20 text-secondary-foreground"
                  : "border-accent bg-accent/20 text-accent-foreground",
          }}
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
}

export function BajtLoveWordmark() {
  return (
    <span className="font-display font-semibold">
      <span className="text-primary">Bajt</span>
      <span className="text-secondary-foreground">LOVE</span>
      <span className="text-accent-foreground"> Granie</span>
    </span>
  );
}