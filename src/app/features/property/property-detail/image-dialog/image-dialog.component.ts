import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  template: `
    <div class="image-cont">
      <img src="{{ data.src }}" />
    </div>
  `,
  styles: [
    `
      .full-width-dialog .mat-dialog-container {
        max-height: 80vh !important;
        padding: 0;
        display: flex;
        flex-direction: column;
      }

      .image-cont {
        display: flex;
        flex: 1 1 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class ImageDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
