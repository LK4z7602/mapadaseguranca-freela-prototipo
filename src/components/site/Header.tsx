import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, ShieldCheck, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/treinamentos", label: "Treinamentos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Atendimento PJ" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-transparent bg-background/80 backdrop-blur transition-all",
        scrolled && "border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-tight text-foreground">
              Mapa da Segurança
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Treinamentos em NR
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active && "bg-surface-muted text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/carrinho"
            aria-label="Carrinho"
            className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
              2
            </span>
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:translate-y-[-1px]"
          >
            Fale conosco
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface-muted"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <Link
                to="/carrinho"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium"
              >
                <ShoppingBag className="h-4 w-4" /> Carrinho
              </Link>
              <Link
                to="/contato"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
