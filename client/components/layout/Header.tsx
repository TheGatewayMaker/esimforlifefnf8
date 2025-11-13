import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

const NAV = [
  { label: "Home", to: "/#home" },
  { label: "Features", to: "/#features" },
  { label: "Buy eSIM", to: "/#buy" },
  { label: "Refer & Earn", to: "/#refer" },
  { label: "Support", to: "/#support" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState<string>(
    () =>
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <div className="container flex items-center justify-between py-2 md:py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/rKHZQ6Wn/esim4lifelogo.png"
            alt="esim4life logo"
            className="h-[48px] w-[48px] md:h-[62px] md:w-[62px] rounded-lg"
            loading="lazy"
          />
          <span className="font-black tracking-tighter text-base md:text-lg lg:text-xl">
            eSIM4life
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="px-2 py-2 md:px-3 rounded-md text-xs md:text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/#buy"
            className={cn(
              "ml-1 md:ml-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-primary text-primary-foreground shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5",
            )}
          >
            Buy Now (999 PKR)
          </Link>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card hover:bg-accent transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card hover:bg-accent transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card hover:bg-accent transition-colors"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-foreground"></span>
              <span className="block h-0.5 w-5 bg-foreground"></span>
              <span className="block h-0.5 w-5 bg-foreground"></span>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <div className="container py-2 grid">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="px-2 py-3 rounded-md text-sm font-semibold text-foreground/90 hover:bg-accent transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/#buy"
              className="mt-2 px-4 py-3 rounded-md text-sm font-bold bg-primary text-primary-foreground text-center"
            >
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
