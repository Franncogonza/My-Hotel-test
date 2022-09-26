import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from './app.reducers';
import * as actions from './counter.action';

@Component({
  selector: 'counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.scss']
})
export class CounterAppComponent {
  counter: number | undefined;

  constructor(private store: Store<Appstate>) {
    this.store.select('count').subscribe(count => this.counter = count);
  }

  increment() {
    this.store.dispatch(actions.increment())
  }

  decrement() {
    this.store.dispatch(actions.decrement())
  }
}
