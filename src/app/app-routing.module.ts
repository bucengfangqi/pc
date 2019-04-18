import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './features/home/home.module#HomeModule',
  },
  {
    path: 'product',
    loadChildren: './features/product/product.module#ProductModule',
  },
  {
    path: 'document',
    loadChildren: './features/document/document.module#DocumentModule',
  },
  {
    path: 'mine',
    loadChildren: './features/mine/mine.module#MineModule',
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren: './features/home/home.module#HomeModule', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
