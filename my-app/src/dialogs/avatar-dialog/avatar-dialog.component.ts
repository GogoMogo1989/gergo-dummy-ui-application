import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from 'src/interfaces/users';

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.scss'],
})
export class AvatarDialogComponent implements OnInit {
  user: Users;

  constructor(@Inject(MAT_DIALOG_DATA) data: Users) {
    this.user = data;
  }

  ngOnInit() {}
}
