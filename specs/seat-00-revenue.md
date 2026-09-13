# SuiteBird PA: Revenue Spec

**Sheet 00. The monetization theory.**
Status: draft for decision. All dollar figures below are placeholders and are marked as such.
Scope note: this sheet describes behavior and economics only. No positioning language. Pitch framing lives in the Omega folder.

---

## 1. The one line

PA has one revenue seat. Every other seat exists to make that seat's day 71 possible.

Everything downstream in this sheet is a consequence of that sentence. If a pricing idea does not trace back to it, it does not belong here.

---

## 2. The billable unit

**The unit is the recovered bed day.**

A recovered bed day is one day a bed was occupied and paid for that would otherwise have been dark.

Three reasons this is the unit:

1. It is the same object as blended micro occupancy. The thing SuiteBird charges for and the thing SuiteBird measures are identical. That is unusual and it removes an entire class of argument with the buyer.
2. It scales with value delivered, not with buildings signed. A 100 bed community that recovers nothing pays almost nothing, which makes the pilot easy to say yes to.
3. It reads the same to an operator and to a landlord. The operator sees revenue, the REIT sees rent coverage and RIDEA census. One number, two audiences, no translation.

The two rejected alternatives, and why:

**Per bed per month license alone.** Predictable, easy to model, and completely disconnected from whether the product works. It also invites the buyer to compare SuiteBird to a software line item rather than to a vacancy. Retained as a floor only, see section 5.

**Conversion success fee alone.** Cleanest attribution, but it prices only the move in and ignores micro vacancy recovery entirely, which is half the product. It also inherits the placement framing that the census repositioning deliberately moved away from.

---

## 3. Two recovery types

The recovered bed day has to be counted differently depending on how it was recovered. This is the part that will get litigated by a buyer's finance team, so it gets settled here.

| | Micro vacancy recovery | Conversion retention |
| --- | --- | --- |
| What happened | A short stay, respite, or trial stay filled a gap between tenancies | A resident whose post acute coverage expired moved to private pay rather than leaving the portfolio |
| Bed days per episode | Short by nature. Placeholder: 12 | Long. Placeholder: 16 month tenancy, roughly 480 bed days |
| Counting rule | Every occupied day in the episode counts | Capped. Only the first 90 days count |
| Why the difference | The bed was provably dark before and after. Full credit is honest. | The bed would likely have filled eventually. Uncapped credit would overcharge and it would not survive a second year renewal. |

The cap is the important line in this sheet. Without it, one conversion at 480 bed days bills more than thirty micro vacancy episodes, the pricing stops tracking the work, and the operator learns to route around the product.

---

## 4. Seat by seat

Three classes. Most seats do not monetize, and naming how they earn their place is the point of the exercise.

**Revenue seat.** Their action is the billable event.

| Seat | Billable event |
| --- | --- |
| Senior Housing Sales Director | Converts an expiring coverage resident into a private pay move in. Triggers conversion retention billing. |
| SNF Admissions Director | Not billable today. Becomes a revenue seat when placement phases in. |

**Gate seats.** No revenue of their own. The revenue seat produces nothing without them. This is where most of the product value sits and it is the class the pitch documents skipped.

| Seat | What it gates |
| --- | --- |
| SNF Social Worker / Case Manager | Sees the coverage watch first and owns the handoff. No handoff, no conversion. |
| Business Office Manager / MDS Coordinator | Sets and maintains the benefit clock. Without this the coverage watch has no data and fires on nothing. |
| Housekeeping / Make Ready Lead | Turns the unit. A slow turn converts a recovered bed day into a dark one. Directly destroys billable units. |
| SuiteBird Ops | Configuration and onboarding. Gates whether any of the above ever produces a signal. |

**Adoption seats.** No transaction contact. They decide whether the product gets bought and whether it stays bought.

| Seat | What they judge it on |
| --- | --- |
| SNF Administrator | Census, payer mix, length of stay at the building |
| Senior Housing Executive Director | Occupancy and revenue at the building |
| Regional Director of Operations | Rollup and exception management |
| Operator COO / VP Sales | Blended micro occupancy at portfolio level |
| REIT Asset Manager | Rent coverage and RIDEA census. Buys nothing. Can end the deal. |

Consequence for the build: gate seats get specced and built before adoption seats get dashboards. A dashboard with no upstream signal is a demo, not a product.

---

## 5. The price

Two components. Deliberately two and not three.

**Floor.** Per licensed bed per month. Placeholder: $5. A 100 bed community pays $500 per month. Covers gate seat tooling and configuration.

The floor exists for one reason: it keeps SuiteBird from being purely success fee dependent, which makes attribution disputes commercially survivable rather than existential. It is set low on purpose so the operator's downside is small and the pilot decision is easy.

**Variable.** Per recovered bed day. Placeholder: $20.

Derivation of the $20, all placeholders to be replaced with real figures:

- Private pay rate: $5,400 per month, roughly $180 per bed day
- SuiteBird share: 12 percent
- $180 at 12 percent is $21.60, rounded to $20 for a number an operator can hold in their head

What the cap produces: 90 recovered bed days at $20 is $1,800 per conversion. That sits just above the flat $1,500 placement fee that anchors the IL wedge argument. This consistency is intentional. PA should never look like a more expensive way to buy the same thing.

Micro vacancy episode at 12 days: $240. Small, frequent, and it accumulates.

---

## 6. What SuiteBird does not charge for

Stated explicitly, because each of these will be asked for and each answer should be the same every time.

- Implementation and onboarding. Absorbed into the floor.
- Seats. Unlimited users. Charging per seat would suppress exactly the gate seat adoption the model depends on.
- Dashboards and reporting, including the portfolio and asset manager views. These sell the product. They are not the product.
- Data exports. Holding a customer's data hostage is not a revenue line.

---

## 7. Attribution

The hardest part, and the reason the cap in section 3 exists. Rules, in order:

1. A bed day is only recovered if the bed was in a vacant or exhausting state in SuiteBird before the recovery. No retroactive claims.
2. The coverage watch must have fired before the conversion, not after. If the sales director sourced the resident independently, it is not attributable.
3. One episode, one attribution. No double counting across IL and PA when a resident moves between them.
4. Disputes default to the operator. A contested bed day is not billed. Cheaper than the argument.

Rule 4 will cost real money in year one and it is still correct.

---

## 8. Open decisions

1. Replace every placeholder figure with real numbers. The private pay rate and the average conversion tenancy matter most, since the $20 and the 90 day cap both derive from them.
2. Confirm the 90 day cap. Real tenancy data may argue for 60 or 120.
3. Decide whether the floor is charged on licensed beds or occupied beds. Licensed is simpler. Occupied is friendlier to a struggling building and therefore easier to sell into distress.
4. Decide whether the REIT ever pays. Today the asset manager buys nothing. Under RIDEA the census flows to the owner, which is an argument that a landlord level subscription should exist. Deferred, not rejected.
5. Confirm the pilot has no floor at all. Recommended: variable only for the first six months, so the operator's downside is zero.
