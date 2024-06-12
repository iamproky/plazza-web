import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header-no-search',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    MatInputModule,
    NgIf,
    MatBadgeModule,
    MatMenuModule,
  ],
})
export class HeaderComponent {
  items: { nome: string; preco: number; qtd: number }[] = [
    { nome: 'Produto 1', preco: 20, qtd: 1 },
    { nome: 'Produto 2', preco: 30, qtd: 1 },
    { nome: 'Produto 3', preco: 15, qtd: 1 },
  ];
}
