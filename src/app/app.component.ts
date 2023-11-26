import { ChangeDetectorRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { testQuestions } from 'src/models/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected testQuestions = testQuestions;
  constructor(private firestore: Firestore, private cd: ChangeDetectorRef) {
  }




  protected getData() {
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance)
    .subscribe({
      next: value => {
        console.log(value);
      },
      error: err => {
        console.error(err);
      }
    });
  }


  protected addData(form: NgForm) {
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, form.value)
    .then(() => {
      console.log('git gut fajny ten firebase');
    })
    .catch(err => {
      console.error(err);
    });
  }
}