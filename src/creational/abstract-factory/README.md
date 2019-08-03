# The abstract factory pattern

## Motivation

1. How can a class be independent of how the objects it requires are created?
2. How can different families of related or dependent objects be created?

## Definition

**Provide an interface for creating families of related or dependent objects without specifying their concrete classes.**

## Problems

1. Hard-wired object creation (creation of objects directly within the class/client that requires (uses) the object(s))
  - commits (couples) the class to these particular objects and makes it impossible to change the instantiation later independently from (without having to change) the class,
  - it stops the class from being reusable if other objects are required,
  - it makes the class hard to test because real objects can't be replaced with mock objects,

2. Distributed object creation.
  - Creating objects is distributed across the classes of an application.


## Solution

**Encapsulate creating a family of objects in a separate `factory` object. A class delegates object creation to a `factory` object instead of instantiating concrete classes directly.**

## Structure

![Alt text](./assets/Abstract_factory_UML.svg)

1. `Client`:
  - Requires `ProductA` and `ProductB` objects,
  - Refers to the `AbstractFactory` interface to create `ProductA` and `ProductB` objects and is independent of how the objects are created (which concrete classes are instantiated),
  - Maintains a reference to an `AbstractFactory` object.

2. `AbstractFactory`
  - Defines an interface for creating a family of product objects.

3. `FactoryN`
  - Implements the `AbstractFactory` interface by creating and returning the objects.

## Scenario

- A `Client` object delegates creating product objects to a (etc.) `Factory1` object,
- The interaction starts with the `Client` that calls `createProductA()` on the installed `Factory1` object,
- `Factory1` creates a `ProductA1` object and returns (a reference to) it to the `Client`,
- Thereafter, the `Client` calls `createProductB()` on `Factory1`,
- `Factory1` creates a `ProductB1` object and returns it to the `Client`,
- The `Client` can then use the `ProductA1` and `ProductB1` objects as required.

## Consequences

| Advantages (+)                                  | Disadvantages (-)                                                     |
|-------------------------------------------------|-----------------------------------------------------------------------|
| Avoids compile-time implementation dependencies | Requires extending the `Factory` interface to extend an object family |
| Ensures creating consistent object families     | Introduces an additional level of indirection (client <-> factory)    |
| Makes exchanging whole object families easy     |                                                                       |

## Similiar patterns

- Dependency injection
- Factoy method
- Strategy

## [GoF] wisdom

- "Specifying a class name when you create an object commits you to a particular implementation instead of a particular interface."[GoF]