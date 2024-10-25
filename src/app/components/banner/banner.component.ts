import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Swiper } from 'swiper';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

SwiperCore.use([EffectCoverflow, Pagination]);
@Component({
selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [CommonModule]
})


export class BannerComponent  implements OnInit, AfterViewInit {
  @Input() banners: any[];

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      modules: [Pagination, Autoplay],
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
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

}
