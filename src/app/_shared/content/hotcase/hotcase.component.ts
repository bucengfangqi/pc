import { Component, OnInit } from '@angular/core';
import { cases, productMap } from '@_shared/data/case';
declare var Swiper: any;
@Component({
  selector: 'app-hotcase',
  templateUrl: './hotcase.component.html',
  styleUrls: ['./hotcase.component.scss']
})
export class HotcaseComponent implements OnInit {

  constructor() { }
  cases=cases;
  productMap=productMap;
  ngOnInit() {
    setTimeout(() => {
      new Swiper('.swiper-container', {
        direction : 'vertical',
        height:264,
        slidesPerView: 4,
        freeMode: true,
        speed: 2500,
        autoplay: {
          delay: 0,
        },
        loop: true,
      });
    }, 1)
  }

}
