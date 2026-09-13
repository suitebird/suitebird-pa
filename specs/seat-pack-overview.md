# SuiteBird PA: Seat Spec Pack

Sheets 01 through 14. Companion to Sheet 00, the revenue spec.
Behavior only. No positioning language.

Build status is marked **[assumed]** wherever it has not been confirmed against a repo. Correct those and the matrix becomes real.

---

## Status matrix

| # | Seat | Class | Depth | Build status |
| --- | --- | --- | --- | --- |
| 01 | SNF Social Worker / Case Manager | Gate | Full | Not started [assumed] |
| 02 | Business Office Manager / MDS Coordinator | Gate | Full | Not started [assumed] |
| 03 | Senior Housing Sales Director | Revenue | Full | Partial [assumed] |
| 04 | SNF Administrator | Adoption | Full | Partial, Cedar Point [assumed] |
| 05 | REIT Asset Manager | Adoption | Full | Built, portfolio dashboard [assumed] |
| 06 | Housekeeping / Make Ready Lead | Gate | Stub | Built in IL Beta 2, fork undecided |
| 07 | SuiteBird Ops | Gate | Stub | Not started |
| 08 | Senior Housing Executive Director | Adoption | Stub | Partial, Meadowbrook [assumed] |
| 09 | Regional Director of Operations | Adoption | Stub | Not started |
| 10 | Operator COO / VP Sales | Adoption | Stub | Not started |
| 11 | SNF Admissions Director | Future revenue | Stub | Deferred, placement phase |
| 12 | Clinical Liaison | Future | Stub | Deferred, placement phase |
| 13 | Family / Responsible Party | Undecided | Stub | Overlaps RespiteSuites |
| 14 | Post discharge follow up partner | Undecided | Stub | Blocked on agreement |

Read the matrix as the build plan. Five full sheets is the beta.

---

# 01. SNF Social Worker / Case Manager

**Holder.** Social Services Director, Case Manager, Discharge Planner, Transitions Coordinator. Usually one per building, often part time in buildings under 80 beds, and frequently carrying a caseload of 40 to 60 at once.

**The one job.** Get every resident to a safe next setting before coverage ends.

**Trigger.** Coverage watch fires. Today nothing fires. The formal mechanism is the Notice of Medicare Non Coverage, which arrives 48 hours before coverage ends. A senior housing move in needs two to three weeks. That gap is the product.

**Primary screen.** Caseload, sorted by days remaining ascending. One row per resident. Row objects: name, room, payer, days remaining, discharge disposition status, next action, owner. Colored bands at 30, 14, and 7 days. One click opens the resident and the handoff composer.

**Data in.** Benefit day count and authorization status from Seat 02. Admission date, payer, and room from the EHR, typically PointClickCare or MatrixCare. Responsible party contact from intake.

**Data out.** A handoff packet to Seat 03 containing resident first name, projected discharge date, care level estimate, budget range, geography preference, and responsible party contact. Deliberately not a clinical record.

**Decisions and permissions.** Can initiate a handoff, can suppress a resident from the watch with a reason, cannot see pricing or commission, cannot see any other building's caseload.

**Success metric.** Percentage of expiring coverage residents with a confirmed next setting more than 14 days out. Baseline is near zero, which is what makes this measurable at all.

**Incumbent displaced.** A whiteboard, a spreadsheet, and the weekly Medicare meeting. In practice, memory.

**PHI.** Highest exposure seat in PA. Conduit model holds: SuiteBird collects and packages intake, never stores clinical detail. The handoff packet is the enforcement point, and it must be structurally incapable of carrying diagnosis or treatment data. BAA required with the SNF operator.

**Build status.** Not started [assumed]. This is the first thing to build.

---

# 02. Business Office Manager / MDS Coordinator

Two titles, one function for our purposes, and they may be two users in larger buildings.

**Holder.** Business Office Manager owns payer status and authorizations. MDS Coordinator owns the assessment schedule under PDPM. In buildings under 60 beds these are sometimes the same person.

**The one job.** Know exactly how many covered days each resident has left.

**Trigger.** Daily. This seat opens the product every morning, which makes it the adoption anchor for the whole building.

**Primary screen.** Payer board. One row per resident. Objects: payer type, benefit days used and remaining, authorization expiry date, next assessment date, Medicaid application status, coinsurance start date.

Critical branch, and the thing most products get wrong. Traditional Medicare Part A is a 100 day clock, full coverage through day 20, coinsurance from day 21. Medicare Advantage is not a clock at all. It is a rolling authorization reviewed every three to seven days, and a denial can arrive with two days notice at day 18. The screen must represent both without pretending they are the same object. Coverage watch on an MA resident fires on authorization risk, not on day count.

**Data in.** Payer and authorization data from the EHR. Manual entry where the EHR does not expose it, which will be common early.

**Data out.** The benefit clock to Seat 01. Payer mix to Seats 04 and 05.

**Decisions and permissions.** Can set and override the clock, can flag a resident as at risk ahead of any automated signal, cannot initiate a handoff.

**Success metric.** Percentage of residents with a current and accurate clock. Under 90 percent, Seat 01 does not trust the watch and stops using it.

**Incumbent displaced.** The EHR's own reporting, which is accurate but not forward looking, plus a personal spreadsheet.

**PHI.** Payer and authorization data is PHI. Same conduit rule.

**Build status.** Not started [assumed]. Build second. Seat 01 is a blank screen without it.

---

# 03. Senior Housing Sales Director

The revenue seat. Everything above exists to produce its inbound.

**Holder.** Sales Director, Community Relations Director, Director of Sales and Marketing. One per community, usually commissioned on move ins.

**The one job.** Convert the handoff into a move in.

**Trigger.** A handoff packet lands from Seat 01. Should feel like a warm lead arriving, not a task assignment.

**Primary screen.** Pipeline. Objects per lead: source community, projected discharge date, care level, budget range, unit match, tour status, deposit status, days until coverage ends. Sorted by days until coverage ends, not by lead age, because the deadline is external and fixed.

**Data in.** The handoff packet. Unit availability and pricing from the community's own inventory. Make ready status from Seat 06.

**Data out.** Move in confirmation, which closes the loop and triggers conversion retention billing under Sheet 00. Decline with reason, which is the most valuable data in the system and the thing that tells you whether the handoff quality is real.

**Decisions and permissions.** Accepts or declines a handoff, sets pricing, holds a unit. Cannot see the sending building's clinical or payer detail, only the packet.

**Success metric.** Handoff to move in conversion rate, and days from handoff to move in. The second one is what the cap in Sheet 00 is priced against.

**Incumbent displaced.** A referral platform, a phone call from a discharge planner they happen to know, or nothing.

**PHI.** Receives the packet only. Lower exposure by design, and this is exactly why the packet is structurally limited.

**Build status.** Partial [assumed]. Some of this likely exists in the IL beta pipeline. Confirm before rebuilding.

---

# 04. SNF Administrator

**Holder.** Nursing Home Administrator, licensed, one per building, accountable for the building's P&L.

**The one job.** Hold census and payer mix at the building.

**Trigger.** Weekly review, plus an exception when a resident crosses 7 days remaining with no disposition.

**Primary screen.** Building view. Objects: current census against licensed beds, payer mix breakdown, average length of stay, count of residents in each coverage band, count of unresolved dispositions, recovered bed days this month.

**Data in.** Aggregates from Seats 01 and 02.

**Data out.** Rollup to Seats 09 and 10. Building level recovered bed day count to Seat 05.

**Decisions and permissions.** Full read across the building. Can reassign a caseload. Cannot alter a clock.

**Success metric.** Recovered bed days per month, and unresolved dispositions at day 7 trending to zero.

**Incumbent displaced.** The morning stand up meeting and the census report.

**PHI.** Aggregate views only where possible. Drill down to resident level is permitted, since the administrator already has full access in the EHR.

**Build status.** Partial, Cedar Point [assumed]. The coverage watch view exists as a demo artifact. Whether it is product code is the open question.

---

# 05. REIT Asset Manager

Buys nothing. Can end the deal. Specced because of that, not despite it.

**Holder.** Asset Manager or VP Asset Management at the landlord. Covers 20 to 100 buildings.

**The one job.** Protect rent coverage, and under RIDEA, protect census directly.

**Trigger.** Monthly and quarterly reporting cycles. Never daily. Building a daily use case for this seat is a mistake and it will not be used.

**Primary screen.** Portfolio view. Objects per building: operator, blended micro occupancy against target, recovered bed days, trend, rent coverage ratio, RIDEA or triple net flag. Sorted by variance from target, not alphabetically.

The distinction this screen has to carry: structural vacancy separated from recoverable micro vacancy. A building at 78 percent with high structural vacancy is a real estate problem. A building at 78 percent with high recoverable micro vacancy is an operations problem SuiteBird addresses. Collapsing those two is the single most damaging thing this screen could do.

**Data in.** Aggregates from Seat 04 across all buildings.

**Data out.** Nothing back into the product. Terminal seat.

**Decisions and permissions.** Read only, portfolio wide, no resident level access ever. This is a hard boundary and it is also a selling point.

**Success metric.** Portfolio blended micro occupancy trend toward 85 percent.

**Incumbent displaced.** Operator submitted monthly reporting, received in arrears and self reported.

**PHI.** None. No resident level data reaches this seat under any permission.

**Build status.** Built, portfolio dashboard [assumed]. Most advanced seat in PA, which is backwards relative to value and is the clearest evidence of the drift you described.

---

# Stubs, seats 06 through 14

Each stub carries the one job, the trigger, and the reason it is not full depth yet.

**06. Housekeeping / Make Ready Lead.** Turn the unit before the move in date. Triggered by a held unit in Seat 03. Built in IL Beta 2. Open question is whether skilled nursing turn requirements fork it or whether PA reuses it unchanged. Resolve before writing the sheet.

**07. SuiteBird Ops.** Configure a building and keep it configured. Triggered by onboarding and by data quality alerts. Always underspecced, always the reason a pilot stalls. Deserves a full sheet before the first pilot, not before the beta.

**08. Senior Housing Executive Director.** Occupancy and revenue at the receiving community. Triggered weekly. Largely inherits the IL executive director view, so specify it as a delta rather than from scratch.

**09. Regional Director of Operations.** Exception management across 5 to 15 buildings. Triggered by exceptions only. Sits between Seats 04 and 10 and may collapse into one of them. Decide whether it is a real seat before building it.

**10. Operator COO / VP Sales.** Blended micro occupancy at portfolio level. Same object as Seat 05 with a different permission set and revenue rather than rent coverage. Likely one screen serving two seats.

**11. SNF Admissions Director.** Inbound triage, bed match, accept or decline. Becomes the second revenue seat when placement phases in. Deferred by the IL before PA sequencing rule.

**12. Clinical Liaison.** Hospital facing funnel fill. Same deferral.

**13. Family / Responsible Party.** Receives the handoff, chooses the community. Overlaps RespiteSuites almost entirely. Decide whether the consumer surface belongs in PA at all before specifying it. My read is that it does not.

**14. Post discharge follow up partner.** Generic until an agreement exists. Naming it earlier creates the brand risk the standard already prohibits.

---

# What to build first

In order, and the order matters:

1. Seat 02. The clock. Nothing works without it.
2. Seat 01. The caseload and the watch. This is the product.
3. Seat 03. The pipeline and the handoff receipt. This closes the loop and makes the first dollar measurable.
4. Seat 04. Building rollup.
5. Seat 05. Already largely built. Reconcile it to real data rather than demo data.

Seats 01 through 03 is a demonstrable beta. Seats 04 and 05 make it sellable.
