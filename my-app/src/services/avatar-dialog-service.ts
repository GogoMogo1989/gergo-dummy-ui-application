import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AvatarDialogComponent } from 'src/dialogs/avatar-dialog/avatar-dialog.component';
import { Users } from 'src/interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class AvatarDataServices {
  constructor(private dialog: MatDialog) {}

  openDialog(user: Users) {
    this.dialog.open(AvatarDialogComponent, {
      data: user,
    });
  }
}
