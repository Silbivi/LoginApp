import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import firebase from '@firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyBV90EiNqcmL_UAOrarJFqfyaHlw7_8jvg",
  authDomain: "loginapp-7beb8.firebaseapp.com",
  projectId: "loginapp-7beb8",
  storageBucket: "loginapp-7beb8.appspot.com",
  messagingSenderId: "567963282740",
  appId: "1:567963282740:web:4d3aa5dd3fbd848ece4961",
  measurementId: "G-XZSDWQG0HH"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
