# The dependency injection pattern

## Motivation

1. How can an application or class be independent of how its objects are created?
2. How can the way objects are created be specified in separate configuration files?
3. How can an application support different configurations?

## Description

**Separate object creation from an application. Dependency Injection makes an application independent of how its objects are created.**

## Problems

1. Hard-wired object creation:
  - Creating objects is implemented (hard-wired) directly within a class/client,
  - This makes it hard to change the way objects are created independently from (without having to change) the class/client.

2. Distributed object creation:
  - Creating objects is distributed across the classes of an application.

## Solution

**Define a separate `Injector` object that creates and injects the objects a class requires. A class accepts the objects it requires from an `Injector` object instead of creating the objects directly.**

## Structure

![Alt text](./assets/Dependency_Injection_Design_Pattern_UML.jpg)

1. `Client`
  - Requires `ServiceA` and `ServiceB` objects,
  - Accepts the objects from the `Injector`,
  - Is independent of how the objects are created (which concrete classes are instantiated),
  - Doesn't know the `Injector`.

2. `Injector`
  - Creates the `ServiceA1` and `ServiceB1` objects; creates the `Client` (if it doesn't already exist) and injects the objects into the `Client`.

## Scenario

- The Injector starts with creating the `ServiceA1` and `ServiceB1` objects. (Let's assume that the `Injector` uses something that maps `ServiceA` and `ServiceB` interfaces to `ServiceA1` and `ServiceB1` implementations.)
- Thereafter, the Injector creates the `Client` object (if he doesn't already exist) and injects the `ServiceA1` and `ServiceB1` objects.
- The `Client` object can then use the `ServiceA1` and `ServiceB1` objects as required.

## Consequences

| Advantages (+)                                           | Disadvantages (-)                     |
|----------------------------------------------------------|---------------------------------------|
| Avoids compile-time implementation dependencies.         | None because this pattern is awesome! |
| Greatly simplifies classes.                              |                                       |
| Makes changing the configuration of an application easy. |                                       |
| Ensures objects are configured properly.                 |                                       |

NOTE:
  - injected object construction -> how to resolve it's dependencies (setter, constructor injection)

## Similiar patterns

- Abstract factory
- Strategy

## [GoF] wisdom
