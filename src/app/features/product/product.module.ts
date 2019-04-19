import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HomeComponent } from './home/home.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDocumentComponent } from './product-document/product-document.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContentModule } from '@_shared/content/content.module';
@NgModule({
  declarations: [HomeComponent, WhyChooseComponent, ProductListComponent, ProductDocumentComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ContentModule
  ]
})
export class ProductModule { }
