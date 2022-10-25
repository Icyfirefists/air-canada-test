import { ActionReducerMap } from "@ngrx/store";
import { CoffeeState, coffeeReducer, AppState } from "./app.reducer";

export const reducers: ActionReducerMap<AppState> = {
  coffee: coffeeReducer
};
