import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

interface Product {
  name: string;
  img: string;
  price: number;
  description: string;
  bestSeller?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,
    MatDividerModule,
    MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // mock a ten products with name, image, price, description
  products: Product[] = [
    {
      name: 'Product 1',
      img: 'https://source.unsplash.com/random/100x100?nike-',
      price: 29.99,
      description: 'Informações adicionais sobre o produto 1.',
    },
    {
      name: 'Product 2',
      img: 'https://source.unsplash.com/random/100x100?puma-',
      price: 39.99,
      description: 'Informações adicionais sobre o produto 2.',
    },
    {
      name: 'Product 3',
      img: 'https://source.unsplash.com/random/100x100?adidas-',
      description: 'Informações adicionais sobre o produto 3.',
      bestSeller: true,
      price: 49.99,
    },
    {
      name: 'Product 4',
      img: 'https://source.unsplash.com/random/100x100?nike-',
      price: 59.99,
      description: 'Informações adicionais sobre o produto 4.',
    },
    {
      name: 'Product 5',
      img: 'https://source.unsplash.com/random/100x100?puma-',
      price: 69.99,
      description: 'Informações adicionais sobre o produto 5.',
    },
    {
      name: 'Product 6',
      img: 'https://source.unsplash.com/random/100x100?adidas-',
      description: 'Informações adicionais sobre o produto 6.',
      price: 79.99,
    },
    {
      name: 'Product 7',
      img: 'https://source.unsplash.com/random/100x100?nike-',
      price: 89.99,
      description: 'Informações adicionais sobre o produto 7.',
    },
    {
      name: 'Product 8',
      img: 'https://source.unsplash.com/random/100x100?puma-',
      price: 99.99,
      description: 'Informações adicionais sobre o produto 8.',
    },
    {
      name: 'Product 9',
      img: 'https://source.unsplash.com/random/100x100?adidas-',
      description: 'Informações adicionais sobre o produto 9.',
      price: 109.99,
    },
    {
      name: 'Product 10',
      img: 'https://source.unsplash.com/random/100x100?nike-',
      price: 119.99,
      description: 'Informações adicionais sobre o produto 10.',
    },
  ];
}
