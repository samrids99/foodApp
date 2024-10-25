import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackCircle } from 'ionicons/icons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
  standalone: true,
  imports: [IonIcon, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ItemsPage implements OnInit {

  private navCtrl = inject(NavController);

  constructor() { 
    addIcons({arrowBackCircle});
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
