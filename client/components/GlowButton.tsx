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
        "group relative inline-flex items-center justify-center gap-2 md:gap-3 rounded-xl px-4 md:px-6 py-2.5 md:py-3 font-black text-sm md:text-base",
        "bg-gradient-to-b from-primary to-primary/90 text-primary-foreground",
        "shadow-[0_0_0_2px_hsl(var(--ring))] hover:shadow-[0_0_0_4px_hsl(var(--ring)),0_10px_30px_-10px_hsl(var(--primary))]",
        "transition-all duration-300 will-change-transform hover:-translate-y-0.5",
        className,
      )}
    >
      {icon && (
        <img
          src={icon}
          alt=""
          className="h-6 w-6 md:h-7 md:w-7"
          loading="lazy"
        />
      )}
      <span>{label}</span>
      <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none"></span>
    </a>
  );
}
