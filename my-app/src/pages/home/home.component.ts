import { Component, OnInit } from '@angular/core';
import { ApiCallServices } from 'src/services/api-call-services';
import { Users } from 'src/interfaces/users';
import { AvatarDataServices } from 'src/services/avatar-dialog-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: Users[] = [];

  constructor(
    private apiCallServices: ApiCallServices,
    private avatarDataServices: AvatarDataServices
  ) {}

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    this.apiCallServices.getUsersData().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Hiba történt az API hívás során:', error);
      }
    );
  }

  onImageClick(user: Users) {
    this.avatarDataServices.openDialog(user);
  }
}
