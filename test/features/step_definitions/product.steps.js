const actions = require('../support/actions');

const homePage = require('../page_objects/home.page');
const addProductPage = require('../page_objects/add-product.page');
const viewProductPage = require('../page_objects/view-product.page');

//assertion library
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const { Given, When, Then, Before } = require('cucumber');
const { setWorldConstructor } = require('cucumber');
const CustomWorld = require('../support/world').World;

setWorldConstructor(CustomWorld);

// Cucumber before 'hook'
Before(function () {
  this.openWebsite()
});

Given('a product doesn\'t exist', function (dataTable) {

  // convert data from table to array object
  var data = dataTable.hashes();
  // assign product with data 0 from array
  this.product = data[0];
  // return statement tells cucumber the step has finished
  return expect(actions.isElementOnPage(homePage.productInTable(this.product))).to.eventually.be.false;

});

When('I add the product', function () {

  // break point
  debugger;
  // run 'npm run debug' open 'chrome://inspect/#devices' and click inspect
actions.click(homePage.addProduct);
actions.type(addProductPage.productName, this.product.name);
actions.type(addProductPage.productDescription, this.product.description);
actions.type(addProductPage.productPrice, this.product.price);

return actions.click(addProductPage.submitButton);
});

Then('the product is created', function () {
  return expect(actions.waitForElement(viewProductPage.productName(this.product))).to.eventually.be.true;
});

