import { createAction, props } from "@ngrx/store";
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
