export type Sizes = 'L' | 'M' | 'S' | 'XL';
export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
