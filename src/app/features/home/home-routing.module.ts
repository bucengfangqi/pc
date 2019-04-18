import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
const routes: Routes = [
  { path: ':id', component: NewsDetailComponent, },

  { path: '', redirectTo: '#', pathMatch: 'full' },
  { path: '**', component: DetailComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
