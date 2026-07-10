import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  FileBadge,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero-safety.jpg";
import { TRAININGS } from "@/lib/nrs";
import { TrainingCard } from "@/components/site/TrainingCard";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const STATS = [
  { value: "+1.200", label: "empresas atendidas" },
  { value: "+48 mil", label: "certificados emitidos" },
  { value: "4,9/5", label: "avaliação média" },
  { value: "18 anos", label: "de experiência" },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Diagnóstico",
    text: "Mapeamos as NRs aplicáveis ao seu setor e ao perfil da sua operação.",
  },
  {
    icon: CalendarCheck,
    title: "Plano de treinamento",
    text: "Montamos um cronograma personalizado — presencial, EAD ou híbrido.",
  },
  {
    icon: Users,
    title: "Capacitação",
    text: "Nossos instrutores conduzem as turmas com material técnico atualizado.",
  },
  {
    icon: FileBadge,
    title: "Certificação digital",
    text: "Emitimos certificados válidos, com QR code e assinatura verificável.",
  },
];

const TESTIMONIALS = [
  {
    name: "Ana Beatriz Souza",
    role: "Gerente de SST",
    company: "Metalúrgica Andrade",
    text: "A Mapa da Segurança padronizou o treinamento de NR-10 e NR-35 em três plantas. Zero não-conformidades na última auditoria.",
  },
  {
    name: "Ricardo Lemos",
    role: "Diretor de Operações",
    company: "Logtrans Brasil",
    text: "Time técnico impecável, plataforma EAD que funciona de verdade e certificados que passam em qualquer fiscalização.",
  },
  {
    name: "Fernanda Ito",
    role: "Coordenadora de RH",
    company: "Construnova",
    text: "Cronogramas pontuais, instrutores didáticos e um portal que facilita a gestão de reciclagens obrigatórias.",
  },
];

const LOGOS = ["ANDRADE", "LOGTRANS", "CONSTRUNOVA", "NORDESTE ENERGIA", "PETROMAR", "PLANTA ZL"];

function HomePage() {
  const featured = TRAININGS.filter((t) => t.featured).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_0%,var(--color-primary-soft)_0%,transparent_60%),radial-gradient(50%_50%_at_0%_100%,var(--color-surface-muted)_0%,transparent_70%)]" />
        <div className="container-page grid gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Compliance NR ponta a ponta
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Treinamentos de NR que a sua empresa precisa,
              <span className="text-primary"> com o profissionalismo que ela merece.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Capacitação técnica em Normas Regulamentadoras para operações
              industriais, construção civil, energia e logística. Presencial, EAD
              e in company — com certificação digital verificável.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/treinamentos"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-px"
              >
                Ver treinamentos <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40"
              >
                <MessageSquareText className="h-4 w-4" /> Falar com consultor
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              {[
                "Conforme MTE",
                "Instrutores registrados",
                "Certificado com QR code",
                "Turmas in company",
              ].map((f) => (
                <span key={f} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-safety" /> {f}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-primary-soft to-surface-muted" />
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-(--shadow-card)">
              <img
                src={heroImg}
                alt="Colaboradores em treinamento de segurança"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -left-10 bottom-8 hidden max-w-60 rounded-2xl border border-border bg-white p-4 shadow-(--shadow-card) md:block">
              <div className="flex items-center gap-2 text-xs font-semibold text-safety-foreground">
                <ShieldCheck className="h-4 w-4 text-safety" /> Certificado emitido
              </div>
              <div className="mt-2 font-display text-sm text-foreground">
                NR-35 · Trabalho em Altura
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">
                Verificação por QR code · válido por 2 anos
              </div>
            </div>

            <div className="absolute -right-10 top-8 hidden rounded-2xl border border-border bg-white p-3 shadow-(--shadow-card) md:block">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["MA", "RM", "CD"].map((i) => (
                    <span
                      key={i}
                      className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-primary-soft text-[10px] font-semibold text-primary"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-foreground">28 instrutores</div>
                  <div className="text-muted-foreground">certificados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      {/* <section className="border-y border-border bg-surface">
        <div className="container-page grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* FEATURED TRAININGS */}
      <section className="container-page py-20 md:py-28 border-t-2">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Treinamentos em destaque</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Os cursos que a maior parte das empresas contrata primeiro.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Todos aderentes às Normas Regulamentadoras vigentes e ministrados
              por instrutores com registro no MTE.
            </p>
          </div>
          <Link
            to="/treinamentos"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Ver catálogo completo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((t) => (
            <TrainingCard key={t.slug} training={t} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-surface">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow">Como funciona</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Da avaliação inicial à emissão do certificado, em 4 etapas.
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="relative rounded-2xl border border-border bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-xs font-semibold text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">Quem confia na Mapa da Segurança</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Times de SST em operações críticas escolhem a gente.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-white p-6"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-xs font-semibold text-primary">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-border pt-10">
          {LOGOS.map((l) => (
            <span
              key={l}
              className="font-display text-sm font-semibold tracking-[0.24em] text-muted-foreground/70"
            >
              {l}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-10 md:p-16">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_70%_at_100%_0%,var(--color-primary-soft)_0%,transparent_60%)]" />
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Turmas in company
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Monte um programa de NRs sob medida para a sua operação.
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Consultoria + treinamentos + reciclagens em um único plano. Fale
                com um especialista e receba uma proposta em até 24 horas.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Solicitar proposta <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/treinamentos"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                <Award className="h-4 w-4" /> Ver todos os treinamentos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
