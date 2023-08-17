import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarComponent } from './menubar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('MenubarComponent', () => {
  let component: MenubarComponent;
  let fixture: ComponentFixture<MenubarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenubarComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, MatToolbarModule],
      providers: [{ provide: MatDialogRef, useValue: {} }],
    });
    fixture = TestBed.createComponent(MenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain menu buttons with correct routerLinks', () => {
    const buttons = fixture.nativeElement.querySelectorAll('.menuButton');
    expect(buttons.length).toBe(2);

    const usersButton = buttons[0];
    const homeButton = buttons[1];

    const usersButtonSpan = usersButton.querySelector('span');
    const homeButtonSpan = homeButton.querySelector('span');

    expect(usersButtonSpan.getAttribute('routerLink')).toBe('/users');
    expect(homeButton.getAttribute('routerLinkActive')).toBe('active');

    expect(homeButtonSpan.getAttribute('routerLink')).toBe('/home');
    expect(usersButton.getAttribute('routerLinkActive')).toBe('active');
  });
});
