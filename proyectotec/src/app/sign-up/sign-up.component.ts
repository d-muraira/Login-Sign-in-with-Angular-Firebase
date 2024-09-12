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
        // User signed up successfully, store data in Firestore
        const userData = {
          uid: userCredential.user?.uid,
          email: userCredential.user?.email,
          password: this.password, // Just for the experiment
          createdAt: new Date()
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

  // Method for Google Sign-In
  googleSignIn() {
    this.firebaseAuthService.signInWithGoogle()
      .then(() => {
        this.successMessage = 'You have signed in with Google successfully! Redirecting to login...';
        this.errorMessage = '';
        console.log(this.successMessage);
        
        // Redirect to the login page after a successful sign-in
        setTimeout(() => this.router.navigate(['/login']), 3000);
      })
      .catch(error => {
        this.errorMessage = error.message;
        this.successMessage = '';
        console.error('Google Sign-in error:', error.message);
      });
  }

  goToLogin() {
    this.router.navigate(['/login']); 
  }
}
