import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenubarComponent } from 'src/pages/menubar/menubar.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { UsersComponent } from 'src/pages/users/users.component';

const routes: Routes = [
  { path: 'menubar', component: MenubarComponent },
  { path: 'users', component: UsersComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
