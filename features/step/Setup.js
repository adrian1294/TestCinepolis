// import{ cinepolisHome } from '/Users/Ocañas/Documents/Curso Enroute/features/step/PageObject.js'
import * as page from './PageObject.js';

module.exports = function() {
        this.Given(/^we're in Cinepolis$/, function () {
        browser.url(page.default.getUrl());
        });
        // this.When(/^we close the announcement "([^"]*)"$/, function (arg2) {
        //     browser.click(arg2)
        // });
        this.When(/^we click "([^"]*)"$/, function (arg1) {
            browser.click(arg1)
        });
        this.Then(/^we set the city "([^"]*)"$/,function(city){
            browser.selectByVisibleText('#cmbCiudades', city);
        });
        this.Then(/^we set the place "([^"]*)"$/,function(place){
            browser.selectByVisibleText('#cmbComplejos', place);
        });
        this.Given(/^we're in Cinepolis Cartelera San Pedro$/, function () {
            browser.url(page.default.getUrl2());
            });
}