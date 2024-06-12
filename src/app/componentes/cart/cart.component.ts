import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart } from '../../types/cart';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, NgFor, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
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
