import { Creator1, Creator2, ICreator } from './creator';
import { IProduct } from './product';

let creator: ICreator = new Creator1();
let product: IProduct = creator.factoryMethod();
console.log(product);

creator = new Creator2();
product = creator.factoryMethod();
console.log(product);
