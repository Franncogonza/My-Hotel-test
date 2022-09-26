import { createReducer, on } from '@ngrx/store';
import * as Actions from './counter.action';

export const initialState = 50;

export const counterReducer = createReducer(
  initialState,
  on(Actions.increment, (state) => state + 1),
  on(Actions.decrement, (state) => state - 1),
  on(Actions.multiplicar, (state, { numero }) => state * numero),
  on(Actions.dividir, (state, { numero }) => state / numero),
  on(Actions.reset, (state) => 0)
);
