import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, ShieldCheck, Trash2 } from "lucide-react";
import { TRAININGS } from "@/lib/nrs";
import { NRBadge } from "@/components/site/NRBadge";

export const Route = createFileRoute("/carrinho")({
  head: () => ({
    meta: [
      { title: "Carrinho — Mapa da Segurança" },
      { name: "description", content: "Revise os treinamentos selecionados antes de finalizar." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function parsePrice(p: string) {
  const n = Number(p.replace(/[^\d]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function CartPage() {
  const initial = [TRAININGS[0], TRAININGS[2]];
  const [items, setItems] = useState(
    initial.map((t) => ({ ...t, qty: 4 })),
  );
  const [coupon, setCoupon] = useState("");

  const subtotal = items.reduce((s, i) => s + parsePrice(i.price) * i.qty, 0);
  const discount = coupon.trim().toLowerCase() === "safety10" ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  const fmt = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  return (
    <section className="container-page py-14 md:py-20">
      <div className="max-w-2xl">
        <span className="eyebrow">Seu carrinho</span>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Revise os treinamentos antes de finalizar.
        </h1>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-border bg-white">
          {items.length === 0 ? (
            <div className="p-10 text-center text-sm text-muted-foreground">
              Seu carrinho está vazio.{" "}
              <Link to="/treinamentos" className="text-primary">
                Ver treinamentos
              </Link>
              .
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((item, idx) => (
                <li key={item.slug} className="grid gap-4 p-5 md:grid-cols-[auto_1fr_auto] md:items-center">
                  <NRBadge number={item.nrNumber} />
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.category} · {item.modality}
                    </div>
                    <Link
                      to="/treinamentos/$slug"
                      params={{ slug: item.slug }}
                      className="mt-0.5 block truncate font-display text-base font-semibold text-foreground hover:text-primary"
                    >
                      {item.title}
                    </Link>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button
                          onClick={() =>
                            setItems((arr) =>
                              arr.map((it, i) => (i === idx ? { ...it, qty: Math.max(1, it.qty - 1) } : it)),
                            )
                          }
                          className="grid h-8 w-8 place-items-center text-muted-foreground hover:text-foreground"
                          aria-label="Diminuir"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">
                          {item.qty}
                        </span>
                        <button
                          onClick={() =>
                            setItems((arr) =>
                              arr.map((it, i) => (i === idx ? { ...it, qty: it.qty + 1 } : it)),
                            )
                          }
                          className="grid h-8 w-8 place-items-center text-muted-foreground hover:text-foreground"
                          aria-label="Aumentar"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-xs text-muted-foreground">participantes</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
                    <div className="text-right">
                      <div className="font-display text-base font-semibold text-foreground">
                        {fmt(parsePrice(item.price) * item.qty)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {fmt(parsePrice(item.price))} / participante
                      </div>
                    </div>
                    <button
                      onClick={() => setItems((arr) => arr.filter((_, i) => i !== idx))}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-destructive/40 hover:text-destructive"
                      aria-label="Remover"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <aside className="rounded-2xl border border-border bg-white p-6 lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-display text-lg font-semibold">Resumo do pedido</h2>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>{fmt(subtotal)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Desconto</span>
              <span>{discount ? `- ${fmt(discount)}` : "—"}</span>
            </div>
            <div className="mt-3 flex justify-between border-t border-border pt-3 text-base font-semibold text-foreground">
              <span>Total</span>
              <span>{fmt(total)}</span>
            </div>
          </div>

          <div className="mt-5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Cupom
            </label>
            <div className="mt-2 flex gap-2">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Ex.: SAFETY10"
                className="min-w-0 flex-1 rounded-full border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary/50"
              />
              <button className="rounded-full bg-surface-muted px-4 text-sm font-semibold text-foreground">
                Aplicar
              </button>
            </div>
            {discount > 0 && (
              <p className="mt-2 text-xs text-safety-foreground">
                Cupom aplicado: 10% de desconto.
              </p>
            )}
          </div>

          <Link
            to="/checkout"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
          >
            Ir para o checkout
          </Link>

          <div className="mt-4 flex items-center gap-2 rounded-xl bg-surface px-3 py-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-safety" /> Pagamento seguro · nota fiscal
          </div>
        </aside>
      </div>
    </section>
  );
}
