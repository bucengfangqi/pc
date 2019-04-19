import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { HomeComponent } from './home/home.component';
import { ContentModule } from '@_shared/content/content.module';
import { SquareComponent } from './square/square.component';
import { SquareListComponent } from './square-list/square-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
@NgModule({
  declarations: [HomeComponent, SquareComponent, SquareListComponent, NewsDetailComponent],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    ContentModule
  ]
})
export class DocumentModule { }
