import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryObjectComponent } from './inventory-object.component';

describe('InventoryObjectComponent', () => {
  let component: InventoryObjectComponent;
  let fixture: ComponentFixture<InventoryObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
