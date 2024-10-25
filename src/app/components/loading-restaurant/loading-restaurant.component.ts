import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonSkeletonText, IonThumbnail, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-loading-restaurant',
  templateUrl: './loading-restaurant.component.html',
  styleUrls: ['./loading-restaurant.component.scss'],
  standalone: true,
  imports: [IonLabel, IonSkeletonText, IonItem, IonList, IonThumbnail, CommonModule]
})
export class LoadingRestaurantComponent  implements OnInit {
  dummy = Array(9);

  constructor() { }

  ngOnInit() {}

}
