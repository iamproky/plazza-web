export interface ItemCart {
  price: number;
  productID: string;
  quantity: number;
}

export interface Cart extends Array<ItemCart> {}
