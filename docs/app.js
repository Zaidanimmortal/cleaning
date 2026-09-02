(function () {
  const BASE = window.SB_BASE || "./";
  const KEY = "svarabin-bookings";
  const LANG_KEY = "svarabin-lang";
  const SLOTS = ["08:00", "10:00", "12:00", "14:00", "16:00"];
  const SERVICES = [
    { id: "regular", image: "images/kitchen.jpg", durationMin: 120, fromEur: 45, popular: true },
    { id: "deep", image: "images/hero.jpg", durationMin: 240, fromEur: 95 },
    { id: "move", image: "images/kitchen.jpg", durationMin: 300, fromEur: 130 },
    { id: "airbnb", image: "images/airbnb.jpg", durationMin: 120, fromEur: 55, popular: true },
    { id: "office", image: "images/office.jpg", durationMin: 180, fromEur: 70 },
    { id: "windows", image: "images/windows.jpg", durationMin: 90, fromEur: 40 },
    { id: "upholstery", image: "images/hero.jpg", durationMin: 90, fromEur: 35 },
    { id: "linen", image: "images/airbnb.jpg", durationMin: 60, fromEur: 18 },
    { id: "check", image: "images/team.jpg", durationMin: 45, fromEur: 25 },
  ];

  const lt = {
    brand: "ŠvaraBin", tagline: "Švara Klaipėdoje, be rūpesčių",
    navServices: "Paslaugos", navBook: "Rezervuoti", navBookings: "Mano vizitai", navAbout: "Apie mus",
    heroKicker: "Klaipėda ir apylinkės",
    heroTitle: "Profesionalus valymas ir būsto priežiūra",
    heroLead: "Butai, namai, Airbnb, biurai ir komercinės patalpos. Reguliarus ir generalinis valymas, langai, baldai, skalbiniai ir turto patikra — kruopščiai, laiku, švariai.",
    heroCta: "Rezervuoti vizitą", heroSecondary: "Žiūrėti paslaugas",
    heroNote: "Dirbame pirmadienį–šeštadienį · 8:00–18:00",
    trust1: "Kruopštumas kiekviename kambaryje", trust2: "Aiški kaina prieš atvykimą", trust3: "Patikima komanda Klaipėdoje",
    servicesTitle: "Paslaugos, pritaikytos jūsų erdvei",
    servicesLead: "Nuo kasdienės tvarkos iki svečių priėmimo ir išsikraustymo. Pasirinkite paslaugą ir rezervuokite laiką per kelias minutes.",
    from: "nuo", bookThis: "Rezervuoti", popular: "Populiariausia",
    howTitle: "Kaip vyksta rezervacija",
    how1t: "Pasirinkite paslaugą", how1d: "Nurodykite, ko reikia — butui, biurui ar svečių būstui.",
    how2t: "Pasirinkite dieną ir laiką", how2d: "Laisvi intervalai pirmadieniais–šeštadieniais, 8:00–18:00.",
    how3t: "Patvirtiname vizitą", how3d: "Gausite patvirtinimą čia pat. Komanda atvyksta pasiruošusi.",
    areaTitle: "Dirbame Klaipėdoje ir aplink",
    areaLead: "Miestas, Melnragė, Giruliai, Sendvaris, Priekulė ir kitos artimos gyvenvietės. Jei abejojate, parašykite adresą rezervacijoje — patikrinsime.",
    quote: "Kiekvienas vizitas turi palikti tą patį jausmą — kad namai kvėpuoja ir viskas yra savo vietoje.",
    ctaTitle: "Reikia švaros šią savaitę?", ctaLead: "Pasirinkite dieną, palikite adresą — mes pasirūpinsime likusia dalimi.",
    ctaBtn: "Užsakyti valymą", footerCopy: "ŠvaraBin · Klaipėda", footerHours: "I–VI 8:00–18:00",
    footerArea: "Klaipėda ir aplinkinės teritorijos", phone: "+370 600 00 000", email: "labas@svarabin.lt",
    bookTitle: "Rezervuoti vizitą", bookLead: "Trys žingsniai. Patvirtinimas iš karto.",
    stepService: "Paslauga", stepWhen: "Laikas", stepDetails: "Duomenys",
    continue: "Toliau", back: "Atgal", confirm: "Patvirtinti rezervaciją",
    selectService: "Pasirinkite paslaugą", selectDate: "Data", selectTime: "Laikas",
    noSlots: "Šiai dienai laisvų laikų nėra. Pasirinkite kitą datą.", closedSunday: "Sekmadieniais nedirbame.",
    taken: "Užimta", name: "Vardas", phoneLabel: "Telefonas", emailLabel: "El. paštas",
    address: "Adresas Klaipėdoje", notes: "Pastabos (raktas, gyvūnai, pageidavimai)",
    notesPh: "Pavyzdžiui: raktas pas kaimynus, du katės, langus irgi.",
    required: "Šis laukas privalomas", invalidEmail: "Įveskite teisingą el. paštą", invalidPhone: "Įveskite telefono numerį",
    summary: "Santrauka", duration: "Trukmė", date: "Data", time: "Laikas",
    successTitle: "Rezervacija patvirtinta",
    successLead: "Išsaugojome jūsų vizitą šiame įrenginyje. Komanda atvyks nurodytu laiku.",
    viewBookings: "Mano vizitai", bookAnother: "Nauja rezervacija",
    bookingsTitle: "Mano vizitai", bookingsLead: "Rezervacijos saugomos šiame naršyklės įrenginyje.",
    emptyBookings: "Dar nėra vizitų. Rezervuokite pirmąjį valymą.",
    cancel: "Atšaukti", cancelled: "Atšaukta", confirmed: "Patvirtinta",
    aboutPageTitle: "Apie ŠvaraBin",
    aboutP1: "Esame Klaipėdos valymo ir būsto priežiūros komanda. Dirbame su butais, namais, trumpalaikės nuomos objektais ir biurais.",
    aboutP2: "Mūsų darbas — ne tik nuvalyti paviršius. Paliekame erdvę, kurioje smagu gyventi, priimti svečius ir dirbti.",
    aboutP3: "Naudojame profesionalią įrangą ir atsakingas priemones. Jei turite jautrių paviršių ar alergijų — parašykite pastabose.",
    contact: "Kontaktai",
    service_regular: "Reguliarus valymas", service_regular_d: "Butų ir namų palaikomasis valymas: dulkės, grindys, virtuvė, vonia, šiukšlės.",
    service_deep: "Generalinis valymas", service_deep_d: "Giluminis valymas visoje erdvėje — įskaitant sunkiai pasiekiamas vietas ir detalų virtuvės bei vonios darbą.",
    service_move: "Po remonto ar išsikraustymo", service_move_d: "Išvalome patalpas prieš įsikraustant arba po išsikraustymo, kad raktus galėtumėte perduoti ramiai.",
    service_airbnb: "Airbnb ir svečių paruošimas", service_airbnb_d: "Greitas apyvartos valymas tarp svečių: patalynė, vonia, virtuvė ir pirmas įspūdis.",
    service_office: "Biurai ir komercinės patalpos", service_office_d: "Periodinis biurų, salių ir komercinių erdvių valymas pagal jūsų grafiką.",
    service_windows: "Langų valymas", service_windows_d: "Vidaus langai, stiklai ir palangės. Baltijos šviesa lieka, dryžiai — ne.",
    service_upholstery: "Baldų ir apmušalų valymas", service_upholstery_d: "Sofos, kėdės ir tekstilės paviršiai — gaivumas be agresyvaus kvapo.",
    service_linen: "Patalynė ir skalbiniai", service_linen_d: "Patalynės keitimas, skalbimas ir tvarkingas suklojimas svečių ar namų režimu.",
    service_check: "Būsto patikra", service_check_d: "Trumpas apžiūros vizitas: vanduo, šviesa, tvarka, pašto dėžutė — ramybė savininkui.",
  };

  const en = {
    brand: "ŠvaraBin", tagline: "Quiet, thorough cleaning in Klaipėda",
    navServices: "Services", navBook: "Book", navBookings: "My visits", navAbout: "About",
    heroKicker: "Klaipėda and nearby",
    heroTitle: "Professional cleaning and property care",
    heroLead: "Apartments, houses, Airbnbs, offices and commercial spaces. Regular and deep cleans, windows, upholstery, linen and property checks — careful, on time, fresh.",
    heroCta: "Book a visit", heroSecondary: "See services",
    heroNote: "Monday–Saturday · 8:00–18:00",
    trust1: "Detail in every room", trust2: "Clear price before we arrive", trust3: "A local Klaipėda team",
    servicesTitle: "Services shaped around your space",
    servicesLead: "From weekly upkeep to guest turnovers and move-outs. Choose a service and reserve a slot in a few minutes.",
    from: "from", bookThis: "Book", popular: "Popular",
    howTitle: "How booking works",
    how1t: "Choose a service", how1d: "Tell us whether it is a home, office or guest property.",
    how2t: "Pick a day and time", how2d: "Open slots Monday–Saturday, 8:00–18:00.",
    how3t: "We confirm on the spot", how3d: "You get an instant confirmation. The team arrives prepared.",
    areaTitle: "Klaipėda and the coast around it",
    areaLead: "The city, Melnragė, Giruliai, Sendvaris, Priekulė and nearby villages. If you are unsure, add the address — we will check.",
    quote: "Every visit should leave the same feeling — that the rooms can breathe and everything is in its place.",
    ctaTitle: "Need a clean this week?", ctaLead: "Choose a day, leave the address — we take care of the rest.",
    ctaBtn: "Book cleaning", footerCopy: "ŠvaraBin · Klaipėda", footerHours: "Mon–Sat 8:00–18:00",
    footerArea: "Klaipėda and surrounding areas", phone: "+370 600 00 000", email: "labas@svarabin.lt",
    bookTitle: "Book a visit", bookLead: "Three steps. Instant confirmation.",
    stepService: "Service", stepWhen: "Schedule", stepDetails: "Details",
    continue: "Continue", back: "Back", confirm: "Confirm booking",
    selectService: "Choose a service", selectDate: "Date", selectTime: "Time",
    noSlots: "No open times this day. Please pick another date.", closedSunday: "We rest on Sundays.",
    taken: "Taken", name: "Name", phoneLabel: "Phone", emailLabel: "Email",
    address: "Address in Klaipėda", notes: "Notes (keys, pets, requests)",
    notesPh: "e.g. key with the neighbour, two cats, please include windows.",
    required: "This field is required", invalidEmail: "Enter a valid email", invalidPhone: "Enter a phone number",
    summary: "Summary", duration: "Duration", date: "Date", time: "Time",
    successTitle: "Booking confirmed",
    successLead: "Your visit is saved on this device. The team will arrive at the chosen time.",
    viewBookings: "My visits", bookAnother: "New booking",
    bookingsTitle: "My visits", bookingsLead: "Bookings are stored in this browser.",
    emptyBookings: "No visits yet. Book your first clean.",
    cancel: "Cancel", cancelled: "Cancelled", confirmed: "Confirmed",
    aboutPageTitle: "About ŠvaraBin",
    aboutP1: "We are a Klaipėda cleaning and property-care team. We look after apartments, houses, short-stay homes and offices.",
    aboutP2: "The work is more than wiping surfaces. We leave a room that is easy to live in, host in and work in.",
    aboutP3: "We use professional equipment and considered products. If you have delicate finishes or allergies, mention them in the notes.",
    contact: "Contact",
    service_regular: "Regular cleaning", service_regular_d: "Home upkeep: dusting, floors, kitchen, bathroom and bins.",
    service_deep: "Deep cleaning", service_deep_d: "A thorough clean throughout — including the corners, kitchen and bath details.",
    service_move: "Move-in / move-out", service_move_d: "Empty-home cleaning before keys change hands or after a renovation.",
    service_airbnb: "Airbnb & guest-ready", service_airbnb_d: "Turnover between guests: linen, bath, kitchen and first impression.",
    service_office: "Offices & commercial", service_office_d: "Scheduled cleaning for offices, halls and commercial rooms.",
    service_windows: "Window cleaning", service_windows_d: "Interior glass and sills. Baltic light stays; streaks do not.",
    service_upholstery: "Upholstery cleaning", service_upholstery_d: "Sofas, chairs and textiles — freshness without a harsh scent.",
    service_linen: "Linen & laundry", service_linen_d: "Change, wash and make beds for guests or the household.",
    service_check: "Property check", service_check_d: "A short visit: water, lights, order, mailbox — peace of mind for owners.",
  };

  const dict = { lt, en };
  const state = {
    lang: localStorage.getItem(LANG_KEY) === "en" ? "en" : "lt",
    menu: false,
    book: { step: 1, serviceId: "", date: "", time: "", name: "", phone: "", email: "", address: "", notes: "", done: null, cal: new Date(), errors: {} },
  };

  function t(key) { return dict[state.lang][key] || key; }
  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&", "<": "<", ">": ">", '"': """, "'": "&#39;" }[c]));
  }
  function img(path) { return BASE + path; }
  function fmtEur(n) {
    return new Intl.NumberFormat(state.lang === "lt" ? "lt-LT" : "en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  }
  function fmtDur(m) {
    if (m >= 60 && m % 60 === 0) return state.lang === "lt" ? m / 60 + " val." : m / 60 + " h";
    return state.lang === "lt" ? m + " min." : m + " min";
  }
  function parseHash() {
    const raw = (location.hash || "#/").replace(/^#/, "") || "/";
    const u = new URL(raw, "https://svarabin.local");
    return { path: u.pathname.replace(/\/$/, "") || "/", query: Object.fromEntries(u.searchParams) };
  }
  function go(path) {
    location.hash = path.startsWith("#") ? path.slice(1) : path;
  }
  function readBookings() {
    try {
      const parsed = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch { return []; }
  }
  function writeBookings(list) { localStorage.setItem(KEY, JSON.stringify(list)); }
  function isSunday(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d).getDay() === 0;
  }
  function hashTaken(date, time) {
    let h = 2166136261;
    const seed = date + ":" + time;
    for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0) % 9 === 0;
  }
  function slotTaken(date, time, bookings) {
    if (bookings.some((b) => b.status === "confirmed" && b.date === date && b.time === time)) return true;
    return hashTaken(date, time);
  }
  function toIso(d) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function todayStart() {
    const d = new Date(); d.setHours(0, 0, 0, 0); return d;
  }
  function svgMenu(open) {
    return open
      ? '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5l10 10M15 5L5 15"/></svg>'
      : '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h12M4 12h12M4 17h12"/></svg>';
  }
  function iconSpark() { return '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2l1.2 3.8L13 7l-3.8 1.2L8 12 6.8 8.2 3 7l3.8-1.2z"/></svg>'; }
  function iconClock() { return '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 1"/></svg>'; }
  function iconPin() { return '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 14s5-4.2 5-8A5 5 0 0 0 3 6c0 3.8 5 8 5 8z"/><circle cx="8" cy="6" r="1.4"/></svg>'; }

  function header() {
    return `<header class="site-header">
      <div class="wrap header-row">
        <a class="brand" href="#/"><span class="brand-name">${esc(t("brand"))}</span><span class="brand-city">Klaipėda</span></a>
        <nav class="nav-desktop">
          <a href="#/services">${esc(t("navServices"))}</a>
          <a href="#/about">${esc(t("navAbout"))}</a>
          <a href="#/bookings">${esc(t("navBookings"))}</a>
        </nav>
        <div class="header-actions">
          <div class="lang">
            <button type="button" data-lang="lt" class="${state.lang === "lt" ? "on" : ""}">LT</button>
            <button type="button" data-lang="en" class="${state.lang === "en" ? "on" : ""}">EN</button>
          </div>
          <a class="btn sm" href="#/book" style="display:none" id="hdr-book">${esc(t("navBook"))}</a>
          <button type="button" class="menu-btn" data-menu="1" aria-label="Menu">${svgMenu(state.menu)}</button>
        </div>
      </div>
      <div class="nav-mobile ${state.menu ? "open" : ""}">
        <a href="#/services">${esc(t("navServices"))}</a>
        <a href="#/about">${esc(t("navAbout"))}</a>
        <a href="#/bookings">${esc(t("navBookings"))}</a>
        <a class="btn" href="#/book">${esc(t("navBook"))}</a>
      </div>
    </header>`;
  }
  function footer() {
    return `<footer class="site-footer">
      <div class="wrap footer-grid">
        <div><p class="brand-name">${esc(t("brand"))}</p><p class="muted" style="margin-top:.5rem;max-width:16rem">${esc(t("tagline"))}</p></div>
        <div><p style="font-weight:600">${esc(t("contact"))}</p><p class="muted" style="margin:.5rem 0 0">${esc(t("phone"))}</p><p class="muted">${esc(t("email"))}</p><p class="muted" style="margin-top:.5rem">${esc(t("footerArea"))}</p></div>
        <div><a class="muted" href="#/services">${esc(t("navServices"))}</a><br><a class="muted" href="#/book">${esc(t("navBook"))}</a><br><a class="muted" href="#/bookings">${esc(t("navBookings"))}</a><p class="subtle" style="margin-top:1rem">${esc(t("footerHours"))}</p></div>
      </div>
      <div class="footer-bar">${esc(t("footerCopy"))}</div>
    </footer>`;
  }
  function serviceCard(s, featured) {
    return `<article class="service-card">
      <img src="${esc(img(s.image))}" alt="">
      <div class="body">
        <div class="row-between">
          <h3>${esc(t("service_" + s.id))}</h3>
          ${s.popular ? `<span class="badge">${esc(t("popular"))}</span>` : ""}
        </div>
        <p class="muted" style="margin:.5rem 0 0;font-size:.9rem">${esc(t("service_" + s.id + "_d"))}</p>
        <div class="row-between" style="margin-top:1rem;align-items:center">
          <p class="muted" style="font-size:.9rem">${esc(t("from"))} <strong style="color:var(--ink)">${esc(fmtEur(s.fromEur))}</strong> · ${esc(fmtDur(s.durationMin))}</p>
          <a class="btn sm" href="#/book?service=${esc(s.id)}">${esc(t("bookThis"))}</a>
        </div>
      </div>
    </article>`;
  }

  function viewHome() {
    const featured = SERVICES.filter((s) => ["regular", "airbnb", "deep", "windows"].includes(s.id));
    return `<main>
      <section class="wrap hero">
        <div>
          <p class="kicker">${esc(t("heroKicker"))}</p>
          <h1>${esc(t("heroTitle"))}</h1>
          <p class="lead">${esc(t("heroLead"))}</p>
          <div class="hero-actions">
            <a class="btn lg" href="#/book">${esc(t("heroCta"))}</a>
            <a class="btn lg secondary" href="#/services">${esc(t("heroSecondary"))}</a>
          </div>
          <p class="note">${esc(t("heroNote"))}</p>
        </div>
        <div class="hero-photo">
          <img src="${esc(img("images/hero.jpg"))}" alt="">
          <div class="quote-card">${esc(t("quote"))}</div>
        </div>
      </section>
      <section><div class="wrap trust">
        <div class="trust-item"><span class="icon-pill">${iconSpark()}</span><p>${esc(t("trust1"))}</p></div>
        <div class="trust-item"><span class="icon-pill">${iconClock()}</span><p>${esc(t("trust2"))}</p></div>
        <div class="trust-item"><span class="icon-pill">${iconPin()}</span><p>${esc(t("trust3"))}</p></div>
      </div></section>
      <section class="wrap section">
        <h2>${esc(t("servicesTitle"))}</h2>
        <p class="muted" style="margin-top:.75rem;max-width:36rem">${esc(t("servicesLead"))}</p>
        <div class="grid-2" style="margin-top:2.5rem">${featured.map((s) => serviceCard(s)).join("")}</div>
        <div style="margin-top:2rem"><a class="btn outline" href="#/services">${esc(t("navServices"))}</a></div>
      </section>
      <section class="pine-band"><div class="wrap section split">
        <div>
          <h2>${esc(t("howTitle"))}</h2>
          <ol class="how-list">
            <li><span class="how-n">1</span><div><p style="font-weight:600">${esc(t("how1t"))}</p><p class="muted" style="margin:.25rem 0 0;font-size:.9rem">${esc(t("how1d"))}</p></div></li>
            <li><span class="how-n">2</span><div><p style="font-weight:600">${esc(t("how2t"))}</p><p class="muted" style="margin:.25rem 0 0;font-size:.9rem">${esc(t("how2d"))}</p></div></li>
            <li><span class="how-n">3</span><div><p style="font-weight:600">${esc(t("how3t"))}</p><p class="muted" style="margin:.25rem 0 0;font-size:.9rem">${esc(t("how3d"))}</p></div></li>
          </ol>
        </div>
        <img class="rounded-img" src="${esc(img("images/team.jpg"))}" alt="" style="max-height:420px;width:100%;object-fit:cover">
      </div></section>
      <section class="wrap section split">
        <img class="rounded-img" src="${esc(img("images/windows.jpg"))}" alt="" style="aspect-ratio:4/3;width:100%;object-fit:cover">
        <div>
          <h2>${esc(t("areaTitle"))}</h2>
          <p class="muted" style="margin-top:1rem;line-height:1.6">${esc(t("areaLead"))}</p>
        </div>
      </section>
      <section class="wrap" style="padding-bottom:4rem">
        <div class="cta-panel">
          <h2>${esc(t("ctaTitle"))}</h2>
          <p class="muted" style="margin-top:.75rem;max-width:32rem">${esc(t("ctaLead"))}</p>
          <a class="btn lg" href="#/book" style="margin-top:2rem">${esc(t("ctaBtn"))}</a>
        </div>
      </section>
    </main>`;
  }

  function viewServices() {
    return `<main class="wrap"><div class="page-head"><h1>${esc(t("servicesTitle"))}</h1><p class="muted" style="margin-top:.75rem">${esc(t("servicesLead"))}</p></div>
      <div class="grid-2" style="padding-bottom:4rem">${SERVICES.map((s) => serviceCard(s)).join("")}</div></main>`;
  }

  function viewAbout() {
    return `<main class="wrap section" style="max-width:48rem">
      <h1>${esc(t("aboutPageTitle"))}</h1>
      <p class="lead">${esc(t("aboutP1"))}</p>
      <p class="muted" style="margin-top:1rem;line-height:1.6">${esc(t("aboutP2"))}</p>
      <p class="muted" style="margin-top:1rem;line-height:1.6">${esc(t("aboutP3"))}</p>
      <img class="rounded-img" src="${esc(img("images/team.jpg"))}" alt="" style="margin-top:2rem;aspect-ratio:16/9;width:100%;object-fit:cover">
    </main>`;
  }

  function calendarHtml() {
    const cal = new Date(state.book.cal.getFullYear(), state.book.cal.getMonth(), 1);
    const year = cal.getFullYear();
    const month = cal.getMonth();
    const firstDow = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysIn = new Date(year, month + 1, 0).getDate();
    const label = cal.toLocaleDateString(state.lang === "lt" ? "lt-LT" : "en-GB", { month: "long", year: "numeric" });
    const start = todayStart();
    let cells = "";
    const dows = state.lang === "lt" ? ["Pr", "An", "Tr", "Kt", "Pn", "Št", "Sk"] : ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    cells += dows.map((d) => `<div class="dow">${d}</div>`).join("");
    for (let i = 0; i < firstDow; i++) cells += "<div></div>";
    for (let d = 1; d <= daysIn; d++) {
      const date = new Date(year, month, d);
      const iso = toIso(date);
      const disabled = date < start || date.getDay() === 0;
      const on = state.book.date === iso;
      cells += `<button type="button" class="day ${on ? "on" : ""}" data-date="${iso}" ${disabled ? "disabled" : ""}>${d}</button>`;
    }
    return `<div class="cal">
      <div class="cal-head">
        <button type="button" class="btn ghost sm" data-cal="-1">‹</button>
        <strong>${esc(label)}</strong>
        <button type="button" class="btn ghost sm" data-cal="1">›</button>
      </div>
      <div class="cal-grid">${cells}</div>
    </div>`;
  }

  function viewBook() {
    const b = state.book;
    if (b.done) {
      return `<main class="wrap success">
        <h1>${esc(t("successTitle"))}</h1>
        <p class="lead">${esc(t("successLead"))}</p>
        <div class="hero-actions">
          <a class="btn" href="#/bookings">${esc(t("viewBookings"))}</a>
          <a class="btn secondary" href="#/book">${esc(t("bookAnother"))}</a>
        </div>
      </main>`;
    }
    const svc = SERVICES.find((s) => s.id === b.serviceId);
    const bookings = readBookings();
    const free = b.date && !isSunday(b.date) ? SLOTS.filter((tm) => !slotTaken(b.date, tm, bookings)) : [];
    let body = "";
    if (b.step === 1) {
      body = `<p class="muted">${esc(t("selectService"))}</p>
        <div class="grid-2" style="margin-top:1rem">${SERVICES.map((s) => `
          <button type="button" class="choice ${b.serviceId === s.id ? "on" : ""}" data-svc="${s.id}">
            <strong>${esc(t("service_" + s.id))}</strong>
            <span class="muted" style="font-size:.85rem">${esc(fmtEur(s.fromEur))} · ${esc(fmtDur(s.durationMin))}</span>
          </button>`).join("")}</div>
        <div style="margin-top:1.5rem"><button class="btn" data-next="1" ${b.serviceId ? "" : "disabled"}>${esc(t("continue"))}</button></div>`;
    } else if (b.step === 2) {
      body = `<p class="muted">${esc(t("selectDate"))}</p>
        ${calendarHtml()}
        ${b.date && isSunday(b.date) ? `<p class="err">${esc(t("closedSunday"))}</p>` : ""}
        <p class="muted" style="margin-top:1.25rem">${esc(t("selectTime"))}</p>
        <div class="slots">${b.date && !isSunday(b.date)
          ? (free.length ? SLOTS.map((tm) => {
              const taken = slotTaken(b.date, tm, bookings);
              return `<button type="button" class="slot ${b.time === tm ? "on" : ""}" data-time="${tm}" ${taken ? "disabled" : ""}>${tm}${taken ? " · " + esc(t("taken")) : ""}</button>`;
            }).join("") : `<p class="err">${esc(t("noSlots"))}</p>`)
          : ""}</div>
        <div class="hero-actions" style="margin-top:1.5rem">
          <button class="btn outline" data-back="1">${esc(t("back"))}</button>
          <button class="btn" data-next="2" ${b.date && b.time ? "" : "disabled"}>${esc(t("continue"))}</button>
        </div>`;
    } else {
      const locale = state.lang === "lt" ? "lt-LT" : "en-GB";
      const dateLabel = b.date ? new Date(b.date + "T12:00:00").toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long" }) : "";
      body = `<div class="summary">
          <p style="font-weight:600">${esc(t("summary"))}</p>
          <p>${esc(svc ? t("service_" + svc.id) : "")} · ${esc(dateLabel)} · ${esc(b.time)}</p>
          <p class="muted">${esc(svc ? fmtEur(svc.fromEur) : "")} · ${esc(svc ? fmtDur(svc.durationMin) : "")}</p>
        </div>
        <form class="form" style="margin-top:1.25rem" data-submit="1">
          <label>${esc(t("name"))}<input name="name" value="${esc(b.name)}" autocomplete="name">${b.errors.name ? `<span class="err">${esc(b.errors.name)}</span>` : ""}</label>
          <label>${esc(t("phoneLabel"))}<input name="phone" value="${esc(b.phone)}" autocomplete="tel">${b.errors.phone ? `<span class="err">${esc(b.errors.phone)}</span>` : ""}</label>
          <label>${esc(t("emailLabel"))}<input name="email" type="email" value="${esc(b.email)}" autocomplete="email">${b.errors.email ? `<span class="err">${esc(b.errors.email)}</span>` : ""}</label>
          <label>${esc(t("address"))}<input name="address" value="${esc(b.address)}" autocomplete="street-address">${b.errors.address ? `<span class="err">${esc(b.errors.address)}</span>` : ""}</label>
          <label>${esc(t("notes"))}<textarea name="notes" placeholder="${esc(t("notesPh"))}">${esc(b.notes)}</textarea></label>
          <div class="hero-actions">
            <button type="button" class="btn outline" data-back="1">${esc(t("back"))}</button>
            <button type="submit" class="btn">${esc(t("confirm"))}</button>
          </div>
        </form>`;
    }
    return `<main class="wrap wizard">
      <div class="page-head"><h1>${esc(t("bookTitle"))}</h1><p class="muted">${esc(t("bookLead"))}</p></div>
      <div class="steps">
        <span class="${b.step === 1 ? "on" : ""}">1 ${esc(t("stepService"))}</span>
        <span>→</span>
        <span class="${b.step === 2 ? "on" : ""}">2 ${esc(t("stepWhen"))}</span>
        <span>→</span>
        <span class="${b.step === 3 ? "on" : ""}">3 ${esc(t("stepDetails"))}</span>
      </div>
      ${body}
    </main>`;
  }

  function viewBookings() {
    const list = readBookings();
    if (!list.length) {
      return `<main class="wrap"><div class="page-head"><h1>${esc(t("bookingsTitle"))}</h1><p class="muted">${esc(t("bookingsLead"))}</p></div>
        <p class="empty">${esc(t("emptyBookings"))}</p>
        <a class="btn" href="#/book">${esc(t("navBook"))}</a></main>`;
    }
    const cards = list.map((b) => {
      const svc = SERVICES.find((s) => s.id === b.serviceId);
      return `<article class="visit ${b.status === "cancelled" ? "cancelled" : ""}">
        <div class="row-between">
          <strong>${esc(svc ? t("service_" + svc.id) : b.serviceId)}</strong>
          <span class="badge">${esc(t(b.status))}</span>
        </div>
        <p class="muted">${esc(b.date)} · ${esc(b.time)}</p>
        <p>${esc(b.name)} · ${esc(b.address)}</p>
        ${b.status === "confirmed" ? `<button class="btn outline sm" data-cancel="${esc(b.id)}">${esc(t("cancel"))}</button>` : ""}
      </article>`;
    }).join("");
    return `<main class="wrap"><div class="page-head"><h1>${esc(t("bookingsTitle"))}</h1><p class="muted">${esc(t("bookingsLead"))}</p></div>
      <div style="display:grid;gap:1rem;padding-bottom:4rem">${cards}</div></main>`;
  }

  function render() {
    const { path, query } = parseHash();
    if (path === "/book" && query.service && !state.book.serviceId) {
      state.book.serviceId = query.service;
      state.book.step = 2;
    }
    if (path !== "/book" && state.book.done) {
      state.book = { step: 1, serviceId: "", date: "", time: "", name: "", phone: "", email: "", address: "", notes: "", done: null, cal: new Date(), errors: {} };
    }
    document.documentElement.lang = state.lang;
    let main = viewHome();
    if (path === "/services") main = viewServices();
    else if (path === "/about") main = viewAbout();
    else if (path === "/book") main = viewBook();
    else if (path === "/bookings") main = viewBookings();
    document.getElementById("app").innerHTML = header() + main + footer();
    const hdrBook = document.getElementById("hdr-book");
    if (hdrBook && window.matchMedia("(min-width: 640px)").matches) hdrBook.style.display = "inline-flex";
  }

  document.addEventListener("click", (e) => {
    const langBtn = e.target.closest("[data-lang]");
    if (langBtn) {
      state.lang = langBtn.getAttribute("data-lang");
      localStorage.setItem(LANG_KEY, state.lang);
      render();
      return;
    }
    if (e.target.closest("[data-menu]")) { state.menu = !state.menu; render(); return; }
    if (e.target.closest("a[href^='#/']")) { state.menu = false; }
    const svc = e.target.closest("[data-svc]");
    if (svc) { state.book.serviceId = svc.getAttribute("data-svc"); render(); return; }
    if (e.target.closest("[data-next]")) {
      if (state.book.step === 1 && state.book.serviceId) state.book.step = 2;
      else if (state.book.step === 2 && state.book.date && state.book.time) state.book.step = 3;
      render(); return;
    }
    if (e.target.closest("[data-back]")) { state.book.step = Math.max(1, state.book.step - 1); render(); return; }
    const cal = e.target.closest("[data-cal]");
    if (cal) {
      const dir = Number(cal.getAttribute("data-cal"));
      state.book.cal = new Date(state.book.cal.getFullYear(), state.book.cal.getMonth() + dir, 1);
      render(); return;
    }
    const day = e.target.closest("[data-date]");
    if (day && !day.disabled) { state.book.date = day.getAttribute("data-date"); state.book.time = ""; render(); return; }
    const tm = e.target.closest("[data-time]");
    if (tm && !tm.disabled) { state.book.time = tm.getAttribute("data-time"); render(); return; }
    const cancel = e.target.closest("[data-cancel]");
    if (cancel) {
      const id = cancel.getAttribute("data-cancel");
      writeBookings(readBookings().map((b) => (b.id === id ? { ...b, status: "cancelled" } : b)));
      render();
    }
  });

  document.addEventListener("submit", (e) => {
    const form = e.target.closest("[data-submit]");
    if (!form) return;
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const address = String(data.get("address") || "").trim();
    const notes = String(data.get("notes") || "").trim();
    const errors = {};
    if (!name) errors.name = t("required");
    if (!phone || phone.replace(/\D/g, "").length < 8) errors.phone = t("invalidPhone");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = t("invalidEmail");
    if (!address) errors.address = t("required");
    state.book.name = name; state.book.phone = phone; state.book.email = email; state.book.address = address; state.book.notes = notes; state.book.errors = errors;
    if (Object.keys(errors).length) { render(); return; }
    const booking = {
      id: crypto.randomUUID(), serviceId: state.book.serviceId, date: state.book.date, time: state.book.time,
      name, phone, email, address, notes, createdAt: new Date().toISOString(), status: "confirmed",
    };
    writeBookings([booking, ...readBookings()]);
    state.book.done = booking.id;
    render();
    window.scrollTo(0, 0);
  });

  window.addEventListener("hashchange", () => { state.menu = false; render(); });
  if (!location.hash) location.hash = "#/";
  render();
})();
