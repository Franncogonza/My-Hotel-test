import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'reusable-loading',
  templateUrl: './reusable-loading.component.html',
  styleUrls: ['./reusable-loading.component.scss']
})
export class ReusableLoadingComponent {
  @Input() isLoading: boolean = true;
  @Output() returnStatus = new EventEmitter();
}
