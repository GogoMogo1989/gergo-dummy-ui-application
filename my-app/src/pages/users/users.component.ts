import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    const apiUrl = 'https://random-data-api.com/api/v2/users?size=20&is_xml=true';
    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        this.users =response
        console.log(this.users)
      },
      (error) => {
        console.error('Hiba történt az API hívás során:', error);
      }
    );
  }

}