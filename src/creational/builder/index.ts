import { Builder1 } from './builder';
import { Director } from './director';

const director = new Director(new Builder1());
console.log(director.buildComplexObject().content);
