import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ProductService } from '../../services/product.service';
import { HeaderComponent } from '../header/header.component';
import { Product, Products } from '../../types/product';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatCardModule, MatDividerModule, MatButtonModule, HeaderComponent],
})
export class HomeComponent {
  addToCart(product: Product) {
    this.productService
      .addProductToCart(product)
      .subscribe((_) => this.getProductsCreated());
  }

  products: Products = [];
  constructor(private productService: ProductService) {
    this.getProductsCreated();
  }

  getProductsCreated() {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
}
