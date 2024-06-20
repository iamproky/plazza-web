export interface ItemCart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface Cart extends Array<ItemCart> {}
