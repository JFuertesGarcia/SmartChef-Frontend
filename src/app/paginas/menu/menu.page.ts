import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonSearchbar, IonTitle, IonToggle, IonToolbar} from '@ionic/angular';
import {TarjetamenuComponent} from "../../componentes/tarjetamenu/tarjetamenu.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, TarjetamenuComponent, IonToggle, IonButton]
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
