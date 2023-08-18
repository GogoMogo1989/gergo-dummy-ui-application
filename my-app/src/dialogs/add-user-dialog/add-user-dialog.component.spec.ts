import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MenubarComponent } from 'src/pages/menubar/menubar.component';

import { AddUserDialogComponent } from './add-user-dialog.component';

describe('AddUserDialogComponent', () => {
  let component: AddUserDialogComponent;
  let fixture: ComponentFixture<AddUserDialogComponent>;

  beforeEach(() => {
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
      ],
    });
    fixture = TestBed.createComponent(AddUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Cancle button had called to onCancel() function', () => {
    const onCancelFunction = spyOn(component, 'onCancel').and.callThrough();
    const cancelButton = fixture.nativeElement.querySelector('.cancelButton');

    cancelButton.click();
    fixture.detectChanges();

    expect(onCancelFunction).toHaveBeenCalled();
  });

  it('should Save button had called onSave() function', () => {
    component.userForm.controls['termsAndConditions'].setValue(true);
    component.userForm.controls['password'].setValue('password12345');
    component.userForm.controls['password_confirm'].setValue('password12345');
    component.userForm.controls['first_name'].setValue('password12345');
    component.userForm.controls['last_name'].setValue('password12345');
    component.userForm.controls['username'].setValue('password12345');
    component.userForm.controls['email'].setValue('passwo@rd12345');
    component.userForm.controls['gender'].setValue('password12345');
    component.userForm.controls['phone_number'].setValue('123212345');
    component.userForm.controls['social_insurance_number'].setValue(
      '12321312345'
    );
    component.userForm.controls['date_of_birth'].setValue('12312345');

    expect(component.userForm.valid).toBeTruthy();

    component.userForm.invalid;
    const onSaveFunction = spyOn(component, 'onSave');
    const saveButton = fixture.nativeElement.querySelector('.saveButton');

    saveButton.click();
    fixture.detectChanges();

    expect(onSaveFunction).not.toHaveBeenCalled();
  });

  it('should validate matching passwords', () => {
    component.userForm.controls['password'].setValue('password123');
    component.userForm.controls['password_confirm'].setValue('password123');
    fixture.detectChanges();

    const errors = component.userForm.errors;
    expect(errors).toBeNull(); //Ha az error értéke null, akkor átment a teszten
  });

  it('should invalidate non-matching passwords', () => {
    component.userForm.controls['password'].setValue('password123');
    component.userForm.controls['password_confirm'].setValue(
      'password123456789'
    );
    fixture.detectChanges();

    const errors = component.userForm.errors;
    expect(errors).not.toBeNull();
  });
});
