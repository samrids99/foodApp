import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDownCircle } from 'ionicons/icons';
import SwiperCore, { Swiper } from 'swiper';
import { Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';

SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class HomePage implements OnInit, AfterViewInit {
  constructor() {
    addIcons({ chevronDownCircle });
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      modules: [Pagination], // Include required modules
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      speed: 1000,
    });
  }

  ngOnInit() {}
}
