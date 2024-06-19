import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CartComponent } from './componentes/cart/cart.component';
import { ProductdetailsComponent } from './componentes/productdetails/productdetails.component';
import { LoginComponent } from './componentes/pages/login/login.component';
import { SignupComponent } from './componentes/pages/signup/signup.component';
import { CheckoutComponent } from './componentes/checkout/checkout.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'produtos', component: ProductdetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'produtodetails', component: ProductdetailsComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
