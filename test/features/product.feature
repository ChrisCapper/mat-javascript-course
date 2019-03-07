Feature: Product Management

    Rules:
    1. You must be able to add a product

    Background: Ensure product is in the system

        Given a product doesn't exist
            | name            | description               | price |
            | Callway B13     | B is for BOOM!            | 400   |

    Scenario: A product is added
        When I add the product
        Then the product is created