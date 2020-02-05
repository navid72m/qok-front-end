import { Component }   from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { DialogPublishUserModel } from './dialog-publish-user.model';

@Component({
  selector:    'dialog-publish-user',
  templateUrl: './dialog-publish-user.component.html',
  styleUrls:   [ './dialog-publish-user.component.css' ]
})
export class DialogPublishUserComponent {

    dialogMessage = new DialogPublishUserModel();

    constructor(public dialogRef: MdDialogRef<DialogPublishUserComponent>) {}

    publish(): void {
        this.dialogRef.close(this.dialogMessage)
    }
}