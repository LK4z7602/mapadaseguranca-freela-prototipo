import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import { CATEGORIES, type Category, TRAININGS } from "@/lib/nrs";
import { TrainingCard } from "@/components/site/TrainingCard";

export const Route = createFileRoute("/treinamentos/")({
  head: () => ({
    meta: [
      { title: "Catálogo de treinamentos em NRs — Mapa da Segurança" },
      {
        name: "description",
        content:
          "Catálogo completo de treinamentos em Normas Regulamentadoras: NR-05, NR-06, NR-10, NR-11, NR-12, NR-17, NR-18, NR-20, NR-23, NR-33 e NR-35.",
      },
      { property: "og:title", content: "Catálogo de treinamentos em NRs — Mapa da Segurança" },
      {
        property: "og:description",
        content: "Presencial, EAD e in company. Filtre por categoria, modalidade e carga horária.",
      },
    ],
  }),
  component: CatalogPage,
});

const MODALITIES = ["100% Online EAD", "100% Online EAD", "100% Online EAD"] as const;

function CatalogPage() {
  const [query, setQuery] = useState("");
  const [cats, setCats] = useState<Category[]>([]);
  const [mods, setMods] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return TRAININGS.filter((t) => {
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.nr.toLowerCase().includes(q) ||
        t.short.toLowerCase().includes(q);
      const matchC = cats.length === 0 || cats.includes(t.category);
      const matchM = mods.length === 0 || mods.includes(t.modality);
      return matchQ && matchC && matchM;
    });
  }, [query, cats, mods]);

  const toggle = <T extends string>(list: T[], v: T, set: (v: T[]) => void) => {
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
  };

  return (
    <section className="container-page py-10 md:py-20 xl:max-w-full min-[1660px]:max-w-[75%]!">
      <div className="flex flex-col gap-6   md:justify-between">
        <div className="max-w-2xl">
          <span className="eyebrow">Catálogo</span>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Treinamentos de NRs <br /> Normas Regulamentadoras e Qualificação Profissional
          </h1>
          <p className="mt-3 text-muted-foreground">
            Todos os nossos treinamentos seguem as normas nacionais e são válidas em todo território
            brasileiro.
          </p>
        </div>

        <div className="mt-12 max-h-16">
          <label className="flex w-full max-w-full md:max-w-sm items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 focus-within:border-primary/50 mb-10">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por NR, tema…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl border border-border bg-white p-5 lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-2 border-b border-border pb-3 text-sm font-semibold text-foreground">
            <Filter className="h-4 w-4 text-primary" /> Filtros
          </div>

          <div className="mt-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Categoria
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {CATEGORIES.map((c) => {
                const active = cats.includes(c);
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggle(cats, c, setCats)}
                    className={
                      "rounded-full border px-2.5 py-1 text-xs transition-colors " +
                      (active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-white text-muted-foreground hover:border-primary/40")
                    }
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Modalidade
              </div>
              <div className="mt-3 space-y-2">
                {MODALITIES.map((m) => (
                  <label key={m} className="flex cursor-pointer items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={mods.includes(m)}
                      onChange={() => toggle(mods, m, setMods)}
                      className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-foreground">{m}</span>
                  </label>
                ))}
              </div>
            </div> */}

          <button
            type="button"
            onClick={() => {
              setCats([]);
              setMods([]);
              setQuery("");
            }}
            className="mt-6 w-full rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            Limpar filtros
          </button>
        </aside>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((t) => (
            <TrainingCard key={t.slug} training={t} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-border bg-white p-10 text-center text-sm text-muted-foreground">
              Nenhum treinamento encontrado com esses filtros.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
