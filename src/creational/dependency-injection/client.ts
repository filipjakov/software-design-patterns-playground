import { IServiceA, IServiceB } from './services';

export class Client {
  constructor(
    private readonly serviceA1: IServiceA,
    private readonly serviceB1: IServiceB,
  ) {
    this.onInit();
  }

  private onInit() {
    const print = [
      `${this.serviceA1.name} random number: ${this.serviceA1.getRandomNumber()}`,
      `${this.serviceB1.name} random string: ${this.serviceB1.getRandomString()}`,
    ];

    console.log(print);
  }
}
