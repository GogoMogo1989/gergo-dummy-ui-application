import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MenubarComponent } from '../menubar/menubar.component';
import { ApiCallServices } from 'src/services/api-call-services';
import { Users } from 'src/interfaces/users';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let POSTS: Users[];
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockPostService: any;

  beforeEach(() => {
    POSTS = [
      {
        first_name: '1',
        last_name: '1',
        username: '1',
        email: '1',
        gender: '1',
        phone_number: '1',
        social_insurance_number: '1',
        date_of_birth: '1',
        avatar: '1',
        password: '1',
      },
      {
        first_name: '2',
        last_name: '2',
        username: '2',
        email: '2',
        gender: '2',
        phone_number: '2',
        social_insurance_number: '2',
        date_of_birth: '2',
        avatar: '2',
        password: '2',
      },
      {
        first_name: '3',
        last_name: '3',
        username: '3',
        email: '3',
        gender: '3',
        phone_number: '3',
        social_insurance_number: '3',
        date_of_birth: '3',
        avatar: '3',
        password: '3',
      },
      {
        first_name: '4',
        last_name: '4',
        username: '4',
        email: '4',
        gender: '4',
        phone_number: '4',
        social_insurance_number: '4',
        date_of_birth: '4',
        avatar: '4',
        password: '4',
      },
      {
        first_name: '5',
        last_name: '5',
        username: '5',
        email: '5',
        gender: '5',
        phone_number: '5',
        social_insurance_number: '5',
        date_of_birth: '5',
        avatar: '5',
        password: '5',
      },
      {
        first_name: '6',
        last_name: '6',
        username: '6',
        email: '6',
        gender: '6',
        phone_number: '6',
        social_insurance_number: '6',
        date_of_birth: '6',
        avatar: '6',
        password: '6',
      },
    ];

    mockPostService = jasmine.createSpyObj(['getUserData']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent, MenubarComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule,
        MatDialogModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: ApiCallServices, userValue: mockPostService },
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    mockPostService.getUserData.and.returnValue(of(POSTS)); // A mockPostService segítségével a POSTS értékekkel szimuláljuk a get hívást.
    component.users = POSTS; //A HomeComponenet-ben a users értéket beállítjuk a POSTS értékekre
    fixture.detectChanges(); //Figyeljük a componensben a változásokat
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain five h3 elements', () => {
    const h3Elements =
      fixture.nativeElement.querySelectorAll('.avatarClass h3'); //Kivesszük egy változóba a h3 elemeket
    expect(h3Elements.length).toEqual(5); //Az elvárásunk, hogy a h3 elementből, 5 darab legyen. Ezzel ellenőrizzük, hogy a slice műküödik-e.
  });

  it('should contain five img elements', () => {
    const imgElements =
      fixture.nativeElement.querySelectorAll('.avatarClass img');
    expect(imgElements.length).toEqual(5);
  });

  it('should call onImageClick when image is clicked', () => {
    const onImageClickSpy = spyOn(component, 'onImageClick'); // Elmentjük egy változóba a kémlelt onImageClick metódust
    const imageElement = fixture.debugElement.query(
      By.css('.avatarClass img')
    ).nativeElement; // Elmentjük egy változóba az avatarClass-ban lévő img-t.
    imageElement.click(); //szimuláljuk a gomb nyomást az elmentet képre
    fixture.detectChanges(); //lessük a változást
    expect(onImageClickSpy).toHaveBeenCalled(); //az elvárásunk, hogy a onImageClickSpy tényleg meghívódik-e, amikor megnyomjuk a képet
  });
});
