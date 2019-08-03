export interface IProduct {
  id: number;
  name: string;
  description: string;
}

export class ProductA implements IProduct {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
  ) {}
}

export class ProductB implements IProduct {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
  ) {}
}
