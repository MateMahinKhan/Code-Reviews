import { Component, Input, OnInit } from '@angular/core';
import { Line } from './../../../shared/interfaces';
import { DifferenceService } from './../../../shared/services';

@Component({
  selector: 'cr-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() file1: File;
  @Input() file2: File;
  file1linesComparason: Array<string>;
  file2linesComparason: Array<string>;

  file2RenderLines: Array<Line>;
  constructor(private differenceService: DifferenceService) { }

  ngOnInit() {
    const reader1: FileReader = new FileReader();
    const reader2: FileReader = new FileReader();
    reader1.onload = (ev: any) => {
      this.displayCode1(ev.target.result);
    };
    reader1.readAsText(this.file1);

    reader2.onload = (ev: any) => {
      this.displayCode2(ev.target.result);
    };
    reader2.readAsText(this.file2);
  }

  displayCode1(fileContents: string): void {
    // replace all spaces with html render-able space
    fileContents = fileContents.replace(/ /g, '\xa0\xa0');
    this.file1linesComparason = fileContents.split('\n');
  }
  displayCode2(fileContents: string): void {
    // replace all spaces with html render-able space
    fileContents = fileContents.replace(/ /g, '\xa0\xa0');
    this.file2linesComparason = fileContents.split('\n');
    this.file2RenderLines = this.differenceService.computeDifferences(this.file1linesComparason, this.file2linesComparason);
  }

}
