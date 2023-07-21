import { Component, Inject } from '@angular/core';
import { Users } from 'src/interfaces/users';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { CUSTOM_DATE_FORMATS } from 'src/services/date';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }],
})
export class AddUserDialogComponent {
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Users
  ) {
    this.userForm = this.formBuilder.group(
      {
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        username: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        gender: ['', Validators.required],
        phone_number: ['', [Validators.pattern('^[0-9]{7,}$')]],
        social_insurance_number: [''],
        date_of_birth: [''],
        password: [
          '',
          [Validators.minLength(8), Validators.pattern(/^(?=.*[0-9])/)],
        ],
        password_confirm: [''],
        termsAndConditions: [false, Validators.requiredTrue],
      },
      { validators: this.passwordMatchValidator }
    );
    this.userForm.controls['date_of_birth'].valueChanges.subscribe(
      (newValue) => {
        if (newValue && typeof newValue === 'string') {
          const date = new Date(newValue);
          if (!isNaN(date.getTime())) {
            this.userForm.controls['date_of_birth'].setValue(
              this.formatDateToYYYYMMDD(date)
            );
          }
        }
      }
    );
  }

  onSave(): void {
    if (this.userForm.valid && this.userForm.get('termsAndConditions')?.value) {
      this.dialogRef.close(this.userForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    const passwordControl = control.get('password');
    const passwordConfirmControl = control.get('password_confirm');

    if (!passwordControl || !passwordConfirmControl) {
      return null;
    }

    const password = passwordControl.value;
    const passwordConfirm = passwordConfirmControl.value;

    if (password === passwordConfirm) {
      passwordConfirmControl.setErrors(null);
      return null;
    } else {
      passwordConfirmControl.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
  };

  formatDateToYYYYMMDD(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}-${this.padNumber(month)}-${this.padNumber(
      day
    )}`;
    return formattedDate;
  }

  padNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
