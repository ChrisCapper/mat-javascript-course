// const actions = require('../support/actions');

// const homePage = require('../page_objects/home.page');
// const addProductPage = require('../page_objects/add-product.page');
// const viewProductPage = require('../page_objects/view-product.page');

// const chai = require('chai');
// const expect = chai.expect;
// const chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);

const { Given, When, Then, Before } = require('cucumber');
const { setWorldConstructor } = require('cucumber');
const CustomWorld = require('../support/world').World;

setWorldConstructor(CustomWorld);

// Cucumber before 'hook'
Before(function () {
  this.openWebsite()
});

Given('a product doesn\'t exist', function (dataTable) {
  return 'pending';
});

When('i add the product', function () {
  return 'pending';
});

Then('the product is created', function () {
  return 'pending';
});
