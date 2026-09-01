import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  const { t } = useI18n();
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-pine">{t("brand")}</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">{t("aboutPageTitle")}</h1>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
          <p>{t("aboutP1")}</p>
          <p>{t("aboutP2")}</p>
          <p>{t("aboutP3")}</p>
        </div>
        <p className="mt-8 font-display text-2xl leading-snug text-ink">{t("quote")}</p>
        <Button className="mt-8" asChild>
          <Link to="/book">{t("heroCta")}</Link>
        </Button>
      </div>
      <div className="grid gap-4">
        <img src="/images/airbnb.jpg" alt="" className="aspect-[4/3] w-full rounded-xl object-cover shadow-card" />
        <img src="/images/office.jpg" alt="" className="aspect-[16/9] w-full rounded-xl object-cover shadow-card" />
      </div>
    </main>
  );
}
