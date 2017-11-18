import { Injectable } from '@angular/core';
import { Line } from './../../interfaces';

@Injectable()
export class DifferenceService {

  constructor() { }

  computeDifferences(c1: Array<string>, c2: Array<string>): Array<Line> {

    const arr: Array<Line> = [];
    for (let i = 0; i < c1.length; i++) {
      const obj: Line = { oldLine: c1[i], newLine: c2[i], difference: c1[i] !== c2[i] };
      arr.push(obj);
    }
    return arr;
  }

}
