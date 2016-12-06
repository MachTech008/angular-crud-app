// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {
  this.Given('I am a logged-in User at the product website', function () {
    return this.driver.get('localhost:3000');
  });

  this.When('I click on {"Add Item to Cart"}', function (text) {
    return this.driver.findElement({linkText: text}).then(function (element) {
      return element.click(addItemToCart);
    });
  });

  this.Then('The quantity of items in my cart should increment by {"1"}', function (text) {

    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });

  this.Then('My subtotal should increase', function (text) {

    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
};
