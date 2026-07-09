import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, GraduationCap, MonitorPlay } from "lucide-react";
import type { Training } from "@/lib/nrs";
import { NRBadge } from "./NRBadge";
import  Benzeno  from "../../assets/benzeno.jpg"

export function TrainingCard({ training }: { training: Training }) {
  return (
    <Link
      to="/treinamentos/$slug"
      params={{ slug: training.slug }}
      className="group relative flex flex-col justify-between rounded-2xl max-h-150 border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-(--shadow-card) "
    >
      <div>
        <img src={Benzeno} alt="teste" className="rounded-sm mb-4" />
      </div>
      <div className="flex items-center justify-between">
        <NRBadge number={training.nrNumber} />
        <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {training.category}
        </span>
      </div>

      <div className="mt-3">
        <h3 className="text-lg font-semibold leading-snug text-foreground">
          {training.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {training.short}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" /> {training.hours}h
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MonitorPlay className="h-3.5 w-3.5" /> {training.modality}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <GraduationCap className="h-3.5 w-3.5" /> {training.level}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            A partir de
          </div>
          <div className="font-display text-base font-semibold text-foreground">
            {training.price}
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5">
          Ver detalhes
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
