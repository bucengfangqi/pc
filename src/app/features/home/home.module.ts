import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContentModule } from '@_shared/content/content.module';
import { NewsListComponent } from './news-list/news-list.component';
import { HomeComponent } from './home/home.component';
import { NewsListHomeComponent } from './news-list-home/news-list-home.component';
import { LayoutModule } from '@_shared/layout/layout.module';
@NgModule({
  declarations: [NewsListComponent, HomeComponent, NewsListHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ContentModule,
    LayoutModule
  ],
})
export class HomeModule { }
