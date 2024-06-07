import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, NgFor, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  items: { nome: string, preco: number }[] = [
    { nome: 'Produto 1', preco: 20 },
    { nome: 'Produto 2', preco: 30 },
    { nome: 'Produto 3', preco: 15 }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.preco, 0);
  }

}
