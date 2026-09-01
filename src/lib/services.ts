export type ServiceId =
  | "regular"
  | "deep"
  | "move"
  | "airbnb"
  | "office"
  | "windows"
  | "upholstery"
  | "linen"
  | "check";

export type Service = {
  id: ServiceId;
  image: string;
  durationMin: number;
  fromEur: number;
  popular?: boolean;
};

export const TIME_SLOTS = ["08:00", "10:00", "12:00", "14:00", "16:00"] as const;

export const SERVICES: Service[] = [
  {
    id: "regular",
    image: "/images/kitchen.jpg",
    durationMin: 120,
    fromEur: 45,
    popular: true,
  },
  {
    id: "deep",
    image: "/images/hero.jpg",
    durationMin: 240,
    fromEur: 95,
  },
  {
    id: "move",
    image: "/images/kitchen.jpg",
    durationMin: 300,
    fromEur: 130,
  },
  {
    id: "airbnb",
    image: "/images/airbnb.jpg",
    durationMin: 120,
    fromEur: 55,
    popular: true,
  },
  {
    id: "office",
    image: "/images/office.jpg",
    durationMin: 180,
    fromEur: 70,
  },
  {
    id: "windows",
    image: "/images/windows.jpg",
    durationMin: 90,
    fromEur: 40,
  },
  {
    id: "upholstery",
    image: "/images/hero.jpg",
    durationMin: 90,
    fromEur: 35,
  },
  {
    id: "linen",
    image: "/images/airbnb.jpg",
    durationMin: 60,
    fromEur: 18,
  },
  {
    id: "check",
    image: "/images/team.jpg",
    durationMin: 45,
    fromEur: 25,
  },
];

export function getService(id: string | undefined): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}

export function formatEur(value: number, locale: "lt" | "en") {
  return new Intl.NumberFormat(locale === "lt" ? "lt-LT" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDuration(minutes: number, locale: "lt" | "en") {
  const hours = minutes / 60;
  if (hours >= 1 && minutes % 60 === 0) {
    return locale === "lt" ? `${hours} val.` : `${hours} h`;
  }
  return locale === "lt" ? `${minutes} min.` : `${minutes} min`;
}
