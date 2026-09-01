import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as TIME_SLOTS } from "./services-DsaHs93U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bookings-ChhECmZD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KEY = "svarabin-bookings";
function read() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function write(list) {
	window.localStorage.setItem(KEY, JSON.stringify(list));
}
function hashTaken(date, time) {
	let h = 2166136261;
	const seed = `${date}:${time}`;
	for (let i = 0; i < seed.length; i++) {
		h ^= seed.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return (h >>> 0) % 9 === 0;
}
function isSunday(isoDate) {
	const [y, m, d] = isoDate.split("-").map(Number);
	return new Date(y, (m ?? 1) - 1, d).getDay() === 0;
}
function slotTaken(date, time, bookings) {
	if (bookings.some((b) => b.status === "confirmed" && b.date === date && b.time === time)) return true;
	return hashTaken(date, time);
}
function openSlots(date, bookings) {
	if (isSunday(date)) return [];
	return TIME_SLOTS.filter((time) => !slotTaken(date, time, bookings));
}
function toIsoDate(d) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function parseIsoDate(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Date(y, (m ?? 1) - 1, d);
}
function useBookings() {
	const [bookings, setBookings] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setBookings(read());
		setReady(true);
	}, []);
	return {
		bookings,
		ready,
		add: (0, import_react.useCallback)((input) => {
			const booking = {
				...input,
				id: crypto.randomUUID(),
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				status: "confirmed"
			};
			setBookings((prev) => {
				const next = [booking, ...prev];
				write(next);
				return next;
			});
			return booking;
		}, []),
		cancel: (0, import_react.useCallback)((id) => {
			setBookings((prev) => {
				const next = prev.map((b) => b.id === id ? {
					...b,
					status: "cancelled"
				} : b);
				write(next);
				return next;
			});
		}, [])
	};
}
//#endregion
export { useBookings as a, toIsoDate as i, parseIsoDate as n, slotTaken as r, openSlots as t };
