import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/items/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  item: Item = {
    name: '',
    quantity: 0,
    price: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public shopping: ShoppingListService) {
  }

  ionViewDidLoad() {
    console.log('[DEBUG] - <AddShoppingItemPage.ionViewDidLoad> is loaded.');
  }

  addItem(item: Item){
    this.shopping.addItem(item).then(ref => {
      console.log(`[DEBUG] - <AddShoppingItem.addItem> ref.id: \n`, ref.id);

      // Move back to the Homepage and also carrying the created document's id
      this.navCtrl.setRoot('HomePage', { id: ref.id });
    });
  }
}
