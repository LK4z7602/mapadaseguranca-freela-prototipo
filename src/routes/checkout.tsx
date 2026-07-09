import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { TRAININGS } from "@/lib/nrs";
import { NRBadge } from "@/components/site/NRBadge";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Mapa da Segurança" },
      { name: "description", content: "Revise seu pedido e finalize a compra." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

function parsePrice(p: string) {
  return Number(p.replace(/[^\d]/g, "")) || 0;
}

function CheckoutPage() {
  const items = [
    { ...TRAININGS[0], qty: 4 },
    { ...TRAININGS[2], qty: 4 },
  ];
  const subtotal = items.reduce((s, i) => s + parsePrice(i.price) * i.qty, 0);
  const fmt = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  return (
    <section className="container-page py-14 md:py-20">
      <ol className="flex flex-wrap items-center gap-3 text-xs font-medium">
        {["Carrinho", "Revisão", "Pagamento"].map((s, i) => {
          const active = i === 1;
          const done = i === 0;
          return (
            <li key={s} className="flex items-center gap-2">
              <span
                className={
                  "grid h-6 w-6 place-items-center rounded-full border text-[10px] " +
                  (active
                    ? "border-primary bg-primary text-primary-foreground"
                    : done
                      ? "border-safety bg-safety/10 text-safety-foreground"
                      : "border-border text-muted-foreground")
                }
              >
                {done ? <CheckCircle2 className="h-3.5 w-3.5" /> : i + 1}
              </span>
              <span className={active ? "text-foreground" : "text-muted-foreground"}>
                {s}
              </span>
              {i < 2 && <span className="h-px w-6 bg-border" />}
            </li>
          );
        })}
      </ol>

      <div className="mt-8 max-w-2xl">
        <span className="eyebrow">Revisão do pedido</span>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Tudo pronto para finalizar sua compra.
        </h1>
        <p className="mt-3 text-muted-foreground">
          Confira os treinamentos e o valor total. Ao confirmar, você será
          direcionado para a etapa de pagamento.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-border bg-white">
          <div className="border-b border-border p-6">
            <h2 className="font-display text-lg font-semibold">Itens do pedido</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {items.length} treinamentos · {items.reduce((s, i) => s + i.qty, 0)} participantes
            </p>
          </div>
          <ul className="divide-y divide-border">
            {items.map((i) => (
              <li key={i.slug} className="grid gap-4 p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
                <NRBadge number={i.nrNumber} />
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {i.modality} · {i.hours}h
                  </div>
                  <div className="mt-0.5 truncate font-display text-base font-semibold text-foreground">
                    {i.title}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {i.qty} participantes × {fmt(parsePrice(i.price))}
                  </div>
                </div>
                <div className="text-right font-display text-base font-semibold text-foreground">
                  {fmt(parsePrice(i.price) * i.qty)}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-white p-6">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span>{fmt(subtotal)}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm text-muted-foreground">
              <span>Impostos</span>
              <span>Inclusos</span>
            </div>
            <div className="mt-4 flex justify-between border-t border-border pt-4">
              <span className="text-sm font-semibold text-foreground">Total</span>
              <span className="font-display text-2xl font-semibold text-foreground">
                {fmt(subtotal)}
              </span>
            </div>

            <a
              href="https://example.com"
              target="_blank"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-semibold cursor-pointer text-primary-foreground shadow-(--shadow-glow)"
            >
              Comprar <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-4 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-safety" /> Pagamento seguro
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-safety" /> Certificado emitido em até 48h
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-safety" /> Nota fiscal por e-mail
              </div>
            </div>

            <Link
              to="/carrinho"
              className="mt-4 block text-center text-xs font-medium text-muted-foreground hover:text-primary"
            >
              ← Voltar ao carrinho
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
