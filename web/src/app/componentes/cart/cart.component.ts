import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart } from '../../types/cart';
import { ProductService } from '../../services/product.service';
import { HeaderComponent } from '../header-without-search/header.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [MatCardModule, NgFor, RouterLink, HeaderComponent],
})
export class CartComponent {
  total: number = 0;
  items: Cart = [];

  constructor(private productService: ProductService) {
    this.getCart();
  }

  getCart() {
    this.productService
      .getCart()
      .subscribe((cartItem) => (this.items = cartItem));
  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
