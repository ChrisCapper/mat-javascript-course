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

Given('a product with {string} and {string} and {string}', function (name, description, price) {

  // convert data from table to array object
  this.product.name = name;
  this.product.description = description;
  this.product.price = price;
  
  // return expect(actions.isElementOnPage(homePage.productInTable(this.product))).to.eventually.be.false;

});

When('I add the product', function () {

actions.click(homePage.addProduct);
actions.type(addProductPage.productName, this.product.name);
actions.type(addProductPage.productDescription, this.product.description);
actions.type(addProductPage.productPrice, this.product.price);

return actions.click(addProductPage.submitButton);
});

Then('the product is added', function () {
  return expect(actions.waitForElement(viewProductPage.productName(this.product))).to.eventually.be.true;
});

