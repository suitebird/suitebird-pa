/* SuiteBird PA demo dataset.
   One source of truth for every seat. The portfolio numbers are derived
   from the resident records below, never hard coded, so the roll up
   reconciles to what the operating seats actually did. */

const DEMO = {
  today: "2026-09-12",

  buildings: {
    cedarpoint: { id: "cedarpoint", name: "Cedar Point Post Acute", type: "snf", beds: 96, census: 81 },
    meadowbrook: { id: "meadowbrook", name: "Meadowbrook Senior Living", type: "sh", units: 88, occupied: 74 }
  },

  /* Coverage bands, in days remaining */
  bands: { critical: 7, urgent: 14, watch: 30 },

  residents: [
    {
      id: "r-ellison", name: "Margaret Ellison", room: "214", building: "cedarpoint",
      admitted: "2026-07-02", payer: "part_a", planName: "Medicare Part A",
      daysUsed: 73, daysTotal: 100, coverageEnds: "2026-10-09",
      careLevel: "Assisted living", budget: "$4,800 to $5,800",
      geo: "Greenville, 20 miles", rp: "Dana Ellison, daughter",
      disposition: "none", handoff: "not_sent", note: "",
      timeline: [
        { date: "2026-07-02",    text: "Admitted to Cedar Point. Part A benefit opens." },
        { date: "2026-07-15",    text: "Business office sets the benefit clock. Seat 02." },
        { date: "auto:watch",    text: "Coverage watch fires at thirty days. The social worker sees it first. Seat 01." },
        { date: "2026-09-12",    text: "Handoff packet sent to Meadowbrook. Today." },
        { date: "2026-09-19",    text: "Sales director holds a unit and tours the family. Seat 03." },
        { date: "auto:urgent",   text: "Fourteen day band. Priced options go to the family." },
        { date: "2026-09-28",    text: "Make ready scheduled against the move in date. Seat 06, not built." },
        { date: "auto:critical", text: "Seven day band. Move in date confirmed before the deadline, not after." },
        { date: "2026-10-04",    text: "Move in. Recovered bed days begin accruing." },
        { date: "auto:event",    text: "Part A benefit would have exhausted here. Five days of margin." },
        { date: "2026-10-18",    text: "Post discharge follow up. Seat 14, not built." }
      ]
    },
    {
      id: "r-whitcomb", name: "Harold Whitcomb", room: "208", building: "cedarpoint",
      admitted: "2026-08-19", payer: "advantage", planName: "Medicare Advantage, Humana",
      dayOfStay: 25, authThrough: "2026-09-16", authInterval: 5, authRisk: "high",
      careLevel: "Assisted living, memory support", budget: "$6,200 to $7,000",
      geo: "Greer, 12 miles", rp: "Paul Whitcomb, son",
      disposition: "none", handoff: "not_sent",
      note: "Third review in nine days. Plan has denied twice at this stage in similar cases.",
      timeline: [
        { date: "2026-08-19",    text: "Admitted to Cedar Point. Advantage plan authorises five days at a time." },
        { date: "2026-08-24",    text: "First review. Authorisation extended." },
        { date: "2026-09-02",    text: "Second review. Extended again, flagged high risk." },
        { date: "auto:critical", text: "Seven day band fires against the current authorisation. Seat 01." },
        { date: "2026-09-12",    text: "Handoff packet prepared. Today." },
        { date: "auto:event",    text: "Authorisation ends. No day 21 and no day 100 in this story." }
      ]
    },
    {
      id: "r-ferrante", name: "Dolores Ferrante", room: "112", building: "cedarpoint",
      admitted: "2026-06-11", payer: "part_a", planName: "Medicare Part A",
      daysUsed: 94, daysTotal: 100, coverageEnds: "2026-09-18",
      careLevel: "Skilled, long term", budget: "Medicaid pending",
      geo: "Stay in place", rp: "Anne Ferrante, daughter",
      disposition: "medicaid_pending", handoff: "n/a",
      note: "Application filed 2026-08-21. No senior housing handoff. Stays at Cedar Point on Medicaid."
    },
    {
      id: "r-okoro", name: "James Okoro", room: "220", building: "cedarpoint",
      admitted: "2026-08-12", payer: "advantage", planName: "Medicare Advantage, UnitedHealthcare",
      dayOfStay: 32, authThrough: "2026-09-25", authInterval: 7, authRisk: "medium",
      careLevel: "Independent living with services", budget: "$3,900 to $4,600",
      geo: "Taylors, 8 miles", rp: "Grace Okoro, wife",
      disposition: "none", handoff: "not_sent", note: ""
    },
    {
      id: "r-blankenship", name: "Ruth Blankenship", room: "105", building: "cedarpoint",
      admitted: "2026-06-16", payer: "part_a", planName: "Medicare Part A",
      daysUsed: 89, daysTotal: 100, coverageEnds: "2026-09-23",
      careLevel: "Assisted living", budget: "$5,100 to $5,900",
      geo: "Greenville, 20 miles", rp: "Michael Blankenship, son",
      disposition: "handoff_sent", handoff: "touring", note: ""
    },
    {
      id: "r-grimes", name: "Walter Grimes", room: "216", building: "cedarpoint",
      admitted: "2025-11-04", payer: "medicaid", planName: "Medicaid",
      careLevel: "Skilled, long term", budget: "n/a", geo: "n/a", rp: "State guardian",
      disposition: "long_term", handoff: "n/a", note: "No coverage clock. Excluded from watch."
    },
    {
      id: "r-marsh", name: "Evelyn Marsh", room: "118", building: "cedarpoint",
      admitted: "2026-07-29", payer: "part_a", planName: "Medicare Part A",
      daysUsed: 46, daysTotal: 100, coverageEnds: "2026-11-05",
      careLevel: "Assisted living", budget: "$4,600 to $5,400",
      geo: "Simpsonville, 18 miles", rp: "Karen Marsh, daughter",
      disposition: "none", handoff: "not_sent", note: ""
    },
    {
      id: "r-nash", name: "Theodore Nash", room: "202", building: "cedarpoint",
      admitted: "2026-08-31", payer: "advantage", planName: "Medicare Advantage, Aetna",
      dayOfStay: 13, authThrough: "2026-10-02", authInterval: 7, authRisk: "low",
      careLevel: "Undetermined", budget: "Undetermined", geo: "Undetermined",
      rp: "Susan Nash, wife", disposition: "none", handoff: "not_sent", note: ""
    },
    {
      id: "r-ruiz", name: "Constance Ruiz", room: "110", building: "cedarpoint",
      admitted: "2026-06-08", payer: "part_a", planName: "Medicare Part A",
      daysUsed: 97, daysTotal: 100, coverageEnds: "2026-09-15",
      careLevel: "Assisted living", budget: "$5,200 to $6,000",
      geo: "Greenville, 20 miles", rp: "Elena Ruiz, daughter",
      disposition: "move_in_confirmed", handoff: "confirmed",
      note: "Meadowbrook unit 214. Move in 2026-09-16, no gap."
    },
    {
      id: "r-penn", name: "Arthur Penn", room: "224", building: "cedarpoint",
      admitted: "2026-05-20", payer: "private", planName: "Private pay",
      careLevel: "Skilled, long term", budget: "n/a", geo: "n/a", rp: "Self",
      disposition: "long_term", handoff: "n/a", note: "No coverage clock. Excluded from watch."
    },
    {
      id: "r-kobek", name: "Lorraine Kobek", room: "106", building: "cedarpoint",
      admitted: "2026-08-24", payer: "part_a", planName: "Medicare Part A",
      daysUsed: 20, daysTotal: 100, coverageEnds: "2026-12-01",
      careLevel: "Undetermined", budget: "Undetermined", geo: "Undetermined",
      rp: "Thomas Kobek, son", disposition: "none", handoff: "not_sent", note: "",
      timeline: [
        { date: "2026-08-24",    text: "Admitted to Cedar Point. Days 1 to 20 covered in full." },
        { date: "2026-09-12",    text: "Day 20. Today. Nothing has been said to the family yet." },
        { date: "auto:event",    text: "Coinsurance begins at $217 a day. The benefit continues, it stops being free." },
        { date: "auto:critical", text: "Seven day band would have fired here. It is already behind us, which is the point." }
      ]
    },
    {
      id: "r-alvarado", name: "Vincent Alvarado", room: "212", building: "cedarpoint",
      admitted: "2026-08-02", payer: "advantage", planName: "Medicare Advantage, Humana",
      dayOfStay: 42, authThrough: "2026-09-14", authInterval: 5, authRisk: "high",
      careLevel: "Assisted living", budget: "$4,900 to $5,700",
      geo: "Greer, 12 miles", rp: "Rosa Alvarado, wife",
      disposition: "none", handoff: "not_sent",
      note: "Two days of authorization left. No 100 day clock applies."
    }
  ],

  /* Seat 03 pipeline at the receiving community */
  pipeline: [
    {
      id: "p-ruiz", residentId: "r-ruiz", first: "Constance", from: "Cedar Point Post Acute",
      received: "2026-08-28", dischargeBy: "2026-09-16", careLevel: "Assisted living",
      budget: "$5,200 to $6,000", geo: "Greenville, 20 miles", rp: "Elena Ruiz, daughter",
      stage: "move_in_confirmed", unit: "214", rate: 5600, moveIn: "2026-09-16",
      makeReady: "complete", recoveredDays: 26
    },
    {
      id: "p-blankenship", residentId: "r-blankenship", first: "Ruth", from: "Cedar Point Post Acute",
      received: "2026-09-08", dischargeBy: "2026-09-24", careLevel: "Assisted living",
      budget: "$5,100 to $5,900", geo: "Greenville, 20 miles", rp: "Michael Blankenship, son",
      stage: "touring", unit: "131", rate: 5400, moveIn: null,
      makeReady: "scheduled", recoveredDays: 0
    },
    {
      id: "p-ellison", residentId: "r-ellison", first: "Margaret", from: "Cedar Point Post Acute",
      received: "2026-09-12", dischargeBy: "2026-10-10", careLevel: "Assisted living",
      budget: "$4,800 to $5,800", geo: "Greenville, 20 miles", rp: "Dana Ellison, daughter",
      stage: "new", unit: null, rate: null, moveIn: null,
      makeReady: "not_scheduled", recoveredDays: 0
    },
    {
      id: "p-hargrove", residentId: null, first: "Eunice", from: "Willow Bend Rehab",
      received: "2026-09-03", dischargeBy: "2026-09-20", careLevel: "Independent living",
      budget: "$3,700 to $4,200", geo: "Taylors, 6 miles", rp: "Carl Hargrove, son",
      stage: "declined", unit: null, rate: null, moveIn: null,
      makeReady: "not_scheduled", recoveredDays: 0,
      declineReason: "Budget below available inventory"
    }
  ],

  /* Micro vacancy recovery at the receiving community, short stays that filled gaps */
  microStays: [
    { unit: "118", days: 11, filled: "2026-08-14" },
    { unit: "207", days: 9, filled: "2026-08-22" },
    { unit: "142", days: 14, filled: "2026-09-01" }
  ],

  pricing: { floorPerBedMonth: 5, perRecoveredBedDay: 20, conversionCapDays: 90 },

  /* Landlord portfolio.
     PLACEHOLDER BUILDING NAMES AND OPERATORS. Replace before any external use.
     Cedar Point and Meadowbrook carry live:true, which means their recovered bed
     day figures are computed from the resident and pipeline records above rather
     than typed here. Everything else is demo context. */
  portfolio: {
    target: 85,
    buildings: [
      { id: "cedarpoint", name: "Cedar Point Post Acute", operator: "Ridgeline Care", structure: "RIDEA",
        kind: "Skilled", beds: 96, occupancy: 84.4, structural: 6.2, recoverable: 9.4, coverage: 1.34, live: true },
      { id: "meadowbrook", name: "Meadowbrook Senior Living", operator: "Ridgeline Care", structure: "RIDEA",
        kind: "Assisted", beds: 88, occupancy: 84.1, structural: 4.8, recoverable: 11.1, coverage: 1.41, live: true },
      { id: "b3", name: "Harlow Grove", operator: "Ridgeline Care", structure: "RIDEA",
        kind: "Assisted", beds: 104, occupancy: 78.4, structural: 5.1, recoverable: 16.5, coverage: 1.12, recovered: 41 },
      { id: "b4", name: "Sable Run Health Center", operator: "Ridgeline Care", structure: "Triple net",
        kind: "Skilled", beds: 120, occupancy: 88.9, structural: 7.4, recoverable: 3.7, coverage: 1.58, recovered: 12 },
      { id: "b5", name: "Kestrel Point", operator: "Anselm Operating", structure: "Triple net",
        kind: "Assisted", beds: 76, occupancy: 71.2, structural: 22.6, recoverable: 6.2, coverage: 0.94, recovered: 8 },
      { id: "b6", name: "Fairwater Commons", operator: "Anselm Operating", structure: "RIDEA",
        kind: "Independent", beds: 142, occupancy: 86.6, structural: 3.9, recoverable: 9.5, coverage: 1.47, recovered: 55 },
      { id: "b7", name: "Brightmoor Rehabilitation", operator: "Anselm Operating", structure: "Triple net",
        kind: "Skilled", beds: 110, occupancy: 81.8, structural: 4.4, recoverable: 13.8, coverage: 1.21, recovered: 33 },
      { id: "b8", name: "Vance Hollow", operator: "Calder Senior", structure: "RIDEA",
        kind: "Assisted", beds: 92, occupancy: 90.2, structural: 2.1, recoverable: 7.7, coverage: 1.63, recovered: 47 },
      { id: "b9", name: "Ellsworth Terrace", operator: "Calder Senior", structure: "Triple net",
        kind: "Independent", beds: 130, occupancy: 74.6, structural: 18.9, recoverable: 6.5, coverage: 1.02, recovered: 14 },
      { id: "b10", name: "Pinegate Care Center", operator: "Thorne Health", structure: "Triple net",
        kind: "Skilled", beds: 98, occupancy: 83.7, structural: 5.6, recoverable: 10.7, coverage: 1.28, recovered: 29 }
    ]
  }
};

/* Helpers shared by every seat */
const PA = {
  d: (s) => new Date(s + "T00:00:00"),
  daysBetween(a, b) {
    return Math.round((PA.d(b) - PA.d(a)) / 86400000);
  },
  daysLeft(r) {
    if (r.payer === "part_a") return PA.daysBetween(DEMO.today, r.coverageEnds);
    if (r.payer === "advantage") return PA.daysBetween(DEMO.today, r.authThrough);
    return null;
  },
  onClock(r) {
    return r.payer === "part_a" || r.payer === "advantage";
  },
  band(r) {
    const left = PA.daysLeft(r);
    if (left === null) return "none";
    if (left <= DEMO.bands.critical) return "critical";
    if (left <= DEMO.bands.urgent) return "urgent";
    if (left <= DEMO.bands.watch) return "watch";
    return "clear";
  },
  watchList() {
    return DEMO.residents
      .filter(PA.onClock)
      .filter((r) => ["critical", "urgent", "watch"].includes(PA.band(r)))
      .sort((a, b) => PA.daysLeft(a) - PA.daysLeft(b));
  },
  recoveredBedDays() {
    const conversion = DEMO.pipeline.reduce((n, p) => n + p.recoveredDays, 0);
    const micro = DEMO.microStays.reduce((n, m) => n + m.days, 0);
    return { conversion, micro, total: conversion + micro };
  },
  /* Cedar Point and Meadowbrook derive their recovered bed days from the
     operating seats. Everything else in the portfolio is demo context. */
  buildingRecovered(b) {
    if (!b.live) return b.recovered;
    const t = PA.recoveredBedDays();
    return b.id === "meadowbrook" ? t.conversion + t.micro : 0;
  },
  portfolioRows() {
    return DEMO.portfolio.buildings
      .map((b) => ({ ...b, rec: PA.buildingRecovered(b), gap: +(DEMO.portfolio.target - b.occupancy).toFixed(1) }))
      .sort((a, b) => b.gap - a.gap);
  },
  portfolioTotals() {
    const rows = PA.portfolioRows();
    const beds = rows.reduce((n, b) => n + b.beds, 0);
    const occ = rows.reduce((n, b) => n + b.beds * b.occupancy, 0) / beds;
    const rec = rows.reduce((n, b) => n + b.rec, 0);
    const recoverable = rows.reduce((n, b) => n + b.beds * b.recoverable, 0) / beds;
    const structural = rows.reduce((n, b) => n + b.beds * b.structural, 0) / beds;
    return {
      beds, rec,
      occupancy: +occ.toFixed(1),
      recoverable: +recoverable.toFixed(1),
      structural: +structural.toFixed(1),
      belowTarget: rows.filter((b) => b.occupancy < DEMO.portfolio.target).length,
      ridea: rows.filter((b) => b.structure === "RIDEA").length
    };
  },
  money(n) {
    return "$" + n.toLocaleString("en-US");
  },
  fmt(s) {
    if (!s) return "not set";
    const [y, m, d] = s.split("-");
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return months[+m - 1] + " " + +d;
  }
};
