export interface IProduct {
  id: number;
  name: string;
  description: string;
}

export class Product implements IProduct {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
  ) {}
}
