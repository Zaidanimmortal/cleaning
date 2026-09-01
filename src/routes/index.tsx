import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { formatDuration, formatEur, SERVICES } from "@/lib/services";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t, lang } = useI18n();
  const featured = SERVICES.filter((s) =>
    ["regular", "airbnb", "deep", "windows"].includes(s.id),
  );

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-pine">
              {t("heroKicker")}
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.12] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem]">
              {t("heroTitle")}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t("heroLead")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link to="/book">
                  {t("heroCta")}
                  <ArrowRight />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/services">{t("heroSecondary")}</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-subtle">{t("heroNote")}</p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-card">
              <img
                src="/images/hero.jpg"
                alt=""
                className="aspect-[16/11] h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 hidden max-w-xs rounded-lg bg-surface p-4 shadow-card sm:block">
              <p className="font-display text-sm leading-snug text-ink">{t("quote")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {[
            { icon: Sparkles, text: t("trust1") },
            { icon: Clock3, text: t("trust2") },
            { icon: MapPin, text: t("trust3") },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-md bg-pine/10 text-pine">
                <Icon className="size-4" />
              </span>
              <p className="text-sm leading-relaxed text-ink">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-medium tracking-tight">{t("servicesTitle")}</h2>
          <p className="mt-3 text-muted">{t("servicesLead")}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {featured.map((s) => (
            <article key={s.id} className="overflow-hidden rounded-xl bg-surface shadow-card">
              <img src={s.image} alt="" className="aspect-[16/9] w-full object-cover" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-medium">{t(`service_${s.id}`)}</h3>
                  {s.popular ? <Badge>{t("popular")}</Badge> : null}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(`service_${s.id}_d`)}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-muted">
                    {t("from")}{" "}
                    <span className="font-medium text-ink tabular-nums">
                      {formatEur(s.fromEur, lang)}
                    </span>
                    <span className="text-subtle"> · {formatDuration(s.durationMin, lang)}</span>
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
        <div className="mt-8">
          <Button variant="outline" asChild>
            <Link to="/services">{t("navServices")}</Link>
          </Button>
        </div>
      </section>

      <section className="bg-pine text-pine-fg">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-medium tracking-tight">{t("howTitle")}</h2>
            <ol className="mt-8 space-y-6">
              {[1, 2, 3].map((n) => (
                <li key={n} className="flex gap-4">
                  <span className="font-display text-2xl tabular-nums text-sage">{n}</span>
                  <div>
                    <p className="font-medium">{t(`how${n}t`)}</p>
                    <p className="mt-1 text-sm leading-relaxed text-pine-fg/75">{t(`how${n}d`)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src="/images/team.jpg" alt="" className="h-full max-h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <img
          src="/images/windows.jpg"
          alt=""
          className="aspect-[4/3] w-full rounded-xl object-cover shadow-card"
        />
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight">{t("areaTitle")}</h2>
          <p className="mt-4 leading-relaxed text-muted">{t("areaLead")}</p>
          <p className="mt-6 font-display text-xl leading-snug">{t("aboutLead")}</p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-surface px-6 py-12 shadow-card sm:px-12">
          <h2 className="font-display text-3xl font-medium tracking-tight">{t("ctaTitle")}</h2>
          <p className="mt-3 max-w-xl text-muted">{t("ctaLead")}</p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/book">
              {t("ctaBtn")}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
