import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Item } from "../../models/items/item.model";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const SHOPPING_LIST_REF_NAME = 'shopping-list';
// const SHOPPING_LIST_REF_NAME = 'wendysa-ionic-shopping-list';

@Injectable()
export class ShoppingListService {
  private shoppingListCollection: AngularFirestoreCollection<Item>;

  constructor(private db: AngularFirestore) {
    this.shoppingListCollection = this.db.collection<Item>(SHOPPING_LIST_REF_NAME);
  }

  getShoppingList() : Observable<Item[]> {
    return this.shoppingListCollection
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(change => {
          const data: Item = change.payload.doc.data() as Item;
          const id = change.payload.doc.id;
          return { id, ...data};
        })
      })
    );
  }

  addItem(item: Item): any {
    return this.shoppingListCollection.add(item);
  }

}