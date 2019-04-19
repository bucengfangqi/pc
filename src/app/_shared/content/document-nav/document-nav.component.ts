import { Component, OnInit } from '@angular/core';
import { news,newsMap } from '@_shared/data/news';
@Component({
  selector: 'app-document-nav',
  templateUrl: './document-nav.component.html',
  styleUrls: ['./document-nav.component.scss']
})
export class DocumentNavComponent implements OnInit {
  news=news;
  newsMap=newsMap;
  constructor() { }

  ngOnInit() {
  }

}
