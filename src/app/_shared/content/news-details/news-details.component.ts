import { Component, OnInit } from '@angular/core';
import { news } from '@_shared/data/news';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  news;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of({ type: params.get('type'), id: params.get('id') })
      )
    ).subscribe((param) => {
      this.get_news(param);
    });
  }

  get_news(param) {
    //利用两个循环精确查找资讯
    news.forEach((item) => {
      if (item.type === param.type) {
        var news_list = item.list;
        news_list.forEach((itemDetail) => {
          if (itemDetail.id == param.id) {
            this.news = itemDetail;
          }
        })
      }
    })

  }
}
