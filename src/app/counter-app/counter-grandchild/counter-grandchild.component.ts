import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from '../app.reducers';
import { reset } from '../counter.action';

@Component({
  selector: 'app-counter-grandchild',
  templateUrl: './counter-grandchild.component.html',
  styleUrls: ['./counter-grandchild.component.scss']
})
export class CounterGrandchildComponent implements OnInit {
  counter: number | undefined;

  constructor(private store: Store<Appstate>) { }

  ngOnInit(): void {
    this.store.select('count').subscribe(count => this.counter = count);
  }

  reset() {
    this.store.dispatch(reset());
  }
}
