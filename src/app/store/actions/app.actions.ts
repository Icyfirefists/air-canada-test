import { Action, createAction, props } from "@ngrx/store";
import { Coffee } from "../models/coffee";

export enum CoffeeActionType {
  GET_COFFEE = '[COFFEE] Get Coffee',
}

export class GetCoffee implements Action {
  readonly type = CoffeeActionType.GET_COFFEE;
  constructor(public payload: { coffee: Coffee[] }) {}

}

export class GetCoffeeSuccess implements Action {
  readonly type = CoffeeActionType.GET_COFFEE;
  constructor(public payload: { coffee: Coffee[] }) {}
}

export class GetCoffeeFail implements Action {
  readonly type = CoffeeActionType.GET_COFFEE;
  constructor(public payload: any) {}
}


// export const getCoffee = createAction(
//   '[appModule] getCoffee Action',
//   props<{ usernamae: string; password: string }>()
// );

// export const getCoffeeSuccess = createAction(
//   '[appModule] getCoffee Success Action'
// );

// export const getCoffeeFail = createAction(
//   '[appModule] getCoffee Fail Action',
//   props<{ message: string }>()
// );


/*
Inventory module should have

1. the actual list. -> can be its own component or sub component
2. A repeatable inventory object.
Should it be a global input component or a local input component?
3. A general inventory page inside which the inventory list can be injected.

*/
