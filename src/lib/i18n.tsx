import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "lt" | "en";

const STORAGE_KEY = "svarabin-lang";

type Dict = Record<string, string>;

const lt: Dict = {
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
  heroLead:
    "Butai, namai, Airbnb, biurai ir komercinės patalpos. Reguliarus ir generalinis valymas, langai, baldai, skalbiniai ir turto patikra — kruopščiai, laiku, švariai.",
  heroCta: "Rezervuoti vizitą",
  heroSecondary: "Žiūrėti paslaugas",
  heroNote: "Dirbame pirmadienį–šeštadienį · 8:00–18:00",
  trust1: "Kruopštumas kiekviename kambaryje",
  trust2: "Aiški kaina prieš atvykimą",
  trust3: "Patikima komanda Klaipėdoje",
  servicesTitle: "Paslaugos, pritaikytos jūsų erdvei",
  servicesLead:
    "Nuo kasdienės tvarkos iki svečių priėmimo ir išsikraustymo. Pasirinkite paslaugą ir rezervuokite laiką per kelias minutes.",
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
  areaLead:
    "Miestas, Melnragė, Giruliai, Sendvaris, Priekulė ir kitos artimos gyvenvietės. Jei abejojate, parašykite adresą rezervacijoje — patikrinsime.",
  aboutTitle: "Rami švara, be triukšmo",
  aboutLead:
    "ŠvaraBin rūpinasi detalėmis, kurias svečiai ir šeimininkai pajunta pirmiausia: gaiviu oru, švariais tekstilės paviršiais ir tvarkinga virtuve. Dirbame ramiai, atidžiai ir pagal susitartą laiką.",
  quote:
    "Kiekvienas vizitas turi palikti tą patį jausmą — kad namai kvėpuoja ir viskas yra savo vietoje.",
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
  successLead:
    "Išsaugojome jūsų vizitą šiame įrenginyje. Komanda atvyks nurodytu laiku.",
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
  aboutP1:
    "Esame Klaipėdos valymo ir būsto priežiūros komanda. Dirbame su butais, namais, trumpalaikės nuomos objektais ir biurais.",
  aboutP2:
    "Mūsų darbas — ne tik nuvalyti paviršius. Paliekame erdvę, kurioje smagu gyventi, priimti svečius ir dirbti.",
  aboutP3:
    "Naudojame profesionalią įrangą ir atsakingas priemones. Jei turite jautrių paviršių ar alergijų — parašykite pastabose.",
  detailFrom: "Kaina nuo",
  contact: "Kontaktai",
  service_regular: "Reguliarus valymas",
  service_regular_d:
    "Butų ir namų palaikomasis valymas: dulkės, grindys, virtuvė, vonia, šiukšlės.",
  service_deep: "Generalinis valymas",
  service_deep_d:
    "Giluminis valymas visoje erdvėje — įskaitant sunkiai pasiekiamas vietas ir detalų virtuvės bei vonios darbą.",
  service_move: "Po remonto ar išsikraustymo",
  service_move_d:
    "Išvalome patalpas prieš įsikraustant arba po išsikraustymo, kad raktus galėtumėte perduoti ramiai.",
  service_airbnb: "Airbnb ir svečių paruošimas",
  service_airbnb_d:
    "Greitas apyvartos valymas tarp svečių: patalynė, vonia, virtuvė ir pirmas įspūdis.",
  service_office: "Biurai ir komercinės patalpos",
  service_office_d:
    "Periodinis biurų, salių ir komercinių erdvių valymas pagal jūsų grafiką.",
  service_windows: "Langų valymas",
  service_windows_d:
    "Vidaus langai, stiklai ir palangės. Baltijos šviesa lieka, dryžiai — ne.",
  service_upholstery: "Baldų ir apmušalų valymas",
  service_upholstery_d:
    "Sofos, kėdės ir tekstilės paviršiai — gaivumas be agresyvaus kvapo.",
  service_linen: "Patalynė ir skalbiniai",
  service_linen_d:
    "Patalynės keitimas, skalbimas ir tvarkingas suklojimas svečių ar namų režimu.",
  service_check: "Būsto patikra",
  service_check_d:
    "Trumpas apžiūros vizitas: vanduo, šviesa, tvarka, pašto dėžutė — ramybė savininkui.",
};

const en: Dict = {
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
  heroLead:
    "Apartments, houses, Airbnbs, offices and commercial spaces. Regular and deep cleans, windows, upholstery, linen and property checks — careful, on time, fresh.",
  heroCta: "Book a visit",
  heroSecondary: "See services",
  heroNote: "Monday–Saturday · 8:00–18:00",
  trust1: "Detail in every room",
  trust2: "Clear price before we arrive",
  trust3: "A local Klaipėda team",
  servicesTitle: "Services shaped around your space",
  servicesLead:
    "From weekly upkeep to guest turnovers and move-outs. Choose a service and reserve a slot in a few minutes.",
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
  areaLead:
    "The city, Melnragė, Giruliai, Sendvaris, Priekulė and nearby villages. If you are unsure, add the address — we will check.",
  aboutTitle: "Calm cleanliness, without noise",
  aboutLead:
    "ŠvaraBin looks after the details guests and owners notice first: fresh air, clean textiles and a kitchen that is ready. We work quietly, carefully and on time.",
  quote:
    "Every visit should leave the same feeling — that the rooms can breathe and everything is in its place.",
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
  successLead:
    "Your visit is saved on this device. The team will arrive at the chosen time.",
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
  aboutP1:
    "We are a Klaipėda cleaning and property-care team. We look after apartments, houses, short-stay homes and offices.",
  aboutP2:
    "The work is more than wiping surfaces. We leave a room that is easy to live in, host in and work in.",
  aboutP3:
    "We use professional equipment and considered products. If you have delicate finishes or allergies, mention them in the notes.",
  detailFrom: "From",
  contact: "Contact",
  service_regular: "Regular cleaning",
  service_regular_d:
    "Home upkeep: dusting, floors, kitchen, bathroom and bins.",
  service_deep: "Deep cleaning",
  service_deep_d:
    "A thorough clean throughout — including the corners, kitchen and bath details.",
  service_move: "Move-in / move-out",
  service_move_d:
    "Empty-home cleaning before keys change hands or after a renovation.",
  service_airbnb: "Airbnb & guest-ready",
  service_airbnb_d:
    "Turnover between guests: linen, bath, kitchen and first impression.",
  service_office: "Offices & commercial",
  service_office_d:
    "Scheduled cleaning for offices, halls and commercial rooms.",
  service_windows: "Window cleaning",
  service_windows_d:
    "Interior glass and sills. Baltic light stays; streaks do not.",
  service_upholstery: "Upholstery cleaning",
  service_upholstery_d:
    "Sofas, chairs and textiles — freshness without a harsh scent.",
  service_linen: "Linen & laundry",
  service_linen_d:
    "Change, wash and make beds for guests or the household.",
  service_check: "Property check",
  service_check_d:
    "A short visit: water, lights, order, mailbox — peace of mind for owners.",
};

const dictionaries: Record<Lang, Dict> = { lt, en };

type Ctx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("lt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "lt" || stored === "en") setLangState(stored);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key: string) => dictionaries[lang][key] ?? key,
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
