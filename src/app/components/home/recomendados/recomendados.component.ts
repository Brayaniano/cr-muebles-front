import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-recomendados',
  imports: [CommonModule],
  templateUrl: './recomendados.component.html',
  styleUrl: './recomendados.component.scss'
})
export class RecomendadosComponent {
  products = [
    { name: 'Closet 1', price: 40.49, img: 'assets/img1.jpg' },
    { name: 'Closet 2', price: 43.99, img: 'assets/img2.jpg' },
    { name: 'Closet 3', price: 36.49, img: 'assets/img3.jpg' },
    { name: 'Closet 4', price: 40.49, img: 'assets/img4.jpg' },
    { name: 'Closet 5', price: 44.00, img: 'assets/img5.jpg' },
    { name: 'Closet 6', price: 39.99, img: 'assets/img6.jpg' },
    { name: 'Closet 7', price: 41.00, img: 'assets/img7.jpg' },
    { name: 'Closet 8', price: 42.00, img: 'assets/img8.jpg' },
  ];

  ngAfterViewInit() {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: { el: '.swiper-pagination', clickable: true },
      loop: false,
    });
  }
}
