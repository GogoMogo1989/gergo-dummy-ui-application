import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from 'src/pages/menubar/menubar.component';
import { UsersComponent } from 'src/pages/users/users.component';
import { HomeComponent } from 'src/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
