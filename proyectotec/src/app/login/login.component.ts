import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../firebase-auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private firebaseAuthService: FirebaseAuthService
  ) { }

  login() {
    this.firebaseAuthService.login(this.email, this.password)
      .then(() => this.router.navigate(['/']))
      .catch(error => {
        this.errorMessage = error.message;
        console.error('Login error:', error);
      });
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
