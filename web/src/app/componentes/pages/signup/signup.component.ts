import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../primary-input/primary-input.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

interface signupForm{
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    AuthService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup<signupForm>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService
  ){
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    this.authService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => {
        this.toastService.success('Registrado com sucesso');
        // Redirecionar para a página principal após registro com sucesso
        this.router.navigate(['/']).then(()=> {window.location.reload()});
      },
      error: () =>
        this.toastService.error('Erro inesperado! tente novamente'),
    });
  }

  navigate(){
    this.router.navigate(["login"])
  }
}
