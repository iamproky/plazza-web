import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../default-login-layout/default-login-layout.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryInputComponent } from '../../primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../header-without-search/header.component';
interface LoginForm {
  email: FormControl;
  password: FormControl;
}
@Component({
  selector: 'app-login',
  standalone: true,
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
    HeaderComponent,
  ],
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submit() {
    this.loginService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: () => {
          this.toastService.success('Login feito com sucesso');
          // Redirecionar para a página principal após o login bem-sucedido
          this.router.navigate(['/home']);
        },
        error: () =>
          this.toastService.error('Erro inesperado! tente novamente'),
      });
  }
  navigate() {
    this.router.navigate(['/signup']);
  }
}
