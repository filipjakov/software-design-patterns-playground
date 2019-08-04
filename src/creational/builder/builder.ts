import { ProductA } from '../abstract-factory/product';
import { ComplexObject } from './complex-object';
import { ProductB } from './product';

export interface IBuilder {
  complexObject: ComplexObject;
  buildPartA(): void;
  buildPartB(): void;
}

export class Builder1 implements IBuilder {
  private readonly _complexObject: ComplexObject;

  constructor() {
    this._complexObject = new ComplexObject();
  }

  public buildPartA(): void {
    const product = new ProductA(1, 'productA', 'ProductA created by Builder1.');
    this.complexObject.firstProduct = product;
  }

  public buildPartB(): void {
    const product = new ProductB(2, 'productB', 'ProductB created by Builder1.');
    this.complexObject.secondProduct = product;
  }

  public get complexObject(): ComplexObject {
    return this._complexObject;
  }
}
