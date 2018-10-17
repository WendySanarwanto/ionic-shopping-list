import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FIREBASE_CONFIG } from './firebase.credentials';
import { MyApp } from './app.component';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';
// import { HomePage } from '../pages/home/home';           // ** enable Lazy loading **

@NgModule({
  declarations: [
    MyApp /*,
    HomePage */                                             // ** enable Lazy loading **
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp /*,
    HomePage */                                             // ** enable Lazy loading **
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService
  ]
})
export class AppModule {}
