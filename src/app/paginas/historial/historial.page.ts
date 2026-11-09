import {Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {TarjetahistorialComponent} from "../../componentes/tarjetahistorial/tarjetahistorial.component";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TarjetahistorialComponent, IonFab, IonFabButton, IonIcon, IonButton, IonModal]
})
export class HistorialPage implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}

