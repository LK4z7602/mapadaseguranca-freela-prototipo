import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  FileBadge,
  GraduationCap,
  MonitorPlay,
  ShieldCheck,
  Users,
} from "lucide-react";
import { getTraining, TRAININGS } from "@/lib/nrs";
import { NRBadge } from "@/components/site/NRBadge";
import { TrainingCard } from "@/components/site/TrainingCard";
import heroImg from "@/assets/height-work.jpg";

export const Route = createFileRoute("/treinamentos/$slug")({
  loader: ({ params }) => {
    const training = getTraining(params.slug);
    if (!training) throw notFound();
    return { training };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Treinamento não encontrado — Mapa da Segurança" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = loaderData.training;
    return {
      meta: [
        { title: `${t.nr} — ${t.title} · Mapa da Segurança` },
        { name: "description", content: t.short },
        { property: "og:title", content: `${t.nr} — ${t.title}` },
        { property: "og:description", content: t.short },
      ],
    };
  },
  component: TrainingDetail,
});

const FAQ = [
  {
    q: "O certificado é reconhecido para fins de fiscalização?",
    a: "Sim. Emitimos certificação digital assinada e com verificação por QR code, aderente ao que exige o MTE.",
  },
  {
    q: "Preciso ter conhecimento prévio?",
    a: "Não. O curso é estruturado para partir dos fundamentos e evoluir até as práticas exigidas pela norma.",
  },
  {
    q: "É possível fazer turmas fechadas para minha empresa?",
    a: "Sim, oferecemos in company presencial ou por videoconferência, com cronograma e conteúdo customizados.",
  },
];

function TrainingDetail() {
  const { training } = Route.useLoaderData();
  const related = TRAININGS.filter(
    (t) => t.slug !== training.slug && t.category === training.category,
  ).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-6 text-xs text-muted-foreground">
          <nav className="flex items-center gap-1.5">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/treinamentos" className="hover:text-primary">Treinamentos</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{training.nr}</span>
          </nav>
        </div>
      </section>

      <section className="container-page grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr] lg:gap-14 lg:py-20">
        <div>
          <div className="flex items-center gap-4">
            <NRBadge number={training.nrNumber} size="lg" />
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {training.category}
              </span>
              <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                {training.title}
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {training.short}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={heroImg}
              alt={training.title}
              width={1200}
              height={900}
              loading="lazy"
              className="h-72 w-full object-cover md:h-96"
            />
          </div>

          {/* Tabs-like sections */}
          <div className="mt-14 space-y-14">
            <div>
              <h2 className="font-display text-2xl font-semibold">Sobre o curso</h2>
              <p className="mt-3 text-muted-foreground">
                O treinamento em {training.nr} — {training.title} capacita profissionais
                a atender integralmente os requisitos da norma, com ênfase em
                análise de risco, procedimentos operacionais seguros e uso
                correto de equipamentos. A abordagem combina fundamentos
                técnicos e situações práticas comuns em plantas reais.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Conteúdo programático</h2>
              <ul className="mt-4 divide-y divide-border rounded-2xl border border-border bg-white">
                {training.content.map((c: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 p-5">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-soft text-xs font-semibold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-foreground">{c}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Para quem é indicado</h2>
              <p className="mt-3 text-muted-foreground">{training.audience}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Instrutor responsável</h2>
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-border bg-white p-5">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary-soft font-display text-lg font-semibold text-primary">
                  {training.instructor.initials}
                </span>
                <div>
                  <div className="font-semibold text-foreground">
                    {training.instructor.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {training.instructor.role}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Perguntas frequentes</h2>
              <div className="mt-4 space-y-2">
                {FAQ.map((f, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-border bg-white p-5"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground">
                      {f.q}
                      <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sticky booking card */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Investimento por participante
            </div>
            <div className="mt-1 font-display text-3xl font-semibold text-foreground">
              {training.price}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              À vista ou em até 3x sem juros
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <Row icon={Clock} label="Carga horária" value={`${training.hours} horas`} />
              <Row icon={MonitorPlay} label="Modalidade" value={training.modality} />
              <Row icon={GraduationCap} label="Nível" value={training.level} />
              <Row icon={FileBadge} label="Validade" value={training.validity} />
              <Row icon={Calendar} label="Próxima turma" value="A definir com cliente" />
              <Row icon={Users} label="Formato" value="Turmas abertas e in company" />
            </div>

            <Link
              to="/carrinho"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
            >
              Matricular-se <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contato"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/40"
            >
              Consultar valor in company
            </Link>

            <div className="mt-5 flex items-center gap-2 rounded-xl bg-surface px-3 py-2 text-[11px] text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-safety" />
              Certificado digital com QR code
            </div>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-surface">
          <div className="container-page py-16">
            <div className="flex items-end justify-between">
              <h2 className="font-display text-2xl font-semibold">
                Treinamentos relacionados
              </h2>
              <Link
                to="/treinamentos"
                className="text-sm font-semibold text-primary"
              >
                Ver todos
              </Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((t) => (
                <TrainingCard key={t.slug} training={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Row({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-border pt-3 first:border-t-0 first:pt-0">
      <span className="inline-flex items-center gap-2 text-muted-foreground">
        <Icon className="h-4 w-4" /> {label}
      </span>
      <span className="text-right font-medium text-foreground">{value}</span>
    </div>
  );
}
