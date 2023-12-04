import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
  })


export class QuizService {
    constructor(private firestore: Firestore) {
     }


    public getData(path: string) {
        const collectionInstance = collection(this.firestore, path);
        return collectionData(collectionInstance, {idField: 'id'} );
    }
    
    public addData(data: any, path: string) {
      const collectionInstance = collection(this.firestore, path);
        addDoc(collectionInstance, data)
        .then(() => {
          console.log('Successfully added data');
        })
        .catch(err => {
            console.error(err);
          });
        }
        
    public async updateData(data: any, id: string, path: string ) {
      const docRef = doc(this.firestore, path, id);
      try {
        await updateDoc(docRef, data);
        
        Promise.resolve(docRef);
        console.log(`Document ${id} successfully updated!`);
      }
      catch (error) {
        console.error('Error updating document:', error);
      }
    }


    public async addBatchData(data: any[], path: string) {
      const batch = new Set();
      try {
        data.forEach(async item => {
          const collectionInstance = collection(this.firestore, path);
          const docRef = await addDoc(collectionInstance, item);
          batch.add(docRef);
        });
  
        await Promise.all(batch);
        console.log('Batch write successful');
      }
      catch (err) {
        console.error('Error during batch write:', err);
      }
    }


}