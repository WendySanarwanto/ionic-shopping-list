import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../../models/items/item.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, 
    private shopping: ShoppingListService) {
    this.shoppingList$ = this.shopping
      .getShoppingList()
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

}
