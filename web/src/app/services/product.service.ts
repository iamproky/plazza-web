import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product, Products } from '../types/product';
import { Cart, ItemCart } from '../types/cart';

// TODO: adicionar produto ao carrinho conforme a rota POST /cart 
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = environment.api_url;

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<Products>(this.url + '/product');
  }

  getCart() {
    return this.httpClient.get<Cart>(this.url + '/cart');
  }

  addProductToCart(product: Product) {
    return this.httpClient.post<ItemCart>(
      this.url + '/cart',
      {
        name: product.name,
        price: product.price,
        productID: product.id,
        quantity: 1,
      },
      {
        headers: {
          Authorization: localStorage.getItem('token')!,
        },
      }
    );
  }
}
