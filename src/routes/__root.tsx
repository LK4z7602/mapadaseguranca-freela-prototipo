import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function NotFoundComponent() {
  return (
    <SiteChrome>
      <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="eyebrow">Erro 404</span>
        <h1 className="mt-3 font-display text-7xl font-semibold tracking-tight text-foreground md:text-8xl">
          4<span className="text-primary">0</span>4
        </h1>
        <p className="mt-4 max-w-md text-base text-muted-foreground">
          Essa página perdeu o EPI e não pode continuar no ambiente. Vamos te levar
          de volta para uma rota segura.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Voltar para a home
          </Link>
          <Link
            to="/treinamentos"
            className="inline-flex items-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/40"
          >
            Ver treinamentos
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <SiteChrome>
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-foreground">
          Algo saiu do procedimento
        </h1>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          Tivemos um imprevisto ao carregar esta página. Tente novamente ou
          retorne à home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground"
          >
            Ir para home
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mapa da Segurança — Treinamentos em Normas Regulamentadoras" },
      {
        name: "description",
        content:
          "Treinamentos em NRs de segurança do trabalho para empresas que exigem compliance, qualidade técnica e certificação reconhecida.",
      },
      { name: "author", content: "Mapa da Segurança" },
      { property: "og:title", content: "Mapa da Segurança — Treinamentos em NRs" },
      {
        property: "og:description",
        content:
          "Capacitação em Normas Regulamentadoras com instrutores certificados, modalidades presencial e EAD.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteChrome>
        <Outlet />
      </SiteChrome>
    </QueryClientProvider>
  );
}
