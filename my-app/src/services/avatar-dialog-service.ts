import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AvatarDialogComponent } from 'src/dialogs/avatar-dialog/avatar-dialog.component';
import { Users } from 'src/interfaces/users';
import { AddUserDialogComponent } from 'src/dialogs/add-user-dialog/add-user-dialog.component';
import { Observable } from 'rxjs';

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

  openAddUserDialog(): Observable<Users> {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '400px',
      data: {},
    });

    return dialogRef.afterClosed();
  }
}
