import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB2k7YESfm2b-xhcX1lvH5n7YAW3pTG_60',
      authDomain: 'ng-recipe-book-f49b2.firebaseapp.com',
    });
  }

  onNavigate(feature) {
    this.loadedFeature = feature;
  }
}
