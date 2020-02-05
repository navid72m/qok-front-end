import { Component }   from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { DialogModel } from './dialog-search.model';

// import { ClanViewComponent } from '../../search/search.component';

@Component({
  selector:    'dialog-search',
  templateUrl: './dialog-search.component.html',
  styleUrls:   [ './dialog-search.component.css' ]
})
export class DialogComponent {
 
    dialogMessage = new DialogModel();

    constructor(public dialogRef: MdDialogRef<DialogComponent>) {}

    searchInvcode(): void {
        this.dialogMessage.isSearchByUsername = false;
        this.dialogRef.close(this.dialogMessage)
    }

    searchUser(): void {
        this.dialogMessage.isSearchByUsername = true;
        this.dialogRef.close(this.dialogMessage)
    }

    searchClan(): void {
        this.dialogMessage.isSearchByUsername = false;
        this.dialogMessage.isSearchByClanname = true;
        this.dialogRef.close(this.dialogMessage)
    }
}