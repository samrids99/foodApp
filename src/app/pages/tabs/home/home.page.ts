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
  IonItemGroup,
} from '@ionic/angular/standalone';
import { RestaurantComponent } from '../../../components/restaurant/restaurant.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
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
          cover: 'assets/pizza.png',
          name: 'Little Italy',
          short_name: 'Italy',
          cuisines: ['Italian', 'Wine'],
          rating: 4.7,
          delivery_time: 30,
          distance: 4.0,
          min_spend: 12,
        },
        {
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
          cover: 'assets/tacos.png',
          name: 'Grita por Mexico',
          short_name: 'Grita',
          cuisines: ['Mexican', 'Colombian'],
          rating: 4.9,
          delivery_time: 11,
          distance: 1.9,
          min_spend: 5,
        },
        {
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
          cover: 'assets/tikka.png',
          name: 'Flavours of India',
          short_name: 'India',
          cuisines: ['Indian', 'Curries'],
          rating: 4.9,
          delivery_time: 10,
          distance: 0.9,
          min_spend: 3,
        },
        {
          cover: 'assets/steak.png',
          name: 'Argentinian Steakhouse',
          short_name: 'Arg Steak',
          cuisines: ['Argentinian', 'Grill'],
          rating: 4.2,
          delivery_time: 40,
          distance: 4.2,
          min_spend: 15,
        },
      ];
    }, 3000);
  }
}
