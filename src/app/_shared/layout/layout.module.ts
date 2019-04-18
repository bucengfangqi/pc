import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FootbarComponent } from './footbar/footbar.component';
import { RouterModule } from '@angular/router';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SubmitInfoComponent } from './submit-info/submit-info.component';
@NgModule({
  declarations: [
    NavbarComponent,
    FootbarComponent,
    SlideShowComponent,
    SubmitInfoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FootbarComponent,
    SlideShowComponent
  ]
})
export class LayoutModule { }
