import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Item } from "../../models/items/item.model";

const SHOPPING_LIST_REF_NAME = 'shopping-list';
// const SHOPPING_LIST_REF_NAME = 'wendysa-ionic-shopping-list';

@Injectable()
export class ShoppingListService {
  private shoppingListCollection: AngularFirestoreCollection<Item>;

  constructor(private db: AngularFirestore) {
    this.shoppingListCollection = this.db.collection<Item>(SHOPPING_LIST_REF_NAME);
  }

  getShoppingList() : AngularFirestoreCollection<Item> {
    return this.shoppingListCollection;
  }

  addItem(item: Item): any {
    return this.shoppingListCollection.add(item);
  }

}