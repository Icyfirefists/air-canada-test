import { CoffeeActionType, GetCoffee } from "../actions/app.actions";
import { Coffee } from "../models/coffee";

const initialState: Array<Coffee> = [];

export function CoffeeReducer(
  state: Array<Coffee> = initialState,
  action: GetCoffee
) {
  switch (action.type) {
    case CoffeeActionType.GET_COFFEE:
      return [...state, action.payload];
    default:
      return state;
  }
}
