import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonText,
  IonItem,
  IonLabel,
  IonButton,
  IonImg,
  IonCol,
  IonToggle,
  IonList,
  IonListHeader,
  IonThumbnail,
  IonFooter,
  IonTabButton,
  IonItemOption,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackCircle,
  add,
  star,
  removeOutline,
  addOutline,
  camera,
  basketOutline,
} from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
  standalone: true,
  imports: [
    IonItemOption,
    IonTabButton,
    IonFooter,
    IonListHeader,
    IonList,
    IonToggle,
    IonCol,
    IonImg,
    IonButton,
    IonLabel,
    IonItem,
    IonText,
    IonRow,
    IonGrid,
    IonIcon,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonThumbnail,
  ],
})
export class ItemsPage implements OnInit {
  id: any;
  data: any = {};
  restaurant: any = {};
  cartData: any = {};
  storeData: any = {};
  items: any[] = [];
  categories: any[] = [
    {
      id: '2',
      name: 'Starters',
      uid: 1,
    },
    {
      id: '4',
      name: 'Sides',
      uid: 1,
    },
    {
      id: '1',
      name: 'Mains',
      uid: 1,
    },
    {
      id: '3',
      name: 'Desserts',
      uid: 1,
    },
  ];
  veg: boolean = false;
  allItems = [
    {
      category_id: '1',
      cover: 'assets/pizza.png',
      desc: 'Neapolitan crispy base pizza',
      id: 'i1',
      name: 'Pepperoni Pizza',
      price: 10.99,
      rating: 4.9,
      status: true,
      uid: 2,
      variation: false,
      veg: false,
      quantity: 0,
    },
    {
      category_id: '1',
      cover: 'assets/calzone.png',
      desc: 'Ham and mushroom calzone',
      id: 'i4',
      name: 'Funghi Calzone',
      price: 8.0,
      rating: 4.7,
      status: true,
      uid: 2,
      variation: false,
      veg: false,
      quantity: 0,
    },
    {
      category_id: '2',
      cover: 'assets/caesarsalad.png',
      desc: 'Romaine lettuce, croutons, Parmesan cheese and a creamy dressing',
      id: 'i2',
      name: 'Caesar Salad',
      price: 4.5,
      rating: 3.7,
      status: true,
      uid: 2,
      veg: true,
      quantity: 0,
    },
    {
      category_id: '4',
      cover: 'assets/gBread.png',
      desc: 'Toasted bread with garlic and butter',
      id: 'i3',
      name: 'Garlic Bread',
      price: 2.99,
      rating: 5,
      status: true,
      uid: 2,
      variation: false,
      veg: true,
      quantity: 0,
    },
    {
      category_id: '3',
      cover: 'assets/tiramisu.png',
      desc: 'Espresso-soaked layers of mascarpone and cocoa',
      id: 'i5',
      name: 'Tiramisu',
      price: 2.7,
      rating: 4.2,
      status: true,
      uid: 2,
      variation: false,
      veg: true,
      quantity: 0,
    },
  ];

  restaurants = [
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
      address: 'Lille Stranden 10, 0252 Oslo',
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
      address: 'Møllergata 13, 0179 Oslo',
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
      address: 'Karl Johans gt. 11, 0154 Oslo',
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
      address: 'Langkaia 1, 0150 Oslo',
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
      address: 'Sørengkaia 101, 0194 Oslo',
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
      address: 'Kongshavnveien 37, 0193 Oslo',
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
      address: 'Thorvald Meyers gate 56B, 0552 Oslo',
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
      address: 'Slottsplassen 1, 0010 Oslo',
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
      address: 'Neuberggata 2A, 0367 Oslo',
    },
  ];

  private navCtrl = inject(NavController);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    addIcons({
      arrowBackCircle,
      star,
      removeOutline,
      addOutline,
      basketOutline,
      camera,
      add,
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      console.log('data: ', paramMap);
      if (!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('restaurantId');
      console.log('id: ', this.id);
      this.getItems();
    });
  }

  getCart() {
    return Preferences.get({ key: 'cart' });
  }

  async getItems() {
    this.storeData = {};
    this.data = {};
    this.cartData = {};
    const restaurantId = Number(this.id);
    let restaurant: any = this.restaurants.filter(
      (x) => x.uid === restaurantId
    );
    this.restaurant = restaurant[0];
    let data: any = this.restaurants.filter((x) => x.uid === restaurantId); // === is strict equality
    this.data = data[0];
    this.items = this.allItems.filter((x) => x.uid === restaurantId);
    console.log('restaurant: ', this.data);
    let cart: any = await this.getCart();
    if (cart?.value) {
      this.storeData = JSON.parse(cart.value); // opposite of JSON.stringify
      if (
        this.id == this.storeData.restaurant.uid &&
        this.allItems.length > 0
      ) {
        this.allItems.forEach((e) => {
          this.storeData.items.forEach((i) => {
            if (e.id != i.id) return;
            e.quantity = i.quantity;
          });
        });
      }
      this.cartData.totalItem = this.storeData.totalItem;
      this.cartData.totalPrice = this.storeData.totalPrice;
    }
  }

  getCuisines(cuisine: any) {
    return cuisine.join(', ');
  }

  goBack() {
    setTimeout(() => {
      this.navCtrl.back();
    }, 500);
  }

  vegetarian(event) {
    console.log(event.detail.checked);
    this.items = [];
    if (event.detail.checked == true)
      this.items = this.allItems.filter((x) => x.veg === true);
    else this.items = this.allItems;
  }

  quantityPlus(item: any, index: any) {
    try {
      if (!this.items[index].quantity || this.items[index].quantity == 0) {
        this.items[index].quantity = 1;
        this.calculate();
      } else {
        this.items[index].quantity += 1;
        this.calculate();
      }
    } catch (e) {
      console.log('error: ', e);
    }
  }

  quantityMinus(item: any, index: any) {
    if (this.items[index].quantity !== 0) {
      this.items[index].quantity -= 1;
    } else {
      this.items[index].quantity = 0;
    }
    this.calculate();
  }

  calculate() {
    this.cartData.items = [];
    let item = this.items.filter((x) => x.quantity > 0);
    this.cartData.items = item;
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;
    item.forEach((element) => {
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice +=
        parseFloat(element.price) * parseFloat(element.quantity);
    });
    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice.toFixed(2));
    if (this.cartData.totalItem == 0) {
      this.cartData.totalItem = 0;
      this.cartData.totalPrice = 0;
    }
    console.log('cartData: ', this.cartData);
  }

  async saveToCart() {
    try {
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
      await Preferences.set({
        key: 'cart',
        value: JSON.stringify(this.cartData),
      });
    } catch (e) {
      console.log('error: ', e);
    }
  }

  async viewCart() {
    if (this.cartData.items && this.cartData.items.length > 0)
      await this.saveToCart();
    // this.router.navigate([this.router.url + '/cart']);
  }
}
