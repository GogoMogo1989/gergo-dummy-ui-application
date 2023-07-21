import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
/* import { MatMomentDateModule } from '@angular/material-moment-adapter'; */
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { MenubarComponent } from 'src/pages/menubar/menubar.component';
import { UsersComponent } from 'src/pages/users/users.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { AvatarDialogComponent } from 'src/dialogs/avatar-dialog/avatar-dialog.component';
import { AddUserDialogComponent } from 'src/dialogs/add-user-dialog/add-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    UsersComponent,
    HomeComponent,
    AvatarDialogComponent,
    AddUserDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    AgGridModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
