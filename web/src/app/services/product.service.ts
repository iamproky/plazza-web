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
  idUser = sessionStorage.getItem('idUser');

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<Products>(this.url + '/product');
  }

  getCart() {
    return this.httpClient.get<Cart>(this.url + '/cart/' + this.idUser );
  }

  addProductToCart(product: Product) {
    return this.httpClient.post<ItemCart>(
      this.url + '/cart/' + this.idUser,
      {
        product: product.id,
        quantity: 1,
      },
    );
  }
}
