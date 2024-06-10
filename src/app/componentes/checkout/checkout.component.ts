import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../default-login-layout/default-login-layout.component';

interface IBGE {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  imports: [DefaultLoginLayoutComponent],
})
export class CheckoutComponent {
  // Cidades
  listCities: IBGE[] = [];

  // Produtos
  items: { nome: string; preco: number; qtd: number }[] = [
    { nome: 'Produto 1', preco: 20, qtd: 1 },
    { nome: 'Produto 2', preco: 30, qtd: 1 },
    { nome: 'Produto 3', preco: 15, qtd: 1 },
  ];
  total: number = 0;

  constructor() {}

  ngOnInit() {
    // Coletando municípios do IBGE de Goiás

    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/GO/municipios'
    )
      .then((response) => response.json())
      .then((data) => {
        this.listCities = data;
      });

    // Calculando o total dos produtos
    this.total = this.items.reduce(
      (total, product) => total + product.preco,
      0
    );
  }

  convertNumberToReal(number: number) {
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}
