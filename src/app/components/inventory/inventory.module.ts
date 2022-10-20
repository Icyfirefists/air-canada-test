import { InventoryRoutingModule } from './inventory.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryObjectComponent } from './inventory-object/inventory-object.component';



@NgModule({
  declarations: [
    InventoryComponent,
    InventoryListComponent,
    InventoryObjectComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
