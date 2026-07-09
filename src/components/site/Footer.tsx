import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, ShieldCheck, Youtube } from "lucide-react";

const COLS = [
  {
    title: "Treinamentos",
    links: [
      { to: "/treinamentos", label: "Catálogo completo" },
      { to: "/treinamentos", label: "Trabalho em Altura" },
      { to: "/treinamentos", label: "Espaço Confinado" },
      { to: "/treinamentos", label: "NR-10 Elétrica" },
      { to: "/treinamentos", label: "CIPA" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { to: "/sobre", label: "Sobre a Mapa da Segurança" },
      { to: "/sobre", label: "Nossos instrutores" },
      { to: "/faq", label: "Perguntas frequentes" },
      { to: "/contato", label: "Contato" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/", label: "Política de privacidade" },
      { to: "/", label: "Termos de uso" },
      { to: "/", label: "Cancelamento e reembolso" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Mapa da Segurança
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Treinamentos em Normas Regulamentadoras para empresas que levam
              segurança e compliance a sério.
            </p>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>Av. Paulista, 1000 · São Paulo/SP</p>
              <p>+55 (11) 4004-0000 · contato@goodsafety.com.br</p>
              <p>Seg. a Sex., 8h às 18h</p>
            </div>

          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <Link
                      to={l.to}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mapa da Segurança Treinamentos LTDA — CNPJ 00.000.000/0001-00.
            Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-safety/40 bg-white px-3 py-1 text-[11px] font-medium text-safety-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-safety" />
              Conforme MTE
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-safety/40 bg-white px-3 py-1 text-[11px] font-medium text-safety-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-safety" />
              Certificado digital
            </span>
            <div className="ml-2 flex items-center gap-1">
              {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label="Rede social"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
