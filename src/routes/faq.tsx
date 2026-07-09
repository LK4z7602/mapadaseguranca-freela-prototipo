import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronRight, Search } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas frequentes — Mapa da Segurança" },
      {
        name: "description",
        content:
          "Dúvidas sobre nossos cursos de NR, pagamento, certificação e legislação.",
      },
      { property: "og:title", content: "Perguntas frequentes — Mapa da Segurança" },
      { property: "og:description", content: "Respostas rápidas sobre nossos treinamentos em NRs." },
    ],
  }),
  component: FAQPage,
});

const GROUPS = [
  {
    title: "Sobre os cursos",
    items: [
      {
        q: "Quais Normas Regulamentadoras vocês oferecem?",
        a: "Trabalhamos hoje com NR-05, NR-06, NR-10, NR-11, NR-12, NR-17, NR-18, NR-20, NR-23, NR-33 e NR-35. Turmas customizadas podem cobrir outras NRs — fale com a gente.",
      },
      {
        q: "As turmas são presenciais ou online?",
        a: "Temos as duas modalidades. Alguns cursos exigem parte prática presencial por norma; nesses casos operamos em modelo híbrido.",
      },
      {
        q: "Posso solicitar treinamento in company?",
        a: "Sim. Fazemos turmas fechadas no cliente, com cronograma e conteúdo ajustados à sua operação.",
      },
    ],
  },
  {
    title: "Pagamento",
    items: [
      {
        q: "Quais formas de pagamento aceitam?",
        a: "PIX, boleto, cartão em até 3x sem juros e faturamento para empresas mediante análise.",
      },
      {
        q: "É possível emitir nota fiscal com dados corporativos?",
        a: "Sim. A NF-e é emitida automaticamente após a confirmação do pagamento.",
      },
    ],
  },
  {
    title: "Certificação",
    items: [
      {
        q: "O certificado tem validade legal?",
        a: "Sim. Emitimos certificação digital com QR code de verificação, aderente ao que exige o MTE.",
      },
      {
        q: "Qual a validade do certificado?",
        a: "Depende da NR. NR-35 tem validade de 2 anos, NR-33 de 1 ano, e assim por diante. A validade fica destacada em cada curso.",
      },
    ],
  },
  {
    title: "Legislação",
    items: [
      {
        q: "Vocês acompanham as atualizações das NRs?",
        a: "Sim. Todo o conteúdo é revisado a cada atualização normativa e as turmas ativas recebem material complementar.",
      },
      {
        q: "Vocês ajudam em auditorias e fiscalizações?",
        a: "Sim, nosso time de consultoria apoia auditorias internas e prepara a documentação para fiscalizações do MTE.",
      },
    ],
  },
] as const;

function FAQPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return GROUPS;
    return GROUPS.map((g) => ({
      ...g,
      items: g.items.filter(
        (i) => i.q.toLowerCase().includes(term) || i.a.toLowerCase().includes(term),
      ),
    })).filter((g) => g.items.length > 0);
  }, [q]);

  return (
    <section className="container-page py-14 md:py-20">
      <div className="max-w-2xl">
        <span className="eyebrow">FAQ</span>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Perguntas frequentes.
        </h1>
        <p className="mt-3 text-muted-foreground">
          Respostas rápidas sobre cursos, pagamento, certificação e legislação.
        </p>

        <label className="mt-8 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-3 focus-within:border-primary/50">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Pesquisar dúvida…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
      </div>

      <div className="mt-14 space-y-14">
        {filtered.map((g) => (
          <div key={g.title} className="grid gap-6 lg:grid-cols-[220px_1fr]">
            <h2 className="font-display text-xl font-semibold text-foreground">
              {g.title}
            </h2>
            <div className="space-y-2">
              {g.items.map((it, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-white p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground">
                    {it.q}
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {it.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border bg-white p-10 text-center text-sm text-muted-foreground">
            Nenhuma pergunta encontrada. Tente outro termo.
          </div>
        )}
      </div>
    </section>
  );
}
