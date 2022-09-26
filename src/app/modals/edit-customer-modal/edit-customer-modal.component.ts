import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-customer-modal',
  templateUrl: './edit-customer-modal.component.html',
  styleUrls: ['./edit-customer-modal.component.scss']
})
export class EditCustomerModalComponent {

  constructor(
    public dialogRef: MatDialogRef<EditCustomerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
  ) { }

  cancelar(): void {
    this.dialogRef.close(null);
  }

  closeModal(e: any) {
    this.dialogRef.close(null);
  }

}
