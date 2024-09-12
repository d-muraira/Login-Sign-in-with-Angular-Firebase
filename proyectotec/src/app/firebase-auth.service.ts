import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  // Sign-up method with Firestore integration
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
  addDataToFirestore(collection: string, data: any): Promise<any> {
    return this.firestore.collection(collection).doc(data.uid).set(data);
  }
}
