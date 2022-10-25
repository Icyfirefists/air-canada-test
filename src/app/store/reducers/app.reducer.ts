import { getCoffeeSuccess } from './../actions/app.actions';
import { createReducer, on } from "@ngrx/store";
import { Coffee } from "../models/coffee";

export interface CoffeeState {
	coffee: Coffee[];
  // usersByRoleCallState: CallState;
}

export interface AppState {
	coffee: ReadonlyArray<Coffee>;
}

export const initialState: ReadonlyArray<Coffee> = []
// export const reducers: ActionReducerMap<CoffeeState> = {
//   coffee: CoffeeReducer
// };

// export const coffeeReducers: ActionReducer<CoffeeState> = {
//   getCoffeeState: CoffeeReducer
// };

// // export function shoppingListReducer(state: ShoppingListState = initialState,
//   action: shoppingListActions.AddIngredient): ShoppingListState {
//   switch(action.type){

// export function CoffeeReducer(
//   state: CoffeeState = initialState,
//   action: GetCoffee
// ) {
//   console.log('Can we get this to work, reducers?');
//   switch (action.type) {
//     case CoffeeActionType.GET_COFFEE: {
//         // ...resetCallStates(state),
//         return {
//           coffee: []
//         };
//       }
//     default:
//       return state;
//   }
// }

export const coffeeReducer = createReducer(
  initialState,
  on(getCoffeeSuccess, (state, {coffee}) => [...coffee]),
)

