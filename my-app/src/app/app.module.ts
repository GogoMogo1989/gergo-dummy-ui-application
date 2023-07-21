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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
