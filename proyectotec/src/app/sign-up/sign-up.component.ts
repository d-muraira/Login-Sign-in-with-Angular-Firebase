import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../firebase-auth.service'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'] 
})
export class SignUpComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = ''; 
  successMessage: string = ''; 

  constructor(
    private router: Router,
    private firebaseAuthService: FirebaseAuthService 
  ) { }

  signUp() {
    this.firebaseAuthService.signUp(this.email, this.password)
      .then((userCredential) => {
        const userData = {
          email: userCredential.user?.email,
          password: this.password, 
        };

        return this.firebaseAuthService.addDataToFirestore('Usuarios', userData);
      })
      .then(() => {
        this.successMessage = 'You have signed up successfully! Redirecting to login...'; 
        this.errorMessage = ''; 
        console.log(this.successMessage); 

        setTimeout(() => this.router.navigate(['/login']), 3000);
      })
      .catch(error => {
        this.errorMessage = error.message;
        this.successMessage = ''; 
        console.error('Sign-up error:', error.message);
      });
  }

  goToLogin() {
    this.router.navigate(['/login']); 
  }
}
