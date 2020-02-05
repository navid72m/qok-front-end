import {Component, OnInit} from '@angular/core';

import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
//   styleUrls: ['./progress-bar-configurable-example.css'],
})
export class ProgressBarComponent {
  color = 'accent';
  mode = 'determinate';
  value = 100;
  bufferValue = 100;

  constructor(private progressBarService: ProgressBarService) {  }

  ngOnInit() {
    this.progressBarService.getParams().subscribe(res => {
      this.color = res.color;
      this.value = res.value;
      this.bufferValue = res.bufferValue;
      this.mode = res.mode;
    });
  }
}

