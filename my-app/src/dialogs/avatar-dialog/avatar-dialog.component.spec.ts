import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

import { AvatarDialogComponent } from './avatar-dialog.component';

describe('AvatarDialogComponent', () => {
  let component: AvatarDialogComponent;
  let fixture: ComponentFixture<AvatarDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarDialogComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    });
    fixture = TestBed.createComponent(AvatarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
