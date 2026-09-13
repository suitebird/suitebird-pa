# Seat 02. Business Office Manager / MDS Coordinator

Class: Gate. Build status: built, `seats/business-office.html`.

Two titles, one function here. Business Office Manager owns payer status and authorizations, MDS Coordinator owns the assessment schedule under PDPM. Under about 60 beds this is often one person.

---

**The one job.** Know exactly how many covered days each resident has left.

**Trigger.** Daily. This seat opens the product every morning, which makes it the adoption anchor for the whole building. If this seat does not log in, PA is dead in that building regardless of what anyone above it thinks.

---

## Screen

Payer board. Two tables: residents on a clock, and residents with no clock.

Row objects: name, room, admitted, payer type, plan, the clock, end date, next action.

---

## The two clocks

The single most important representation decision in PA, and the thing most products get wrong.

**Traditional Medicare Part A.** A 100 day benefit. Full coverage through day 20, coinsurance from day 21. Rendered as one continuous bar filling left to right, with a tick mark at the 20 percent point where coinsurance starts. It is a countdown and it looks like one.

**Medicare Advantage.** Not a clock. A rolling authorization reviewed every five to seven days, which can deny with two days notice at day 18 or day 60. Rendered as discrete blocks: granted windows solid, the current window flagged, the next two windows dashed and unresolved because they have not been granted and may never be.

The visual difference is the point. A user must never look at an Advantage resident and read a countdown, because there is not one. Coverage watch fires on Advantage residents based on authorization risk, not day count.

Bar color follows the same band scale as Seat 01 so the two screens agree.

---

## Data

**In.** Payer, plan, authorization dates, and benefit day counts from the EHR where exposed. Manual entry where not, which will be the common case early and should be assumed rather than treated as a fallback.

**Out.** The clock to Seat 01. Payer mix to Seats 04 and 05.

## Permissions

Can set and override any clock. Can flag a resident at risk ahead of any automated signal. Cannot initiate a handoff, which keeps the payer job and the discharge job separate.

## Success metric

Percentage of residents with a current and accurate clock, shown on the board itself. Below 90 percent, Seat 01 stops trusting the watch and the product fails quietly.

## Incumbent displaced

The EHR's own reporting, which is accurate but backward looking, plus a personal spreadsheet.

## PHI

Payer and authorization data is PHI. Same conduit rule as Seat 01.

---

## Open

- Authorization interval is hard coded per resident. Real plans vary the interval mid stay.
- No appeal tracking. High risk Advantage residents show an appeal chip with nothing behind it.
- Medicaid pending has a status but no application date tracking or expected decision window.
- Assessment schedule under PDPM is referenced but not modeled. Decide whether MDS dates belong on this board or in the EHR only.
