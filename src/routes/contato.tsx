import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Mapa da Segurança" },
      {
        name: "description",
        content: "Fale com a Mapa da Segurança. Diagnóstico e proposta em até 24 horas úteis.",
      },
      { property: "og:title", content: "Contato — Mapa da Segurança" },
      { property: "og:description", content: "Estamos prontos para montar o programa de NRs da sua operação." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-page py-14 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="eyebrow">Fale com a gente</span>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Diagnóstico gratuito. Proposta em até 24 horas.
          </h1>
          <p className="mt-3 text-muted-foreground">
            Preencha o formulário ao lado ou entre em contato pelos canais
            abaixo. Nosso time responde em horário comercial.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { icon: Phone, title: "Telefone", value: "+55 (11) 4004-0000" },
              { icon: MessageCircle, title: "WhatsApp", value: "+55 (11) 99999-0000" },
              { icon: Mail, title: "E-mail", value: "contato@goodsafety.com.br" },
              { icon: MapPin, title: "Endereço", value: "Av. Paulista, 1000 · São Paulo/SP" },
              { icon: Clock, title: "Atendimento", value: "Segunda a sexta, 8h às 18h" },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <c.icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.title}
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-foreground">
                    {c.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <div className="relative h-56 bg-surface-muted">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,var(--color-primary-soft)_0%,transparent_50%),linear-gradient(120deg,transparent_0%,transparent_49%,var(--color-border)_49%,var(--color-border)_51%,transparent_51%),linear-gradient(60deg,transparent_0%,transparent_49%,var(--color-border)_49%,var(--color-border)_51%,transparent_51%)] bg-[length:100%_100%,42px_42px,42px_42px]"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="mt-3 font-display text-sm font-semibold text-foreground">
                  Mapa da Segurança HQ
                </div>
                <div className="text-xs text-muted-foreground">
                  Av. Paulista, 1000 · São Paulo/SP
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          className="rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-card)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="font-display text-2xl font-semibold">Envie sua mensagem</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Conte um pouco sobre sua operação e as NRs de interesse.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Field label="Nome" placeholder="Seu nome" />
            <Field label="Empresa" placeholder="Razão social" />
            <Field label="E-mail" type="email" placeholder="voce@empresa.com" />
            <Field label="Telefone" placeholder="(11) 99999-0000" />
          </div>

          <div className="mt-4">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Interesse
            </label>
            <select className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary/50">
              <option>Turma aberta</option>
              <option>Turma in company</option>
              <option>Consultoria em NRs</option>
              <option>Outro</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Mensagem
            </label>
            <textarea
              rows={5}
              placeholder="Como podemos ajudar?"
              className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary/50"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
          >
            Enviar mensagem <Send className="h-4 w-4" />
          </button>

          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Ao enviar você concorda com nossa política de privacidade.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary/50"
      />
    </label>
  );
}
