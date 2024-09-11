import { Component } from '@angular/core';
import { FirebaseAuthService } from './firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string = '';
  password: string = '';
  message: string = '';
  error: string = '';

  constructor(private authService: FirebaseAuthService) {}

  // Sign-up method
  signUp() {
    this.authService.signUp(this.email, this.password)
      .then((result) => {
        this.message = 'User registered successfully!';
        this.error = '';
      })
      .catch((error) => {
        this.message = '';
        this.error = 'Error during sign up: ' + error.message;
      });
  }

  // Login method
  login() {
    this.authService.login(this.email, this.password)
      .then((result) => {
        this.message = 'User logged in successfully!';
        this.error = '';
      })
      .catch((error) => {
        this.message = '';
        this.error = 'Error during login: ' + error.message;
      });
  }

  // Logout method
  logout() {
    this.authService.logout()
      .then(() => {
        this.message = 'User logged out successfully!';
        this.error = '';
      })
      .catch((error) => {
        this.message = '';
        this.error = 'Error during logout: ' + error.message;
      });
  }
}
