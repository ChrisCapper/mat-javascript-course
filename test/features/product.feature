Feature: Product Management

Rules:
1. You must be able to add a product

Background: Ensure product is in the system

Given a product doesn't exist
| name | description | price |
| carrots | orange vegetables | 10 |

Scenario: A product is added
When i add the product
Then the product is created