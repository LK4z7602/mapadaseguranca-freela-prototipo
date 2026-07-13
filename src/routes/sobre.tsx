import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Compass, Heart, ShieldCheck, Target } from "lucide-react";
import classroom from "@/assets/training-classroom.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Mapa da Segurança — Treinamentos em NRs" },
      {
        name: "description",
        content:
          "Somos uma empresa de treinamentos em Normas Regulamentadoras com foco em profundidade técnica, didática moderna e certificação verificável.",
      },
      { property: "og:title", content: "Sobre a Mapa da Segurança" },
      {
        property: "og:description",
        content: "Conheça nossa história, valores e equipe de instrutores.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Target,
    title: "Missão",
    text: "Elevar o padrão de segurança do trabalho no Brasil através de treinamentos tecnicamente impecáveis.",
  },
  {
    icon: Compass,
    title: "Visão",
    text: "Ser a referência nacional em capacitação de NRs para operações industriais críticas.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Rigor técnico, respeito ao trabalhador, transparência com o cliente e melhoria contínua.",
  },
];

const TIMELINE = [
  { year: "2007", text: "Fundada por engenheiros de segurança em São Paulo com foco em NR-10." },
  { year: "2013", text: "Expansão para operações in company em construção, logística e energia." },
  { year: "2018", text: "Lançamento da plataforma EAD própria e certificação com QR code." },
  { year: "2022", text: "Mais de 40 mil profissionais capacitados e presença nacional." },
  { year: "2025", text: "Novo laboratório prático de altura e espaço confinado em Guarulhos." },
];

const TEAM = [
  { name: "Rafael Monteiro", role: "Eng. Seg. do Trabalho", ini: "RM" },
  { name: "Camila Duarte", role: "Técnica de Segurança sênior", ini: "CD" },
  { name: "Eduardo Prado", role: "Engenheiro Eletricista", ini: "EP" },
  { name: "Marina Alves", role: "Engenheira de Segurança", ini: "MA" },
  { name: "Paulo Henrique", role: "Instrutor Técnico", ini: "PH" },
  { name: "Luís Fernando", role: "Técnico de Segurança", ini: "LF" },
];

function AboutPage() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Sobre nós</span>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Segurança do trabalho é assunto técnico. Nós tratamos como tal.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              A Mapa da Segurança nasceu para preencher uma lacuna clara no mercado
              brasileiro: treinamentos de NR feitos com profundidade técnica,
              didática moderna e a seriedade que operações industriais exigem.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={classroom}
              alt="Sala de treinamento Mapa da Segurança"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <v.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow">Nossa história</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Quase duas décadas dedicadas a NRs, in company e turmas abertas.
            </h2>
          </div>
          <ol className="relative border-l border-border pl-8">
            {TIMELINE.map((t) => (
              <li key={t.year} className="mb-8 last:mb-0">
                <span className="absolute -left-2 grid h-4 w-4 place-items-center rounded-full border border-border bg-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <div className="font-display text-sm font-semibold text-primary">
                  {t.year}
                </div>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page py-20">
          <div className="max-w-2xl">
            <span className="eyebrow">Equipe</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Instrutores com registro, campo e didática.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((p) => (
              <div key={p.name} className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary-soft font-display text-lg font-semibold text-primary">
                  {p.ini}
                </span>
                <div>
                  <div className="font-semibold text-foreground">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: "+1.200", l: "empresas atendidas" },
            { v: "+48 mil", l: "certificados emitidos" },
            { v: "28", l: "instrutores no time" },
            { v: "4,9/5", l: "avaliação de clientes" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-white p-6">
              <div className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div> */}

        <div className="mt-12 flex flex-wrap items-center gap-3">
          {[
            { icon: ShieldCheck, label: "Conforme MTE" },
            { icon: Award, label: "Certificados verificáveis" },
            { icon: ShieldCheck, label: "ISO 9001" },
          ].map((c, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-safety/40 bg-white px-4 py-2 text-sm text-safety-foreground"
            >
              <c.icon className="h-4 w-4 text-safety" /> {c.label}
            </span>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-white p-8">
          <div>
            <h3 className="font-display text-2xl font-semibold">
              Vamos conversar sobre o programa da sua operação?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Diagnóstico gratuito com um dos nossos engenheiros.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Falar com consultor
          </Link>
        </div>
      </section>
    </>
  );
}
