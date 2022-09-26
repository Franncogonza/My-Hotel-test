import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IReusableTable } from 'src/app/shared-components/reusable-table/reusable-table.interface';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  public loader: boolean = true;
  public dataChange: Observable<any> | undefined;
  public dataCustomers: any = [];
  public columns: Array<IReusableTable> = [];

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    if (event.target.innerWidth <= 700) this.customerService.vistaMobile$.next(true);
    else this.customerService.vistaMobile$.next(false);
  }

  constructor(
    private customerService: UsersService
  ) { }

  ngOnInit() {
    this.setView();
  }

  setView() {
    this.validateScreenSize();
    this.buildHeaderTable();
    this.buildBodytable();
  }

  private buildHeaderTable() {
    this.columns = [];
    this.columns.push(
      { headerName: 'ID', field: 'id' },
      { headerName: 'Name', field: 'name' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'City', field: 'city' },
    );
  }

  private buildBodytable() {
    this.loader = true;
    this.dataCustomers = this.customerService.getCustomers();
    this.loader = false;
  }

  validateScreenSize() {
    if (window.innerWidth <= 768) this.customerService.vistaMobile$.next(true);
    else this.customerService.vistaMobile$.next(false);
  }

}
