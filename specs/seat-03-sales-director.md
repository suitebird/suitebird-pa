# Seat 03. Senior Housing Sales Director

Class: Revenue. Build status: built, `seats/sales-director.html`.

The only monetizing seat in PA today. Every gate seat exists to produce its inbound.

---

**Holder.** Sales Director, Community Relations Director, Director of Sales and Marketing. One per community, usually commissioned on move ins.

**The one job.** Convert the handoff into a move in.

**Trigger.** A handoff packet lands. It should read as a warm lead arriving, not as a task assigned by another building.

---

## Screen

Pipeline table on the left, lead detail on the right, recovered bed days below.

Sorted by discharge date, not by lead age. This is the design decision that separates this pipeline from every other one this seat works. The deadline is external, fixed, and not negotiable, so the sort has to reflect it.

Row objects: first name, care level, sending building, date received, days until discharge, stage, unit held.

Stages: new and unworked, touring, move in confirmed, declined.

Actions: accept and hold a unit, decline with reason, confirm move in.

---

## The revenue table

Sits on the seat that produces the revenue, so the person doing the work sees the unit they are paid against.

Two line types, matching Sheet 00. Conversion retention, capped at 90 bed days per episode. Micro vacancy recovery, uncapped because the bed was provably dark. Total priced at the per recovered bed day rate.

Current demo state: 26 conversion bed days, 34 micro vacancy bed days, 60 total, $1,200 billable. Those figures are computed from the resident and pipeline records, not entered, so they move when the demo is driven.

---

## Data

**In.** The handoff packet from Seat 01. Unit availability and pricing from the community's own inventory. Make ready status from Seat 06.

**Out.** Move in confirmation, which closes the loop and triggers conversion retention billing. Decline with reason, which is the most valuable data in the system because it is the only signal telling you whether handoff quality is real.

## Permissions

Accepts or declines. Sets pricing. Holds a unit. Cannot see any clinical or payer detail from the sending building. The packet is the whole handoff and this seat can verify that for itself, which is worth showing in a pitch.

## Success metric

Handoff to move in conversion rate, and days from handoff to move in. The second one is what the 90 day cap is priced against.

## Incumbent displaced

A referral platform, a call from a discharge planner they happen to know, or nothing.

## PHI

Receives the packet only. Lower exposure by design.

---

## Open

- Decline reasons are free text. They need a controlled list or the most valuable dataset in the product stays unusable.
- No unit inventory model. Units are strings today.
- Recovered bed day attribution on confirm is a fixed placeholder. Real logic needs the vacancy state of the unit before the hold, per attribution rule 1 in Sheet 00.
- Commission visibility is unresolved. This seat is commissioned, and whether the product shows that is a real adoption question.
