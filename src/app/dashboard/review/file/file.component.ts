import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cr-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() file: File;
  lines: Array<string>;

  constructor() { }

  ngOnInit() {
    const reader: FileReader = new FileReader();
    reader.onload = (ev: any) => {
      this.displayCode(ev.target.result);
    };
    reader.readAsText(this.file);
  }

  displayCode(fileContents: string): void {
    // replace all spaces with html render-able space
    fileContents = fileContents.replace(/ /g, '\xa0');
    this.lines = fileContents.split('\n');
  }

}
