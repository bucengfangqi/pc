import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MineRoutingModule } from './mine-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, OrderListComponent],
  imports: [
    CommonModule,
    MineRoutingModule
  ]
})
export class MineModule { }
