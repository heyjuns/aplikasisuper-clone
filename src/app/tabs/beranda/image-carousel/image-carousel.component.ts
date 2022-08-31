import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListHelper } from '../../tabs';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { CommonModule } from '@angular/common';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    IonicModule,
    SwiperModule,
    CommonModule,
  ]
})
export class ImageCarouselComponent implements OnInit {
  listOfJumbotron: ListHelper[] = [
    {
      // eslint-disable-next-line max-len
      url: 'https://1.bp.blogspot.com/-KQGga0Pm16s/YFybNiVpBWI/AAAAAAAAc-o/S9FXQLFoXd4dX-2v5QVaKDqXaLyxY7uAQCLcBGAsYHQ/s1920/aplikasi-super.png',
      name:'Gambar 1',
    },
    {
      url: 'https://cdn.keepo.me/images/post/covers/2020/05/10/main-cover-image-6c6c34e7-c0e0-4a1f-9c94-77327308938f.jpg',
      name:'Gambar 2',
    },
    {
      url: 'https://superapp.id/blog/wp-content/uploads/2020/06/Super-Mudah-Begini-Cara-Belanja-Sembako-di-Aplikasi-Super.png',
      name:'Gambar 3',
    },
  ];

  constructor() { }

  ngOnInit() {

    console.log(this.listOfJumbotron);
  }

}
