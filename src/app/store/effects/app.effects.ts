import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { GetCoffee, GetCoffeeSuccess, GetCoffeeFail, CoffeeActionType } from "../actions/app.actions";
import { Coffee } from "../models/coffee";
import { AppService } from "../services/app.service";


@Injectable()
export class AppEffects {
	constructor(
		private actions$: Actions,
		private appService: AppService,
	) {}

  getCoffee = createEffect(() =>
		this.actions$.pipe(
			ofType<GetCoffee>(CoffeeActionType.GET_COFFEE),
			switchMap((action) => {
				return this.appService.getCoffee(
					// action.payload.id
				).pipe(
					map((coffee: Coffee[]) => {
						return new GetCoffeeSuccess({ coffee });
					}),
					catchError((e: HttpErrorResponse) => {
						return of(new GetCoffeeFail(e.status));
					})
				);
			})
		)
	);
}
