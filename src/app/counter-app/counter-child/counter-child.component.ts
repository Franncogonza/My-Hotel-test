import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from '../app.reducers';
import { dividir, multiplicar } from '../counter.action';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.scss']
})
export class CounterChildComponent implements OnInit {
  counter: number | undefined;

  constructor(private store: Store<Appstate>) { }

  ngOnInit(): void {
    this.store.select('count').subscribe(count => this.counter = count);
  }

  multiplicar() {
    this.store.dispatch(multiplicar({ numero: 2 }));
  }

  dividir() {
    this.store.dispatch(dividir({ numero: 2 }));
  }
}
