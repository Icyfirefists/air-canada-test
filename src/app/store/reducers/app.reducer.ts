import { getCoffeeSuccess } from './../actions/app.actions';
import { createReducer, on } from "@ngrx/store";
import { Coffee } from "../models/coffee";

export interface CoffeeState {
	coffee: Coffee[];
}

export interface AppState {
	coffee: ReadonlyArray<Coffee>;
}

export const initialState: ReadonlyArray<Coffee> = []

export const coffeeReducer = createReducer(
  initialState,
  on(getCoffeeSuccess, (state, {coffee}) => [...coffee]),
)

