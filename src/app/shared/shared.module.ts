import { NgModule } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { MaterialModule } from '@angular/material';

@NgModule({
  imports:      [  ],
  declarations: [  ],
  exports:      [ 
                  CommonModule,
                  FormsModule,
                  MaterialModule,
                ]
})
export class SharedModule { }
