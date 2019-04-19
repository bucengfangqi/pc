import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SquareComponent } from './square/square.component';
import { SquareListComponent } from './square-list/square-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: SquareComponent,
      },{
        path: ':type',
        component: SquareListComponent,
      },{
        path: ':type/:id',
        component: NewsDetailComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
