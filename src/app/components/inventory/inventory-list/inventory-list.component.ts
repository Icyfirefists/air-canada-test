import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {
  public data = {
    id: 1064,
    uid: 'e5d28880-2dbe-445d-9240-e3bcb47c3929',
    blend_name: 'Strong Volcano',
    origin: 'West Valley, Costa Rica',
    variety: 'Villa Sarchi',
    notes: 'quick, slick, curry, nougat, honeydew',
    intensifier: 'muted',
  };

  constructor() {}

  ngOnInit(): void {}
}
