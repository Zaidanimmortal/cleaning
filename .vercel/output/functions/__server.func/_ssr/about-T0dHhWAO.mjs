import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n, r as Button } from "./router-BMgM5uWq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-T0dHhWAO.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.18em] text-pine",
				children: t("brand")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-medium tracking-tight",
				children: t("aboutPageTitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-4 text-base leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("aboutP1") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("aboutP2") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("aboutP3") })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 font-display text-2xl leading-snug text-ink",
				children: t("quote")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-8",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/book",
					children: t("heroCta")
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/airbnb.jpg",
				alt: "",
				className: "aspect-[4/3] w-full rounded-xl object-cover shadow-card"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/office.jpg",
				alt: "",
				className: "aspect-[16/9] w-full rounded-xl object-cover shadow-card"
			})]
		})]
	});
}
//#endregion
export { AboutPage as component };
