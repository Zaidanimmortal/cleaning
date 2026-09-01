import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, o as Clock3, r as Sparkles, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as useI18n, r as Button } from "./router-BMgM5uWq.mjs";
import { a as formatEur, i as formatDuration, n as SERVICES, t as Badge } from "./services-DsaHs93U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-PEvnDH7B.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { t, lang } = useI18n();
	const featured = SERVICES.filter((s) => [
		"regular",
		"airbnb",
		"deep",
		"windows"
	].includes(s.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-pine",
						children: t("heroKicker")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-medium leading-[1.12] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem]",
						children: t("heroTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
						children: t("heroLead")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/book",
								children: [t("heroCta"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								children: t("heroSecondary")
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm text-subtle",
						children: t("heroNote")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hero.jpg",
							alt: "",
							className: "aspect-[16/11] h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -bottom-4 left-4 hidden max-w-xs rounded-lg bg-surface p-4 shadow-card sm:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm leading-snug text-ink",
							children: t("quote")
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6",
				children: [
					{
						icon: Sparkles,
						text: t("trust1")
					},
					{
						icon: Clock3,
						text: t("trust2")
					},
					{
						icon: MapPin,
						text: t("trust3")
					}
				].map(({ icon: Icon, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 inline-flex size-9 items-center justify-center rounded-md bg-pine/10 text-pine",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-ink",
						children: text
					})]
				}, text))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: t("servicesTitle")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: t("servicesLead")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2",
					children: featured.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-xl bg-surface shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: "",
							className: "aspect-[16/9] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-medium",
										children: t(`service_${s.id}`)
									}), s.popular ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t("popular") }) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: t(`service_${s.id}_d`)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted",
										children: [
											t("from"),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-ink tabular-nums",
												children: formatEur(s.fromEur, lang)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-subtle",
												children: [" · ", formatDuration(s.durationMin, lang)]
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
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							children: t("navServices")
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-pine text-pine-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: t("howTitle")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 space-y-6",
					children: [
						1,
						2,
						3
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl tabular-nums text-sage",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: t(`how${n}t`)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-pine-fg/75",
							children: t(`how${n}d`)
						})] })]
					}, n))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/team.jpg",
						alt: "",
						className: "h-full max-h-[420px] w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/windows.jpg",
				alt: "",
				className: "aspect-[4/3] w-full rounded-xl object-cover shadow-card"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: t("areaTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted",
					children: t("areaLead")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-display text-xl leading-snug",
					children: t("aboutLead")
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 pb-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl overflow-hidden rounded-xl bg-surface px-6 py-12 shadow-card sm:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: t("ctaTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-muted",
						children: t("ctaLead")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "mt-8",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/book",
							children: [t("ctaBtn"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
