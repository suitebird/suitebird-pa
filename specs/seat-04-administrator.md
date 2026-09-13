# Seat 04. SNF Administrator

Class: Adoption. Build status: built, `seats/administrator.html`.

First aggregation layer. Its job in the build is to prove that roll-up works at one building before the portfolio view attempts it across ten.

---

**Holder.** Nursing Home Administrator. Licensed, one per building, accountable for the building P&L.

**The one job.** Hold census and payer mix at the building.

**Trigger.** Weekly review, plus an exception whenever a resident crosses seven days remaining with no disposition on file.

---

## Screen

Four tiles: census against licensed beds, residents on a clock, unresolved at seven days, recovered bed days with the billable figure beside it.

Three tables.

**Coverage bands.** Residents grouped into seven days or less, eight to fourteen, fifteen to thirty, beyond thirty. Each band shows total, resolved, open, and a status pill. This is the administrator's version of the social worker's caseload, counted rather than named.

**Payer mix.** Share of census by payer, with a plain description of how each payer behaves. Part A is countable, Advantage is not. Putting that sentence on the administrator's screen matters, because this is the seat that will be asked by the regional why the Advantage residents are handled differently.

**Exceptions.** Residents inside seven days with nothing planned, with the owning social worker named. Target state is an empty table, and the screen says so.

---

## Data

**In.** Aggregates from Seats 01 and 02. Recovered bed day totals from Seat 03.

**Out.** Building rollup to Seats 09 and 10. Recovered bed days and occupancy to Seat 05.

## Permissions

Full read across the building, including drill down to resident level, since the administrator already has that access in the EHR. Can reassign a caseload. Cannot alter a clock.

## Success metric

Recovered bed days per month, and unresolved dispositions at day seven trending to zero.

## Incumbent displaced

The morning stand up and the census report.

## PHI

Aggregate by default, resident level on drill down. Same BAA as Seats 01 and 02.

---

## Open

- Caseload reassignment is named in the exceptions table but not built.
- Payer mix is a count, not a revenue weighted figure. An administrator manages to revenue per bed day, so this probably needs to change.
- No month over month trend. One period in isolation is not how this seat thinks.
- Length of stay is referenced in the spec pack but not yet on the screen.
