import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  // Method to send data to Firebase
  sendData(data: any): Promise<void> {
    const itemsRef = this.db.list('items'); // Change 'items' to your desired node name
    return itemsRef.push(data).then(() => {}); // Convert ThenableReference to Promise<void>
  }
}
