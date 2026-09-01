import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, n as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BMgM5uWq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var STORAGE_KEY = "svarabin-lang";
var dictionaries = {
	lt: {
		brand: "ŠvaraBin",
		tagline: "Švara Klaipėdoje, be rūpesčių",
		navServices: "Paslaugos",
		navBook: "Rezervuoti",
		navBookings: "Mano vizitai",
		navAbout: "Apie mus",
		langLt: "LT",
		langEn: "EN",
		heroKicker: "Klaipėda ir apylinkės",
		heroTitle: "Profesionalus valymas ir būsto priežiūra",
		heroLead: "Butai, namai, Airbnb, biurai ir komercinės patalpos. Reguliarus ir generalinis valymas, langai, baldai, skalbiniai ir turto patikra — kruopščiai, laiku, švariai.",
		heroCta: "Rezervuoti vizitą",
		heroSecondary: "Žiūrėti paslaugas",
		heroNote: "Dirbame pirmadienį–šeštadienį · 8:00–18:00",
		trust1: "Kruopštumas kiekviename kambaryje",
		trust2: "Aiški kaina prieš atvykimą",
		trust3: "Patikima komanda Klaipėdoje",
		servicesTitle: "Paslaugos, pritaikytos jūsų erdvei",
		servicesLead: "Nuo kasdienės tvarkos iki svečių priėmimo ir išsikraustymo. Pasirinkite paslaugą ir rezervuokite laiką per kelias minutes.",
		from: "nuo",
		bookThis: "Rezervuoti",
		popular: "Populiariausia",
		howTitle: "Kaip vyksta rezervacija",
		how1t: "Pasirinkite paslaugą",
		how1d: "Nurodykite, ko reikia — butui, biurui ar svečių būstui.",
		how2t: "Pasirinkite dieną ir laiką",
		how2d: "Laisvi intervalai pirmadieniais–šeštadieniais, 8:00–18:00.",
		how3t: "Patvirtiname vizitą",
		how3d: "Gausite patvirtinimą čia pat. Komanda atvyksta pasiruošusi.",
		areaTitle: "Dirbame Klaipėdoje ir aplink",
		areaLead: "Miestas, Melnragė, Giruliai, Sendvaris, Priekulė ir kitos artimos gyvenvietės. Jei abejojate, parašykite adresą rezervacijoje — patikrinsime.",
		aboutTitle: "Rami švara, be triukšmo",
		aboutLead: "ŠvaraBin rūpinasi detalėmis, kurias svečiai ir šeimininkai pajunta pirmiausia: gaiviu oru, švariais tekstilės paviršiais ir tvarkinga virtuve. Dirbame ramiai, atidžiai ir pagal susitartą laiką.",
		quote: "Kiekvienas vizitas turi palikti tą patį jausmą — kad namai kvėpuoja ir viskas yra savo vietoje.",
		ctaTitle: "Reikia švaros šią savaitę?",
		ctaLead: "Pasirinkite dieną, palikite adresą — mes pasirūpinsime likusia dalimi.",
		ctaBtn: "Užsakyti valymą",
		footerCopy: "ŠvaraBin · Klaipėda",
		footerHours: "I–VI 8:00–18:00",
		footerArea: "Klaipėda ir aplinkinės teritorijos",
		phone: "+370 600 00 000",
		email: "labas@svarabin.lt",
		bookTitle: "Rezervuoti vizitą",
		bookLead: "Trys žingsniai. Patvirtinimas iš karto.",
		stepService: "Paslauga",
		stepWhen: "Laikas",
		stepDetails: "Duomenys",
		continue: "Toliau",
		back: "Atgal",
		confirm: "Patvirtinti rezervaciją",
		selectService: "Pasirinkite paslaugą",
		selectDate: "Data",
		selectTime: "Laikas",
		noSlots: "Šiai dienai laisvų laikų nėra. Pasirinkite kitą datą.",
		closedSunday: "Sekmadieniais nedirbame.",
		taken: "Užimta",
		available: "Laisva",
		name: "Vardas",
		phoneLabel: "Telefonas",
		emailLabel: "El. paštas",
		address: "Adresas Klaipėdoje",
		notes: "Pastabos (raktas, gyvūnai, pageidavimai)",
		notesPh: "Pavyzdžiui: raktas pas kaimynus, du katės, langus irgi.",
		required: "Šis laukas privalomas",
		invalidEmail: "Įveskite teisingą el. paštą",
		invalidPhone: "Įveskite telefono numerį",
		summary: "Santrauka",
		duration: "Trukmė",
		date: "Data",
		time: "Laikas",
		successTitle: "Rezervacija patvirtinta",
		successLead: "Išsaugojome jūsų vizitą šiame įrenginyje. Komanda atvyks nurodytu laiku.",
		viewBookings: "Mano vizitai",
		bookAnother: "Nauja rezervacija",
		bookingsTitle: "Mano vizitai",
		bookingsLead: "Rezervacijos saugomos šiame naršyklės įrenginyje.",
		emptyBookings: "Dar nėra vizitų. Rezervuokite pirmąjį valymą.",
		cancel: "Atšaukti",
		cancelled: "Atšaukta",
		confirmed: "Patvirtinta",
		upcoming: "Artėjantys",
		past: "Praėję",
		aboutPageTitle: "Apie ŠvaraBin",
		aboutP1: "Esame Klaipėdos valymo ir būsto priežiūros komanda. Dirbame su butais, namais, trumpalaikės nuomos objektais ir biurais.",
		aboutP2: "Mūsų darbas — ne tik nuvalyti paviršius. Paliekame erdvę, kurioje smagu gyventi, priimti svečius ir dirbti.",
		aboutP3: "Naudojame profesionalią įrangą ir atsakingas priemones. Jei turite jautrių paviršių ar alergijų — parašykite pastabose.",
		detailFrom: "Kaina nuo",
		contact: "Kontaktai",
		service_regular: "Reguliarus valymas",
		service_regular_d: "Butų ir namų palaikomasis valymas: dulkės, grindys, virtuvė, vonia, šiukšlės.",
		service_deep: "Generalinis valymas",
		service_deep_d: "Giluminis valymas visoje erdvėje — įskaitant sunkiai pasiekiamas vietas ir detalų virtuvės bei vonios darbą.",
		service_move: "Po remonto ar išsikraustymo",
		service_move_d: "Išvalome patalpas prieš įsikraustant arba po išsikraustymo, kad raktus galėtumėte perduoti ramiai.",
		service_airbnb: "Airbnb ir svečių paruošimas",
		service_airbnb_d: "Greitas apyvartos valymas tarp svečių: patalynė, vonia, virtuvė ir pirmas įspūdis.",
		service_office: "Biurai ir komercinės patalpos",
		service_office_d: "Periodinis biurų, salių ir komercinių erdvių valymas pagal jūsų grafiką.",
		service_windows: "Langų valymas",
		service_windows_d: "Vidaus langai, stiklai ir palangės. Baltijos šviesa lieka, dryžiai — ne.",
		service_upholstery: "Baldų ir apmušalų valymas",
		service_upholstery_d: "Sofos, kėdės ir tekstilės paviršiai — gaivumas be agresyvaus kvapo.",
		service_linen: "Patalynė ir skalbiniai",
		service_linen_d: "Patalynės keitimas, skalbimas ir tvarkingas suklojimas svečių ar namų režimu.",
		service_check: "Būsto patikra",
		service_check_d: "Trumpas apžiūros vizitas: vanduo, šviesa, tvarka, pašto dėžutė — ramybė savininkui."
	},
	en: {
		brand: "ŠvaraBin",
		tagline: "Quiet, thorough cleaning in Klaipėda",
		navServices: "Services",
		navBook: "Book",
		navBookings: "My visits",
		navAbout: "About",
		langLt: "LT",
		langEn: "EN",
		heroKicker: "Klaipėda and nearby",
		heroTitle: "Professional cleaning and property care",
		heroLead: "Apartments, houses, Airbnbs, offices and commercial spaces. Regular and deep cleans, windows, upholstery, linen and property checks — careful, on time, fresh.",
		heroCta: "Book a visit",
		heroSecondary: "See services",
		heroNote: "Monday–Saturday · 8:00–18:00",
		trust1: "Detail in every room",
		trust2: "Clear price before we arrive",
		trust3: "A local Klaipėda team",
		servicesTitle: "Services shaped around your space",
		servicesLead: "From weekly upkeep to guest turnovers and move-outs. Choose a service and reserve a slot in a few minutes.",
		from: "from",
		bookThis: "Book",
		popular: "Popular",
		howTitle: "How booking works",
		how1t: "Choose a service",
		how1d: "Tell us whether it is a home, office or guest property.",
		how2t: "Pick a day and time",
		how2d: "Open slots Monday–Saturday, 8:00–18:00.",
		how3t: "We confirm on the spot",
		how3d: "You get an instant confirmation. The team arrives prepared.",
		areaTitle: "Klaipėda and the coast around it",
		areaLead: "The city, Melnragė, Giruliai, Sendvaris, Priekulė and nearby villages. If you are unsure, add the address — we will check.",
		aboutTitle: "Calm cleanliness, without noise",
		aboutLead: "ŠvaraBin looks after the details guests and owners notice first: fresh air, clean textiles and a kitchen that is ready. We work quietly, carefully and on time.",
		quote: "Every visit should leave the same feeling — that the rooms can breathe and everything is in its place.",
		ctaTitle: "Need a clean this week?",
		ctaLead: "Choose a day, leave the address — we take care of the rest.",
		ctaBtn: "Book cleaning",
		footerCopy: "ŠvaraBin · Klaipėda",
		footerHours: "Mon–Sat 8:00–18:00",
		footerArea: "Klaipėda and surrounding areas",
		phone: "+370 600 00 000",
		email: "labas@svarabin.lt",
		bookTitle: "Book a visit",
		bookLead: "Three steps. Instant confirmation.",
		stepService: "Service",
		stepWhen: "Schedule",
		stepDetails: "Details",
		continue: "Continue",
		back: "Back",
		confirm: "Confirm booking",
		selectService: "Choose a service",
		selectDate: "Date",
		selectTime: "Time",
		noSlots: "No open times this day. Please pick another date.",
		closedSunday: "We rest on Sundays.",
		taken: "Taken",
		available: "Open",
		name: "Name",
		phoneLabel: "Phone",
		emailLabel: "Email",
		address: "Address in Klaipėda",
		notes: "Notes (keys, pets, requests)",
		notesPh: "e.g. key with the neighbour, two cats, please include windows.",
		required: "This field is required",
		invalidEmail: "Enter a valid email",
		invalidPhone: "Enter a phone number",
		summary: "Summary",
		duration: "Duration",
		date: "Date",
		time: "Time",
		successTitle: "Booking confirmed",
		successLead: "Your visit is saved on this device. The team will arrive at the chosen time.",
		viewBookings: "My visits",
		bookAnother: "New booking",
		bookingsTitle: "My visits",
		bookingsLead: "Bookings are stored in this browser.",
		emptyBookings: "No visits yet. Book your first clean.",
		cancel: "Cancel",
		cancelled: "Cancelled",
		confirmed: "Confirmed",
		upcoming: "Upcoming",
		past: "Past",
		aboutPageTitle: "About ŠvaraBin",
		aboutP1: "We are a Klaipėda cleaning and property-care team. We look after apartments, houses, short-stay homes and offices.",
		aboutP2: "The work is more than wiping surfaces. We leave a room that is easy to live in, host in and work in.",
		aboutP3: "We use professional equipment and considered products. If you have delicate finishes or allergies, mention them in the notes.",
		detailFrom: "From",
		contact: "Contact",
		service_regular: "Regular cleaning",
		service_regular_d: "Home upkeep: dusting, floors, kitchen, bathroom and bins.",
		service_deep: "Deep cleaning",
		service_deep_d: "A thorough clean throughout — including the corners, kitchen and bath details.",
		service_move: "Move-in / move-out",
		service_move_d: "Empty-home cleaning before keys change hands or after a renovation.",
		service_airbnb: "Airbnb & guest-ready",
		service_airbnb_d: "Turnover between guests: linen, bath, kitchen and first impression.",
		service_office: "Offices & commercial",
		service_office_d: "Scheduled cleaning for offices, halls and commercial rooms.",
		service_windows: "Window cleaning",
		service_windows_d: "Interior glass and sills. Baltic light stays; streaks do not.",
		service_upholstery: "Upholstery cleaning",
		service_upholstery_d: "Sofas, chairs and textiles — freshness without a harsh scent.",
		service_linen: "Linen & laundry",
		service_linen_d: "Change, wash and make beds for guests or the household.",
		service_check: "Property check",
		service_check_d: "A short visit: water, lights, order, mailbox — peace of mind for owners."
	}
};
var LanguageContext = (0, import_react.createContext)(null);
function LanguageProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("lt");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === "lt" || stored === "en") setLangState(stored);
	}, []);
	const setLang = (0, import_react.useCallback)((next) => {
		setLangState(next);
		window.localStorage.setItem(STORAGE_KEY, next);
		document.documentElement.lang = next;
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
	}, [lang]);
	const t = (0, import_react.useCallback)((key) => dictionaries[lang][key] ?? key, [lang]);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		setLang,
		t
	}), [
		lang,
		setLang,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value,
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(LanguageContext);
	if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
	return ctx;
}
function SiteFooter() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto border-t border-line bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-semibold",
					children: t("brand")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xs text-sm leading-relaxed text-muted",
					children: t("tagline")
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: t("contact")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: t("phone")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: t("email")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: t("footerArea")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "text-muted hover:text-ink",
							children: t("navServices")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "text-muted hover:text-ink",
							children: t("navBook")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/bookings",
							className: "text-muted hover:text-ink",
							children: t("navBookings")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-subtle",
							children: t("footerHours")
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line px-4 py-4 text-center text-xs text-subtle",
			children: t("footerCopy")
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/40 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-pine text-pine-fg shadow-card hover:opacity-90",
			secondary: "bg-surface text-ink shadow-card hover:shadow-[var(--shadow-card-hover)]",
			ghost: "bg-transparent text-ink hover:bg-sand/60",
			outline: "bg-transparent text-ink shadow-card hover:bg-surface"
		},
		size: {
			default: "h-11 rounded-md px-5 text-sm",
			lg: "h-12 rounded-lg px-6 text-base",
			sm: "h-9 rounded-sm px-3 text-sm",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, asChild, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
function SiteHeader() {
	const { t, lang, setLang } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const links = [
		{
			to: "/services",
			label: t("navServices")
		},
		{
			to: "/about",
			label: t("navAbout")
		},
		{
			to: "/bookings",
			label: t("navBookings")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-baseline gap-2",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl font-semibold tracking-tight text-ink",
						children: t("brand")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-xs text-muted sm:inline",
						children: "Klaipėda"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "rounded-md px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink",
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex rounded-full bg-sand/70 p-0.5 text-xs font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLang("lt"),
								className: cn("min-w-9 rounded-full px-2.5 py-1.5 transition-colors duration-150", lang === "lt" ? "bg-surface text-ink shadow-card" : "text-muted"),
								"aria-pressed": lang === "lt",
								children: t("langLt")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLang("en"),
								className: cn("min-w-9 rounded-full px-2.5 py-1.5 transition-colors duration-150", lang === "en" ? "bg-surface text-ink shadow-card" : "text-muted"),
								"aria-pressed": lang === "en",
								children: t("langEn")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/book",
								children: t("navBook")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-md md:hidden",
							"aria-label": "Menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line bg-bg px-4 py-3 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "rounded-md px-3 py-3 text-base text-ink",
					onClick: () => setOpen(false),
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						onClick: () => setOpen(false),
						children: t("navBook")
					})
				})]
			})
		}) : null]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-mupTJn-s.css";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ŠvaraBin — valymas Klaipėdoje" },
			{
				name: "description",
				content: "Profesionalios valymo ir būsto priežiūros paslaugos Klaipėdoje. Rezervuokite vizitą internetu."
			},
			{
				name: "theme-color",
				content: "#245E4F"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "lt",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-PEvnDH7B.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./about-T0dHhWAO.mjs");
var Route$3 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./book-KAGlzjG4.mjs");
var Route$2 = createFileRoute("/book")({
	validateSearch: (search) => ({ service: typeof search.service === "string" ? search.service : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./bookings-CReDtZZ9.mjs");
var Route$1 = createFileRoute("/bookings")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./services-Bt64sWHF.mjs");
var Route = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute: Route$3.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$5
	}),
	BookRoute: Route$2.update({
		id: "/book",
		path: "/book",
		getParentRoute: () => Route$5
	}),
	BookingsRoute: Route$1.update({
		id: "/bookings",
		path: "/bookings",
		getParentRoute: () => Route$5
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useI18n as a, cn as i, Route$2 as n, Button as r, router_exports as t };
