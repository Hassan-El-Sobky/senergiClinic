import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 /* All Source that we bidding  */ 
 imgSrc:string='assets/1.jpg';
 cardSrc:string='assets/cardiac.jpg';
 cosSrc:string='assets/cosmetic.jpg';
 dentalSrc:string='assets/dental.jpg';
 news1:string='assets/news1.jpg';
 news2:string='assets/news2.jpg';
 news3:string='assets/news3.jpg'; 

  constructor() { }
  ngOnInit() {
  }
       /*The slider Options*/ 
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true, // Make the user slide by clicked on the mouse and move to left and right
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    /*The resposive Screen*/
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
