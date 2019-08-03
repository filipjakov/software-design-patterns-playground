import { IAbstractFactory } from './factory';
import { IProduct } from './product';

export class Client {
  constructor(
    public factory: IAbstractFactory,
  ) {}

  public get products(): Array<IProduct> {
    return [
      this.factory.createProductA(),
      this.factory.createProductB()
    ];
  }
}
