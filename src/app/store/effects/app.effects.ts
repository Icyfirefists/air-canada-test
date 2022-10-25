import {
  getCoffee,
  getCoffeeSuccess,
} from './../actions/app.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  exhaustMap,
  tap,
} from 'rxjs/operators';
import { AppService } from '../services/app.service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private appService: AppService) {}

  getCoffee = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoffee),
      exhaustMap(() =>
        this.appService
          .getCoffee()
          .pipe(map((coffee: any) => getCoffeeSuccess(coffee)))
      )
    )
  );
}
