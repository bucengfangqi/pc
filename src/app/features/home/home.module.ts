import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DetailComponent } from './detail/detail.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { ContentModule } from '@_shared/content/content.module';
@NgModule({
  declarations: [DetailComponent, NewsDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ContentModule
  ],
})
export class HomeModule { }
