import { Component, OnInit } from '@angular/core';
import { ApiCallServices } from 'src/services/api-call-services';
import { Users } from 'src/interfaces/users';
import { ColDef } from 'ag-grid-community';

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

  constructor(private apiCallServices: ApiCallServices) {}

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
}
