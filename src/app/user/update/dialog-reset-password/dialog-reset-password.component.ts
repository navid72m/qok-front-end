import { Component }   from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { DialogResetPasswordModel } from './dialog-reset-password.model';

@Component({
  selector:    'dialog-reset-password',
  templateUrl: './dialog-reset-password.component.html',
  styleUrls:   [ './dialog-reset-password.component.css' ]
})
export class DialogResetPasswordComponent {

    dialogMessage = new DialogResetPasswordModel();

    constructor(public dialogRef: MdDialogRef<DialogResetPasswordComponent>) {}

    resetPassword(confirmed: boolean): void {
        this.dialogMessage.confirmed = confirmed;
        this.dialogRef.close(this.dialogMessage)
    }
}