import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvObjectDetailPageComponent } from './inv-object-detail-page.component';

describe('InvObjectDetailPageComponent', () => {
  let component: InvObjectDetailPageComponent;
  let fixture: ComponentFixture<InvObjectDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvObjectDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvObjectDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
