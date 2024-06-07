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


  items: { nome: string, preco: number, qtd: number }[] = [
    { nome: 'Produto 1', preco: 20, qtd: 1},
    { nome: 'Produto 2', preco: 30, qtd: 1},
    { nome: 'Produto 3', preco: 15, qtd: 1}
  ];

  constructor() { }

  ngOnInit(): void {

  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.preco, 0);
  }

}
