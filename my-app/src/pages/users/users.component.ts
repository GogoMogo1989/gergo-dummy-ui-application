import { Component, OnInit } from '@angular/core';
import { ApiCallServices } from 'src/services/api-call-services';
import { Users } from 'src/interfaces/users';
import { ColDef } from 'ag-grid-community';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from 'src/dialogs/add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  rowData: Users[] = [];

  columnDefs: ColDef[] = [
    { headerName: 'First Name', field: 'first_name' },
    { headerName: 'Last Name', field: 'last_name' },
    { headerName: 'Username', field: 'username' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'Phone Number', field: 'phone_number' },
    { headerName: 'Social Insurance Number', field: 'social_insurance_number' },
    { headerName: 'Date of Birth', field: 'date_of_birth' },
  ];

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true,
  };

  gridOptions: any = {
    pagination: true,
    paginationPageSize: 10,
    onGridReady: (params: any) => {
      this.gridOptions.api = params.api;
    },
  };

  constructor(
    private apiCallServices: ApiCallServices,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    this.apiCallServices.getUsersData().subscribe(
      (response) => {
        this.rowData = response;
        console.log(this.rowData);
      },
      (error) => {
        console.error('Hiba történt az API hívás során:', error);
      }
    );
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent);

    dialogRef.afterClosed().subscribe((result: Users) => {
      if (result) {
        this.rowData.unshift(result);
        this.gridOptions.api.setRowData(this.rowData);
        console.log(this.rowData);
      }
    });
  }
}
