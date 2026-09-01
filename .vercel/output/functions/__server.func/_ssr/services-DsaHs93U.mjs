import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn } from "./router-BMgM5uWq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DsaHs93U.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full bg-pine/10 px-2.5 py-1 text-xs font-medium text-pine", className),
		...props
	});
}
var TIME_SLOTS = [
	"08:00",
	"10:00",
	"12:00",
	"14:00",
	"16:00"
];
var SERVICES = [
	{
		id: "regular",
		image: "/images/kitchen.jpg",
		durationMin: 120,
		fromEur: 45,
		popular: true
	},
	{
		id: "deep",
		image: "/images/hero.jpg",
		durationMin: 240,
		fromEur: 95
	},
	{
		id: "move",
		image: "/images/kitchen.jpg",
		durationMin: 300,
		fromEur: 130
	},
	{
		id: "airbnb",
		image: "/images/airbnb.jpg",
		durationMin: 120,
		fromEur: 55,
		popular: true
	},
	{
		id: "office",
		image: "/images/office.jpg",
		durationMin: 180,
		fromEur: 70
	},
	{
		id: "windows",
		image: "/images/windows.jpg",
		durationMin: 90,
		fromEur: 40
	},
	{
		id: "upholstery",
		image: "/images/hero.jpg",
		durationMin: 90,
		fromEur: 35
	},
	{
		id: "linen",
		image: "/images/airbnb.jpg",
		durationMin: 60,
		fromEur: 18
	},
	{
		id: "check",
		image: "/images/team.jpg",
		durationMin: 45,
		fromEur: 25
	}
];
function getService(id) {
	return SERVICES.find((s) => s.id === id);
}
function formatEur(value, locale) {
	return new Intl.NumberFormat(locale === "lt" ? "lt-LT" : "en-GB", {
		style: "currency",
		currency: "EUR",
		maximumFractionDigits: 0
	}).format(value);
}
function formatDuration(minutes, locale) {
	const hours = minutes / 60;
	if (hours >= 1 && minutes % 60 === 0) return locale === "lt" ? `${hours} val.` : `${hours} h`;
	return locale === "lt" ? `${minutes} min.` : `${minutes} min`;
}
//#endregion
export { formatEur as a, formatDuration as i, SERVICES as n, getService as o, TIME_SLOTS as r, Badge as t };
