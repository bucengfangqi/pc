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
      var news1=newsItem.list[0];
      var news2=newsItem.list[1];
      news1["type"]=newsItem.type;
      news2["type"]=newsItem.type;

      this.hot_news_list.push(news1,news2)
    })
  }

}
