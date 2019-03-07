Feature: Product Management

    Rules:
    1. You must be able to add a product

    Background: Ensure product is in the system

        Given a product doesn't exist
            | name            | description               | price |
            | Callway B12     | B is for BOOM!            | 400   |
            | Ping WHOA       | Quality                   | 375   |
            | Ben Ross Tinker | Cheap as chips            | 75    |
            | Titliest TS2    | Best driver on the market | 450   |
            | Ping G20        | Solid hitter              | 300   |


    Scenario: A product is added
        When I add the product
        Then the product is created