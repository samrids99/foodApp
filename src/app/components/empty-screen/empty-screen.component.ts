import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonGrid,
  IonRow,
  IonCol, 
  IonIcon, 
  IonButton, 
  IonItem, 
  IonLabel, 
  IonSkeletonText, 
  IonText 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss'],
  standalone: true,
  imports: [
    IonText, 
    IonSkeletonText, 
    IonLabel, 
    IonItem, 
    IonButton, 
    IonIcon, 
    IonGrid,
    IonRow,
    IonCol,
    CommonModule
  ],
})
export class EmptyScreenComponent  implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {}

}
