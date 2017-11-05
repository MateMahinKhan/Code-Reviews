import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class DataService {

  constructor(private angularFireDB: AngularFireDatabase) { }
  save(csv: string): void {
    const itemRef = this.angularFireDB.object('item');
    itemRef.set({ userAddedCSV: csv});
  }
}
