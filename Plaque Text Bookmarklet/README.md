## Summary
Temporarily replaces the screen-version plaque text on any WPS Project Detail Page.

## How to use
Drag the button below into the Bookmark Bar. When on any WPS Project Detail Page ([example](https://my.charitywater.org/projects/ET.RST.2H.15.207.179)) - click the bookmark, enter the new text, then print.

[Replace Print Plaque Text](javascript:(function()%7Bfunction%20replace_plaque_text(new_text)%7Bif(new_text)%7Bvar%20old_text%20%3D%20%24(%22.print-only%20.plaque-text%22).text()%3B%24(%22.print-only%20.plaque-text%22).text(new_text)%3Bvar%20response%3D%22Replaced%22%3Balert(%22Replaced%20%5C%22%22%2Bold_text%2B%22%5C%22%20with%20%5C%22%22%2Bnew_text%2B%22%5C%22%20in%20the%20printed%20certificate.%20%5Cr%5CrOnly%20YOU%20can%20see%20this.%20It%20will%20revert%20when%20you%20reload%20the%20page.%22)%7D%7Dreplace_plaque_text(prompt('What%5C's%20the%20new%20plaque%20text%3F'))%7D)())