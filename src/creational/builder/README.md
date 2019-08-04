# The builder pattern

## Motivation

1. How can a class (the same construction process) create different representations of a complex object?
2. How can a class that includes creating a complex object be simplified?

## Description

**Separate the construction of a complex object from its representation, allowing the same construction process to create various representations.**

## Problems

1. Hard-wired object creation:
  - Creating a representation of a complex object is implemented (hard-wired) directly within a class/client,
  - This makes it hard to create a different representation independently from (without having to change) the class.

2. Complicated classes:
  - Classes that include creating a complex object are hard to implement, change, test, and reuse.

## Solution

**Encapsulate creating and assembling the parts of a complex object in a separate `Builder` object. A class/client delegates object creation to a `Builder` object instead of creating the objects directly.**

## Structure

![Alt text](./assets/Builder_Design_Pattern_UML.jpg)

1. `Director`
  - Refers to the `Builder` interface to create parts of a complex object,
  - Is independent of how the complex object is created (which concrete classes are instantiated, i.e., which representation is created),
  - Maintains a reference to a `Builder` object.

2. `IBuilder`
  - Defines an interface for creating parts of a complex object.

3. `BuilderN`  
  - Implement the Builder interface by creating and assembling the parts of a complex object.

## Scenario

- `Director` calls `buildPartA()` on the installed `Builder1` object,
- `Builder1` creates a `ProductA1` object and adds it to the `ComplexObject`,
- Thereafter, the `Director` calls `buildPartB()` on `Builder1`,
- `Builder1` creates a `ProductB1` object and adds it to the `ComplexObject`,
- The `Director` can then get the assembled `ComplexObject` from the `Builder1` and use it as required.

## Consequences

| Advantages (+)                                          | Disadvantages (-)                                                                |
|---------------------------------------------------------|----------------------------------------------------------------------------------|
| Allows you to vary a product’s internal representation. | Requires creating a separate ConcreteBuilder for each different type of product. |
| Encapsulates code for construction and representation.  | Requires the builder classes to be mutable.                                      |
| Provides control over steps of construction process.    | Data members of class aren't guaranteed to be initialized.                       |
| Simplified client                                       | Dependency injection may be less supported.                                      |

## Similiar patterns

- Composite -> Builder -> Iterator -> Visitor -> Interpreter

## [GoF] wisdom
