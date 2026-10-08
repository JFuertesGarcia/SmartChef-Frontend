import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-nevera',
  templateUrl: './nevera.page.html',
  styleUrls: ['./nevera.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NeveraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
