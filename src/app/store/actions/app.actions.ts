import { HttpErrorResponse } from "@angular/common/http";
import { Action, createAction, props } from "@ngrx/store";
import { Coffee } from "../models/coffee";

export enum CoffeeActionType {
  GET_COFFEE = '[COFFEE] Get Coffee',
  GET_COFFEE_SUCCESS = '[COFFEE] Get Coffee Success',
  GET_COFFEE_FAIL = '[COFFEE] Get Coffee Fail',
}

export const getCoffee = createAction(
  '[Coffee] getCoffee Action',
);

export const getCoffeeSuccess = createAction(
  '[Coffee] getCoffee Success Action',
  (coffee: ReadonlyArray<Coffee>) => ({ coffee })
);

export const getCoffeeFail = createAction(
  '[Coffee] getCoffee Fail Action',
  props<{ e: string }>()
);


// export type CoffeeActions =
// | GetCoffee
// | GetCoffeeSuccess
// | GetCoffeeFail;



/*
Inventory module should have

1. the actual list. -> can be its own component or sub component
2. A repeatable inventory object.
Should it be a global input component or a local input component?
3. A general inventory page inside which the inventory list can be injected.

*/
