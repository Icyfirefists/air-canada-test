import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inventory-object',
  templateUrl: './inventory-object.component.html',
  styleUrls: ['./inventory-object.component.scss']
})
export class InventoryObjectComponent {

  @Input() id: string = '';
  @Input() objectName: string = '';
  @Input() objectOrigin: string = '';
  @Input() objectDescription: string = '';

}
