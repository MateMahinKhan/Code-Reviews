import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  file1: File;
  file2: File;
  constructor() { }

  ngOnInit() {}

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file1 = fileList[0];
      this.file2 = fileList[1];
    }
  }

}
