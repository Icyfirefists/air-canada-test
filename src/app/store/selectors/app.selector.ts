import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoffeeState } from './../reducers/app.reducer';


const coffeeSelector = createFeatureSelector<CoffeeState>('coffee');

export const getCoffeeState = createSelector(
  coffeeSelector,
  (state) => {
    return {
      state: state,
    };
  }
);

export const coffeeStateQL = {
  getCoffeeState
};
