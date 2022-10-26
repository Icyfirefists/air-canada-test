import { CoffeeState } from 'src/app/store/reducers/app.reducer';
import { Coffee } from './../../../store/models/coffee';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, select } from '@ngrx/store';
import { reducers } from 'src/app/store';
import { AppEffects } from 'src/app/store/effects/app.effects';

import { InventoryListComponent } from './inventory-list.component';
import { Observable } from 'rxjs';

describe('InventoryListComponent', () => {
  let component: InventoryListComponent;
  let fixture: ComponentFixture<InventoryListComponent>;
  let testCoffee: Coffee;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryListComponent ],
      imports: [
        HttpClientTestingModule,
        NgxPaginationModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([AppEffects]),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryListComponent);
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getCoffee should return value from observable', (done: DoneFn) => {
    component.getCoffee().subscribe((value) => {
      expect(value).not.toBeNull();
    });
    done();
  });

  it('should have a working selectObject navigate method that returns void', () => {
    expect(component.selectObject(testCoffee)).toBeFalsy();
  });
});
