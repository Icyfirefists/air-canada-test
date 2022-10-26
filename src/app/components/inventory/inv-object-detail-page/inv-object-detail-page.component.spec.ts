import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Coffee } from './../../../store/models/coffee';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvObjectDetailPageComponent } from './inv-object-detail-page.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store';
import { AppEffects } from 'src/app/store/effects/app.effects';

describe('InvObjectDetailPageComponent', () => {
  let component: InvObjectDetailPageComponent;
  let fixture: ComponentFixture<InvObjectDetailPageComponent>;
  let testCoffee: Coffee;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvObjectDetailPageComponent ],
      imports: [ RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([AppEffects]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvObjectDetailPageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  beforeEach(() => {

    testCoffee = {
      id: 1064,
      uid: 'e5d28880-2dbe-445d-9240-e3bcb47c3929',
      blend_name: 'Strong Volcano',
      origin: 'West Valley, Costa Rica',
      variety: 'Villa Sarchi',
      notes: 'quick, slick, curry, nougat, honeydew',
      intensifier: 'muted',
    };
    component.coffeeObject = testCoffee;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display coffee title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.object-detail-header h1')?.textContent).toContain(testCoffee.blend_name);
  });

  it('should display coffee notes', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.object-detail-body p.notes')?.textContent).toContain(testCoffee.notes);
  });

  it('should display coffee origin', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.object-detail-body p.origin')?.textContent).toContain(testCoffee.origin);
  });
});
