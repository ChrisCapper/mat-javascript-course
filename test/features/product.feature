Feature: Product Management

    Rules:
    1. You must be able to add a product

    Background: Ensure product is in the system

    Scenario Outline: A product is added
        Given a product with "<name>" and "<description>" and "<price>"
        When I add the product
        Then the product is added
        Examples:
            | name        | description      | price |
            | Callway B19 | B is for BOOM!   | 400   |
            | Callway B20 | B20 is for BASH! | 450   |