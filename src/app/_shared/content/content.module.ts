import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { HotnewsComponent } from './hotnews/hotnews.component';
import { HotcaseComponent } from './hotcase/hotcase.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { TaglineComponent } from './tagline/tagline.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { DocumentNavComponent } from './document-nav/document-nav.component';
import { DocumentHotNewsComponent } from './document-hot-news/document-hot-news.component';
import { DocumentSquareComponent } from './document-square/document-square.component';
import { DocumentSquareListComponent } from './document-square-list/document-square-list.component';
import { FormatstrPipe } from './formatstr.pipe';

@NgModule({
  declarations: [
    QuestionComponent,
    HotnewsComponent,
    HotcaseComponent,
    ProductDescComponent,
    TaglineComponent,
    NewsDetailsComponent,
    DocumentNavComponent,
    DocumentHotNewsComponent,
    DocumentSquareComponent,
    DocumentSquareListComponent,
    FormatstrPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    QuestionComponent,
    HotnewsComponent,
    HotcaseComponent,
    ProductDescComponent,
    TaglineComponent,
    NewsDetailsComponent,
    DocumentNavComponent,
    DocumentHotNewsComponent,
    DocumentSquareComponent,
    DocumentSquareListComponent,
    FormatstrPipe,
  ]
})
export class ContentModule { }
