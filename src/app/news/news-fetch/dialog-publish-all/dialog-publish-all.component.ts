import { Component }   from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { DialogPublishAllModel } from './dialog-publish-all.model';

@Component({
  selector:    'dialog-publish-all',
  templateUrl: './dialog-publish-all.component.html',
  styleUrls:   [ './dialog-publish-all.component.css' ]
})
export class DialogPublishAllComponent {

    dialogMessage = new DialogPublishAllModel();

    constructor(public dialogRef: MdDialogRef<DialogPublishAllComponent>) {}

    publish(doPublish: boolean): void {
        this.dialogMessage.doPublish = doPublish;
        this.dialogRef.close(this.dialogMessage)
    }
}