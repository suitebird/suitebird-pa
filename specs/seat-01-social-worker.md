# Seat 01. SNF Social Worker / Case Manager

Class: Gate. Build status: built, `seats/social-worker.html`.

---

**Holder.** Social Services Director, Case Manager, Discharge Planner, Transitions Coordinator. One per building, often part time under 80 beds, caseload of 40 to 60.

**The one job.** Get every resident to a safe next setting before coverage ends.

**Trigger.** The coverage watch fires at 30 days remaining. Today the only formal trigger in the industry is the Notice of Medicare Non Coverage, issued 48 hours out. A senior housing move in needs two to three weeks. The product is that gap.

---

## Screen

Caseload table on the left, resident detail on the right. Rows are every resident on a clock inside the 30 day watch band, sorted by days remaining ascending. Residents with no clock never appear.

Row objects: name, room, days remaining as a colored chip, coverage bar, disposition.

Bands: 7 days or less critical, 8 to 14 urgent, 15 to 30 watch.

Counters across the top: on the watch, seven days or less, nothing planned yet, resolved with 14 days to spare. The last one is the seat's success metric and it is deliberately the only green number on the screen.

Detail panel objects: admitted, coverage ends, care level, budget, geography, contact, note. Two actions, send handoff and not a candidate.

---

## Data

**In.** Benefit day count, authorization status, and payer from Seat 02. Admission date and room from the EHR, PointClickCare or MatrixCare. Care level, budget, geography, and responsible party from intake.

**Out.** The handoff packet to Seat 03: first name, projected discharge date, care level, budget range, geography, contact.

The packet carries no diagnosis, no treatment, no clinical note, and no payer detail. That limit is structural in the data model, not a permission setting. It is the enforcement point for the conduit model and it is the reason Seat 03 can be a lower exposure seat.

---

## Permissions

Can initiate a handoff. Can suppress a resident from the watch with a reason. Cannot change a clock, cannot see pricing or commission, cannot see any other building's caseload.

---

## Success metric

Percentage of expiring coverage residents with a confirmed next setting more than 14 days out. Baseline is close to zero, which is what makes it measurable.

## Incumbent displaced

A whiteboard, a personal spreadsheet, and the weekly Medicare meeting. In practice, memory.

## PHI

Highest exposure seat in PA. BAA required with the SNF operator. Collect and package, never hold.

---

## Open

- The 30 day watch threshold is a guess. Real average days from handoff to move in should set it.
- Suppression currently records one reason. It probably needs a short controlled list so the data is usable.
- No caseload assignment. Fine for one social worker, breaks in a building with three.
