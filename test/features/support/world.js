// enforces strict use of JS making things safer from mis spellings
'use strict';

import { browser } from "protractor";

var World = function World() {
    // empty test data for our product
    this.product = undefined;
    // method to open the browser
    this.openWebsite = function () {
       // bug fix so protractor works with cucumber
        browser,waitForAngularEnabled(false);
        // open website
        return browser.get('');
    }
}
// makes world available
module.exports.World = World;
