import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CartComponent } from './componentes/cart/cart.component';
import { ProductdetailsComponent } from './componentes/productdetails/productdetails.component';
import { LoginComponent } from './componentes/pages/login/login.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProductdetailsComponent },
  { path: 'carrinho', component: CartComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
