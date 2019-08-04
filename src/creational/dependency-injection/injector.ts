import { Client } from './client';
import { DummyServiceB1, ServiceA1 } from './services';

export class Injector {
  public init() {
    const serviceA = new ServiceA1('serviceA1');
    const serviceB = new DummyServiceB1('serviceB1');

    return new Client(serviceA, serviceB);
  }
}

// Not a good example
// Should read which service to get from some config/metadata
// TODO - create some real DI w/Reflect-metadata
