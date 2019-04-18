import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { HotnewsComponent } from './hotnews/hotnews.component';
import { HotcaseComponent } from './hotcase/hotcase.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { TaglineComponent } from './tagline/tagline.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
  declarations: [
    QuestionComponent,
    HotnewsComponent,
    HotcaseComponent,
    ProductDescComponent,
    TaglineComponent,
    NewsDetailsComponent,
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
  ]
})
export class ContentModule { }
