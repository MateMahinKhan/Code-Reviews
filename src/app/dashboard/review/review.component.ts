import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  files: Array<File> = [];
  constructor() { }

  ngOnInit() {}

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.files.push(fileList[0]);
      this.files.push(fileList[1]);
    }
  }

}
