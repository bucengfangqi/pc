import { Component, OnInit } from '@angular/core';
import { news,newsMap } from '@_shared/data/news';
@Component({
  selector: 'app-document-square',
  templateUrl: './document-square.component.html',
  styleUrls: ['./document-square.component.scss']
})
export class DocumentSquareComponent implements OnInit {
  news=news;
  newsMap=newsMap;
  constructor() { }

  ngOnInit() {
  }

}
