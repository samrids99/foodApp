import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from '../../../components/banner/banner.component';
import {
  IonHeader,
  IonListHeader,
  IonContent,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonItemGroup, IonSkeletonText, IonSpinner, IonItem } from '@ionic/angular/standalone';
import { RestaurantComponent } from '../../../components/restaurant/restaurant.component';
import { LoadingRestaurantComponent } from 'src/app/components/loading-restaurant/loading-restaurant.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonItem, IonSpinner, 
    IonSkeletonText, 
    IonItemGroup,
    IonHeader,
    CommonModule,
    FormsModule,
    BannerComponent,
    IonListHeader,
    IonContent,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
    RestaurantComponent,
    LoadingRestaurantComponent,
    RouterLink
  ],
})
export class HomePage implements OnInit {
  restaurants: any[] = [];
  isLoading: boolean = false;
  banners: any[] = [];

  constructor() {}

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.banners = [
        {
          image: 'assets/pizza.png',
        },
        {
          image: 'assets/chilaquiles.png',
        },
        {
          image: 'assets/burger.png',
        },
        {
          image: 'assets/spagBol.png',
        },
        {
          image: 'assets/sushi.png',
        },
        {
          image: 'assets/tikka.png',
        },
        {
          image: 'assets/tacos.png',
        },
        {
          image: 'assets/chowMein.png',
        },
        {
          image: 'assets/steak.png',
        },
      ];

      this.restaurants = [
        {
          uid: 1,
          cover: 'assets/chilaquiles.png',
          name: 'Mexico Magico',
          short_name: 'Mexico',
          cuisines: ['Mexican', 'TexMex'],
          rating: 5.0,
          delivery_time: 25,
          distance: 3.1,
          min_spend: 8,
        },
        {
          uid: 2,
          cover: 'assets/pizza.png',
          name: 'Little Italy',
          short_name: 'Italy',
          cuisines: ['Italian', 'Mediteranean'],
          rating: 4.7,
          delivery_time: 30,
          distance: 4.0,
          min_spend: 12,
        },
        {
          uid: 3,
          cover: 'assets/sushi.png',
          name: 'Nippon Sushi',
          short_name: 'Nippon',
          cuisines: ['Japanese', 'Sushi'],
          rating: 4.1,
          delivery_time: 20,
          distance: 2.8,
          min_spend: 10,
        },
        {
          uid: 4,
          cover: 'assets/chowMein.png',
          name: 'China Town',
          short_name: 'China',
          cuisines: ['Chinese', 'Noodles'],
          rating: 3.4,
          delivery_time: 5,
          distance: 1.0,
          min_spend: 3,
        },
        {
          uid: 5,
          cover: 'assets/tacos.png',
          name: 'Grita por Mexico',
          short_name: 'Grita',
          cuisines: ['Mexican', 'Tacos'],
          rating: 4.9,
          delivery_time: 11,
          distance: 1.9,
          min_spend: 5,
        },
        {
          uid: 6,
          cover: 'assets/spagBol.png',
          name: 'Colluseum Pasta',
          short_name: 'Col Pasta',
          cuisines: ['Italian', 'Pasta'],
          rating: 4.0,
          delivery_time: 22,
          distance: 2.3,
          min_spend: 6,
        },
        {
          uid: 7,
          cover: 'assets/burger.png',
          name: 'Liberty Burgers',
          short_name: 'Liberty',
          cuisines: ['Burgers', 'BBQ'],
          rating: 3.8,
          delivery_time: 15,
          distance: 1.5,
          min_spend: 6,
        },
        {
          uid: 8,
          cover: 'assets/tikka.png',
          name: 'Flavours of India',
          short_name: 'India',
          cuisines: ['Indian', 'Curry'],
          rating: 4.9,
          delivery_time: 10,
          distance: 0.9,
          min_spend: 3,
        },
        {
          uid: 9,
          cover: 'assets/steak.png',
          name: 'Argentinian Steakhouse',
          short_name: 'Arg Steak',
          cuisines: ['Steak', 'Grill'],
          rating: 4.2,
          delivery_time: 40,
          distance: 4.2,
          min_spend: 15,
        },
      ];
      this.isLoading = false;
    }, 1500);
  }
}
