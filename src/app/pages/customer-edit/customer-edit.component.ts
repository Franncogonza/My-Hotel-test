import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  data: any;
  noModal: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.queryParams) {
      this.data = this.activeRoute.snapshot.queryParams;
      this.noModal = this.activeRoute.snapshot.queryParams['noModal'];
    }
  }
}
