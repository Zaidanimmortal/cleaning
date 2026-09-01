import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n, i as cn, r as Button } from "./router-BMgM5uWq.mjs";
import { o as getService, t as Badge } from "./services-DsaHs93U.mjs";
import { a as useBookings, n as parseIsoDate } from "./bookings-ChhECmZD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bookings-CReDtZZ9.js
var import_jsx_runtime = require_jsx_runtime();
function BookingsPage() {
	const { t, lang } = useI18n();
	const { bookings, ready, cancel } = useBookings();
	const locale = lang === "lt" ? "lt-LT" : "en-GB";
	const now = /* @__PURE__ */ new Date();
	const upcoming = bookings.filter((b) => isUpcoming(b, now));
	const past = bookings.filter((b) => !isUpcoming(b, now));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-medium tracking-tight",
				children: t("bookingsTitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: t("bookingsLead")
			}),
			!ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-sm text-muted",
				children: "…"
			}) : bookings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-xl bg-surface p-8 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: t("emptyBookings")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-5",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						children: t("heroCta")
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
					title: t("upcoming"),
					children: upcoming.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("emptyBookings")
					}) : upcoming.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitCard, {
						booking: b,
						locale,
						t,
						onCancel: () => cancel(b.id)
					}, b.id))
				}), past.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
					title: t("past"),
					children: past.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitCard, {
						booking: b,
						locale,
						t
					}, b.id))
				}) : null]
			})
		]
	});
}
function Group({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-xs font-medium uppercase tracking-wide text-muted",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 space-y-3",
		children
	})] });
}
function VisitCard({ booking, locale, t, onCancel }) {
	const service = getService(booking.serviceId);
	const date = parseIsoDate(booking.date).toLocaleDateString(locale, {
		weekday: "short",
		day: "numeric",
		month: "short"
	});
	const cancelled = booking.status === "cancelled";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("rounded-xl bg-surface p-5 shadow-card", cancelled && "opacity-60"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-medium",
					children: service ? t(`service_${service.id}`) : booking.serviceId
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						date,
						" · ",
						booking.time
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: booking.address
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				className: cancelled ? "bg-sand text-muted" : void 0,
				children: cancelled ? t("cancelled") : t("confirmed")
			})]
		}), onCancel && !cancelled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "sm",
			variant: "ghost",
			className: "mt-3",
			onClick: onCancel,
			children: t("cancel")
		}) : null]
	});
}
function isUpcoming(b, now) {
	if (b.status === "cancelled") return false;
	const dt = parseIsoDate(b.date);
	const [hh, mm] = b.time.split(":").map(Number);
	dt.setHours(hh, mm, 0, 0);
	return dt.getTime() >= now.getTime() - 36e5;
}
//#endregion
export { BookingsPage as component };
