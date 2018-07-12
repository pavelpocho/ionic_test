import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Device } from '../../data/device';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

  history: Subject<Number[]> = new Subject<Number[]>();

  constructor() {
    console.log('Hello HistoryProvider Provider');
  }

  fetchHistory(device: Device) {
    this.history.next([120, 80, 90, 70, 50, 30, 40, 100, 50, 50, 90, 120, 120, 130, 200, 10]);
  }

}
