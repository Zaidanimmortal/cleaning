import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n, r as Button } from "./router-BMgM5uWq.mjs";
import { a as formatEur, i as formatDuration, n as SERVICES, t as Badge } from "./services-DsaHs93U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Bt64sWHF.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-medium tracking-tight",
				children: t("navServices")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: t("servicesLead")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col overflow-hidden rounded-xl bg-surface shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: "",
						className: "aspect-[16/10] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-medium",
									children: t(`service_${s.id}`)
								}), s.popular ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t("popular") }) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
								children: t(`service_${s.id}_d`)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										t("from"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-ink tabular-nums",
											children: formatEur(s.fromEur, lang)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-subtle",
											children: formatDuration(s.durationMin, lang)
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/book",
										search: { service: s.id },
										children: t("bookThis")
									})
								})]
							})
						]
					})]
				}, s.id))
			})
		]
	});
}
//#endregion
export { ServicesPage as component };
