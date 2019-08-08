# The Factory method pattern

## Motivation

1. How can an object be created so that subclasses can redefine which class to instantiate?
2. How can a class defer instantiation to subclasses?

## Description

**Define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.**

## Problems

1. Hard-wired object creatio
  - Object creation is defined (hard-wired) directly within a class/client,
  - This makes it hard to change the instantiation independently from (without having to change) the class/client.

2. Unknown object creation.
  - A reusable class often doesn't know which class to instantiate,
  - Users of the class should specify which class to instantiate to suit their needs (by writing subclasses).

## Solution

**Define a separate operation (`factory method` ) for creating an object. Create an object by calling a `factory method`.**

## Structure

![UML diagram of the pattern](./assets/Factory_Method_Design_Pattern_UML.jpg)

1. `Creator`
  - Requires a `Product` object,
  - Defines an abstract factory method (`factoryMethod()`) for creating a `Product` object,
  - Is independent of how the `Product` object is created (which concrete class is instantiated),
  - Calls the factory method (`product = factoryMethod()`), but clients from outside the `Creator` may also call the factory method.

2. `CreatorN`
  - Subclasses implement the factory method.

## Scenario

- The key idea in this pattern is to create an object in a separate operation so that subclasses can redefine which class to instantiate if necessary,
- Define a separate factory method.
- Create an objects by calling a factory method

## Consequences

| Advantages (+)                     | Disadvantages (-)                   |
|------------------------------------|-------------------------------------|
| Avoids implementation dependencies | May require adding many subclasses. |

## Similiar patterns

- Abstract Factory - Factory Method
- Factory Method - Prototype
- Iterator - Factory Method
- Template Method - Factory Method
