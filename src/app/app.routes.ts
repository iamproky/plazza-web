import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CartComponent } from './componentes/cart/cart.component';
import { ProductdetailsComponent } from './componentes/productdetails/productdetails.component';
import { DefaultLoginLayoutComponent } from './componentes/default-login-layout/default-login-layout.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: DefaultLoginLayoutComponent },
  { path: 'produtos', component: ProductdetailsComponent },
  { path: 'carrinho', component: CartComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
