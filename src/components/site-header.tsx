import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/services" as const, label: t("navServices") },
    { to: "/about" as const, label: t("navAbout") },
    { to: "/bookings" as const, label: t("navBookings") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            {t("brand")}
          </span>
          <span className="hidden text-xs text-muted sm:inline">Klaipėda</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full bg-sand/70 p-0.5 text-xs font-medium">
            <button
              type="button"
              onClick={() => setLang("lt")}
              className={cn(
                "min-w-9 rounded-full px-2.5 py-1.5 transition-colors duration-150",
                lang === "lt" ? "bg-surface text-ink shadow-card" : "text-muted",
              )}
              aria-pressed={lang === "lt"}
            >
              {t("langLt")}
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "min-w-9 rounded-full px-2.5 py-1.5 transition-colors duration-150",
                lang === "en" ? "bg-surface text-ink shadow-card" : "text-muted",
              )}
              aria-pressed={lang === "en"}
            >
              {t("langEn")}
            </button>
          </div>
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/book">{t("navBook")}</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-bg px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-3 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/book" onClick={() => setOpen(false)}>
                {t("navBook")}
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
