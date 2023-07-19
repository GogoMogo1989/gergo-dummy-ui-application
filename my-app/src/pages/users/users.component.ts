import { Component, OnInit } from '@angular/core';
import { ApiCallServices } from 'src/services/api-call-services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private apiCallServices: ApiCallServices) { }

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    this.apiCallServices.getUsersData().subscribe(
      (response) => {
        this.users = response;
        console.log(this.users);
      },
      (error) => {
        console.error('Hiba történt az API hívás során:', error);
      }
    );
  }

}