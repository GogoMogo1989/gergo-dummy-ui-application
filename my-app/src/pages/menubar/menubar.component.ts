import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

  constructor(private router: Router) { }

  isUsersActive(): boolean {
    return this.router.url.includes('/users');
  }

  isHomeActive(): boolean {
    return this.router.url.includes('/home');
  }
  
}
