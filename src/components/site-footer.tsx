import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display text-lg font-semibold">{t("brand")}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            {t("tagline")}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-medium">{t("contact")}</p>
          <p className="mt-2 text-muted">{t("phone")}</p>
          <p className="text-muted">{t("email")}</p>
          <p className="mt-2 text-muted">{t("footerArea")}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/services" className="text-muted hover:text-ink">
            {t("navServices")}
          </Link>
          <Link to="/book" className="text-muted hover:text-ink">
            {t("navBook")}
          </Link>
          <Link to="/bookings" className="text-muted hover:text-ink">
            {t("navBookings")}
          </Link>
          <p className="mt-4 text-subtle">{t("footerHours")}</p>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-center text-xs text-subtle">
        {t("footerCopy")}
      </div>
    </footer>
  );
}
