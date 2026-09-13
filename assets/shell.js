/* Top demo bar and per seat sidebar. Add a seat in one place. */

const SEATS = [
  { n: "01", id: "social-worker", short: "Social worker", role: "Social Services Director",
    person: "Denise Aubrey", init: "DA", place: "Cedar Point Post Acute", sub: "Skilled nursing, 96 beds",
    cls: "Gate", built: true,
    nav: [["Caseload", "Coverage watch", "📋", true], ["Caseload", "All residents", "👥", false],
          ["Caseload", "Handoffs sent", "📤", false], ["Reference", "Discharge settings", "🏠", false],
          ["Account", "Switch seat", "↩", false]] },

  { n: "02", id: "business-office", short: "Business office", role: "Business Office Manager",
    person: "Ronnie Salas", init: "RS", place: "Cedar Point Post Acute", sub: "Skilled nursing, 96 beds",
    cls: "Gate", built: true,
    nav: [["Payers", "Payer board", "🕒", true], ["Payers", "Authorizations", "📄", false],
          ["Payers", "Medicaid pending", "⏳", false], ["Reference", "Plan rules", "📊", false],
          ["Account", "Switch seat", "↩", false]] },

  { n: "03", id: "sales-director", short: "Sales director", role: "Sales Director",
    person: "Bianca Ortiz", init: "BO", place: "Meadowbrook Senior Living", sub: "Assisted living, 88 units",
    cls: "Revenue", built: true,
    nav: [["Pipeline", "Incoming handoffs", "📥", true], ["Pipeline", "Tours", "🚪", false],
          ["Pipeline", "Move ins", "🔑", false], ["Insights", "Recovered bed days", "💰", false],
          ["Account", "Switch seat", "↩", false]] },

  { n: "04", id: "administrator", short: "Administrator", role: "Nursing Home Administrator",
    person: "Curtis Nwosu", init: "CN", place: "Cedar Point Post Acute", sub: "Skilled nursing, 96 beds",
    cls: "Adoption", built: true,
    nav: [["Building", "Overview", "◻", true], ["Building", "Census and payer mix", "📊", false],
          ["Building", "Exceptions", "⚠", false], ["Team", "Caseloads", "👤", false],
          ["Account", "Switch seat", "↩", false]] },

  { n: "05", id: "asset-manager", short: "Asset manager", role: "VP Asset Management",
    person: "Portfolio view", init: "PV", place: "Landlord portfolio", sub: "10 buildings, 4 operators",
    cls: "Adoption", built: true,
    nav: [["Portfolio", "Occupancy", "🌐", true], ["Portfolio", "Rent coverage", "📈", false],
          ["Portfolio", "Recovered bed days", "💰", false], ["Reference", "Structure", "🏢", false],
          ["Account", "Switch seat", "↩", false]] }
];

function renderShell(currentId) {
  const up = currentId ? "../" : "";
  const seat = SEATS.find((s) => s.id === currentId);

  const links = SEATS.map((s) => {
    if (!s.built) return `<span class="off">${s.short}</span>`;
    const cur = s.id === currentId ? ' aria-current="page"' : "";
    return `<a href="${up}seats/${s.id}.html"${cur}>${s.n} ${s.short}</a>`;
  }).join("");

  let out = `<div class="topnav">
    <a class="brand" href="${up}index.html"><img src="${up}assets/suitebird-logo.png" alt="Suite Bird"></a>
    <span class="tag">PA</span>
    <span class="links"><a href="${up}index.html"${currentId ? "" : ' aria-current="page"'}>Demo home</a>${links}</span>
  </div>`;

  if (!seat) { document.write(out); return; }

  const groups = [];
  seat.nav.forEach(([g, label, icon, on]) => {
    const last = groups[groups.length - 1];
    if (!last || last.g !== g) groups.push({ g, items: [] });
    groups[groups.length - 1].items.push({ label, icon, on });
  });

  const nav = groups.map((grp) => `<div class="grp">${grp.g}</div>` + grp.items.map((it) =>
    it.label === "Switch seat"
      ? `<a class="item dim" href="${up}index.html"><i>${it.icon}</i>${it.label}</a>`
      : `<span class="item ${it.on ? "on" : "dim"}"><i>${it.icon}</i>${it.label}</span>`
  ).join("")).join("");

  out += `<div class="shell"><aside class="side">
    <div class="place"><b>${seat.place}</b><span>${seat.sub}</span>
      <span class="badge">Seat ${seat.n} · ${seat.cls}</span></div>
    <div class="who"><span class="av">${seat.init}</span>
      <span><b>${seat.person}</b><span>${seat.role}</span></span></div>
    ${nav}
  </aside><div class="main">`;

  document.write(out);
}

function closeShell() { document.write("</div></div>"); }
