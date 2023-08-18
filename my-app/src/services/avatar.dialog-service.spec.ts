import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AvatarDataServices } from './avatar-dialog-service';
import { AvatarDialogComponent } from 'src/dialogs/avatar-dialog/avatar-dialog.component';
import { Users } from 'src/interfaces/users';

describe('AvatarDataServices', () => {
  let service: AvatarDataServices;
  let dialog: MatDialog;
  let POSTS: Users[];
  let dialogOpenSpy: any;

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

    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [AvatarDataServices],
    });

    service = TestBed.inject(AvatarDataServices);
    dialog = TestBed.inject(MatDialog);
    dialogOpenSpy = spyOn(dialog, 'open'); //Elmentjük, (kémleljük) a MatDialog open methodját
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open avatar dialog', () => {
    service.openDialog(POSTS[0]); //openDialogot meghívjuk a POSTS[0] értékeivel

    expect(dialogOpenSpy).toHaveBeenCalledWith(
      //Az elvárás, hogy meghívásra kerül a Matdialog, open methódusa (this.dialog.open({}))
      AvatarDialogComponent,
      jasmine.objectContaining({
        // és ezzel a functionnal ellenőrizzük, hogy a beküldött érték megegyezik a várttal.
        data: POSTS[0],
      })
    );
  });
});
