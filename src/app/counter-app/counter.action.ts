import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');

export const multiplicar = createAction('[Counter Component] Multiplicar',
  props<{ numero: number }>());

export const dividir = createAction('[Counter Component] Dividir',
  props<{ numero: number }>());

export const reset = createAction('[Counter Component] Reset');
