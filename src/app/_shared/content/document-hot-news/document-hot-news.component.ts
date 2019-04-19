import { Component, OnInit } from '@angular/core';
import { news } from '@_shared/data/news';
@Component({
  selector: 'app-document-hot-news',
  templateUrl: './document-hot-news.component.html',
  styleUrls: ['./document-hot-news.component.scss']
})
export class DocumentHotNewsComponent implements OnInit {
  
  hot_news_list=[];
  constructor() { }

  ngOnInit() {
    news.forEach((newsItem)=>{
      this.hot_news_list.push(newsItem.list[0])
      this.hot_news_list.push(newsItem.list[1])
    })
  }

}
