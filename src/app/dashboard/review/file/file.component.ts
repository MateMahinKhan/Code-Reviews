import { Component, Input, OnInit } from '@angular/core';
import { Line } from './../../../shared/interfaces';
import { DifferenceService } from './../../../shared/services';

@Component({
  selector: 'cr-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() files: Array<File>;
  file1Contents: Array<string>;
  file2Contents: Array<string>;

  file2RenderLines: Array<Line>;
  constructor(private diffService: DifferenceService) { }

  ngOnInit() {

    for (const file of this.files) {
      const reader: FileReader = new FileReader();
      reader.onload = (ev: any) => {
        this.loadVariable(ev.target.result);
      };
      reader.readAsText(file);
    }
  }

  loadVariable(fileContents: string): void {
    const lines = fileContents.replace(/ /g, '\xa0\xa0').split('\n');
    if (!this.file1Contents) {
      this.file1Contents = lines;
    } else {
      this.file2Contents = lines;
      this.file2RenderLines = this.diffService.computeDifferences(
        this.file1Contents,
        this.file2Contents
      );
    }
  }
}
