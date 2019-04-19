import { Component, OnInit } from '@angular/core';
import { news } from '@_shared/data/news';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-document-square-list',
  templateUrl: './document-square-list.component.html',
  styleUrls: ['./document-square-list.component.scss']
})
export class DocumentSquareListComponent implements OnInit {
  square_list;
  type;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('type'))
      )
    ).subscribe((type) => {
      this.type=type;
      this.get_square_list(type);
    });
  }

  get_square_list(type) {
    this.square_list=[];
    news.forEach((item)=>{
      if(item.type===type){
        this.square_list=item.list;
      }
    })
  }
}
