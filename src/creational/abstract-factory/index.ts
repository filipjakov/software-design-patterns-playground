import { Client } from './client';
import { Factory1 } from './factory';

const client = new Client(new Factory1());
console.log(client.products);
