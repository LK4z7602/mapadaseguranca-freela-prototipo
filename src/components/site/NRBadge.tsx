import { cn } from "@/lib/utils";

interface NRBadgeProps {
  number: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function NRBadge({ number, size = "md", className }: NRBadgeProps) {
  const dims = {
    sm: "h-10 w-10 text-[10px]",
    md: "h-14 w-14 text-xs",
    lg: "h-20 w-20 text-sm",
  }[size];
  const numSize = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  }[size];
  return (
    <div
      className={cn(
        "shrink-0 flex flex-col items-center justify-center rounded-full border border-primary/40 bg-white text-primary font-display font-semibold shadow-[0_0_0_4px_var(--color-primary-soft)]",
        dims,
        className,
      )}
      aria-label={`Norma Regulamentadora ${number}`}
    >
      <span className="tracking-[0.2em] text-[0.6em] leading-none opacity-70">NR</span>
      <span className={cn("leading-none mt-0.5", numSize)}>{number}</span>
    </div>
  );
}
