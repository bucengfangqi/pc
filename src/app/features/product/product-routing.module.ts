import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
const routes: Routes = [
  {
    path: ':type',
    component: HomeComponent,
    data:{isShowSlide:true}
  },
  {
    path: ':type/:id',
    component: ProductDetailComponent,
  },{
    path: '',
    redirectTo: '/product/house',
     pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
