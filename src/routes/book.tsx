import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { Check, ChevronLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { formatDuration, formatEur, getService, SERVICES, TIME_SLOTS } from "@/lib/services";
import { openSlots, slotTaken, toIsoDate, useBookings } from "@/lib/bookings";
import { cn } from "@/lib/utils";

type Search = { service?: string };

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  component: BookPage,
});

function BookPage() {
  const { service: serviceParam } = Route.useSearch();
  const { t, lang } = useI18n();
  const { bookings, add } = useBookings();

  const initialService = getService(serviceParam)?.id ?? "";
  const [step, setStep] = useState<1 | 2 | 3>(initialService ? 2 : 1);
  const [serviceId, setServiceId] = useState<string>(initialService);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [doneId, setDoneId] = useState<string | null>(null);

  const service = getService(serviceId);
  const isoDate = date ? toIsoDate(date) : "";
  const free = isoDate ? openSlots(isoDate, bookings) : [];

  const locale = lang === "lt" ? "lt-LT" : "en-GB";
  const dateLabel = date
    ? date.toLocaleDateString(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : "";

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  function validateDetails() {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = t("required");
    if (!phone.trim() || phone.replace(/\D/g, "").length < 8) next.phone = t("invalidPhone");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t("invalidEmail");
    if (!address.trim()) next.address = t("required");
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function submit() {
    if (!service || !isoDate || !time) return;
    if (!validateDetails()) return;
    const booking = add({
      serviceId: service.id,
      date: isoDate,
      time,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      address: address.trim(),
      notes: notes.trim(),
    });
    setDoneId(booking.id);
  }

  if (doneId && service) {
    return (
      <main className="mx-auto max-w-lg px-4 py-16 sm:px-6">
        <div className="rounded-xl bg-surface p-8 shadow-card">
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-pine/12 text-pine">
            <Check className="size-5" />
          </span>
          <h1 className="mt-5 font-display text-3xl font-medium tracking-tight">
            {t("successTitle")}
          </h1>
          <p className="mt-3 text-muted">{t("successLead")}</p>
          <dl className="mt-6 space-y-2 text-sm">
            <Row label={t("stepService")} value={t(`service_${service.id}`)} />
            <Row label={t("date")} value={dateLabel} />
            <Row label={t("time")} value={time} />
            <Row label={t("address")} value={address} />
          </dl>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <Button asChild>
              <Link to="/bookings">{t("viewBookings")}</Link>
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setDoneId(null);
                setStep(1);
                setTime("");
                setDate(undefined);
              }}
            >
              {t("bookAnother")}
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-4xl font-medium tracking-tight">{t("bookTitle")}</h1>
      <p className="mt-2 text-muted">{t("bookLead")}</p>

      <ol className="mt-8 grid grid-cols-3 gap-2 text-xs font-medium uppercase tracking-wide">
        {[
          { n: 1, label: t("stepService") },
          { n: 2, label: t("stepWhen") },
          { n: 3, label: t("stepDetails") },
        ].map((s) => (
          <li
            key={s.n}
            className={cn(
              "rounded-md px-3 py-2 text-center",
              step === s.n ? "bg-pine text-pine-fg" : "bg-sand/60 text-muted",
            )}
          >
            {s.n}. {s.label}
          </li>
        ))}
      </ol>

      {step === 1 ? (
        <section className="mt-8 space-y-3">
          <h2 className="sr-only">{t("selectService")}</h2>
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setServiceId(s.id)}
              className={cn(
                "flex w-full items-start gap-4 rounded-xl bg-surface p-4 text-left shadow-card transition-[box-shadow] duration-150",
                serviceId === s.id && "ring-2 ring-pine/50",
              )}
            >
              <img src={s.image} alt="" className="size-16 shrink-0 rounded-md object-cover" />
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="font-display text-lg font-medium">{t(`service_${s.id}`)}</span>
                  {s.popular ? <Badge>{t("popular")}</Badge> : null}
                </span>
                <span className="mt-1 block text-sm text-muted">{t(`service_${s.id}_d`)}</span>
                <span className="mt-2 block text-sm text-ink">
                  {t("from")} {formatEur(s.fromEur, lang)} · {formatDuration(s.durationMin, lang)}
                </span>
              </span>
            </button>
          ))}
          <div className="pt-4">
            <Button disabled={!serviceId} onClick={() => setStep(2)}>
              {t("continue")}
            </Button>
          </div>
        </section>
      ) : null}

      {step === 2 ? (
        <section className="mt-8 grid gap-8 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-xl bg-surface p-4 shadow-card sm:p-5">
            <Label className="mb-3 block">{t("selectDate")}</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                setDate(d);
                setTime("");
              }}
              disabled={[{ before: today }, { dayOfWeek: [0] }]}
            />
          </div>
          <div>
            {service ? (
              <p className="mb-4 text-sm text-muted">
                {t(`service_${service.id}`)} · {formatDuration(service.durationMin, lang)}
              </p>
            ) : null}
            <Label className="mb-3 block">{t("selectTime")}</Label>
            {!date ? (
              <p className="text-sm text-muted">{t("selectDate")}</p>
            ) : date.getDay() === 0 ? (
              <p className="text-sm text-muted">{t("closedSunday")}</p>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {TIME_SLOTS.map((slot) => {
                  const taken = slotTaken(isoDate, slot, bookings);
                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={taken}
                      onClick={() => setTime(slot)}
                      className={cn(
                        "h-11 rounded-md text-sm font-medium shadow-card transition-colors duration-150",
                        taken && "cursor-not-allowed bg-sand/50 text-subtle",
                        !taken && time === slot && "bg-pine text-pine-fg",
                        !taken && time !== slot && "bg-surface text-ink hover:bg-sand/40",
                      )}
                    >
                      {slot}
                      {taken ? (
                        <span className="ml-1 text-xs font-normal">· {t("taken")}</span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            )}
            {date && free.length === 0 && date.getDay() !== 0 ? (
              <p className="mt-3 text-sm text-muted">{t("noSlots")}</p>
            ) : null}
            <div className="mt-8 flex gap-2">
              <Button variant="secondary" onClick={() => setStep(1)}>
                <ChevronLeft />
                {t("back")}
              </Button>
              <Button disabled={!date || !time} onClick={() => setStep(3)}>
                {t("continue")}
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      {step === 3 && service ? (
        <section className="mt-8 grid gap-8 md:grid-cols-[1fr_0.85fr]">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <Field label={t("name")} error={errors.name}>
              <Input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </Field>
            <Field label={t("phoneLabel")} error={errors.phone}>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                inputMode="tel"
                placeholder="+370"
              />
            </Field>
            <Field label={t("emailLabel")} error={errors.email}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Field>
            <Field label={t("address")} error={errors.address}>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                autoComplete="street-address"
              />
            </Field>
            <Field label={t("notes")}>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t("notesPh")} />
            </Field>
            <div className="flex gap-2 pt-2">
              <Button type="button" variant="secondary" onClick={() => setStep(2)}>
                <ChevronLeft />
                {t("back")}
              </Button>
              <Button type="submit">{t("confirm")}</Button>
            </div>
          </form>
          <aside className="h-fit rounded-xl bg-surface p-5 shadow-card">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">{t("summary")}</p>
            <h2 className="mt-2 font-display text-xl font-medium">{t(`service_${service.id}`)}</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <Row label={t("date")} value={dateLabel} />
              <Row label={t("time")} value={time} />
              <Row label={t("duration")} value={formatDuration(service.durationMin, lang)} />
              <Row label={t("detailFrom")} value={formatEur(service.fromEur, lang)} />
            </dl>
          </aside>
        </section>
      ) : null}
    </main>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-xs text-danger">{error}</p> : null}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right text-ink">{value}</dd>
    </div>
  );
}
