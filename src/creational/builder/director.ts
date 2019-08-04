import { IBuilder } from './builder';

export class Director {
  constructor(
    private readonly builder: IBuilder,
  ) {}

  public buildComplexObject() {
    this.builder.buildPartA();
    this.builder.buildPartB();

    return this.builder.complexObject;
  }
}
