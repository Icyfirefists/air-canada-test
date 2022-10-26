import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Coffee } from 'src/app/store/models/coffee';

import { InventoryObjectComponent } from './inventory-object.component';

describe('InventoryObjectComponent', () => {
  let component: InventoryObjectComponent;
  let fixture: ComponentFixture<InventoryObjectComponent>;
  let testCoffee: Coffee;

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

    testCoffee = {
      id: 1064,
      uid: 'e5d28880-2dbe-445d-9240-e3bcb47c3929',
      blend_name: 'Strong Volcano',
      origin: 'West Valley, Costa Rica',
      variety: 'Villa Sarchi',
      notes: 'quick, slick, curry, nougat, honeydew',
      intensifier: 'muted',
    };
    component.id = JSON.stringify(testCoffee.id);
    component.objectName = testCoffee.blend_name;
    component.objectDescription = testCoffee.notes;
    component.objectOrigin = testCoffee.origin;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display coffee title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.object-name')?.textContent).toContain(testCoffee.blend_name);
  });

  it('should display coffee notes', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.object-description')?.textContent).toContain(testCoffee.notes);
  });

  it('should display coffee origin', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.object-origin')?.textContent).toContain(testCoffee.origin);
  });
});
