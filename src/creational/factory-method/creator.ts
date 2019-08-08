import { IProduct, Product } from './product';

export interface ICreator {
  factoryMethod(): IProduct;
}

export abstract class AbstractCreator {
  public factoryMethod(): IProduct {
    return new Product(1, 'product1', 'Product1 from AbstractCreator');
  }
}

export class Creator1 implements ICreator {
  public factoryMethod(): IProduct {
    return new Product(2, 'product2', 'Product1 from Creator1');
  }
}

export class Creator2 extends AbstractCreator {
  public factoryMethod(): IProduct {
    console.log('In Creator2 🔥🔥🔥!');

    return super.factoryMethod();
  }
}