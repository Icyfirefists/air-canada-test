import { ActionReducerMap } from "@ngrx/store";
import { coffeeReducer, AppState } from "./app.reducer";

export const reducers: ActionReducerMap<AppState> = {
  coffee: coffeeReducer
};
