Feature: User should be able to add item to cart
  As a shopper
  I want to put items in my shopping cart
  So that I can manage items before I check out

  Scenario: add item
    Given I am a logged-in User at the product website
    When I click "Add Item to Cart"
    Then the quantity of items in my cart should increment by 1
    Then my subtotal should increase
