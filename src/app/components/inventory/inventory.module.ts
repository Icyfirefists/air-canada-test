import { InventoryRoutingModule } from './inventory.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryObjectComponent } from './inventory-object/inventory-object.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InvObjectDetailPageComponent } from './inv-object-detail-page/inv-object-detail-page.component';

@NgModule({
  declarations: [
    InventoryComponent,
    InventoryListComponent,
    InventoryObjectComponent,
    InvObjectDetailPageComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    NgxPaginationModule,
  ]
})
export class InventoryModule { }
