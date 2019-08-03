import { IProduct, ProductA, ProductB } from './product';

export interface IAbstractFactory {
  createProductA(): IProduct;
  createProductB(): IProduct;
}

export class Factory1 implements IAbstractFactory {
  public createProductA(): IProduct {
    return new ProductA(1, 'productA', 'I am productA created by Factory1.');
  }

  public createProductB(): IProduct {
    return new ProductB(2, 'productB', 'I am productB created by Factory1.');
  }
}

export class Factory2 implements IAbstractFactory {
  public createProductA(): IProduct {
    return new ProductA(3, 'productA', 'I am productA created by Factory2.');
  }

  public createProductB(): IProduct {
    return new ProductB(4, 'productB', 'I am productB created by Factory2.');
  }
}
