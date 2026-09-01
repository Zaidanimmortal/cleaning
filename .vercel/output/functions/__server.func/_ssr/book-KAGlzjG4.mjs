import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ChevronLeft, l as Check, s as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as useI18n, i as cn, n as Route$2, r as Button } from "./router-BMgM5uWq.mjs";
import { a as formatEur, i as formatDuration, n as SERVICES, o as getService, r as TIME_SLOTS, t as Badge } from "./services-DsaHs93U.mjs";
import { a as useBookings, i as toIsoDate, r as slotTaken, t as openSlots } from "./bookings-ChhECmZD.mjs";
import { t as DayPicker } from "../_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-KAGlzjG4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Calendar({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		className: cn("rdp-svarabin text-ink", className),
		classNames: {
			today: "text-pine font-semibold",
			selected: "bg-pine text-pine-fg rounded-md",
			chevron: "fill-pine",
			disabled: "text-subtle opacity-40",
			outside: "text-subtle/70"
		},
		components: { Chevron: ({ orientation }) => orientation === "left" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" }) },
		...props
	});
}
var Input = (0, import_react.forwardRef)(({ className, type = "text", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	ref,
	className: cn("flex h-11 w-full rounded-md bg-surface px-3 text-base text-ink shadow-card outline-none transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-pine/35 md:text-sm", className),
	...props
}));
Input.displayName = "Input";
var Label = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
	ref,
	className: cn("text-sm font-medium text-ink", className),
	...props
}));
Label.displayName = "Label";
var Textarea = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	ref,
	className: cn("flex min-h-28 w-full rounded-lg bg-surface px-3 py-3 text-base text-ink shadow-card outline-none transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-pine/35 md:text-sm", className),
	...props
}));
Textarea.displayName = "Textarea";
function BookPage() {
	const { service: serviceParam } = Route$2.useSearch();
	const { t, lang } = useI18n();
	const { bookings, add } = useBookings();
	const initialService = getService(serviceParam)?.id ?? "";
	const [step, setStep] = (0, import_react.useState)(initialService ? 2 : 1);
	const [serviceId, setServiceId] = (0, import_react.useState)(initialService);
	const [date, setDate] = (0, import_react.useState)();
	const [time, setTime] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [doneId, setDoneId] = (0, import_react.useState)(null);
	const service = getService(serviceId);
	const isoDate = date ? toIsoDate(date) : "";
	const free = isoDate ? openSlots(isoDate, bookings) : [];
	const locale = lang === "lt" ? "lt-LT" : "en-GB";
	const dateLabel = date ? date.toLocaleDateString(locale, {
		weekday: "long",
		day: "numeric",
		month: "long"
	}) : "";
	const today = (0, import_react.useMemo)(() => {
		const d = /* @__PURE__ */ new Date();
		d.setHours(0, 0, 0, 0);
		return d;
	}, []);
	function validateDetails() {
		const next = {};
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
			notes: notes.trim()
		});
		setDoneId(booking.id);
	}
	if (doneId && service) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-lg px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-8 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex size-11 items-center justify-center rounded-full bg-pine/12 text-pine",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-3xl font-medium tracking-tight",
					children: t("successTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: t("successLead")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-6 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: t("stepService"),
							value: t(`service_${service.id}`)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: t("date"),
							value: dateLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: t("time"),
							value: time
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: t("address"),
							value: address
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/bookings",
							children: t("viewBookings")
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: () => {
							setDoneId(null);
							setStep(1);
							setTime("");
							setDate(void 0);
						},
						children: t("bookAnother")
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-medium tracking-tight",
				children: t("bookTitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: t("bookLead")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 grid grid-cols-3 gap-2 text-xs font-medium uppercase tracking-wide",
				children: [
					{
						n: 1,
						label: t("stepService")
					},
					{
						n: 2,
						label: t("stepWhen")
					},
					{
						n: 3,
						label: t("stepDetails")
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("rounded-md px-3 py-2 text-center", step === s.n ? "bg-pine text-pine-fg" : "bg-sand/60 text-muted"),
					children: [
						s.n,
						". ",
						s.label
					]
				}, s.n))
			}),
			step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "sr-only",
						children: t("selectService")
					}),
					SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setServiceId(s.id),
						className: cn("flex w-full items-start gap-4 rounded-xl bg-surface p-4 text-left shadow-card transition-[box-shadow] duration-150", serviceId === s.id && "ring-2 ring-pine/50"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: "",
							className: "size-16 shrink-0 rounded-md object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg font-medium",
										children: t(`service_${s.id}`)
									}), s.popular ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t("popular") }) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted",
									children: t(`service_${s.id}_d`)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 block text-sm text-ink",
									children: [
										t("from"),
										" ",
										formatEur(s.fromEur, lang),
										" · ",
										formatDuration(s.durationMin, lang)
									]
								})
							]
						})]
					}, s.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: !serviceId,
							onClick: () => setStep(2),
							children: t("continue")
						})
					})
				]
			}) : null,
			step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 grid gap-8 md:grid-cols-[1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-4 shadow-card sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "mb-3 block",
						children: t("selectDate")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
						mode: "single",
						selected: date,
						onSelect: (d) => {
							setDate(d);
							setTime("");
						},
						disabled: [{ before: today }, { dayOfWeek: [0] }]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					service ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-4 text-sm text-muted",
						children: [
							t(`service_${service.id}`),
							" · ",
							formatDuration(service.durationMin, lang)
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "mb-3 block",
						children: t("selectTime")
					}),
					!date ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("selectDate")
					}) : date.getDay() === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("closedSunday")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: TIME_SLOTS.map((slot) => {
							const taken = slotTaken(isoDate, slot, bookings);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: taken,
								onClick: () => setTime(slot),
								className: cn("h-11 rounded-md text-sm font-medium shadow-card transition-colors duration-150", taken && "cursor-not-allowed bg-sand/50 text-subtle", !taken && time === slot && "bg-pine text-pine-fg", !taken && time !== slot && "bg-surface text-ink hover:bg-sand/40"),
								children: [slot, taken ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-1 text-xs font-normal",
									children: ["· ", t("taken")]
								}) : null]
							}, slot);
						})
					}),
					date && free.length === 0 && date.getDay() !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: t("noSlots")
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							onClick: () => setStep(1),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {}), t("back")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: !date || !time,
							onClick: () => setStep(3),
							children: t("continue")
						})]
					})
				] })]
			}) : null,
			step === 3 && service ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 grid gap-8 md:grid-cols-[1fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-4",
					onSubmit: (e) => {
						e.preventDefault();
						submit();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("name"),
							error: errors.name,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: name,
								onChange: (e) => setName(e.target.value),
								autoComplete: "name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("phoneLabel"),
							error: errors.phone,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: phone,
								onChange: (e) => setPhone(e.target.value),
								autoComplete: "tel",
								inputMode: "tel",
								placeholder: "+370"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("emailLabel"),
							error: errors.email,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								autoComplete: "email"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("address"),
							error: errors.address,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: address,
								onChange: (e) => setAddress(e.target.value),
								autoComplete: "street-address"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("notes"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: notes,
								onChange: (e) => setNotes(e.target.value),
								placeholder: t("notesPh")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "secondary",
								onClick: () => setStep(2),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {}), t("back")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: t("confirm")
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-xl bg-surface p-5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wide text-muted",
							children: t("summary")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-xl font-medium",
							children: t(`service_${service.id}`)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: t("date"),
									value: dateLabel
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: t("time"),
									value: time
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: t("duration"),
									value: formatDuration(service.durationMin, lang)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: t("detailFrom"),
									value: formatEur(service.fromEur, lang)
								})
							]
						})
					]
				})]
			}) : null
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-danger",
				children: error
			}) : null
		]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right text-ink",
			children: value
		})]
	});
}
//#endregion
export { BookPage as component };
