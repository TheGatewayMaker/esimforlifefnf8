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
    <div
      className="group relative rounded-lg border overflow-hidden transition-all duration-300 h-full hover:-translate-y-2 hover:shadow-md"
      style={{
        background: "rgba(61, 207, 220, 0.05)",
        borderColor: "rgba(61, 207, 220, 0.2)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Content */}
      <div className="relative p-6 md:p-7 flex flex-col h-full">
        {/* Icon container */}
        <div
          className="flex h-12 sm:h-13 md:h-14 w-12 sm:w-13 md:w-14 items-center justify-center rounded-lg text-accent flex-shrink-0 mb-4 md:mb-5 transition-all duration-300 group-hover:-translate-y-1"
          style={{
            background: "rgba(61, 207, 220, 0.12)",
            borderColor: "rgba(61, 207, 220, 0.3)",
            border: "1px solid rgba(61, 207, 220, 0.3)",
            boxShadow: "0 2px 6px rgba(61, 207, 220, 0.15)",
          }}
        >
          {icon}
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-base sm:text-lg md:text-lg font-bold tracking-tight mb-2 text-foreground leading-snug">
            {title}
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="mt-4 md:mt-5 h-0.5 w-8 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      </div>
    </div>
  );
}
