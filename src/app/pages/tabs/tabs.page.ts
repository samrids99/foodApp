import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonTab, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { search, person, cart, fastFood } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: 
  [
    IonIcon, 
    IonTabButton, 
    IonTabBar, 
    IonTab, 
    IonTabs, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonLabel
  ]
})
export class TabsPage implements OnInit {

  private router = inject(Router);

  constructor() {
    addIcons({fastFood,search,cart,person});
   }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/tabs/home']);
  }

}
