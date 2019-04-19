import { Component, OnInit } from '@angular/core';
import { news } from "@_shared/data/news";
@Component({
  selector: 'app-hotnews',
  templateUrl: './hotnews.component.html',
  styleUrls: ['./hotnews.component.scss']
})
export class HotnewsComponent implements OnInit {
  news=news;
  checked_news=news[0];
  constructor() { }

  ngOnInit() {
  }

}
