export interface ItemCart {
  name: string;
  price: number;
  productID: string;
  quantity: number;
}

export interface Cart extends Array<ItemCart> {}
