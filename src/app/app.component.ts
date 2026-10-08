import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import {addIcons} from "ionicons";
import {book, cube, grid, newspaper, person, pizza, time, water} from "ionicons/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({ pizza , grid, time, cube, book, newspaper, person})
  }
}
