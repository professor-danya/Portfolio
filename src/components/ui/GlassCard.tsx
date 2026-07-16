import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-xl",
        hover &&
          "transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]",
        className,
      )}
    >
      {children}
    </div>
  );
}
