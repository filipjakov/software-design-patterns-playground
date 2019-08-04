import { ProductA, ProductB } from '../abstract-factory/product';

export class ComplexObject {
  private _firstProduct: ProductA | undefined;
  private _secondProduct: ProductB | undefined;

  constructor(
    private readonly name = 'complexObject',
  ) {}

  public set firstProduct(firstProduct: ProductA) {
    this._firstProduct = firstProduct;
  }

  public set secondProduct(secondProduct: ProductB) {
    this._secondProduct = secondProduct;
  }

  public get content(): [string, string, string] {
    try {
      return [
        this.name,
        this._firstProduct!.description,
        this._secondProduct!.description,
      ];
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
