import { Component }   from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';


import { DialogResetPasswordModel } from './dialog-reset-advertise.model';

@Component({
  selector:    'dialog-reset-advertise',
  templateUrl: './dialog-reset-advertise.component.html',
  styleUrls:   [ './dialog-reset-advertise.component.css' ]
})
export class DialogResetPasswordComponent {

    dialogMessage = new DialogResetPasswordModel();

    constructor(public dialogRef: MdDialogRef<DialogResetPasswordComponent>) {}

    resetPassword(confirmed: boolean): void {
        this.dialogMessage.confirmed = confirmed;
        this.dialogRef.close(this.dialogMessage)
    }
}
