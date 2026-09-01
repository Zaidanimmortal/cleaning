import { type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { getService } from "@/lib/services";
import { parseIsoDate, useBookings, type Booking } from "@/lib/bookings";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/bookings")({ component: BookingsPage });

function BookingsPage() {
  const { t, lang } = useI18n();
  const { bookings, ready, cancel } = useBookings();
  const locale = lang === "lt" ? "lt-LT" : "en-GB";
  const now = new Date();

  const upcoming = bookings.filter((b) => isUpcoming(b, now));
  const past = bookings.filter((b) => !isUpcoming(b, now));

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-medium tracking-tight">{t("bookingsTitle")}</h1>
      <p className="mt-2 text-muted">{t("bookingsLead")}</p>

      {!ready ? (
        <p className="mt-10 text-sm text-muted">…</p>
      ) : bookings.length === 0 ? (
        <div className="mt-10 rounded-xl bg-surface p-8 shadow-card">
          <p className="text-muted">{t("emptyBookings")}</p>
          <Button className="mt-5" asChild>
            <Link to="/book">{t("heroCta")}</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-10 space-y-10">
          <Group title={t("upcoming")}>
            {upcoming.length === 0 ? (
              <p className="text-sm text-muted">{t("emptyBookings")}</p>
            ) : (
              upcoming.map((b) => (
                <VisitCard key={b.id} booking={b} locale={locale} t={t} onCancel={() => cancel(b.id)} />
              ))
            )}
          </Group>
          {past.length > 0 ? (
            <Group title={t("past")}>
              {past.map((b) => (
                <VisitCard key={b.id} booking={b} locale={locale} t={t} />
              ))}
            </Group>
          ) : null}
        </div>
      )}
    </main>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xs font-medium uppercase tracking-wide text-muted">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function VisitCard({
  booking,
  locale,
  t,
  onCancel,
}: {
  booking: Booking;
  locale: string;
  t: (k: string) => string;
  onCancel?: () => void;
}) {
  const service = getService(booking.serviceId);
  const date = parseIsoDate(booking.date).toLocaleDateString(locale, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const cancelled = booking.status === "cancelled";

  return (
    <article className={cn("rounded-xl bg-surface p-5 shadow-card", cancelled && "opacity-60")}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-medium">
            {service ? t(`service_${service.id}`) : booking.serviceId}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {date} · {booking.time}
          </p>
          <p className="mt-1 text-sm text-muted">{booking.address}</p>
        </div>
        <Badge className={cancelled ? "bg-sand text-muted" : undefined}>
          {cancelled ? t("cancelled") : t("confirmed")}
        </Badge>
      </div>
      {onCancel && !cancelled ? (
        <Button size="sm" variant="ghost" className="mt-3" onClick={onCancel}>
          {t("cancel")}
        </Button>
      ) : null}
    </article>
  );
}

function isUpcoming(b: Booking, now: Date) {
  if (b.status === "cancelled") return false;
  const dt = parseIsoDate(b.date);
  const [hh, mm] = b.time.split(":").map(Number);
  dt.setHours(hh, mm, 0, 0);
  return dt.getTime() >= now.getTime() - 60 * 60 * 1000;
}
