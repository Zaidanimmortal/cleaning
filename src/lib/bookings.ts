import { useCallback, useEffect, useState } from "react";
import { TIME_SLOTS } from "./services";

export type BookingStatus = "confirmed" | "cancelled";

export type Booking = {
  id: string;
  serviceId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
  createdAt: string;
  status: BookingStatus;
};

const KEY = "svarabin-bookings";

function read(): Booking[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Booking[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(list: Booking[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
}

function hashTaken(date: string, time: string) {
  let h = 2166136261;
  const seed = `${date}:${time}`;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % 9 === 0;
}

export function isSunday(isoDate: string) {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d).getDay() === 0;
}

export function slotTaken(date: string, time: string, bookings: Booking[]) {
  if (
    bookings.some(
      (b) => b.status === "confirmed" && b.date === date && b.time === time,
    )
  ) {
    return true;
  }
  return hashTaken(date, time);
}

export function openSlots(date: string, bookings: Booking[]) {
  if (isSunday(date)) return [];
  return TIME_SLOTS.filter((time) => !slotTaken(date, time, bookings));
}

export function toIsoDate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function parseIsoDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d);
}

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setBookings(read());
    setReady(true);
  }, []);

  const add = useCallback(
    (input: Omit<Booking, "id" | "createdAt" | "status">) => {
      const booking: Booking = {
        ...input,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        status: "confirmed",
      };
      setBookings((prev) => {
        const next = [booking, ...prev];
        write(next);
        return next;
      });
      return booking;
    },
    [],
  );

  const cancel = useCallback((id: string) => {
    setBookings((prev) => {
      const next = prev.map((b) =>
        b.id === id ? { ...b, status: "cancelled" as const } : b,
      );
      write(next);
      return next;
    });
  }, []);

  return { bookings, ready, add, cancel };
}
