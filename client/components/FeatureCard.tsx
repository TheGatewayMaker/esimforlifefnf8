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
    <div className="group relative rounded-2xl border overflow-hidden transition-all duration-300 h-full hover:-translate-y-2 hover:shadow-2xl">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-card to-card/80" />

      {/* Premium border gradient effect */}
      <div className="absolute inset-0 rounded-2xl border border-accent/20 group-hover:border-accent/40 transition-colors duration-300" />

      {/* Accent gradient overlay on hover */}
      <div className="absolute -inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative p-6 md:p-8 flex flex-col h-full">
        {/* Icon container with enhanced styling */}
        <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 text-accent flex-shrink-0 mb-4 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:from-accent/25 group-hover:to-accent/10">
          {icon}
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3 text-foreground">
            {title}
          </h3>
          <p className="text-sm md:text-base text-foreground/75 leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="mt-5 h-0.5 w-12 bg-gradient-to-r from-accent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
