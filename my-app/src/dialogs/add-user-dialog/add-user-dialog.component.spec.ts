import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Users } from 'src/interfaces/users';
import { of } from 'rxjs';
import { MenubarComponent } from 'src/pages/menubar/menubar.component';
import { ApiCallServices } from 'src/services/api-call-services';

import { AddUserDialogComponent } from './add-user-dialog.component';

describe('AddUserDialogComponent', () => {
  let component: AddUserDialogComponent;
  let fixture: ComponentFixture<AddUserDialogComponent>;
  let mockPostService: any;
  let POSTS: Users[];

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

    mockPostService = jasmine.createSpyObj(['getUsersData']);
    mockPostService.getUsersData.and.returnValue(of(POSTS));

    TestBed.configureTestingModule({
      declarations: [AddUserDialogComponent, MenubarComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule,
        MatDialogModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} },
        { provide: ApiCallServices, useValue: mockPostService },
      ],
    });
    fixture = TestBed.createComponent(AddUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
