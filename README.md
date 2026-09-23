# suitebird-pa
Suitebird PA
SuiteBird PA, benefit clock update
Repo: suitebird/suitebird-pa

WHERE EACH FILE GOES

  index.html            replaces index.html
  clock.js              new file at assets/clock.js
  data.js               replaces assets/data.js
  app.css.changes.css   NOT a replacement. Two edits to assets/app.css,
                        described in the comment at the top of that file.

WHY

The dataset was already date driven. The episode timeline on the homepage
was not: it was a hardcoded list of day numbers that contradicted the data
underneath it. It showed the coverage watch firing on day 62 against a day
100 coverage end, a 38 day lead, while the product claims seven.

WHAT CHANGED

1. Day numbering. Admission is now benefit day 1, matching how Medicare
   counts. Every daysUsed and dayOfStay went up by one, and every
   coverageEnds moved back one day so it is the last covered day rather
   than the day after. Ellison is day 73 today with coverage ending Oct 9,
   which is exactly day 100. Three pipeline dischargeBy dates moved with
   them. No band and no watch list result changed.

2. clock.js. New derivation layer. Every day number in the UI comes from
   here. Part A gets two events, the day 21 coinsurance cliff and
   exhaustion at daysTotal. Advantage gets one, the authorisation end,
   which moves every time the plan reviews. CLOCK.fires(r, band) returns
   when a band crosses, using DEMO.bands, so the seven day claim and the
   demo can never disagree again.

3. index.html. The timeline renders from data. Steps carry a real date or
   one of four markers that resolve at render time: auto:watch,
   auto:urgent, auto:critical, auto:event. There is no literal day number
   anywhere in the file.

4. Scenario switcher. Three residents, one code path:
     Kobek     day 20 today, coinsurance cliff tomorrow
     Ellison   full 100 day arc, moves in with five days of margin
     Whitcomb  Advantage authorisation ends in four days
