import { InventoryComponent } from './inventory.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvObjectDetailPageComponent } from './inv-object-detail-page/inv-object-detail-page.component';

const routes: Routes = [
  { path: '', component: InventoryComponent },
  { path: 'detail-page', component: InvObjectDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule { }
