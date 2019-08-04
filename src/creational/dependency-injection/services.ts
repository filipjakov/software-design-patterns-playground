export interface IServiceA {
  name: string;
  getRandomNumber(): number;
}

export interface IServiceB {
  name: string;
  getRandomString(): string;
}

export class ServiceA1 implements IServiceA {
  constructor(
    public readonly name: string,
  ) {}

  public getRandomNumber(): number {
    // tslint:disable-next-line: insecure-random
    return Math.random();
  }
}

export class DummyServiceA1 implements IServiceA {
  constructor(
    public readonly name: string,
  ) {}

  public getRandomNumber(): number {
    return 0.1;
  }
}

export class ServiceB1 implements IServiceB {
  constructor(
    public readonly name: string,
  ) {}

  public getRandomString(): string {
    // tslint:disable-next-line: insecure-random
    return Math.random()
      .toString(36)
      .substring(7);
  }
}

export class DummyServiceB1 implements IServiceB {
  constructor(
    public readonly name: string,
  ) {}

  public getRandomString(): string {
    return 'not so random';
  }
}
