import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
} from '@ionic/angular/standalone';
import { LoadingRestaurantComponent } from 'src/app/components/loading-restaurant/loading-restaurant.component';
import { RestaurantComponent } from '../../../components/restaurant/restaurant.component';
import { EmptyScreenComponent } from 'src/app/components/empty-screen/empty-screen.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonLabel,
    IonItem,
    IonList,
    IonSearchbar,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    LoadingRestaurantComponent,
    RestaurantComponent,
    EmptyScreenComponent
  ],
})
export class SearchPage implements OnInit {
  @ViewChild('searchInput') sInput: any;
  query: any;
  isLoading: boolean;
  model: any = {
    icon: 'search',
    title: 'No restaurants found',
  };

  allRestaurants: any[] = [
    {
      cover: 'assets/chilaquiles.png',
      name: 'Mexico Magico',
      short_name: 'Mexico',
      cuisines: ['Mexican', 'TexMex'],
      rating: 5.0,
      delivery_time: 25,
      min_spend: 8,
    },
    {
      cover: 'assets/pizza.png',
      name: 'Little Italy',
      short_name: 'Italy',
      cuisines: ['Italian', 'Mediteranean'],
      rating: 4.7,
      delivery_time: 30,
      min_spend: 12,
    },
    {
      cover: 'assets/sushi.png',
      name: 'Nippon Sushi',
      short_name: 'Nippon',
      cuisines: ['Japanese', 'Sushi'],
      rating: 4.1,
      delivery_time: 20,
      min_spend: 10,
    },
    {
      cover: 'assets/chowMein.png',
      name: 'China Town',
      short_name: 'China',
      cuisines: ['Chinese', 'Noodles'],
      rating: 3.4,
      delivery_time: 5,
      min_spend: 3,
    },
    {
      cover: 'assets/tacos.png',
      name: 'Grita por Mexico',
      short_name: 'Grita',
      cuisines: ['Mexican', 'Tacos'],
      rating: 4.9,
      delivery_time: 11,
      min_spend: 5,
    },
    {
      cover: 'assets/spagBol.png',
      name: 'Colluseum Pasta',
      short_name: 'Col Pasta',
      cuisines: ['Italian', 'Pasta'],
      rating: 4.0,
      delivery_time: 22,
      min_spend: 6,
    },
    {
      cover: 'assets/burger.png',
      name: 'Liberty Burgers',
      short_name: 'Liberty',
      cuisines: ['Burgers', 'BBQ'],
      rating: 3.8,
      delivery_time: 15,
      min_spend: 6,
    },
    {
      cover: 'assets/tikka.png',
      name: 'Flavours of India',
      short_name: 'India',
      cuisines: ['Indian', 'Curry'],
      rating: 4.9,
      delivery_time: 10,
      min_spend: 3,
    },
    {
      cover: 'assets/steak.png',
      name: 'Argentinian Steakhouse',
      short_name: 'Arg Steak',
      cuisines: ['Steak', 'Grill'],
      rating: 4.2,
      delivery_time: 40,
      min_spend: 15,
    },
  ];

  restaurants: any[] = [];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus(); // Focus the cursor on the searchbar immediately
    }, 500);
  }

  async onSearchChange(event) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if (this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async() => {
        this.restaurants = await this.allRestaurants.filter((r) => {
          return (
            r.name.toLowerCase().includes(this.query) ||
            r.cuisines.join(' ').toLowerCase().includes(this.query)
          );
        });
        console.log(this.restaurants);
        this.isLoading = false;
      }, 1500);
    }
  }
}
