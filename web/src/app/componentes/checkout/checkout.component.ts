import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Cart } from '../../types/cart';
import { HeaderComponent } from '../header-without-search/header.component';

interface IBGE {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  imports: [HeaderComponent],
})
export class CheckoutComponent {
  // Cidades
  listCities: IBGE[] = [];

  // Produtos
  items: Cart = [];

  total: number = 0;

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

  ngOnInit() {
    // Coletando municípios do IBGE de Goiás

    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/GO/municipios'
    )
      .then((response) => response.json())
      .then((data) => {
        this.listCities = data;
      });
  }

  convertNumberToReal(number: number) {
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}
