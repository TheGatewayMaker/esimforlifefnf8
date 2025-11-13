import { ReactNode } from "react";

export default function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="group relative rounded-xl md:rounded-2xl border border-border/60 bg-card/60 p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
      <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex flex-col sm:flex-row sm:items-start gap-3 md:gap-4">
        <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-lg md:rounded-xl bg-primary/10 text-primary flex-shrink-0">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg md:text-2xl font-black tracking-tight">
            {title}
          </h3>
          <p className="mt-1 text-xs md:text-sm text-foreground/80 leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
