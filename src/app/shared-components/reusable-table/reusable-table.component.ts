import { MatTableDataSource } from '@angular/material/table'
import { IReusableTable } from './reusable-table.interface';
import { EditCustomerModalComponent } from 'src/app/modals/edit-customer-modal/edit-customer-modal.component';
import { MatSort } from '@angular/material/sort';
import { ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss']
})
export class ReusableTableComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
  obs: Observable<any[]> | undefined;
  pageSize!: number;
  totalPages!: number;
  ocultarPageSize: boolean = true;
  $vistaMobile = this.userService.vistaMobile$;

  @Input() data: any[] = [];
  @Input() columns: Array<IReusableTable> = [];
  @Input() action: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private userService: UsersService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.setView();
  }

  // TO DO
  // ngOnChanges() {
  // 	if (this.dataChange) {
  // 		this.dataChange.subscribe((res: any) => {
  // 			this.data = res;
  // 		});
  // 	}
  // }

  setView() {
    this.columns = this.columns;

    this.dataSource = new MatTableDataSource<any>(this.data);
    if (!(this.changeDetectorRef as ViewRef).destroyed) {
      this.changeDetectorRef.detectChanges();
    }

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.totalPages = this.dataSource.data.length;
    this.obs = this.dataSource.connect();
  }

  editCustomer(customer: any) {
    const dialogRef = this.dialog.open(EditCustomerModalComponent, {
      data: customer,
      width: '80%',
      // height: '90%'
    });

    dialogRef.afterClosed().subscribe(result => { });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editInOtherRoute(data: any) {
    data.noModal = true;
    this.router.navigate([`/customer-edit`], {
      queryParams: data
    });
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

}
