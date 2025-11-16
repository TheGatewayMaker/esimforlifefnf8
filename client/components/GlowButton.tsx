import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  icon?: string;
  className?: string;
};

export default function GlowButton({ href, label, icon, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 md:gap-3 rounded-lg px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 font-bold text-xs sm:text-sm md:text-base",
        "bg-gradient-to-b from-accent via-accent to-accent/90 text-accent-foreground",
        "shadow-[0_6px_16px_rgba(255,215,0,0.35)] hover:shadow-[0_12px_32px_rgba(255,215,0,0.5),0_0_0_4px_rgba(255,215,0,0.15)]",
        "transition-all duration-300 will-change-transform hover:-translate-y-2 hover:scale-110",
        "border border-accent/50 hover:border-accent/70",
        className,
      )}
    >
      {icon && (
        <img
          src={icon}
          alt=""
          className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-110"
          loading="lazy"
        />
      )}
      <span>{label}</span>
      <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/15 pointer-events-none group-hover:ring-white/20 transition-all"></span>
    </a>
  );
}
