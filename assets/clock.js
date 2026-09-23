/* SuiteBird PA benefit clock.
   Every day number shown in the UI is derived here. Nothing is typed in.

   Convention: admission is benefit day 1, matching how Medicare counts.
   A Part A stay therefore runs day 1 through day 100, the coinsurance
   cliff lands on day 21, and coverageEnds is the last covered day.

   Load after data.js. Depends on DEMO and PA. */
const CLOCK = {
  addDays(iso, n) {
    const d = PA.d(iso);
    d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
  },

  /* benefit day number for any date */
  dayOf(r, iso) {
    return PA.daysBetween(r.admitted, iso) + 1;
  },

  /* the date a given benefit day falls on */
  dateOfDay(r, n) {
    return CLOCK.addDays(r.admitted, n - 1);
  },

  /* Every coverage event this resident faces, soonest first.
     Part A has two: the cost cliff on day 21 and exhaustion at daysTotal.
     Advantage has one, and it moves every time the plan reviews. */
  events(r) {
    const out = [];
    if (r.payer === "part_a") {
      out.push({
        type: "coinsurance",
        date: CLOCK.dateOfDay(r, 21),
        label: "Coinsurance begins, $217 a day"
      });
      out.push({
        type: "exhaustion",
        date: r.coverageEnds,
        label: "Part A benefit exhausted"
      });
    }
    if (r.payer === "advantage") {
      out.push({
        type: "auth_end",
        date: r.authThrough,
        label: "Authorisation ends, " + r.planName
      });
    }
    return out.sort((a, b) => PA.d(a.date) - PA.d(b.date));
  },

  /* the next event that has not already passed */
  next(r) {
    return (
      CLOCK.events(r).find((e) => PA.daysBetween(DEMO.today, e.date) >= 0) ||
      null
    );
  },

  /* short label for the next event, for buttons and headers */
  nextKind(r) {
    const e = CLOCK.next(r);
    if (!e) return "No clock";
    if (e.type === "coinsurance") return "Day 21 cliff";
    if (e.type === "exhaustion") return "Day 100 exhaustion";
    return "Advantage review";
  },

  /* When a band crosses for the next event. band is one of
     DEMO.bands: watch 30, urgent 14, critical 7. */
  fires(r, band) {
    const e = CLOCK.next(r);
    if (!e) return null;
    const lead = DEMO.bands[band || "critical"];
    return {
      type: e.type,
      label: e.label,
      band: band || "critical",
      lead: lead,
      date: e.date,
      fireDate: CLOCK.addDays(e.date, -lead)
    };
  },

  /* "Day 73 · Sep 12" */
  stamp(r, iso) {
    return "Day " + CLOCK.dayOf(r, iso) + " · " + PA.fmt(iso);
  },

  /* Resolve a timeline step date. Steps may carry a literal date, or
     one of the auto markers, so a narrative can never drift away from
     the dataset it is describing.
       auto:watch | auto:urgent | auto:critical  the band crossings
       auto:event                                the coverage event itself */
  resolve(r, step) {
    if (!step.date.startsWith("auto:")) return step.date;
    const key = step.date.slice(5);
    if (key === "event") {
      const e = CLOCK.next(r);
      return e ? e.date : null;
    }
    const f = CLOCK.fires(r, key);
    return f ? f.fireDate : null;
  },

  /* The resolved, sorted timeline for one resident */
  timeline(r) {
    return (r.timeline || [])
      .map((s) => ({ text: s.text, date: CLOCK.resolve(r, s) }))
      .filter((s) => s.date)
      .sort((a, b) => PA.d(a.date) - PA.d(b.date));
  }
};
