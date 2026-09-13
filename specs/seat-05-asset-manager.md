# Seat 05. REIT Asset Manager

Class: Adoption. Build status: built, `seats/asset-manager.html`.

This seat buys nothing and can end the deal. It is specced because of that, not despite it.

---

**Holder.** Asset Manager or VP Asset Management at the landlord. Covers 20 to 100 buildings.

**The one job.** Protect rent coverage. Under RIDEA, protect census directly.

**Trigger.** Monthly and quarterly reporting cycles. Never daily. Building a daily use case for this seat is a mistake and it will not be used.

---

## Screen

Four tiles: blended micro occupancy against target, recoverable vacancy, structural vacancy, recovered bed days.

**Buildings table.** One row per building, sorted by variance from the 85 percent target rather than alphabetically. Columns: building and bed count, operator, ownership structure, occupancy, vacancy split, rent coverage ratio, recovered bed days.

**Provenance table.** Where every recovered bed day came from. Two buildings report from live records and are labelled as such. The rest is demo context and is labelled as that. This table exists so the number at the top can be defended in the room.

---

## The vacancy split

The single most important element on the page.

Structural vacancy is market, unit mix, or building condition. It is a real estate problem and SuiteBird cannot touch it. Recoverable micro vacancy is beds sitting dark between stays, measured at daily resolution instead of quarterly average. That is the only share this product addresses.

Rendering them as one number would overstate what the product does, and an asset manager would find that out in the second meeting. Splitting them honestly is what makes the rest of the screen credible. Kestrel Point in the demo data sits at 71.2 percent with 22.6 points structural and only 6.2 recoverable, and the screen says plainly that most of that gap is not addressable.

RIDEA and triple net are flagged differently because census reaches the landlord directly in one and only through the operator in the other.

---

## Data

**In.** Aggregates from Seat 04 across all buildings. Nothing else.

**Out.** Nothing. Terminal seat.

## Permissions

Read only, portfolio wide. No resident level access under any permission, and not by setting. The portfolio aggregate is the only object this view is built on, so resident data has nowhere to enter. Worth saying out loud in a pitch to a public landlord.

## Success metric

Portfolio blended micro occupancy trending toward the target.

## Incumbent displaced

Operator submitted monthly reporting, received in arrears and self reported.

## PHI

None.

---

## Language constraint

Omega is NYSE listed. Everything on this screen is descriptive: what occupancy is, what was recovered. No projections, no forward looking claims, no language about improving their position. The numbers carry the argument without it, and this constraint applies to anything built on this screen later.

---

## Open

- **Building names and operators in `data.js` are placeholders and must be replaced before any external use.** They are invented. Do not show them to Omega.
- Rent coverage ratio is displayed but not computed by SuiteBird. Decide whether it is entered by the landlord, imported, or dropped.
- No time series. This seat thinks in quarters and the screen currently shows a single point.
- The structural and recoverable split is entered per building in the demo. Real logic needs a defensible rule for classifying a vacant bed as one or the other, and that rule will be scrutinized harder than anything else in the product.
- Whether the landlord ever pays is unresolved. See open decision 4 in the revenue spec.
