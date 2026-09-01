import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { formatDuration, formatEur, SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  const { t, lang } = useI18n();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-medium tracking-tight">{t("navServices")}</h1>
      <p className="mt-3 max-w-2xl text-muted">{t("servicesLead")}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article key={s.id} className="flex flex-col overflow-hidden rounded-xl bg-surface shadow-card">
            <img src={s.image} alt="" className="aspect-[16/10] w-full object-cover" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-display text-xl font-medium">{t(`service_${s.id}`)}</h2>
                {s.popular ? <Badge>{t("popular")}</Badge> : null}
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {t(`service_${s.id}_d`)}
              </p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-sm text-muted">
                  {t("from")}{" "}
                  <span className="font-medium text-ink tabular-nums">{formatEur(s.fromEur, lang)}</span>
                  <span className="block text-xs text-subtle">{formatDuration(s.durationMin, lang)}</span>
                </p>
                <Button size="sm" asChild>
                  <Link to="/book" search={{ service: s.id }}>
                    {t("bookThis")}
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
