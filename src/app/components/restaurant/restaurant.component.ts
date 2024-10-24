import { Component, Input, OnInit } from '@angular/core';
import {
  IonItem,
  IonThumbnail,
  IonIcon,
  IonLabel,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  standalone: true,
  imports: [IonIcon, IonText, IonItem, IonLabel, IonIcon, IonThumbnail, CommonModule],
})

export class RestaurantComponent implements OnInit {

  @Input() restaurant: any;

  constructor() {
    addIcons({ star });
  }

  ngOnInit() {}
}
