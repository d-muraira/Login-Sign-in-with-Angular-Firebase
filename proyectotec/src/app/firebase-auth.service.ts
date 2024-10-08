import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app'; // Import Firebase compatibility layer

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  // Sign-up method
  signUp(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Login method
  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Logout method
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  // Get current user
  getCurrentUser(): Observable<any> {
    return this.afAuth.authState;
  }

  // Add data to Firestore
  addDataToFirestore(collectionName: string, data: any): Promise<any> {
    return this.firestore.collection(collectionName).add(data);
  }

  // Google Sign-In method
  signInWithGoogle(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }
}
