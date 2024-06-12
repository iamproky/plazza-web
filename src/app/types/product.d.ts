export interface Product {
  id?: number;
  name: string;
  img: string;
  price: number;
  description: string;
  bestSeller?: boolean;
}

export interface Products extends Array<Product> {}
